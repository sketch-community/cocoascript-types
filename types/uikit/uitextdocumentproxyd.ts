declare namespace cocoascript {
  /**
   * An object that provides textual context to a custom keyboard.
   * doc://com.apple.documentation/documentation/uikit/uitextdocumentproxy
   */
  interface UITextDocumentProxy extends UIKeyInput {
    // doc://com.apple.documentation/documentation/uikit/uitextdocumentproxy/1649583-documentinputmode
    documentInputMode(): cocoascript.UITextInputMode;
    setDocumentInputMode(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextdocumentproxy/1618199-documentcontextafterinput
    documentContextAfterInput(): cocoascript.NSString;
    setDocumentContextAfterInput(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextdocumentproxy/1618190-documentcontextbeforeinput
    documentContextBeforeInput(): cocoascript.NSString;
    setDocumentContextBeforeInput(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextdocumentproxy/1618194-adjusttextpositionbycharacteroff
    adjustTextPositionByCharacterOffset(offset: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/uikit/uitextdocumentproxy/2875749-selectedtext
    selectedText(): cocoascript.NSString;
    setSelectedText(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextdocumentproxy/3152923-setmarkedtext
    setMarkedText_selectedRange(markedText: cocoascript.NSString, selectedRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/uikit/uitextdocumentproxy/3152924-unmarktext
    unmarkText():void;
    // doc://com.apple.documentation/documentation/uikit/uitextdocumentproxy/2875742-documentidentifier
    documentIdentifier(): cocoascript.NSUUID;
    setDocumentIdentifier(): void;
  }
}
