import { ConstDeclaration } from './ConstDeclaration';
import { getTokens } from './helpers';

describe('ConstDeclaration', () => {
  it('simple const', () => {
    const doc = require('../documentation/appkit/nspasteboardtypestring.json')
    const decl = ConstDeclaration.initFromTokens('fakeid', getTokens(doc));
    expect(decl.generate()).toMatchSnapshot();
  });
});
