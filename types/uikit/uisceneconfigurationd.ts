declare namespace cocoascript {
  /**
   * Information about the objects and storyboard for UKit to use when creating a particular scene.
   * doc://com.apple.documentation/documentation/uikit/uisceneconfiguration
   */
  interface UISceneConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uisceneconfiguration/3197949-initwithname
    initWithName_sessionRole(name: cocoascript.NSString, sessionRole: cocoascript.UISceneSessionRole):cocoascript.UISceneConfiguration;
    // doc://com.apple.documentation/documentation/uikit/uisceneconfiguration/3197952-sceneclass
    sceneClass(): cocoascript.Class;
    setSceneClass(): void;
    // doc://com.apple.documentation/documentation/uikit/uisceneconfiguration/3197948-delegateclass
    delegateClass(): cocoascript.Class;
    setDelegateClass(): void;
    // doc://com.apple.documentation/documentation/uikit/uisceneconfiguration/3197953-storyboard
    storyboard(): cocoascript.UIStoryboard;
    setStoryboard(): void;
    // doc://com.apple.documentation/documentation/uikit/uisceneconfiguration/3197950-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/uikit/uisceneconfiguration/3197951-role
    role(): cocoascript.UISceneSessionRole;
    setRole(): void;
    //
    alloc():cocoascript.UISceneConfiguration;
    //
    init():cocoascript.UISceneConfiguration;
  }
}

declare const UISceneConfiguration: cocoascript.UISceneConfiguration;
