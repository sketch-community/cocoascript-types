declare namespace cocoascript {
  /**
   * An object you pass to UIKit when you want to permanently remove a scene and its associated session from your app.
   * doc://com.apple.documentation/documentation/uikit/uiscenedestructionrequestoptions
   */
  interface UISceneDestructionRequestOptions extends NSObject {
    //
    alloc():cocoascript.UISceneDestructionRequestOptions;
    //
    init():cocoascript.UISceneDestructionRequestOptions;
  }
}

declare const UISceneDestructionRequestOptions: cocoascript.UISceneDestructionRequestOptions;
