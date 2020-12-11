declare namespace cocoascript {
  /**
   * A view that arranges an array of views horizontally or vertically and updates their placement and sizing when the window size changes.
   * doc://com.apple.documentation/documentation/appkit/nsstackview
   */
  interface NSStackView extends NSView {
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488946-delegate
    delegate(): cocoascript.NSStackViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488897-addview
    addView_inGravity(view: cocoascript.NSView, gravity: cocoascript.NSStackViewGravity):void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488933-insertview
    insertView_atIndex_inGravity(view: cocoascript.NSView, index: cocoascript.NSUInteger, gravity: cocoascript.NSStackViewGravity):void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488883-setviews
    setViews_inGravity(views: cocoascript.NSView, gravity: cocoascript.NSStackViewGravity):void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488916-removeview
    removeView(view: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488899-addarrangedsubview
    addArrangedSubview(view: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488896-insertarrangedsubview
    insertArrangedSubview_atIndex(view: cocoascript.NSView, index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488925-removearrangedsubview
    removeArrangedSubview(view: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488894-arrangedsubviews
    arrangedSubviews(): cocoascript.NSView;
    setArrangedSubviews(): void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488914-views
    views(): cocoascript.NSView;
    setViews(): void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488876-viewsingravity
    viewsInGravity(gravity: cocoascript.NSStackViewGravity):cocoascript.NSView;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488952-detachedviews
    detachedViews(): cocoascript.NSView;
    setDetachedViews(): void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488936-clippingresistancepriorityforori
    clippingResistancePriorityForOrientation(orientation: cocoascript.NSLayoutConstraintOrientation):cocoascript.NSLayoutPriority;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488912-huggingpriorityfororientation
    huggingPriorityForOrientation(orientation: cocoascript.NSLayoutConstraintOrientation):cocoascript.NSLayoutPriority;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488950-orientation
    orientation(): cocoascript.NSUserInterfaceLayoutOrientation;
    setOrientation(): void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488906-alignment
    alignment(): cocoascript.NSLayoutAttribute;
    setAlignment(): void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488945-spacing
    spacing(): cocoascript.CGFloat;
    setSpacing(): void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488931-edgeinsets
    edgeInsets(): cocoascript.NSEdgeInsets;
    setEdgeInsets(): void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488957-hasequalspacing
    hasEqualSpacing(): cocoascript.BOOL;
    setHasEqualSpacing(): void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488882-distribution
    distribution(): cocoascript.NSStackViewDistribution;
    setDistribution(): void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488888-customspacingafterview
    customSpacingAfterView(view: cocoascript.NSView):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488874-setcustomspacing
    setCustomSpacing_afterView(spacing: cocoascript.CGFloat, view: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488934-visibilitypriorityforview
    visibilityPriorityForView(view: cocoascript.NSView):cocoascript.NSStackViewVisibilityPriority;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488890-setvisibilitypriority
    setVisibilityPriority_forView(priority: cocoascript.NSStackViewVisibilityPriority, view: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488940-detacheshiddenviews
    detachesHiddenViews(): cocoascript.BOOL;
    setDetachesHiddenViews(): void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488880-setclippingresistancepriority
    setClippingResistancePriority_forOrientation(clippingResistancePriority: cocoascript.NSLayoutPriority, orientation: cocoascript.NSLayoutConstraintOrientation):void;
    // doc://com.apple.documentation/documentation/appkit/nsstackview/1488904-sethuggingpriority
    setHuggingPriority_forOrientation(huggingPriority: cocoascript.NSLayoutPriority, orientation: cocoascript.NSLayoutConstraintOrientation):void;
    //
    alloc():cocoascript.NSStackView;
    //
    init():cocoascript.NSStackView;
  }
}

declare const NSStackView: cocoascript.NSStackView;
