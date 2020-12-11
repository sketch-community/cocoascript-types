declare namespace cocoascript {
  /**
   * A set of methods that text views must implement to interact properly with the text input management system.
   * doc://com.apple.documentation/documentation/appkit/nstextinputclient
   */
  interface NSTextInputClient {
    // doc://com.apple.documentation/documentation/appkit/nstextinputclient/1438234-hasmarkedtext
    hasMarkedText():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstextinputclient/1438250-markedrange
    markedRange():cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/appkit/nstextinputclient/1438242-selectedrange
    selectedRange():cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/appkit/nstextinputclient/1438246-setmarkedtext
    setMarkedText_selectedRange_replacementRange(string: cocoascript.NSTextInputClient, selectedRange: cocoascript.NSRange, replacementRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nstextinputclient/1438239-unmarktext
    unmarkText():void;
    // doc://com.apple.documentation/documentation/appkit/nstextinputclient/1438228-validattributesformarkedtext
    validAttributesForMarkedText():cocoascript.NSAttributedStringKey;
    // doc://com.apple.documentation/documentation/appkit/nstextinputclient/1438238-attributedsubstringforproposedra
    attributedSubstringForProposedRange_actualRange(range: cocoascript.NSRange, actualRange: cocoascript.NSRangePointer):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/appkit/nstextinputclient/1438258-inserttext
    insertText_replacementRange(string: cocoascript.NSTextInputClient, replacementRange: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nstextinputclient/1438244-characterindexforpoint
    characterIndexForPoint(point: cocoascript.NSPoint):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/appkit/nstextinputclient/1438240-firstrectforcharacterrange
    firstRectForCharacterRange_actualRange(range: cocoascript.NSRange, actualRange: cocoascript.NSRangePointer):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nstextinputclient/1438256-docommandbyselector
    doCommandBySelector(selector: cocoascript.SEL):void;
    // doc://com.apple.documentation/documentation/appkit/nstextinputclient/1438232-attributedstring
    attributedString():cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/appkit/nstextinputclient/1438236-fractionofdistancethroughglyphfo
    fractionOfDistanceThroughGlyphForPoint(point: cocoascript.NSPoint):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nstextinputclient/1438254-baselinedeltaforcharacteratindex
    baselineDeltaForCharacterAtIndex(anIndex: cocoascript.NSUInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nstextinputclient/1438248-windowlevel
    windowLevel():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nstextinputclient/1438252-drawsverticallyforcharacteratind
    drawsVerticallyForCharacterAtIndex(charIndex: cocoascript.NSUInteger):cocoascript.BOOL;
  }
}
