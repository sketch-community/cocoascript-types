declare namespace cocoascript {
  /**
   * The appearance and behavior of an item in the systemwide menu bar.
   * doc://com.apple.documentation/documentation/appkit/nsstatusbarbutton
   */
  interface NSStatusBarButton extends NSButton {
    // doc://com.apple.documentation/documentation/appkit/nsstatusbarbutton/1409292-appearsdisabled
    appearsDisabled(): cocoascript.BOOL;
    setAppearsDisabled(): void;
    //
    alloc():cocoascript.NSStatusBarButton;
    //
    init():cocoascript.NSStatusBarButton;
  }
}

declare const NSStatusBarButton: cocoascript.NSStatusBarButton;
