import { CodeGenerator } from './CodeGenerator';
import { NAMESPACE } from './constant';
import { ParseError } from './ParseError';
import { Token } from './types';

export class StructDeclaration {
  constructor(public id: string, public name: string) {}

  static initFromTokens(id: string, tokens: Token[]) {
    let index = 0;
    let name;
    while (index < tokens.length) {
      if (tokens[index].kind === 'identifier') {
        name = tokens[index].text;
      }
      index += 1;
    }
    if (!name) {
      throw new ParseError(id);
    }
    return new this(id, name);
  }

  generate() {
    const code = new CodeGenerator();
    code.namespace(() => {
      code.interface(this.name);
    }).appendLine();
    return code.toString();
  }
}
