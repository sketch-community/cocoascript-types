declare namespace cocoascript {
/**
 * Additional methods that you use to manage app-specific tasks occurring in a scene.
 * doc://com.apple.documentation/documentation/uikit/uiwindowscenedelegate
 */
interface UIWindowSceneDelegate extends UISceneDelegate {
  // doc://com.apple.documentation/documentation/uikit/uiwindowscenedelegate/3198093-window
  window(): cocoascript.UIWindow;
  setWindow(): void;
  // doc://com.apple.documentation/documentation/uikit/uiwindowscenedelegate/3198094-windowscene
  windowScene_didUpdateCoordinateSpace_interfaceOrientation_traitCollection(windowScene: cocoascript.UIWindowScene, previousCoordinateSpace: cocoascript.UICoordinateSpace, previousInterfaceOrientation: cocoascript.UIInterfaceOrientation, previousTraitCollection: cocoascript.UITraitCollection):void;
  // doc://com.apple.documentation/documentation/uikit/uiwindowscenedelegate/3238088-windowscene
  windowScene_performActionForShortcutItem_completionHandler(windowScene: cocoascript.UIWindowScene, shortcutItem: cocoascript.UIApplicationShortcutItem, completionHandler: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uiwindowscenedelegate/3238089-windowscene
  windowScene_userDidAcceptCloudKitShareWithMetadata(windowScene: cocoascript.UIWindowScene, cloudKitShareMetadata: cocoascript.CKShareMetadata):void;
}
}

