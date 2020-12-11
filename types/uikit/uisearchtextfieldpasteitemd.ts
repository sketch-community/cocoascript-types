declare namespace cocoascript {
  /**
   * A protocol that supports pasting tokens.
   * doc://com.apple.documentation/documentation/uikit/uisearchtextfieldpasteitem
   */
  interface UISearchTextFieldPasteItem extends UITextPasteItem {
    // doc://com.apple.documentation/documentation/uikit/uisearchtextfieldpasteitem/3295955-setsearchtokenresult
    setSearchTokenResult(token: cocoascript.UISearchToken):void;
  }
}
