declare namespace cocoascript {
  /**
   * An object that clips a document view to a scroll view's frame.
   * doc://com.apple.documentation/documentation/appkit/nsclipview
   */
  interface NSClipView extends NSView {
    // doc://com.apple.documentation/documentation/appkit/nsclipview/1524587-documentview
    documentView(): cocoascript.NSView;
    setDocumentView(): void;
    // doc://com.apple.documentation/documentation/appkit/nsclipview/1528826-scrolltopoint
    scrollToPoint(newOrigin: cocoascript.NSPoint):void;
    // doc://com.apple.documentation/documentation/appkit/nsclipview/1528953-autoscroll
    autoscroll(event: cocoascript.NSEvent):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsclipview/1526678-constrainscrollpoint
    constrainScrollPoint(newOrigin: cocoascript.NSPoint):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/appkit/nsclipview/1534160-constrainboundsrect
    constrainBoundsRect(proposedBounds: cocoascript.NSRect):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsclipview/1532142-copiesonscroll
    copiesOnScroll(): cocoascript.BOOL;
    setCopiesOnScroll(): void;
    // doc://com.apple.documentation/documentation/appkit/nsclipview/1524329-contentinsets
    contentInsets(): cocoascript.NSEdgeInsets;
    setContentInsets(): void;
    // doc://com.apple.documentation/documentation/appkit/nsclipview/1527540-automaticallyadjustscontentinset
    automaticallyAdjustsContentInsets(): cocoascript.BOOL;
    setAutomaticallyAdjustsContentInsets(): void;
    // doc://com.apple.documentation/documentation/appkit/nsclipview/1533338-documentrect
    documentRect(): cocoascript.NSRect;
    setDocumentRect(): void;
    // doc://com.apple.documentation/documentation/appkit/nsclipview/1527958-documentvisiblerect
    documentVisibleRect(): cocoascript.NSRect;
    setDocumentVisibleRect(): void;
    // doc://com.apple.documentation/documentation/appkit/nsclipview/1535377-documentcursor
    documentCursor(): cocoascript.NSCursor;
    setDocumentCursor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsclipview/1534684-drawsbackground
    drawsBackground(): cocoascript.BOOL;
    setDrawsBackground(): void;
    // doc://com.apple.documentation/documentation/appkit/nsclipview/1525469-backgroundcolor
    backgroundColor(): cocoascript.NSColor;
    setBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsclipview/1531354-viewboundschanged
    viewBoundsChanged(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nsclipview/1526364-viewframechanged
    viewFrameChanged(notification: cocoascript.NSNotification):void;
    //
    alloc():cocoascript.NSClipView;
    //
    init():cocoascript.NSClipView;
  }
}

declare const NSClipView: cocoascript.NSClipView;
