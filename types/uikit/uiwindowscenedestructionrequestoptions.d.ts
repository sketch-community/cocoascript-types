declare namespace cocoascript {
  /**
   * An object containing information to use when removing a window scene from your app.
   * doc://com.apple.documentation/documentation/uikit/uiwindowscenedestructionrequestoptions
   */
  interface UIWindowSceneDestructionRequestOptions extends UISceneDestructionRequestOptions {
    // doc://com.apple.documentation/documentation/uikit/uiwindowscenedestructionrequestoptions/3197964-windowdismissalanimation
    windowDismissalAnimation(): cocoascript.UIWindowSceneDismissalAnimation;
    setWindowDismissalAnimation(): void;
    //
    alloc():cocoascript.UIWindowSceneDestructionRequestOptions;
    //
    init():cocoascript.UIWindowSceneDestructionRequestOptions;
  }
}

declare const UIWindowSceneDestructionRequestOptions: cocoascript.UIWindowSceneDestructionRequestOptions;
