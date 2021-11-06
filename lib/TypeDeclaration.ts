import { CodeGenerator } from './CodeGenerator';
import { normalizeType } from './helpers';
import { Token } from './types';
import { getDocumentComment } from './CommentDeclaration';

export class TypeDeclaration {
  id: string;
  identifier: string | null = null;
  alias: string | null = null;

  constructor(id: string) {
    this.id = id;
  }

  static initFromTokens(id: string, tokens: Token[]) {
    let index = 0;
    const decl = new TypeDeclaration(id);
    while (index < tokens.length) {
      if (tokens[index].kind === 'identifier') {
        decl.identifier = tokens[index].text;
      }
      if (tokens[index].kind === 'keyword') {
        decl.alias = tokens[index].text;
      }
      if (tokens[index].kind === 'typeIdentifier') {
        decl.alias = tokens[index].text;
      }
      index += 1;
    }
    return decl;
  }

  generate() {
    const code = new CodeGenerator();
    code.namespace(() => {
      code.appendLine(getDocumentComment(this.id));
      code.appendLine(
        `type ${this.identifier} = ${normalizeType(this.alias!, {
          withNamespace: true,
        })};`
      );
    });
    code.appendLine();
    return code.toString();
  }
}
