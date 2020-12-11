declare namespace cocoascript {
  /**
   * A region of a view that generates mouse-tracking and cursor-update events when the pointer is over that region.
   * doc://com.apple.documentation/documentation/appkit/nstrackingarea
   */
  interface NSTrackingArea extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nstrackingarea/1524488-initwithrect
    initWithRect_options_owner_userInfo(rect: cocoascript.NSRect, options: cocoascript.NSTrackingAreaOptions, owner: cocoascript.NSTrackingArea, userInfo: cocoascript.NSTrackingArea):cocoascript.NSTrackingArea;
    // doc://com.apple.documentation/documentation/appkit/nstrackingarea/1533013-options
    options(): cocoascript.NSTrackingAreaOptions;
    setOptions(): void;
    // doc://com.apple.documentation/documentation/appkit/nstrackingarea/1525965-owner
    owner(): cocoascript.id;
    setOwner(): void;
    // doc://com.apple.documentation/documentation/appkit/nstrackingarea/1525874-rect
    rect(): cocoascript.NSRect;
    setRect(): void;
    // doc://com.apple.documentation/documentation/appkit/nstrackingarea/1527949-userinfo
    userInfo(): cocoascript.id;
    setUserInfo(): void;
    //
    alloc():cocoascript.NSTrackingArea;
    //
    init():cocoascript.NSTrackingArea;
  }
}

declare const NSTrackingArea: cocoascript.NSTrackingArea;
