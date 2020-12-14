import { CodeGenerator } from './CodeGenerator';
import { normalizeType } from './helpers';
import { InterfaceDeclaration } from './InterfaceDeclaration';
import { Token } from './types';

interface Identifier {
  id: string;
  paramType?: string;
  paramName?: string;
}

const keywordBlacklist = ['unsigned', 'const', '_Nullable', '_Null_unspecified', '_Nonnull'];

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
      if (
        (tokens[index].kind === 'typeIdentifier' && tokens[index].preciseIdentifier) ||
        tokens[index].kind === 'keyword'
      ) {
        method.returnType = tokens[index].text;
      }

      if (tokens[index].kind === 'internalParam' && tokens[index].text === '...') {
        const lastIndex = method.identifiers.length - 1;
        const lastId = method.identifiers[lastIndex];
        method.identifiers[lastIndex] = {
          ...lastId,
          paramName: `...${lastId.paramName}`,
          paramType: `Array<${normalizeType(lastId.paramType!)}>`,
        };
      }

      if (tokens[index].kind === 'identifier') {
        const id = tokens[index].text.replace(/:$/, '');
        let paramType;
        let paramName;
        if (tokens[index]) {
          while ((!paramName || !paramType) && tokens[index]) {
            if (
              tokens[index].kind === 'typeIdentifier' ||
              (tokens[index].kind === 'keyword' && !keywordBlacklist.includes(tokens[index].text))
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
    const usedName: Set<string> = new Set();
    this.identifiers.forEach((identifier, i) => {
      if (identifier.paramName) {
        const name = usedName.has(identifier.paramName) ? `${identifier.paramName}${i}` : identifier.paramName;
        usedName.add(identifier.paramName);
        params.push(
          `${name}: ${normalizeType(
            identifier.paramType! === 'id' ? this.interfaceDecl.identifier : identifier.paramType!
          )}`
        );
      }
    });
    code.append(params.join(', '));
    code.append('):');
    let returnType = 'void';
    if (this.returnType === 'instancetype') {
      returnType = this.interfaceDecl.identifier;
    } else if (this.returnType === 'id') {
      returnType = this.interfaceDecl.identifier;
    } else if (this.returnType) {
      returnType = this.returnType;
    }
    code.append(normalizeType(returnType, { extend: false }));
    code.append(';');
    return code.toString();
  }
}
