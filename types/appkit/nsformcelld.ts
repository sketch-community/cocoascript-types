declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/appkit/nsformcell
   */
  interface NSFormCell extends NSActionCell {
    // doc://com.apple.documentation/documentation/appkit/nsformcell/1643347-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSFormCell;
    // doc://com.apple.documentation/documentation/appkit/nsformcell/1526669-inittextcell
    initTextCell(string: cocoascript.NSString):cocoascript.NSFormCell;
    // doc://com.apple.documentation/documentation/appkit/nsformcell/1529440-opaque
    opaque(): cocoascript.BOOL;
    setOpaque(): void;
    // doc://com.apple.documentation/documentation/appkit/nsformcell/1527410-attributedtitle
    attributedTitle(): cocoascript.NSAttributedString;
    setAttributedTitle(): void;
    // doc://com.apple.documentation/documentation/appkit/nsformcell/1526646-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/appkit/nsformcell/1525716-titlealignment
    titleAlignment(): cocoascript.NSTextAlignment;
    setTitleAlignment(): void;
    // doc://com.apple.documentation/documentation/appkit/nsformcell/1526419-titlebasewritingdirection
    titleBaseWritingDirection(): cocoascript.NSWritingDirection;
    setTitleBaseWritingDirection(): void;
    // doc://com.apple.documentation/documentation/appkit/nsformcell/1525255-titlefont
    titleFont(): cocoascript.NSFont;
    setTitleFont(): void;
    // doc://com.apple.documentation/documentation/appkit/nsformcell/1535464-titlewidth
    titleWidth(): cocoascript.CGFloat;
    setTitleWidth(): void;
    // doc://com.apple.documentation/documentation/appkit/nsformcell/1560758-settitlewithmnemonic
    setTitleWithMnemonic(stringWithAmpersand: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/appkit/nsformcell/1535914-placeholderattributedstring
    placeholderAttributedString(): cocoascript.NSAttributedString;
    setPlaceholderAttributedString(): void;
    // doc://com.apple.documentation/documentation/appkit/nsformcell/1534043-placeholderstring
    placeholderString(): cocoascript.NSString;
    setPlaceholderString(): void;
    // doc://com.apple.documentation/documentation/appkit/nsformcell/1527483-preferredtextfieldwidth
    preferredTextFieldWidth(): cocoascript.CGFloat;
    setPreferredTextFieldWidth(): void;
    // doc://com.apple.documentation/documentation/appkit/nsformcell/1526921-titlewidth
    titleWidth(size: cocoascript.NSSize):cocoascript.CGFloat;
    //
    alloc():cocoascript.NSFormCell;
    //
    init():cocoascript.NSFormCell;
  }
}

declare const NSFormCell: cocoascript.NSFormCell;
