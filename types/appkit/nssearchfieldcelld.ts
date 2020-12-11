declare namespace cocoascript {
  /**
   * The programmatic interface for text fields that are used for text-based searches.
   * doc://com.apple.documentation/documentation/appkit/nssearchfieldcell
   */
  interface NSSearchFieldCell extends NSTextFieldCell {
    // doc://com.apple.documentation/documentation/appkit/nssearchfieldcell/1399457-searchbuttoncell
    searchButtonCell(): cocoascript.NSButtonCell;
    setSearchButtonCell(): void;
    // doc://com.apple.documentation/documentation/appkit/nssearchfieldcell/1399461-resetsearchbuttoncell
    resetSearchButtonCell():void;
    // doc://com.apple.documentation/documentation/appkit/nssearchfieldcell/1399440-cancelbuttoncell
    cancelButtonCell(): cocoascript.NSButtonCell;
    setCancelButtonCell(): void;
    // doc://com.apple.documentation/documentation/appkit/nssearchfieldcell/1399442-resetcancelbuttoncell
    resetCancelButtonCell():void;
    // doc://com.apple.documentation/documentation/appkit/nssearchfieldcell/1399455-searchtextrectforbounds
    searchTextRectForBounds(rect: cocoascript.NSRect):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nssearchfieldcell/1399450-searchbuttonrectforbounds
    searchButtonRectForBounds(rect: cocoascript.NSRect):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nssearchfieldcell/1399472-cancelbuttonrectforbounds
    cancelButtonRectForBounds(rect: cocoascript.NSRect):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nssearchfieldcell/1399452-searchmenutemplate
    searchMenuTemplate(): cocoascript.NSMenu;
    setSearchMenuTemplate(): void;
    // doc://com.apple.documentation/documentation/appkit/nssearchfieldcell/1399453-sendswholesearchstring
    sendsWholeSearchString(): cocoascript.BOOL;
    setSendsWholeSearchString(): void;
    // doc://com.apple.documentation/documentation/appkit/nssearchfieldcell/1399444-sendssearchstringimmediately
    sendsSearchStringImmediately(): cocoascript.BOOL;
    setSendsSearchStringImmediately(): void;
    // doc://com.apple.documentation/documentation/appkit/nssearchfieldcell/1399468-maximumrecents
    maximumRecents(): cocoascript.NSInteger;
    setMaximumRecents(): void;
    // doc://com.apple.documentation/documentation/appkit/nssearchfieldcell/1399446-recentsearches
    recentSearches(): cocoascript.NSString;
    setRecentSearches(): void;
    // doc://com.apple.documentation/documentation/appkit/nssearchfieldcell/1399463-recentsautosavename
    recentsAutosaveName(): cocoascript.NSSearchFieldRecentsAutosaveName;
    setRecentsAutosaveName(): void;
    // doc://com.apple.documentation/documentation/appkit/nssearchfieldcell/1643723-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSSearchFieldCell;
    // doc://com.apple.documentation/documentation/appkit/nssearchfieldcell/1643722-inittextcell
    initTextCell(string: cocoascript.NSString):cocoascript.NSSearchFieldCell;
    //
    alloc():cocoascript.NSSearchFieldCell;
    //
    init():cocoascript.NSSearchFieldCell;
  }
}

declare const NSSearchFieldCell: cocoascript.NSSearchFieldCell;
