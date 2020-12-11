declare namespace cocoascript {
  /**
   * A set of optional methods that a delegate of a split view implements.
   * doc://com.apple.documentation/documentation/appkit/nssplitviewdelegate
   */
  interface NSSplitViewDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nssplitviewdelegate/1455289-splitviewwillresizesubviews
    splitViewWillResizeSubviews(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nssplitviewdelegate/1455314-splitviewdidresizesubviews
    splitViewDidResizeSubviews(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nssplitviewdelegate/1455304-splitview
    splitView_canCollapseSubview(splitView: cocoascript.NSSplitView, subview: cocoascript.NSView):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nssplitviewdelegate/1455263-splitview
    splitView_shouldCollapseSubview_forDoubleClickOnDividerAtIndex(splitView: cocoascript.NSSplitView, subview: cocoascript.NSView, dividerIndex: cocoascript.NSInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nssplitviewdelegate/1455288-splitview
    splitView_effectiveRect_forDrawnRect_ofDividerAtIndex(splitView: cocoascript.NSSplitView, proposedEffectiveRect: cocoascript.NSRect, drawnRect: cocoascript.NSRect, dividerIndex: cocoascript.NSInteger):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nssplitviewdelegate/1455280-splitview
    splitView_shouldHideDividerAtIndex(splitView: cocoascript.NSSplitView, dividerIndex: cocoascript.NSInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nssplitviewdelegate/1455292-splitview
    splitView_additionalEffectiveRectOfDividerAtIndex(splitView: cocoascript.NSSplitView, dividerIndex: cocoascript.NSInteger):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nssplitviewdelegate/1455312-splitview
    splitView_constrainSplitPosition_ofSubviewAt(splitView: cocoascript.NSSplitView, proposedPosition: cocoascript.CGFloat, dividerIndex: cocoascript.NSInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nssplitviewdelegate/1455302-splitview
    splitView_constrainMinCoordinate_ofSubviewAt(splitView: cocoascript.NSSplitView, proposedMinimumPosition: cocoascript.CGFloat, dividerIndex: cocoascript.NSInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nssplitviewdelegate/1455300-splitview
    splitView_constrainMaxCoordinate_ofSubviewAt(splitView: cocoascript.NSSplitView, proposedMaximumPosition: cocoascript.CGFloat, dividerIndex: cocoascript.NSInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nssplitviewdelegate/1455273-splitview
    splitView_resizeSubviewsWithOldSize(splitView: cocoascript.NSSplitView, oldSize: cocoascript.NSSize):void;
    // doc://com.apple.documentation/documentation/appkit/nssplitviewdelegate/1455269-splitview
    splitView_shouldAdjustSizeOfSubview(splitView: cocoascript.NSSplitView, view: cocoascript.NSView):cocoascript.BOOL;
  }
}
