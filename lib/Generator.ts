import * as fs from 'fs';
import * as path from 'path';
import * as fse from 'fs-extra';
import { InterfaceDeclaration } from './InterfaceDeclaration';
import { Token } from './types';
import { TypeDeclaration } from './TypeDeclaration';
import { UnionTypeDeclaration } from './UnionTypeDeclaration';

type Declaration = InterfaceDeclaration | TypeDeclaration | UnionTypeDeclaration;

export class Generator {
  typeFiles: Set<string> = new Set();
  generated: Set<string> = new Set();

  generate() {
    const refs: any = [
      {
        identifier: 'doc://com.apple.documentation/documentation/appkit',
        url: '/documentation/appkit',
      },
    ];
    while (refs.length > 0) {
      const ref = refs.shift()!;
      if (!ref.identifier.startsWith('doc://') || this.generated.has(ref.identifier)) {
        continue;
      }
      this.generated.add(ref.identifier);
      const docFile = path.resolve(__dirname, `..${ref.url}.json`);
      if (!fs.existsSync(docFile)) {
        continue;
      }
      const doc = require(docFile);
      const firstSection = doc.primaryContentSections && doc.primaryContentSections[0];
      if (firstSection && firstSection.kind === 'declarations') {
        const tokens: Token[] = firstSection.declarations[0].tokens;
        if (['@interface', '@protocol'].includes(tokens[0].text)) {
          const idToken = tokens.find(t => t.kind === 'identifier');
          if (idToken) {
            const decl = InterfaceDeclaration.initFromTokens(doc.identifier.url, doc, tokens);
            this.write(decl);
          }
        }

        if (tokens[0].text === 'typedef') {
          let decl;
          if (tokens[2].text === 'enum') {
            decl = UnionTypeDeclaration.initFromTokens(doc.identifier.url, tokens);
          } else if (tokens[2].text === 'struct') {
            decl = InterfaceDeclaration.initFromTokens(doc.identifier.url, doc, tokens);
          } else {
            decl = TypeDeclaration.initFromTokens(doc.identifier.url, tokens);
          }
          this.write(decl);
        }
      }
      Object.values(doc.references).forEach((ref: any) => {
        if (!this.generated.has(ref.identifier)) {
          refs.push(ref);
        }
      });
    }
    fs.writeFileSync('./types/index.d.ts', Array.from(this.typeFiles).map(file => {
      return `/// <reference path="${file.replace('./types/', './')}" />`;
    }).join('\n'));
  }

  typeFile(id: string) {
    return './types' + id.replace('doc://com.apple.documentation/documentation', '') + '.d.ts';
  }

  write(decl: Declaration) {
    const typeFile = this.typeFile(decl.id);
    fse.ensureFileSync(typeFile);
    fs.writeFileSync(typeFile, decl.generate());
    this.typeFiles.add(typeFile);
  }
}
