declare namespace cocoascript {
  /**
   * An object that enhances the text display capabilities of a cell.
   * doc://com.apple.documentation/documentation/appkit/nstextfieldcell
   */
  interface NSTextFieldCell extends NSActionCell {
    // doc://com.apple.documentation/documentation/appkit/nstextfieldcell/1447151-textcolor
    textColor(): cocoascript.NSColor;
    setTextColor(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfieldcell/1447161-bezelstyle
    bezelStyle(): cocoascript.NSTextFieldBezelStyle;
    setBezelStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfieldcell/1447159-backgroundcolor
    backgroundColor(): cocoascript.NSColor;
    setBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfieldcell/1447155-drawsbackground
    drawsBackground(): cocoascript.BOOL;
    setDrawsBackground(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfieldcell/1447157-setupfieldeditorattributes
    setUpFieldEditorAttributes(textObj: cocoascript.NSText):cocoascript.NSText;
    // doc://com.apple.documentation/documentation/appkit/nstextfieldcell/1447147-setwantsnotificationformarkedtex
    setWantsNotificationForMarkedText(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nstextfieldcell/1447165-placeholderstring
    placeholderString(): cocoascript.NSString;
    setPlaceholderString(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfieldcell/1447153-placeholderattributedstring
    placeholderAttributedString(): cocoascript.NSAttributedString;
    setPlaceholderAttributedString(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfieldcell/1447163-allowedinputsourcelocales
    allowedInputSourceLocales(): cocoascript.NSString;
    setAllowedInputSourceLocales(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfieldcell/1642277-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSTextFieldCell;
    // doc://com.apple.documentation/documentation/appkit/nstextfieldcell/1642278-inittextcell
    initTextCell(string: cocoascript.NSString):cocoascript.NSTextFieldCell;
    //
    alloc():cocoascript.NSTextFieldCell;
    //
    init():cocoascript.NSTextFieldCell;
  }
}

declare const NSTextFieldCell: cocoascript.NSTextFieldCell;
