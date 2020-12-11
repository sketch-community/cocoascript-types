declare namespace cocoascript {
  /**
   * A data object containing information about the reasons why UIKit created the scene.
   * doc://com.apple.documentation/documentation/uikit/uisceneconnectionoptions
   */
  interface UISceneConnectionOptions extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uisceneconnectionoptions/3238074-useractivities
    userActivities(): cocoascript.NSUserActivity;
    setUserActivities(): void;
    // doc://com.apple.documentation/documentation/uikit/uisceneconnectionoptions/3238072-shortcutitem
    shortcutItem(): cocoascript.UIApplicationShortcutItem;
    setShortcutItem(): void;
    // doc://com.apple.documentation/documentation/uikit/uisceneconnectionoptions/3238068-urlcontexts
    URLContexts(): cocoascript.UIOpenURLContext;
    setURLContexts(): void;
    // doc://com.apple.documentation/documentation/uikit/uisceneconnectionoptions/3238070-handoffuseractivitytype
    handoffUserActivityType(): cocoascript.NSString;
    setHandoffUserActivityType(): void;
    // doc://com.apple.documentation/documentation/uikit/uisceneconnectionoptions/3238069-cloudkitsharemetadata
    cloudKitShareMetadata(): cocoascript.CKShareMetadata;
    setCloudKitShareMetadata(): void;
    // doc://com.apple.documentation/documentation/uikit/uisceneconnectionoptions/3238071-notificationresponse
    notificationResponse(): cocoascript.UNNotificationResponse;
    setNotificationResponse(): void;
    // doc://com.apple.documentation/documentation/uikit/uisceneconnectionoptions/3238073-sourceapplication
    sourceApplication(): cocoascript.NSString;
    setSourceApplication(): void;
    //
    alloc():cocoascript.UISceneConnectionOptions;
    //
    init():cocoascript.UISceneConnectionOptions;
  }
}

declare const UISceneConnectionOptions: cocoascript.UISceneConnectionOptions;
