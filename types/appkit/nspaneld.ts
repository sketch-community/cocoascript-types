declare namespace cocoascript {
  /**
   * A special kind of window that typically performs a function that is auxiliary to the main window.
   * doc://com.apple.documentation/documentation/appkit/nspanel
   */
  interface NSPanel extends NSWindow {
    // doc://com.apple.documentation/documentation/appkit/nspanel/1531901-floatingpanel
    floatingPanel(): cocoascript.BOOL;
    setFloatingPanel(): void;
    // doc://com.apple.documentation/documentation/appkit/nspanel/1528836-becomeskeyonlyifneeded
    becomesKeyOnlyIfNeeded(): cocoascript.BOOL;
    setBecomesKeyOnlyIfNeeded(): void;
    // doc://com.apple.documentation/documentation/appkit/nspanel/1525549-workswhenmodal
    worksWhenModal(): cocoascript.BOOL;
    setWorksWhenModal(): void;
    //
    alloc():cocoascript.NSPanel;
    //
    init():cocoascript.NSPanel;
  }
}

declare const NSPanel: cocoascript.NSPanel;
