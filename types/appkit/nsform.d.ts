declare namespace cocoascript {
  /**
   * An
   * doc://com.apple.documentation/documentation/appkit/nsform
   */
  interface NSForm extends NSMatrix {
    // doc://com.apple.documentation/documentation/appkit/nsform/1534075-addentry
    addEntry(title: cocoascript.NSString):cocoascript.NSFormCell;
    // doc://com.apple.documentation/documentation/appkit/nsform/1531754-insertentry
    insertEntry_atIndex(title: cocoascript.NSString, index: cocoascript.NSInteger):cocoascript.NSFormCell;
    // doc://com.apple.documentation/documentation/appkit/nsform/1526791-removeentryatindex
    removeEntryAtIndex(index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsform/1533560-setbezeled
    setBezeled(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsform/1528565-setbordered
    setBordered(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsform/1529751-setentrywidth
    setEntryWidth(width: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/appkit/nsform/1533815-setframesize
    setFrameSize(newSize: cocoascript.NSSize):void;
    // doc://com.apple.documentation/documentation/appkit/nsform/1532029-setinterlinespacing
    setInterlineSpacing(spacing: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/appkit/nsform/1535551-settitlealignment
    setTitleAlignment(mode: cocoascript.NSTextAlignment):void;
    // doc://com.apple.documentation/documentation/appkit/nsform/1527429-settitlebasewritingdirection
    setTitleBaseWritingDirection(writingDirection: cocoascript.NSWritingDirection):void;
    // doc://com.apple.documentation/documentation/appkit/nsform/1527095-settextalignment
    setTextAlignment(mode: cocoascript.NSTextAlignment):void;
    // doc://com.apple.documentation/documentation/appkit/nsform/1524441-settextbasewritingdirection
    setTextBaseWritingDirection(writingDirection: cocoascript.NSWritingDirection):void;
    // doc://com.apple.documentation/documentation/appkit/nsform/1535413-settitlefont
    setTitleFont(fontObj: cocoascript.NSFont):void;
    // doc://com.apple.documentation/documentation/appkit/nsform/1533476-settextfont
    setTextFont(fontObj: cocoascript.NSFont):void;
    // doc://com.apple.documentation/documentation/appkit/nsform/1524629-indexofcellwithtag
    indexOfCellWithTag(tag: cocoascript.NSInteger):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nsform/1527869-indexofselecteditem
    indexOfSelectedItem():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nsform/1532662-cellatindex
    cellAtIndex(index: cocoascript.NSInteger):cocoascript.NSForm;
    // doc://com.apple.documentation/documentation/appkit/nsform/1526339-drawcellatindex
    drawCellAtIndex(index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsform/1530873-preferredtextfieldwidth
    preferredTextFieldWidth():cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nsform/1526047-setpreferredtextfieldwidth
    setPreferredTextFieldWidth(preferredWidth: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/appkit/nsform/1535000-selecttextatindex
    selectTextAtIndex(index: cocoascript.NSInteger):void;
    //
    alloc():cocoascript.NSForm;
    //
    init():cocoascript.NSForm;
  }
}

declare const NSForm: cocoascript.NSForm;
