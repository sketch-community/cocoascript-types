declare namespace cocoascript {
  /**
   * An object that provides access to the haptic feedback management attributes on a system with a Force Touch trackpad.
   * doc://com.apple.documentation/documentation/appkit/nshapticfeedbackmanager
   */
  interface NSHapticFeedbackManager extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nshapticfeedbackmanager/1441752-defaultperformer
    defaultPerformer(): cocoascript.NSHapticFeedbackPerformer;
    setDefaultPerformer(): void;
    //
    alloc():cocoascript.NSHapticFeedbackManager;
    //
    init():cocoascript.NSHapticFeedbackManager;
  }
}

declare const NSHapticFeedbackManager: cocoascript.NSHapticFeedbackManager;
