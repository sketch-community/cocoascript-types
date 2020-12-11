declare namespace cocoascript {
  /**
   * A set of methods that text views must implement to interact properly with the text input management system.
   * doc://com.apple.documentation/documentation/appkit/nstextinput
   */
  interface NSTextInput {
    // doc://com.apple.documentation/documentation/appkit/nstextinput/1412824-hasmarkedtext
    hasMarkedText():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstextinput/1412831-markedrange
    markedRange():cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/appkit/nstextinput/1412848-selectedrange
    selectedRange():cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/appkit/nstextinput/1412851-setmarkedtext
    setMarkedText_selectedRange(string: cocoascript.NSTextInput, selRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nstextinput/1412840-unmarktext
    unmarkText():void;
    // doc://com.apple.documentation/documentation/appkit/nstextinput/1412825-validattributesformarkedtext
    validAttributesForMarkedText():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/appkit/nstextinput/1412836-attributedsubstringfromrange
    attributedSubstringFromRange(range: cocoascript.NSRange):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/appkit/nstextinput/1412816-inserttext
    insertText(string: cocoascript.NSTextInput):void;
    // doc://com.apple.documentation/documentation/appkit/nstextinput/1412847-characterindexforpoint
    characterIndexForPoint(point: cocoascript.NSPoint):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/appkit/nstextinput/1412838-firstrectforcharacterrange
    firstRectForCharacterRange(range: cocoascript.NSRange):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nstextinput/1412853-docommandbyselector
    doCommandBySelector(selector: cocoascript.SEL):void;
    // doc://com.apple.documentation/documentation/appkit/nstextinput/1412823-conversationidentifier
    conversationIdentifier():cocoascript.NSInteger;
  }
}
