declare namespace cocoascript {
  /**
   * A section of text that forms a single list.
   * doc://com.apple.documentation/documentation/appkit/nstextlist
   */
  interface NSTextList extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nstextlist/1526123-initwithmarkerformat
    initWithMarkerFormat_options(format: cocoascript.NSTextListMarkerFormat, mask: cocoascript.NSUInteger):cocoascript.NSTextList;
    // doc://com.apple.documentation/documentation/appkit/nstextlist/1533865-markerformat
    markerFormat(): cocoascript.NSTextListMarkerFormat;
    setMarkerFormat(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextlist/1532739-markerforitemnumber
    markerForItemNumber(itemNum: cocoascript.NSInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nstextlist/1533519-listoptions
    listOptions(): cocoascript.NSTextListOptions;
    setListOptions(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextlist/1528597-startingitemnumber
    startingItemNumber(): cocoascript.NSInteger;
    setStartingItemNumber(): void;
    //
    alloc():cocoascript.NSTextList;
    //
    init():cocoascript.NSTextList;
  }
}

declare const NSTextList: cocoascript.NSTextList;
