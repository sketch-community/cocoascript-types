declare namespace cocoascript {
  /**
   * A set of methods that you use to manage shared behaviors for your app.
   * doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate
   */
  interface UIApplicationDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1623032-application
    application_willFinishLaunchingWithOptions(application: cocoascript.UIApplication, launchOptions: cocoascript.UIApplicationDelegate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1622921-application
    application_didFinishLaunchingWithOptions(application: cocoascript.UIApplication, launchOptions: cocoascript.UIApplicationDelegate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1623053-applicationdidfinishlaunching
    applicationDidFinishLaunching(application: cocoascript.UIApplication):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/3197905-application
    application_configurationForConnectingSceneSession_options(application: cocoascript.UIApplication, connectingSceneSession: cocoascript.UISceneSession, options: cocoascript.UISceneConnectionOptions):cocoascript.UISceneConfiguration;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/3197906-application
    application_didDiscardSceneSessions(application: cocoascript.UIApplication, sceneSessions: cocoascript.UISceneSession):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1622956-applicationdidbecomeactive
    applicationDidBecomeActive(application: cocoascript.UIApplication):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1622950-applicationwillresignactive
    applicationWillResignActive(application: cocoascript.UIApplication):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1622997-applicationdidenterbackground
    applicationDidEnterBackground(application: cocoascript.UIApplication):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1623076-applicationwillenterforeground
    applicationWillEnterForeground(application: cocoascript.UIApplication):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1623111-applicationwillterminate
    applicationWillTerminate(application: cocoascript.UIApplication):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1623044-applicationprotecteddatadidbecom
    applicationProtectedDataDidBecomeAvailable(application: cocoascript.UIApplication):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1623019-applicationprotecteddatawillbeco
    applicationProtectedDataWillBecomeUnavailable(application: cocoascript.UIApplication):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1623063-applicationdidreceivememorywarni
    applicationDidReceiveMemoryWarning(application: cocoascript.UIApplication):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1622992-applicationsignificanttimechange
    applicationSignificantTimeChange(application: cocoascript.UIApplication):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/3395862-application
    application_shouldSaveSecureApplicationState(application: cocoascript.UIApplication, coder: cocoascript.NSCoder):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/3395861-application
    application_shouldRestoreSecureApplicationState(application: cocoascript.UIApplication, coder: cocoascript.NSCoder):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1623062-application
    application_viewControllerWithRestorationIdentifierPath_coder(application: cocoascript.UIApplication, identifierComponents: cocoascript.NSString, coder: cocoascript.NSCoder):cocoascript.UIViewController;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1623099-application
    application_willEncodeRestorableStateWithCoder(application: cocoascript.UIApplication, coder: cocoascript.NSCoder):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1623006-application
    application_didDecodeRestorableStateWithCoder(application: cocoascript.UIApplication, coder: cocoascript.NSCoder):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationstaterestorationbundleversionkey
    UIApplicationStateRestorationBundleVersionKey(): cocoascript.const;
    setUIApplicationStateRestorationBundleVersionKey(): void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationstaterestorationsystemversionkey
    UIApplicationStateRestorationSystemVersionKey(): cocoascript.const;
    setUIApplicationStateRestorationSystemVersionKey(): void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationstaterestorationtimestampkey
    UIApplicationStateRestorationTimestampKey(): cocoascript.const;
    setUIApplicationStateRestorationTimestampKey(): void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationstaterestorationuserinterfaceidiomkey
    UIApplicationStateRestorationUserInterfaceIdiomKey(): cocoascript.const;
    setUIApplicationStateRestorationUserInterfaceIdiomKey(): void;
    // doc://com.apple.documentation/documentation/uikit/uistaterestorationviewcontrollerstoryboardkey
    UIStateRestorationViewControllerStoryboardKey(): cocoascript.const;
    setUIStateRestorationViewControllerStoryboardKey(): void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1622941-application
    application_handleEventsForBackgroundURLSession_completionHandler(application: cocoascript.UIApplication, identifier: cocoascript.NSString, completionHandler: void):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1622958-application
    application_didRegisterForRemoteNotificationsWithDeviceToken(application: cocoascript.UIApplication, deviceToken: cocoascript.NSData):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1622962-application
    application_didFailToRegisterForRemoteNotificationsWithError(application: cocoascript.UIApplication, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1623013-application
    application_didReceiveRemoteNotification_fetchCompletionHandler(application: cocoascript.UIApplication, userInfo: cocoascript.NSDictionary, completionHandler: cocoascript.UIBackgroundFetchResult):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1622919-application
    application_willContinueUserActivityWithType(application: cocoascript.UIApplication, userActivityType: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1623072-application
    application_continueUserActivity_restorationHandler(application: cocoascript.UIApplication, userActivity: cocoascript.NSUserActivity, restorationHandler: cocoascript.UIUserActivityRestoring):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1622963-application
    application_didUpdateUserActivity(application: cocoascript.UIApplication, userActivity: cocoascript.NSUserActivity):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1622927-application
    application_didFailToContinueUserActivityWithType_error(application: cocoascript.UIApplication, userActivityType: cocoascript.NSString, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1622935-application
    application_performActionForShortcutItem_completionHandler(application: cocoascript.UIApplication, shortcutItem: cocoascript.UIApplicationShortcutItem, completionHandler: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1623041-application
    application_handleWatchKitExtensionRequest_reply(application: cocoascript.UIApplication, userInfo: cocoascript.NSDictionary, reply: cocoascript.NSDictionary):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1622998-applicationshouldrequesthealthau
    applicationShouldRequestHealthAuthorization(application: cocoascript.UIApplication):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1623112-application
    application_openURL_options(app: cocoascript.UIApplication, url: cocoascript.NSURL, options: cocoascript.UIApplicationDelegate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1623122-application
    application_shouldAllowExtensionPointIdentifier(application: cocoascript.UIApplication, extensionPointIdentifier: cocoascript.UIApplicationExtensionPointIdentifier):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/3548063-application
    application_handlerForIntent(application: cocoascript.UIApplication, intent: cocoascript.INIntent):cocoascript.UIApplicationDelegate;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/2206721-application
    application_userDidAcceptCloudKitShareWithMetadata(application: cocoascript.UIApplication, cloudKitShareMetadata: cocoascript.CKShareMetadata):void;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1623107-application
    application_supportedInterfaceOrientationsForWindow(application: cocoascript.UIApplication, window: cocoascript.UIWindow):cocoascript.UIInterfaceOrientationMask;
    // doc://com.apple.documentation/documentation/uikit/uiapplicationdelegate/1623056-window
    window(): cocoascript.UIWindow;
    setWindow(): void;
  }
}
