import { CodeGenerator } from './CodeGenerator';
import { capitalize, normalizeType } from './helpers';
import { Token } from './types';

export class PropertyDeclaration {
  id: string;
  identifier: string | null = null;
  type: string | null = null;
  nullable = false;
  readonly = false;

  constructor(id: string) {
    this.id = id;
  }

  static initFromTokens(id: string, tokens: Token[]) {
    let index = 0;
    const property = new PropertyDeclaration(id);
    while (index < tokens.length) {
      if (tokens[index].text.includes('nullable')) {
        property.nullable = true;
      }
      if (tokens[index].text.includes('readonly')) {
        property.readonly = true;
      }
      if (tokens[index].kind === 'typeIdentifier' ||
      (tokens[index].kind === 'keyword')
      ) {
        property.type = tokens[index].text;
      }
      if (tokens[index].kind === 'identifier') {
        property.identifier = tokens[index].text;
      }

      index += 1;
    }
    return property;
  }

  generate() {
    const code = new CodeGenerator();
    code.appendLine(`// ${this.id}`);
    code.appendLine(`${this.identifier}(): ${normalizeType(this.type!)};`);
    code.appendLine(`set${capitalize(this.identifier!)}(): void;`);
    return code.toString();
  }
}
