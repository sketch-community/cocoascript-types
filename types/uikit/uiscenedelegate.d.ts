declare namespace cocoascript {
  /**
   * The core methods you use to respond to life-cycle events occurring within a scene.
   * doc://com.apple.documentation/documentation/uikit/uiscenedelegate
   */
  interface UISceneDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiscenedelegate/3197914-scene
    scene_willConnectToSession_options(scene: cocoascript.UIScene, session: cocoascript.UISceneSession, connectionOptions: cocoascript.UISceneConnectionOptions):void;
    // doc://com.apple.documentation/documentation/uikit/uiscenedelegate/3197916-scenediddisconnect
    sceneDidDisconnect(scene: cocoascript.UIScene):void;
    // doc://com.apple.documentation/documentation/uikit/uiscenedelegate/3197918-scenewillenterforeground
    sceneWillEnterForeground(scene: cocoascript.UIScene):void;
    // doc://com.apple.documentation/documentation/uikit/uiscenedelegate/3197915-scenedidbecomeactive
    sceneDidBecomeActive(scene: cocoascript.UIScene):void;
    // doc://com.apple.documentation/documentation/uikit/uiscenedelegate/3197919-scenewillresignactive
    sceneWillResignActive(scene: cocoascript.UIScene):void;
    // doc://com.apple.documentation/documentation/uikit/uiscenedelegate/3197917-scenedidenterbackground
    sceneDidEnterBackground(scene: cocoascript.UIScene):void;
    // doc://com.apple.documentation/documentation/uikit/uiscenedelegate/3238059-scene
    scene_openURLContexts(scene: cocoascript.UIScene, URLContexts: cocoascript.UIOpenURLContext):void;
    // doc://com.apple.documentation/documentation/uikit/uiscenedelegate/3238060-scene
    scene_willContinueUserActivityWithType(scene: cocoascript.UIScene, userActivityType: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/uikit/uiscenedelegate/3238056-scene
    scene_continueUserActivity(scene: cocoascript.UIScene, userActivity: cocoascript.NSUserActivity):void;
    // doc://com.apple.documentation/documentation/uikit/uiscenedelegate/3238057-scene
    scene_didFailToContinueUserActivityWithType_error(scene: cocoascript.UIScene, userActivityType: cocoascript.NSString, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/uikit/uiscenedelegate/3238061-staterestorationactivityforscene
    stateRestorationActivityForScene(scene: cocoascript.UIScene):cocoascript.NSUserActivity;
    // doc://com.apple.documentation/documentation/uikit/uiscenedelegate/3238058-scene
    scene_didUpdateUserActivity(scene: cocoascript.UIScene, userActivity: cocoascript.NSUserActivity):void;
  }
}
