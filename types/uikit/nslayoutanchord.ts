declare namespace cocoascript {
  /**
   * A factory class for creating layout constraint objects using a fluent API.
   * doc://com.apple.documentation/documentation/uikit/nslayoutanchor
   */
  interface NSLayoutAnchor extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/nslayoutanchor/1500946-constraintequaltoanchor
    constraintEqualToAnchor(anchor: cocoascript.NSLayoutAnchor):cocoascript.NSLayoutConstraint;
    // doc://com.apple.documentation/documentation/uikit/nslayoutanchor/1500937-constraintequaltoanchor
    constraintEqualToAnchor_constant(anchor: cocoascript.NSLayoutAnchor, c: cocoascript.CGFloat):cocoascript.NSLayoutConstraint;
    // doc://com.apple.documentation/documentation/uikit/nslayoutanchor/1500936-constraintgreaterthanorequaltoan
    constraintGreaterThanOrEqualToAnchor(anchor: cocoascript.NSLayoutAnchor):cocoascript.NSLayoutConstraint;
    // doc://com.apple.documentation/documentation/uikit/nslayoutanchor/1500948-constraintgreaterthanorequaltoan
    constraintGreaterThanOrEqualToAnchor_constant(anchor: cocoascript.NSLayoutAnchor, c: cocoascript.CGFloat):cocoascript.NSLayoutConstraint;
    // doc://com.apple.documentation/documentation/uikit/nslayoutanchor/1500953-constraintlessthanorequaltoancho
    constraintLessThanOrEqualToAnchor(anchor: cocoascript.NSLayoutAnchor):cocoascript.NSLayoutConstraint;
    // doc://com.apple.documentation/documentation/uikit/nslayoutanchor/1500959-constraintlessthanorequaltoancho
    constraintLessThanOrEqualToAnchor_constant(anchor: cocoascript.NSLayoutAnchor, c: cocoascript.CGFloat):cocoascript.NSLayoutConstraint;
    // doc://com.apple.documentation/documentation/appkit/nslayoutanchor/2870023-constraintsaffectinglayout
    constraintsAffectingLayout(): cocoascript.NSLayoutConstraint;
    setConstraintsAffectingLayout(): void;
    // doc://com.apple.documentation/documentation/appkit/nslayoutanchor/2870024-hasambiguouslayout
    hasAmbiguousLayout(): cocoascript.BOOL;
    setHasAmbiguousLayout(): void;
    // doc://com.apple.documentation/documentation/appkit/nslayoutanchor/2870022-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/appkit/nslayoutanchor/2870025-item
    item(): cocoascript.id;
    setItem(): void;
    //
    alloc():cocoascript.NSLayoutAnchor;
    //
    init():cocoascript.NSLayoutAnchor;
  }
}

declare const NSLayoutAnchor: cocoascript.NSLayoutAnchor;
