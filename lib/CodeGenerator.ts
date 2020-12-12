import { NAMESPACE } from './constant';

export class CodeGenerator {
  trunks: string[] = [];
  indentCount = 0;

  appendLine(str: string = '') {
    const indent = str ? ' '.repeat(this.indentCount * 2) : '';
    this.trunks.push(str.split('\n').map(line => indent + line).join('\n').trimRight());
    return this;
  }

  append(str: string) {
    const lines = this.trunks.length;
    if (lines === 0) {
      this.trunks.push(str);
    } else {
      this.trunks[lines - 1] = this.trunks[lines - 1] + str;
    }
    return this;
  }

  namespace(body: () => void) {
    this.appendLine(`declare namespace ${NAMESPACE} {`).indent();
    body();
    this.endIndent().appendLine('}');
    return this;
  }

  interface(name: string, inheritsFrom?: string, body?: () => void) {
    this.appendLine(`interface ${name}${inheritsFrom ? ` extends ${inheritsFrom} ` : ' '}{`).indent();
    if (body) {
      body();
    }
    this.endIndent().appendLine('}');
    return this;
  }

  indent() {
    this.indentCount += 1;
    return this;
  }

  endIndent() {
    if (this.indentCount === 0) {
      throw new Error('indent no match');
    }
    this.indentCount -= 1;
    return this;
  }

  toString() {
    return this.trunks.join('\n');
  }
}
