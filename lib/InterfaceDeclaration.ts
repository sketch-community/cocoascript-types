import { O_DIRECT } from 'constants';
import * as fs from 'fs';
import * as path from 'path';
import { CodeGenerator } from './CodeGenerator';
import { NAMESPACE } from './constant';
import { ConstDeclaration } from './ConstDeclaration';
import { normalizeType } from './helpers';
import { MethodDeclaration } from './MethodDeclaration';
import { PropertyDeclaration } from './PropertyDeclaration';
import { Token } from './types';

type InterfaceType = 'interface' | 'protocol';

export class InterfaceDeclaration {
  id: string;
  type: 'interface' | 'protocol';
  identifier: string;
  description: string;
  inheritsFrom = undefined;
  properties: Array<MethodDeclaration | PropertyDeclaration> = [];
  constants: Array<ConstDeclaration> = [];

  constructor(id: string, type: InterfaceType, identifier: string, description: string) {
    this.id = id;
    this.type = type;
    this.identifier = identifier;
    this.description = description;
  }

  static initFromTokens(id: string, doc: any, tokens: Token[]) {
    const idToken = tokens.find(t => t.kind === 'identifier')!;
    const decl = new InterfaceDeclaration(
      id,
      tokens[0].text.replace('@', '') as any,
      idToken.text,
      doc.abstract?.[0]?.text
    );
    if (doc.relationshipsSections) {
      const inheritsSection = doc.relationshipsSections.find((s: any) => s.type === 'inheritsFrom');
      if (inheritsSection) {
        const inheritsRef = doc.references[inheritsSection.identifiers[0]];
        decl.inheritsFrom = inheritsRef.title;
      }
    }
    if (doc.topicSections) {
      doc.topicSections.forEach((topic: any) => {
        topic.identifiers.forEach((id: string) => {
          this.createIdentifier(decl, id);
        });
      });
    }
    return decl;
  }

  static createIdentifier(clazz: InterfaceDeclaration, id: string) {
    const docFile = path.resolve(id.replace('doc://com.apple.documentation/', '') + '.json');
    if (!fs.existsSync(docFile)) {
      return;
    }
    const doc = require(docFile);
    const firstSection = doc.primaryContentSections && doc.primaryContentSections[0];
    if (!firstSection) {
      return;
    }
    if (firstSection.kind !== 'declarations') {
      return;
    }
    const { tokens } = firstSection.declarations[0];
    let index = 0;
    if (tokens[index].text === '- (') {
      const method = MethodDeclaration.initFromTokens(doc.identifier.url, clazz, tokens);
      clazz.properties.push(method);
    }
    if (tokens[index].text === '@property') {
      const property = PropertyDeclaration.initFromTokens(doc.identifier.url, tokens);
      clazz.properties.push(property);
    }
    if (tokens[index].kind === 'typeIdentifier') {
      const constant = ConstDeclaration.initFromTokens(doc.identifier.url, tokens);
      clazz.constants.push(constant);
    }
  }

  generate() {
    const code = new CodeGenerator();
    code.namespace(() => {
      code.appendLine('/**');
      if (this.description) {
        code.appendLine(` * ${this.description}`);
      }
      code.appendLine(` * ${this.id}`);
      code.appendLine(' */');
      code.interface(this.identifier, this.inheritsFrom, () => {
        if (this.type === 'interface') {
          const alloc = new MethodDeclaration('', this);
          alloc.identifiers.push({
            id: 'alloc',
          });
          alloc.returnType = 'instancetype';
          const init = new MethodDeclaration('', this);
          init.identifiers.push({
            id: 'init',
          });
          init.returnType = 'id';
          this.properties.push(alloc, init);
        }
        this.properties.forEach(property => {
          code.appendLine(property.generate());
        });
      });
    });
    if (this.type === 'interface') {
      code.appendLine().appendLine(`declare const ${this.identifier}: ${normalizeType(this.identifier)};`);
    }
    this.constants.forEach(constant => {
      code.appendLine(constant.generate());
    });
    code.appendLine();
    return code.toString();
  }
}
