declare namespace cocoascript {
  /**
   * A user interface element that contains and displays text, scroll, and browser views, in addition to other view subclasses.
   * doc://com.apple.documentation/documentation/appkit/nsdrawer
   */
  interface NSDrawer extends NSResponder {
    // doc://com.apple.documentation/documentation/appkit/nsdrawer/1438262-initwithcontentsize
    initWithContentSize_preferredEdge(contentSize: cocoascript.NSSize, edge: cocoascript.NSRectEdge):cocoascript.NSDrawer;
    // doc://com.apple.documentation/documentation/appkit/nsdrawer/1438304-delegate
    delegate(): cocoascript.NSDrawerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawer/1438283-close
    close():void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawer/1438299-close
    close(sender: cocoascript.NSDrawer):void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawer/1438279-open
    open():void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawer/1438275-open
    open(sender: cocoascript.NSDrawer):void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawer/1438308-openonedge
    openOnEdge(edge: cocoascript.NSRectEdge):void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawer/1438264-toggle
    toggle(sender: cocoascript.NSDrawer):void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawer/1438287-state
    state(): cocoascript.NSInteger;
    setState(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawer/1438302-contentsize
    contentSize(): cocoascript.NSSize;
    setContentSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawer/1438306-leadingoffset
    leadingOffset(): cocoascript.CGFloat;
    setLeadingOffset(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawer/1438266-maxcontentsize
    maxContentSize(): cocoascript.NSSize;
    setMaxContentSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawer/1438291-mincontentsize
    minContentSize(): cocoascript.NSSize;
    setMinContentSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawer/1438277-trailingoffset
    trailingOffset(): cocoascript.CGFloat;
    setTrailingOffset(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawer/1438320-edge
    edge(): cocoascript.NSRectEdge;
    setEdge(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawer/1438272-preferrededge
    preferredEdge(): cocoascript.NSRectEdge;
    setPreferredEdge(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawer/1438260-contentview
    contentView(): cocoascript.NSView;
    setContentView(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawer/1438312-parentwindow
    parentWindow(): cocoascript.NSWindow;
    setParentWindow(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawerdidclosenotification
    NSDrawerDidCloseNotification(): cocoascript.NSNotificationName;
    setNSDrawerDidCloseNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawerdidopennotification
    NSDrawerDidOpenNotification(): cocoascript.NSNotificationName;
    setNSDrawerDidOpenNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawerwillclosenotification
    NSDrawerWillCloseNotification(): cocoascript.NSNotificationName;
    setNSDrawerWillCloseNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdrawerwillopennotification
    NSDrawerWillOpenNotification(): cocoascript.NSNotificationName;
    setNSDrawerWillOpenNotification(): void;
    //
    alloc():cocoascript.NSDrawer;
    //
    init():cocoascript.NSDrawer;
  }
}

declare const NSDrawer: cocoascript.NSDrawer;
