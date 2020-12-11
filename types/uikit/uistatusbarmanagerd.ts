declare namespace cocoascript {
  /**
   * An object describing the configuration of the status bar.
   * doc://com.apple.documentation/documentation/uikit/uistatusbarmanager
   */
  interface UIStatusBarManager extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uistatusbarmanager/3213941-statusbarhidden
    statusBarHidden(): cocoascript.BOOL;
    setStatusBarHidden(): void;
    // doc://com.apple.documentation/documentation/uikit/uistatusbarmanager/3213942-statusbarstyle
    statusBarStyle(): cocoascript.UIStatusBarStyle;
    setStatusBarStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uistatusbarmanager/3213940-statusbarframe
    statusBarFrame(): cocoascript.CGRect;
    setStatusBarFrame(): void;
    //
    alloc():cocoascript.UIStatusBarManager;
    //
    init():cocoascript.UIStatusBarManager;
  }
}

declare const UIStatusBarManager: cocoascript.UIStatusBarManager;
