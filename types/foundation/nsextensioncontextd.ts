declare namespace cocoascript {
  /**
   * The host app context from which an app extension is invoked.
   * doc://com.apple.documentation/documentation/foundation/nsextensioncontext
   */
  interface NSExtensionContext extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1412773-cancelrequestwitherror
    cancelRequestWithError(error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1411301-completerequestreturningitems
    completeRequestReturningItems_completionHandler(items: cocoascript.NSArray, completionHandler: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1416791-openurl
    openURL_completionHandler(URL: cocoascript.NSURL, completionHandler: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1649133-widgetlargestavailabledisplaymod
    widgetLargestAvailableDisplayMode(): cocoascript.NCWidgetDisplayMode;
    setWidgetLargestAvailableDisplayMode(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1649134-widgetactivedisplaymode
    widgetActiveDisplayMode(): cocoascript.NCWidgetDisplayMode;
    setWidgetActiveDisplayMode(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1649135-widgetmaximumsizefordisplaymode
    widgetMaximumSizeForDisplayMode(displayMode: cocoascript.NCWidgetDisplayMode):cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1414827-inputitems
    inputItems(): cocoascript.NSArray;
    setInputItems(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1648523-mediaplayingstarted
    mediaPlayingStarted():void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1648527-mediaplayingpaused
    mediaPlayingPaused():void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/3180173-intent
    intent(): cocoascript.INIntent;
    setIntent(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1649166-hostedviewminimumallowedsize
    hostedViewMinimumAllowedSize(): cocoascript.CGSize;
    setHostedViewMinimumAllowedSize(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1649164-hostedviewmaximumallowedsize
    hostedViewMaximumAllowedSize(): cocoascript.CGSize;
    setHostedViewMaximumAllowedSize(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/2915893-interfaceparametersdescription
    interfaceParametersDescription():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsextensionhostdidbecomeactivenotification
    NSExtensionHostDidBecomeActiveNotification(): cocoascript.const;
    setNSExtensionHostDidBecomeActiveNotification(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensionhostwillresignactivenotification
    NSExtensionHostWillResignActiveNotification(): cocoascript.const;
    setNSExtensionHostWillResignActiveNotification(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensionhostdidenterbackgroundnotification
    NSExtensionHostDidEnterBackgroundNotification(): cocoascript.const;
    setNSExtensionHostDidEnterBackgroundNotification(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensionhostwillenterforegroundnotification
    NSExtensionHostWillEnterForegroundNotification(): cocoascript.const;
    setNSExtensionHostWillEnterForegroundNotification(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/2968488-notificationactions
    notificationActions(): cocoascript.UNNotificationAction;
    setNotificationActions(): void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/2143167-completerequestwithbroadcasturl
    completeRequestWithBroadcastURL_broadcastConfiguration_setupInfo(broadcastURL: cocoascript.NSURL, broadcastConfiguration: cocoascript.RPBroadcastConfiguration, setupInfo: cocoascript.NSCoding):void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/2891095-completerequestwithbroadcasturl
    completeRequestWithBroadcastURL_setupInfo(broadcastURL: cocoascript.NSURL, setupInfo: cocoascript.NSCoding):void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/2977624-dismissnotificationcontentextens
    dismissNotificationContentExtension():void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/1845240-loadbroadcastingapplicationinfow
    loadBroadcastingApplicationInfoWithCompletion(handler: cocoascript.UIImage):void;
    // doc://com.apple.documentation/documentation/foundation/nsextensioncontext/2968489-performnotificationdefaultaction
    performNotificationDefaultAction():void;
    //
    alloc():cocoascript.NSExtensionContext;
    //
    init():cocoascript.NSExtensionContext;
  }
}

declare const NSExtensionContext: cocoascript.NSExtensionContext;
