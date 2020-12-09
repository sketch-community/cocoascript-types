declare namespace cocoascript {
/**
 * The centralized point of control and coordination for apps running in iOS. 
 * doc://com.apple.documentation/documentation/uikit/uiapplication
 */
interface UIApplication extends UIResponder {
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622975-sharedapplication
  sharedApplication(): cocoascript.UIApplication;
  setSharedApplication(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622936-delegate
  delegate(): cocoascript.UIApplicationDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623078-registerforremotenotifications
  registerForRemoteNotifications():void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623093-unregisterforremotenotifications
  unregisterForRemoteNotifications():void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623069-registeredforremotenotifications
  registeredForRemoteNotifications(): cocoascript.BOOL;
  setRegisteredForRemoteNotifications(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623003-applicationstate
  applicationState(): cocoascript.UIApplicationState;
  setApplicationState(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/3197904-supportsmultiplescenes
  supportsMultipleScenes(): cocoascript.BOOL;
  setSupportsMultipleScenes(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/3197899-connectedscenes
  connectedScenes(): cocoascript.UIScene;
  setConnectedScenes(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/3197900-opensessions
  openSessions(): cocoascript.UISceneSession;
  setOpenSessions(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/3197901-requestscenesessionactivation
  requestSceneSessionActivation_userActivity_options_errorHandler(sceneSession: cocoascript.UISceneSession, userActivity: cocoascript.NSUserActivity, options: cocoascript.UISceneActivationRequestOptions, errorHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/3197902-requestscenesessiondestruction
  requestSceneSessionDestruction_options_errorHandler(sceneSession: cocoascript.UISceneSession, options: cocoascript.UISceneDestructionRequestOptions, errorHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/3197903-requestscenesessionrefresh
  requestSceneSessionRefresh(sceneSession: cocoascript.UISceneSession):void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622994-backgroundrefreshstatus
  backgroundRefreshStatus(): cocoascript.UIBackgroundRefreshStatus;
  setBackgroundRefreshStatus(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623051-beginbackgroundtaskwithname
  beginBackgroundTaskWithName_expirationHandler(taskName: cocoascript.NSString, handler: void):cocoascript.UIBackgroundTaskIdentifier;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623031-beginbackgroundtaskwithexpiratio
  beginBackgroundTaskWithExpirationHandler(handler: void):cocoascript.UIBackgroundTaskIdentifier;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622970-endbackgroundtask
  endBackgroundTask(identifier: cocoascript.UIBackgroundTaskIdentifier):void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623029-backgroundtimeremaining
  backgroundTimeRemaining(): cocoascript.NSTimeInterval;
  setBackgroundTimeRemaining(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1648685-openurl
  openURL_options_completionHandler(url: cocoascript.NSURL, options: cocoascript.UIApplication, completion: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622952-canopenurl
  canOpenURL(url: cocoascript.NSURL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uiapplicationopensettingsurlstring
  UIApplicationOpenSettingsURLString(): cocoascript.const;
  setUIApplicationOpenSettingsURLString(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623070-idletimerdisabled
  idleTimerDisabled(): cocoascript.BOOL;
  setIdleTimerDisabled(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623060-extendstaterestoration
  extendStateRestoration():void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623081-completestaterestoration
  completeStateRestoration():void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623097-ignoresnapshotonnextapplicationl
  ignoreSnapshotOnNextApplicationLaunch():void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623033-shortcutitems
  shortcutItems(): cocoascript.UIApplicationShortcutItem;
  setShortcutItems(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622925-protecteddataavailable
  protectedDataAvailable(): cocoascript.BOOL;
  setProtectedDataAvailable(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623126-beginreceivingremotecontrolevent
  beginReceivingRemoteControlEvents():void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623057-endreceivingremotecontrolevents
  endReceivingRemoteControlEvents():void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623025-userinterfacelayoutdirection
  userInterfaceLayoutDirection(): cocoascript.UIUserInterfaceLayoutDirection;
  setUserInterfaceLayoutDirection(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623043-sendevent
  sendEvent(event: cocoascript.UIEvent):void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622946-sendaction
  sendAction_to_from_forEvent(action: cocoascript.SEL, target: cocoascript.UIApplication, sender: cocoascript.UIApplication, event: cocoascript.UIEvent):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623047-beginignoringinteractionevents
  beginIgnoringInteractionEvents():void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622938-endignoringinteractionevents
  endIgnoringInteractionEvents():void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/2097536-ignoringinteractionevents
  ignoringInteractionEvents(): cocoascript.BOOL;
  setIgnoringInteractionEvents(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623127-applicationsupportsshaketoedit
  applicationSupportsShakeToEdit(): cocoascript.BOOL;
  setApplicationSupportsShakeToEdit(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622918-applicationiconbadgenumber
  applicationIconBadgeNumber(): cocoascript.NSInteger;
  setApplicationIconBadgeNumber(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/2806815-supportsalternateicons
  supportsAlternateIcons(): cocoascript.BOOL;
  setSupportsAlternateIcons(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/2806808-alternateiconname
  alternateIconName(): cocoascript.NSString;
  setAlternateIconName(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/2806818-setalternateiconname
  setAlternateIconName_completionHandler(alternateIconName: cocoascript.NSString, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622924-keywindow
  keyWindow(): cocoascript.UIWindow;
  setKeyWindow(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623104-windows
  windows(): cocoascript.UIWindow;
  setWindows(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623048-preferredcontentsizecategory
  preferredContentSizeCategory(): cocoascript.UIContentSizeCategory;
  setPreferredContentSizeCategory(): void;
  // doc://com.apple.documentation/documentation/uikit/uicontentsizecategorynewvaluekey
  UIContentSizeCategoryNewValueKey(): cocoascript.const;
  setUIContentSizeCategoryNewValueKey(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623091-supportedinterfaceorientationsfo
  supportedInterfaceOrientationsForWindow(window: cocoascript.UIWindow):cocoascript.UIInterfaceOrientationMask;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623100-setminimumbackgroundfetchinterva
  setMinimumBackgroundFetchInterval(minimumBackgroundFetchInterval: cocoascript.NSTimeInterval):void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623014-statusbarorientationanimationdur
  statusBarOrientationAnimationDuration(): cocoascript.NSTimeInterval;
  setStatusBarOrientationAnimationDuration(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplicationstatusbarorientationuserinfokey
  UIApplicationStatusBarOrientationUserInfoKey(): cocoascript.const;
  setUIApplicationStatusBarOrientationUserInfoKey(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplicationstatusbarframeuserinfokey
  UIApplicationStatusBarFrameUserInfoKey(): cocoascript.const;
  setUIApplicationStatusBarFrameUserInfoKey(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622937-statusbarframe
  statusBarFrame(): cocoascript.CGRect;
  setStatusBarFrame(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623102-networkactivityindicatorvisible
  networkActivityIndicatorVisible(): cocoascript.BOOL;
  setNetworkActivityIndicatorVisible(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622932-registerusernotificationsettings
  registerUserNotificationSettings(notificationSettings: cocoascript.UIUserNotificationSettings):void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623092-currentusernotificationsettings
  currentUserNotificationSettings(): cocoascript.UIUserNotificationSettings;
  setCurrentUserNotificationSettings(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622961-openurl
  openURL(url: cocoascript.NSURL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623005-schedulelocalnotification
  scheduleLocalNotification(notification: cocoascript.UILocalNotification):void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622931-presentlocalnotificationnow
  presentLocalNotificationNow(notification: cocoascript.UILocalNotification):void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623082-cancellocalnotification
  cancelLocalNotification(notification: cocoascript.UILocalNotification):void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622990-cancelalllocalnotifications
  cancelAllLocalNotifications():void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622993-scheduledlocalnotifications
  scheduledLocalNotifications(): cocoascript.UILocalNotification;
  setScheduledLocalNotifications(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623016-setnewsstandiconimage
  setNewsstandIconImage(image: cocoascript.UIImage):void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622989-setkeepalivetimeout
  setKeepAliveTimeout_handler(timeout: cocoascript.NSTimeInterval, keepAliveHandler: void):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622986-clearkeepalivetimeout
  clearKeepAliveTimeout():void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622949-setstatusbarhidden
  setStatusBarHidden_withAnimation(hidden: cocoascript.BOOL, animation: cocoascript.UIStatusBarAnimation):void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622982-statusbarhidden
  statusBarHidden(): cocoascript.BOOL;
  setStatusBarHidden(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622923-setstatusbarstyle
  setStatusBarStyle_animated(statusBarStyle: cocoascript.UIStatusBarStyle, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622988-statusbarstyle
  statusBarStyle(): cocoascript.UIStatusBarStyle;
  setStatusBarStyle(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622939-setstatusbarorientation
  setStatusBarOrientation_animated(interfaceOrientation: cocoascript.UIInterfaceOrientation, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623026-statusbarorientation
  statusBarOrientation(): cocoascript.UIInterfaceOrientation;
  setStatusBarOrientation(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623010-registerforremotenotificationtyp
  registerForRemoteNotificationTypes(types: cocoascript.UIRemoteNotificationType):void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1623075-enabledremotenotificationtypes
  enabledRemoteNotificationTypes():cocoascript.UIRemoteNotificationType;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622984-proximitysensingenabled
  proximitySensingEnabled(): cocoascript.BOOL;
  setProximitySensingEnabled(): void;
  // doc://com.apple.documentation/documentation/uikit/uiapplication/1622942-setstatusbarhidden
  setStatusBarHidden_animated(hidden: cocoascript.BOOL, animated: cocoascript.BOOL):void;
  // 
  alloc():cocoascript.UIApplication;
  // 
  init():cocoascript.UIApplication;
}
}
declare const UIApplication: cocoascript.UIApplication;

