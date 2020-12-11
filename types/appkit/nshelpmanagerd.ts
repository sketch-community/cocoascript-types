declare namespace cocoascript {
  /**
   * An object for displaying online help for an app.
   * doc://com.apple.documentation/documentation/appkit/nshelpmanager
   */
  interface NSHelpManager extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nshelpmanager/1500924-sharedhelpmanager
    sharedHelpManager(): cocoascript.NSHelpManager;
    setSharedHelpManager(): void;
    // doc://com.apple.documentation/documentation/appkit/nshelpmanager/1500904-findstring
    findString_inBook(query: cocoascript.NSString, book: cocoascript.NSHelpBookName):void;
    // doc://com.apple.documentation/documentation/appkit/nshelpmanager/1500908-openhelpanchor
    openHelpAnchor_inBook(anchor: cocoascript.NSHelpAnchorName, book: cocoascript.NSHelpBookName):void;
    // doc://com.apple.documentation/documentation/appkit/nshelpmanager/1500914-registerbooksinbundle
    registerBooksInBundle(bundle: cocoascript.NSBundle):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nshelpmanager/1500921-setcontexthelp
    setContextHelp_forObject(attrString: cocoascript.NSAttributedString, object: cocoascript.NSHelpManager):void;
    // doc://com.apple.documentation/documentation/appkit/nshelpmanager/1500906-removecontexthelpforobject
    removeContextHelpForObject(object: cocoascript.NSHelpManager):void;
    // doc://com.apple.documentation/documentation/appkit/nshelpmanager/1500919-contexthelpforobject
    contextHelpForObject(object: cocoascript.NSHelpManager):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/appkit/nshelpmanager/1500930-showcontexthelpforobject
    showContextHelpForObject_locationHint(object: cocoascript.NSHelpManager, pt: cocoascript.NSPoint):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nshelpmanager/2870247-contexthelpmodeactive
    contextHelpModeActive(): cocoascript.BOOL;
    setContextHelpModeActive(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontexthelpmodedidactivatenotification
    NSContextHelpModeDidActivateNotification(): cocoascript.NSNotificationName;
    setNSContextHelpModeDidActivateNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontexthelpmodediddeactivatenotification
    NSContextHelpModeDidDeactivateNotification(): cocoascript.NSNotificationName;
    setNSContextHelpModeDidDeactivateNotification(): void;
    //
    alloc():cocoascript.NSHelpManager;
    //
    init():cocoascript.NSHelpManager;
  }
}

declare const NSHelpManager: cocoascript.NSHelpManager;
