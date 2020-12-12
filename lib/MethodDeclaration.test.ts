import { getTokens } from './helpers';
import { InterfaceDeclaration } from './InterfaceDeclaration';
import { MethodDeclaration } from './MethodDeclaration';

describe('MethodDeclaration', () => {
  const nsview = require('../documentation/appkit/nsview.json');
  const interfaceDecl = InterfaceDeclaration.initFromTokens(
    '"doc://com.apple.documentation/documentation/appkit/nsview"',
    {},
    getTokens(nsview)
  );

  function getDecl(docFile: string) {
    const doc = require(docFile);
    return MethodDeclaration.initFromTokens('fakeid', interfaceDecl, getTokens(doc));
  }

  it('simple method', () => {
    const decl = getDecl('../documentation/appkit/nsview/1483458-initwithframe.json');
    expect(decl.generate()).toMatchSnapshot();
  });

  it('multiple params', () => {
    const decl = getDecl('../documentation/appkit/nsview/1483640-addsubview.json');
    expect(decl.generate()).toMatchSnapshot();
  });

  it('with nullable', () => {
    const decl = getDecl('../documentation/appkit/nsworkspace/1526144-typeoffile.json');
    expect(decl.generate()).toMatchSnapshot();
  });

  it('duplicate params', () => {
    const decl = getDecl('../documentation/uikit/uistepper/1624072-dividerimageforleftsegmentstate.json');
    expect(decl.generate()).toMatchSnapshot();
  })
});
