import * as fs from 'fs';
import * as path from 'path';
import * as fse from 'fs-extra';
import { InterfaceDeclaration } from './InterfaceDeclaration';
import { Token } from './types';
import { TypeDeclaration } from './TypeDeclaration';
import { UnionTypeDeclaration } from './UnionTypeDeclaration';
import { ConstDeclaration } from './ConstDeclaration';

type Declaration = InterfaceDeclaration | TypeDeclaration | UnionTypeDeclaration | ConstDeclaration;

export class Generator {
  typeFiles: Set<string> = new Set();
  generated: Set<string> = new Set();
  files: Map<string, fs.WriteStream> = new Map();

  openFile(file: string): Promise<fs.WriteStream> {
    return new Promise((resolve, reject) => {
      const stream = fs.createWriteStream(file);
      stream.on('open', () => resolve(stream));
      stream.on('error', reject);
    });
  }

  async getFile(name: string) {
    if (this.files.has(name)) {
      return this.files.get(name)!;
    }
    const file = await this.openFile(`./types/${name}.d.ts`);
    this.files.set(name, file);
    return file;
  }

  async generate() {
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
            await this.write(decl);
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
          await this.write(decl);
        }

        if (tokens[0].text === 'const') {
          const decl = ConstDeclaration.initFromTokens(doc.identifier.url, tokens);
          await this.write(decl);
        }
      }
      Object.values(doc.references).forEach((ref: any) => {
        if (!this.generated.has(ref.identifier)) {
          refs.push(ref);
        }
      });
    }
    fs.writeFileSync('./types/index.d.ts', Array.from(this.files.keys()).map(file => {
      return `/// <reference path="./${file}.d.ts" />`;
    }).join('\n'));
    this.files.forEach(f => f.close());
  }

  fileName(id: string) {
    const [_, name] = id.match(new RegExp('doc://com.apple.documentation/documentation/(.+?)/.+'))!;
    return name;
  }

  async write(decl: Declaration) {
    const name = this.fileName(decl.id);
    const file = await this.getFile(name);
    file.write(decl.generate());
  }
}
