declare namespace cocoascript {
  /**
   * A pointer (also called a cursor).
   * doc://com.apple.documentation/documentation/appkit/nscursor
   */
  interface NSCursor extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nscursor/1524612-initwithimage
    initWithImage_hotSpot(newImage: cocoascript.NSImage, point: cocoascript.NSPoint):cocoascript.NSCursor;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1524604-initwithimage
    initWithImage_foregroundColorHint_backgroundColorHint_hotSpot(newImage: cocoascript.NSImage, fg: cocoascript.NSColor, bg: cocoascript.NSColor, hotSpot: cocoascript.NSPoint):cocoascript.NSCursor;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1527062-image
    image(): cocoascript.NSImage;
    setImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1529096-hotspot
    hotSpot(): cocoascript.NSPoint;
    setHotSpot(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1532408-pop
    pop():void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1532500-push
    push():void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1526148-set
    set():void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1524582-mouseentered
    mouseEntered(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1528331-setonmouseentered
    setOnMouseEntered(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1525108-setonmouseentered
    setOnMouseEntered(): cocoascript.BOOL;
    setSetOnMouseEntered(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1535790-mouseexited
    mouseExited(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1535131-setonmouseexited
    setOnMouseExited(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1532492-setonmouseexited
    setOnMouseExited(): cocoascript.BOOL;
    setSetOnMouseExited(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1524595-currentcursor
    currentCursor(): cocoascript.NSCursor;
    setCurrentCursor(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1533611-currentsystemcursor
    currentSystemCursor(): cocoascript.NSCursor;
    setCurrentSystemCursor(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1527160-arrowcursor
    arrowCursor(): cocoascript.NSCursor;
    setArrowCursor(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1529142-contextualmenucursor
    contextualMenuCursor(): cocoascript.NSCursor;
    setContextualMenuCursor(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1524603-closedhandcursor
    closedHandCursor(): cocoascript.NSCursor;
    setClosedHandCursor(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1525359-crosshaircursor
    crosshairCursor(): cocoascript.NSCursor;
    setCrosshairCursor(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1534280-disappearingitemcursor
    disappearingItemCursor(): cocoascript.NSCursor;
    setDisappearingItemCursor(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1529900-dragcopycursor
    dragCopyCursor(): cocoascript.NSCursor;
    setDragCopyCursor(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1534435-draglinkcursor
    dragLinkCursor(): cocoascript.NSCursor;
    setDragLinkCursor(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1526109-ibeamcursor
    IBeamCursor(): cocoascript.NSCursor;
    setIBeamCursor(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1528540-openhandcursor
    openHandCursor(): cocoascript.NSCursor;
    setOpenHandCursor(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1525180-operationnotallowedcursor
    operationNotAllowedCursor(): cocoascript.NSCursor;
    setOperationNotAllowedCursor(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1531896-pointinghandcursor
    pointingHandCursor(): cocoascript.NSCursor;
    setPointingHandCursor(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1531340-resizedowncursor
    resizeDownCursor(): cocoascript.NSCursor;
    setResizeDownCursor(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1535416-resizeleftcursor
    resizeLeftCursor(): cocoascript.NSCursor;
    setResizeLeftCursor(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1525074-resizeleftrightcursor
    resizeLeftRightCursor(): cocoascript.NSCursor;
    setResizeLeftRightCursor(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1526314-resizerightcursor
    resizeRightCursor(): cocoascript.NSCursor;
    setResizeRightCursor(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1532226-resizeupcursor
    resizeUpCursor(): cocoascript.NSCursor;
    setResizeUpCursor(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1524641-resizeupdowncursor
    resizeUpDownCursor(): cocoascript.NSCursor;
    setResizeUpDownCursor(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1525182-ibeamcursorforverticallayout
    IBeamCursorForVerticalLayout(): cocoascript.NSCursor;
    setIBeamCursorForVerticalLayout(): void;
    // doc://com.apple.documentation/documentation/appkit/nscursor/1640963-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSCursor;
    //
    alloc():cocoascript.NSCursor;
    //
    init():cocoascript.NSCursor;
  }
}

declare const NSCursor: cocoascript.NSCursor;
