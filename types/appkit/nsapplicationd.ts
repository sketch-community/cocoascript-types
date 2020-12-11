declare namespace cocoascript {
  /**
   * An object that manages an app’s main event loop and resources used by all of that app’s objects.
   * doc://com.apple.documentation/documentation/appkit/nsapplication
   */
  interface NSApplication extends NSResponder {
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428360-sharedapplication
    sharedApplication(): cocoascript.NSApplication;
    setSharedApplication(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapp
    NSApp(): cocoascript.NSApplication;
    setNSApp(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428705-delegate
    delegate(): cocoascript.NSApplicationDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428485-nexteventmatchingmask
    nextEventMatchingMask_untilDate_inMode_dequeue(mask: cocoascript.NSEventMask, expiration: cocoascript.NSDate, mode: cocoascript.NSRunLoopMode, deqFlag: cocoascript.BOOL):cocoascript.NSEvent;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428652-discardeventsmatchingmask
    discardEventsMatchingMask_beforeEvent(mask: cocoascript.NSEventMask, lastEvent: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428668-currentevent
    currentEvent(): cocoascript.NSEvent;
    setCurrentEvent(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428759-running
    running(): cocoascript.BOOL;
    setRunning(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428631-run
    run():void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428771-finishlaunching
    finishLaunching():void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428473-stop
    stop(sender: cocoascript.NSApplication):void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428359-sendevent
    sendEvent(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428710-postevent
    postEvent_atStart(event: cocoascript.NSEvent, flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nseventtrackingrunloopmode
    NSEventTrackingRunLoopMode(): cocoascript.NSRunLoopMode;
    setNSEventTrackingRunLoopMode(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428366-trytoperform
    tryToPerform_with(action: cocoascript.SEL, object: cocoascript.NSApplication):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428509-sendaction
    sendAction_to_from(action: cocoascript.SEL, target: cocoascript.NSApplication, sender: cocoascript.NSApplication):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428449-targetforaction
    targetForAction(action: cocoascript.SEL):cocoascript.NSApplication;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428658-targetforaction
    targetForAction_to_from(action: cocoascript.SEL, target: cocoascript.NSApplication, sender: cocoascript.NSApplication):cocoascript.NSApplication;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428417-terminate
    terminate(sender: cocoascript.NSApplication):void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428594-replytoapplicationshouldterminat
    replyToApplicationShouldTerminate(shouldTerminate: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428493-active
    active(): cocoascript.BOOL;
    setActive(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428468-activateignoringotherapps
    activateIgnoringOtherApps(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428428-deactivate
    deactivate():void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428376-disablerelaunchonlogin
    disableRelaunchOnLogin():void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428453-enablerelaunchonlogin
    enableRelaunchOnLogin():void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/2967172-registerforremotenotifications
    registerForRemoteNotifications():void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428747-unregisterforremotenotifications
    unregisterForRemoteNotifications():void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428776-enabledremotenotificationtypes
    enabledRemoteNotificationTypes(): cocoascript.NSRemoteNotificationType;
    setEnabledRemoteNotificationTypes(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428476-registerforremotenotificationtyp
    registerForRemoteNotificationTypes(types: cocoascript.NSRemoteNotificationType):void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/2967173-registeredforremotenotifications
    registeredForRemoteNotifications(): cocoascript.BOOL;
    setRegisteredForRemoteNotifications(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/2967170-appearance
    appearance(): cocoascript.NSAppearance;
    setAppearance(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/2967171-effectiveappearance
    effectiveAppearance(): cocoascript.NSAppearance;
    setEffectiveAppearance(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428717-currentsystempresentationoptions
    currentSystemPresentationOptions(): cocoascript.NSApplicationPresentationOptions;
    setCurrentSystemPresentationOptions(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428664-presentationoptions
    presentationOptions(): cocoascript.NSApplicationPresentationOptions;
    setPresentationOptions(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428556-userinterfacelayoutdirection
    userInterfaceLayoutDirection(): cocoascript.NSUserInterfaceLayoutDirection;
    setUserInterfaceLayoutDirection(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428671-docktile
    dockTile(): cocoascript.NSDockTile;
    setDockTile(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428744-applicationiconimage
    applicationIconImage(): cocoascript.NSImage;
    setApplicationIconImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/2646920-toggletouchbarcustomizationpalet
    toggleTouchBarCustomizationPalette(sender: cocoascript.NSApplication):void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428358-requestuserattention
    requestUserAttention(requestType: cocoascript.NSRequestUserAttentionType):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428683-canceluserattentionrequest
    cancelUserAttentionRequest(request: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428592-replytoopenorprint
    replyToOpenOrPrint(reply: cocoascript.NSApplicationDelegateReply):void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1420818-registeruserinterfaceitemsearchh
    registerUserInterfaceItemSearchHandler(handler: cocoascript.NSUserInterfaceItemSearching):void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1420808-searchstring
    searchString_inUserInterfaceItemString_searchRange_foundRange(searchString: cocoascript.NSString, stringToSearch: cocoascript.NSString, searchRange: cocoascript.NSRange, foundRange: cocoascript.NSRange):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1420820-unregisteruserinterfaceitemsearc
    unregisterUserInterfaceItemSearchHandler(handler: cocoascript.NSUserInterfaceItemSearching):void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1500910-showhelp
    showHelp(sender: cocoascript.NSApplication):void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1500925-activatecontexthelpmode
    activateContextHelpMode(sender: cocoascript.NSApplication):void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428644-helpmenu
    helpMenu(): cocoascript.NSMenu;
    setHelpMenu(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428379-validrequestorforsendtype
    validRequestorForSendType_returnType(sendType: cocoascript.NSPasteboardType, returnType: cocoascript.NSPasteboardType):cocoascript.NSApplication;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428467-servicesprovider
    servicesProvider(): cocoascript.id;
    setServicesProvider(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428469-fullkeyboardaccessenabled
    fullKeyboardAccessEnabled(): cocoascript.BOOL;
    setFullKeyboardAccessEnabled(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428746-hideotherapplications
    hideOtherApplications(sender: cocoascript.NSApplication):void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428737-unhideallapplications
    unhideAllApplications(sender: cocoascript.NSApplication):void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428396-reportexception
    reportException(exception: cocoascript.NSException):void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428703-activationpolicy
    activationPolicy():cocoascript.NSApplicationActivationPolicy;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1428621-setactivationpolicy
    setActivationPolicy(activationPolicy: cocoascript.NSApplicationActivationPolicy):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1494283-ordereddocuments
    orderedDocuments(): cocoascript.NSDocument;
    setOrderedDocuments(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplication/1494287-orderedwindows
    orderedWindows(): cocoascript.NSWindow;
    setOrderedWindows(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplicationdidbecomeactivenotification
    NSApplicationDidBecomeActiveNotification(): cocoascript.NSNotificationName;
    setNSApplicationDidBecomeActiveNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplicationdidchangescreenparametersnotification
    NSApplicationDidChangeScreenParametersNotification(): cocoascript.NSNotificationName;
    setNSApplicationDidChangeScreenParametersNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplicationdidfinishlaunchingnotification
    NSApplicationDidFinishLaunchingNotification(): cocoascript.NSNotificationName;
    setNSApplicationDidFinishLaunchingNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplicationdidhidenotification
    NSApplicationDidHideNotification(): cocoascript.NSNotificationName;
    setNSApplicationDidHideNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplicationdidresignactivenotification
    NSApplicationDidResignActiveNotification(): cocoascript.NSNotificationName;
    setNSApplicationDidResignActiveNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplicationdidunhidenotification
    NSApplicationDidUnhideNotification(): cocoascript.NSNotificationName;
    setNSApplicationDidUnhideNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplicationdidupdatenotification
    NSApplicationDidUpdateNotification(): cocoascript.NSNotificationName;
    setNSApplicationDidUpdateNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplicationwillbecomeactivenotification
    NSApplicationWillBecomeActiveNotification(): cocoascript.NSNotificationName;
    setNSApplicationWillBecomeActiveNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplicationwillfinishlaunchingnotification
    NSApplicationWillFinishLaunchingNotification(): cocoascript.NSNotificationName;
    setNSApplicationWillFinishLaunchingNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplicationwillhidenotification
    NSApplicationWillHideNotification(): cocoascript.NSNotificationName;
    setNSApplicationWillHideNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplicationwillresignactivenotification
    NSApplicationWillResignActiveNotification(): cocoascript.NSNotificationName;
    setNSApplicationWillResignActiveNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplicationwillterminatenotification
    NSApplicationWillTerminateNotification(): cocoascript.NSNotificationName;
    setNSApplicationWillTerminateNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplicationwillunhidenotification
    NSApplicationWillUnhideNotification(): cocoascript.NSNotificationName;
    setNSApplicationWillUnhideNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsapplicationwillupdatenotification
    NSApplicationWillUpdateNotification(): cocoascript.NSNotificationName;
    setNSApplicationWillUpdateNotification(): void;
    //
    alloc():cocoascript.NSApplication;
    //
    init():cocoascript.NSApplication;
  }
}

declare const NSApplication: cocoascript.NSApplication;
