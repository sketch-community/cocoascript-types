import { CodeGenerator } from './CodeGenerator';
import { normalizeType } from './helpers';
import { Token } from './types';

export class ConstDeclaration {
  constructor(public id: string, public name: string, public type: string) {}

  static initFromTokens(id: string, tokens: Token[]) {
    let index = 0;
    let name;
    let type;
    while (index < tokens.length) {
      if (tokens[index].kind === 'typeIdentifier' || tokens[index].kind === 'keyword') {
        type = tokens[index].text;
      }
      if (tokens[index].kind === 'identifier') {
        name = tokens[index].text;
      }
      index += 1;
    }
    if (!name || !type) {
      throw new Error(`Parse error ${id}`);
    }
    return new ConstDeclaration(id, name, type);
  }

  generate() {
    const code = new CodeGenerator();
    code.appendLine(`declare const ${this.name}: ${normalizeType(this.type)};`)
    code.appendLine();
    return code.toString();
  }
}
