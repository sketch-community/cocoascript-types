declare namespace cocoascript {
  /**
   * The user interface of a browser.
   * doc://com.apple.documentation/documentation/appkit/nsbrowsercell
   */
  interface NSBrowserCell extends NSCell {
    // doc://com.apple.documentation/documentation/appkit/nsbrowsercell/1435775-branchimage
    branchImage(): cocoascript.NSImage;
    setBranchImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowsercell/1435769-highlightedbranchimage
    highlightedBranchImage(): cocoascript.NSImage;
    setHighlightedBranchImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowsercell/1435766-image
    image(): cocoascript.NSImage;
    setImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowsercell/1435768-alternateimage
    alternateImage(): cocoascript.NSImage;
    setAlternateImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowsercell/1435773-reset
    reset():void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowsercell/1435770-set
    set():void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowsercell/1435771-leaf
    leaf(): cocoascript.BOOL;
    setLeaf(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowsercell/1435772-loaded
    loaded(): cocoascript.BOOL;
    setLoaded(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowsercell/1435767-highlightcolorinview
    highlightColorInView(controlView: cocoascript.NSView):cocoascript.NSColor;
    // doc://com.apple.documentation/documentation/appkit/nsbrowsercell/1644667-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSBrowserCell;
    // doc://com.apple.documentation/documentation/appkit/nsbrowsercell/1644593-initimagecell
    initImageCell(image: cocoascript.NSImage):cocoascript.NSBrowserCell;
    // doc://com.apple.documentation/documentation/appkit/nsbrowsercell/1644701-inittextcell
    initTextCell(string: cocoascript.NSString):cocoascript.NSBrowserCell;
    //
    alloc():cocoascript.NSBrowserCell;
    //
    init():cocoascript.NSBrowserCell;
  }
}

declare const NSBrowserCell: cocoascript.NSBrowserCell;
