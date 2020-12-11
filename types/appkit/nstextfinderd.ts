declare namespace cocoascript {
  /**
   * An optional search-and-replace find interface inside a view, usually a scroll view.
   * doc://com.apple.documentation/documentation/appkit/nstextfinder
   */
  interface NSTextFinder extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nstextfinder/1535019-init
    init():cocoascript.NSTextFinder;
    // doc://com.apple.documentation/documentation/appkit/nstextfinder/1526414-performaction
    performAction(op: cocoascript.NSTextFinderAction):void;
    // doc://com.apple.documentation/documentation/appkit/nstextfinder/1527203-validateaction
    validateAction(op: cocoascript.NSTextFinderAction):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstextfinder/1525467-cancelfindindicator
    cancelFindIndicator():void;
    // doc://com.apple.documentation/documentation/appkit/nstextfinder/1526748-findbarcontainer
    findBarContainer(): cocoascript.NSTextFinderBarContainer;
    setFindBarContainer(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfinder/1533813-client
    client(): cocoascript.NSTextFinderClient;
    setClient(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfinder/1534184-noteclientstringwillchange
    noteClientStringWillChange():void;
    // doc://com.apple.documentation/documentation/appkit/nstextfinder/1534431-findindicatorneedsupdate
    findIndicatorNeedsUpdate(): cocoascript.BOOL;
    setFindIndicatorNeedsUpdate(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfinder/1528304-incrementalmatchranges
    incrementalMatchRanges(): cocoascript.NSValue;
    setIncrementalMatchRanges(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfinder/1535849-incrementalsearchingenabled
    incrementalSearchingEnabled(): cocoascript.BOOL;
    setIncrementalSearchingEnabled(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfinder/1528196-incrementalsearchingshoulddimcon
    incrementalSearchingShouldDimContentView(): cocoascript.BOOL;
    setIncrementalSearchingShouldDimContentView(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfinder/1644638-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSTextFinder;
    //
    alloc():cocoascript.NSTextFinder;
    //
    init():cocoascript.NSTextFinder;
  }
}

declare const NSTextFinder: cocoascript.NSTextFinder;
