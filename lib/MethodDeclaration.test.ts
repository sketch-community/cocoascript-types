import { InterfaceDeclaration } from './InterfaceDeclaration';
import { MethodDeclaration } from './MethodDeclaration';


describe('MethodDeclaration', () => {
  const nsview = require('../documentation/appkit/nsview.json');
  const interfaceDecl = InterfaceDeclaration.initFromTokens(
    '"doc://com.apple.documentation/documentation/appkit/nsview"',
    {},
    nsview.primaryContentSections[0].declarations[0].tokens
  );

  it('simple method', () => {
    const method = require('../documentation/appkit/nsview/1483458-initwithframe.json');
    const decl = MethodDeclaration.initFromTokens(
      'fakeid',
      interfaceDecl,
      method.primaryContentSections[0].declarations[0].tokens
    );
    expect(decl.generate()).toMatchSnapshot();
  });

  it('multiple params', () => {
    const method = require('../documentation/appkit/nsview/1483640-addsubview.json');
    const decl = MethodDeclaration.initFromTokens(
      'fakeid',
      interfaceDecl,
      method.primaryContentSections[0].declarations[0].tokens
    );
    expect(decl.generate()).toMatchSnapshot();
  });
});
