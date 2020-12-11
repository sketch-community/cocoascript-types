import { InterfaceDeclaration } from './InterfaceDeclaration';
import { MethodDeclaration } from './MethodDeclaration';

const nsview = require('../documentation/appkit/nsview.json');
const initWithFrame = require('../documentation/appkit/nsview/1483458-initwithframe.json');

describe('MethodDeclaration', () => {
  it('simple method', () => {
    const interfaceDecl = InterfaceDeclaration.initFromTokens(
      '"doc://com.apple.documentation/documentation/appkit/nsview"',
      {},
      nsview.primaryContentSections[0].declarations[0].tokens
    );

    const decl = MethodDeclaration.initFromTokens(
      'fakeid',
      interfaceDecl,
      initWithFrame.primaryContentSections[0].declarations[0].tokens
    );
    expect(decl.generate()).toMatchSnapshot();
  });
});
