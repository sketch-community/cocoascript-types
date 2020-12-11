declare namespace cocoascript {
  /**
   * An object containing information about one of your app's scenes.
   * doc://com.apple.documentation/documentation/uikit/uiscenesession
   */
  interface UISceneSession extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiscenesession/3197958-scene
    scene(): cocoascript.UIScene;
    setScene(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscenesession/3197957-role
    role(): cocoascript.UISceneSessionRole;
    setRole(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscenesession/3197955-configuration
    configuration(): cocoascript.UISceneConfiguration;
    setConfiguration(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscenesession/3197956-persistentidentifier
    persistentIdentifier(): cocoascript.NSString;
    setPersistentIdentifier(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscenesession/3197959-staterestorationactivity
    stateRestorationActivity(): cocoascript.NSUserActivity;
    setStateRestorationActivity(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscenesession/3197960-userinfo
    userInfo(): cocoascript.id;
    setUserInfo(): void;
    //
    alloc():cocoascript.UISceneSession;
    //
    init():cocoascript.UISceneSession;
  }
}

declare const UISceneSession: cocoascript.UISceneSession;
