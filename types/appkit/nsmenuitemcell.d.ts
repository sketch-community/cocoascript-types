declare namespace cocoascript {
  /**
   * An object that handles the measurement and display of a single menu item in its encompassing frame.
   * doc://com.apple.documentation/documentation/appkit/nsmenuitemcell
   */
  interface NSMenuItemCell extends NSButtonCell {
    // doc://com.apple.documentation/documentation/appkit/nsmenuitemcell/1641971-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSMenuItemCell;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitemcell/1641970-inittextcell
    initTextCell(string: cocoascript.NSString):cocoascript.NSMenuItemCell;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitemcell/1498871-menuitem
    menuItem(): cocoascript.NSMenuItem;
    setMenuItem(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitemcell/1498862-calcsize
    calcSize():void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitemcell/1498869-needssizing
    needsSizing(): cocoascript.BOOL;
    setNeedsSizing(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitemcell/1498877-imagewidth
    imageWidth(): cocoascript.CGFloat;
    setImageWidth(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitemcell/1498865-titlewidth
    titleWidth(): cocoascript.CGFloat;
    setTitleWidth(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitemcell/1498874-keyequivalentwidth
    keyEquivalentWidth(): cocoascript.CGFloat;
    setKeyEquivalentWidth(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitemcell/1498879-stateimagewidth
    stateImageWidth(): cocoascript.CGFloat;
    setStateImageWidth(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitemcell/1498859-keyequivalentrectforbounds
    keyEquivalentRectForBounds(cellFrame: cocoascript.NSRect):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitemcell/1498855-stateimagerectforbounds
    stateImageRectForBounds(cellFrame: cocoascript.NSRect):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitemcell/1498867-titlerectforbounds
    titleRectForBounds(cellFrame: cocoascript.NSRect):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitemcell/1498863-drawborderandbackgroundwithframe
    drawBorderAndBackgroundWithFrame_inView(cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitemcell/1498857-drawimagewithframe
    drawImageWithFrame_inView(cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitemcell/1498851-drawkeyequivalentwithframe
    drawKeyEquivalentWithFrame_inView(cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitemcell/1498876-drawseparatoritemwithframe
    drawSeparatorItemWithFrame_inView(cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitemcell/1498854-drawstateimagewithframe
    drawStateImageWithFrame_inView(cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitemcell/1498853-drawtitlewithframe
    drawTitleWithFrame_inView(cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitemcell/1498861-needsdisplay
    needsDisplay(): cocoascript.BOOL;
    setNeedsDisplay(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitemcell/1498882-tag
    tag(): cocoascript.NSInteger;
    setTag(): void;
    //
    alloc():cocoascript.NSMenuItemCell;
    //
    init():cocoascript.NSMenuItemCell;
  }
}

declare const NSMenuItemCell: cocoascript.NSMenuItemCell;
