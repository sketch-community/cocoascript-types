import { CodeGenerator } from './CodeGenerator';
import { normalizeType } from './helpers';
import { InterfaceDeclaration } from './InterfaceDeclaration';
import { Token } from './types';

interface Identifier {
  id: string;
  paramType?: string;
  paramName?: string;
}

export class MethodDeclaration {
  id: string;
  interfaceDecl: InterfaceDeclaration;
  identifiers: Identifier[] = [];
  returnType: string | null = null;

  constructor(id: string, interfaceDecl: InterfaceDeclaration) {
    this.id = id;
    this.interfaceDecl = interfaceDecl;
  }

  static initFromTokens(id: string, interfaceDecl: InterfaceDeclaration, tokens: Token[]) {
    let index = 0;
    const method = new MethodDeclaration(id, interfaceDecl);
    while (index < tokens.length) {
      if ((tokens[index].kind === 'typeIdentifier' && tokens[index].identifier) || tokens[index].kind === 'keyword') {
        method.returnType = tokens[index].text;
      }
      if (tokens[index].kind === 'identifier') {
        const id = tokens[index].text.replace(/:$/, '');
        let paramType;
        let paramName;
        if (tokens[index]) {
          while ((!paramName || !paramType) && tokens[index]) {
            if (
              (tokens[index].kind === 'typeIdentifier' && tokens[index].preciseIdentifier) ||
              tokens[index].kind === 'keyword'
            ) {
              paramType = tokens[index].text;
            }
            if (tokens[index].kind === 'internalParam') {
              paramName = tokens[index].text;
            }
            index += 1;
          }
        }
        method.identifiers.push({
          id,
          paramType,
          paramName,
        });
      }
      index += 1;
    }
    return method;
  }

  generate() {
    const code = new CodeGenerator();
    code.appendLine(`// ${this.id}`);
    code.appendLine(this.identifiers.map(i => i.id).join('_'));
    code.append('(');
    const params: string[] = [];
    this.identifiers.forEach(identifier => {
      if (identifier.paramName) {
        params.push(
          `${identifier.paramName}: ${normalizeType(
            identifier.paramType! === 'id' ? this.interfaceDecl.identifier : identifier.paramType!
          )}`
        );
      }
    });
    code.append(params.join(', '));
    code.append('):');
    if (this.returnType === 'instancetype') {
      code.append(normalizeType(this.interfaceDecl.identifier));
    } else if (this.returnType === 'id') {
      code.append(normalizeType(this.interfaceDecl.identifier));
    } else if (this.returnType) {
      code.append(normalizeType(this.returnType));
    } else {
      code.append('void');
    }
    code.append(';');
    return code.toString();
  }
}
