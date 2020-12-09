declare namespace cocoascript {
/**
 * A set of methods that delegates of 
 * doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate
 */
interface NSApplicationDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428623-applicationwillfinishlaunching
  applicationWillFinishLaunching(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428385-applicationdidfinishlaunching
  applicationDidFinishLaunching(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428699-applicationwillbecomeactive
  applicationWillBecomeActive(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428577-applicationdidbecomeactive
  applicationDidBecomeActive(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428539-applicationwillresignactive
  applicationWillResignActive(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428636-applicationdidresignactive
  applicationDidResignActive(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428642-applicationshouldterminate
  applicationShouldTerminate(sender: cocoascript.NSApplication):cocoascript.NSApplicationTerminateReply;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428381-applicationshouldterminateafterl
  applicationShouldTerminateAfterLastWindowClosed(sender: cocoascript.NSApplication):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428522-applicationwillterminate
  applicationWillTerminate(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428478-applicationwillhide
  applicationWillHide(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428552-applicationdidhide
  applicationDidHide(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428585-applicationwillunhide
  applicationWillUnhide(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428755-applicationdidunhide
  applicationDidUnhide(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428774-applicationwillupdate
  applicationWillUpdate(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428589-applicationdidupdate
  applicationDidUpdate(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428638-applicationshouldhandlereopen
  applicationShouldHandleReopen_hasVisibleWindows(sender: cocoascript.NSApplication, flag: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428564-applicationdockmenu
  applicationDockMenu(sender: cocoascript.NSApplication):cocoascript.NSMenu;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428721-application
  application_willPresentError(application: cocoascript.NSApplication, error: cocoascript.NSError):cocoascript.NSError;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428424-applicationdidchangescreenparame
  applicationDidChangeScreenParameters(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428364-application
  application_willContinueUserActivityWithType(application: cocoascript.NSApplication, userActivityType: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428471-application
  application_continueUserActivity_restorationHandler(application: cocoascript.NSApplication, userActivity: cocoascript.NSUserActivity, restorationHandler: cocoascript.NSUserActivityRestoring):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428613-application
  application_didFailToContinueUserActivityWithType_error(application: cocoascript.NSApplication, userActivityType: cocoascript.NSString, error: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428457-application
  application_didUpdateUserActivity(application: cocoascript.NSApplication, userActivity: cocoascript.NSUserActivity):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428766-application
  application_didRegisterForRemoteNotificationsWithDeviceToken(application: cocoascript.NSApplication, deviceToken: cocoascript.NSData):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428554-application
  application_didFailToRegisterForRemoteNotificationsWithError(application: cocoascript.NSApplication, error: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428430-application
  application_didReceiveRemoteNotification(application: cocoascript.NSApplication, userInfo: cocoascript.NSApplicationDelegate):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/2138329-application
  application_userDidAcceptCloudKitShareWithMetadata(application: cocoascript.NSApplication, metadata: cocoascript.CKShareMetadata):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/2887193-application
  application_openURLs(application: cocoascript.NSApplication, urls: cocoascript.NSURL):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428612-application
  application_openFile(sender: cocoascript.NSApplication, filename: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428459-application
  application_openFileWithoutUI(sender: cocoascript.NSApplicationDelegate, filename: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428495-application
  application_openTempFile(sender: cocoascript.NSApplication, filename: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428742-application
  application_openFiles(sender: cocoascript.NSApplication, filenames: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428491-applicationopenuntitledfile
  applicationOpenUntitledFile(sender: cocoascript.NSApplication):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428444-applicationshouldopenuntitledfil
  applicationShouldOpenUntitledFile(sender: cocoascript.NSApplication):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428520-application
  application_printFile(sender: cocoascript.NSApplication, filename: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428713-application
  application_printFiles_withSettings_showPrintPanels(application: cocoascript.NSApplication, fileNames: cocoascript.NSString, printSettings: cocoascript.NSApplicationDelegate, showPrintPanels: cocoascript.BOOL):cocoascript.NSApplicationPrintReply;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428693-application
  application_didDecodeRestorableState(app: cocoascript.NSApplication, coder: cocoascript.NSCoder):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428400-application
  application_willEncodeRestorableState(app: cocoascript.NSApplication, coder: cocoascript.NSCoder):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/1428362-applicationdidchangeocclusionsta
  applicationDidChangeOcclusionState(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nsapplicationdelegate/3005173-application
  application_delegateHandlesKey(sender: cocoascript.NSApplication, key: cocoascript.NSString):cocoascript.BOOL;
}
}

