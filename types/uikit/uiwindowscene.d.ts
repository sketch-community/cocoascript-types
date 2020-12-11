declare namespace cocoascript {
  /**
   * A specific type of scene that manages one or more windows for your app.
   * doc://com.apple.documentation/documentation/uikit/uiwindowscene
   */
  interface UIWindowScene extends UIScene {
    // doc://com.apple.documentation/documentation/uikit/uiwindowscene/3198091-windows
    windows(): cocoascript.UIWindow;
    setWindows(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwindowscene/3198089-screen
    screen(): cocoascript.UIScreen;
    setScreen(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwindowscene/3198090-traitcollection
    traitCollection(): cocoascript.UITraitCollection;
    setTraitCollection(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwindowscene/3198087-coordinatespace
    coordinateSpace(): cocoascript.UICoordinateSpace;
    setCoordinateSpace(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwindowscene/3198088-interfaceorientation
    interfaceOrientation(): cocoascript.UIInterfaceOrientation;
    setInterfaceOrientation(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwindowscene/3368166-sizerestrictions
    sizeRestrictions(): cocoascript.UISceneSizeRestrictions;
    setSizeRestrictions(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwindowscene/3213938-screenshotservice
    screenshotService(): cocoascript.UIScreenshotService;
    setScreenshotService(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwindowscene/3213943-statusbarmanager
    statusBarManager(): cocoascript.UIStatusBarManager;
    setStatusBarManager(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwindowscene/3375831-titlebar
    titlebar(): cocoascript.UITitlebar;
    setTitlebar(): void;
    //
    alloc():cocoascript.UIWindowScene;
    //
    init():cocoascript.UIWindowScene;
  }
}

declare const UIWindowScene: cocoascript.UIWindowScene;
