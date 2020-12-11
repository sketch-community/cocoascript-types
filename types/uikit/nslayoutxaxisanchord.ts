declare namespace cocoascript {
  /**
   * A factory class for creating horizontal layout constraint objects using a fluent API.
   * doc://com.apple.documentation/documentation/uikit/nslayoutxaxisanchor
   */
  interface NSLayoutXAxisAnchor extends NSLayoutAnchor {
    // doc://com.apple.documentation/documentation/uikit/nslayoutxaxisanchor/2866112-constraintequaltosystemspacingaf
    constraintEqualToSystemSpacingAfterAnchor_multiplier(anchor: cocoascript.NSLayoutXAxisAnchor, multiplier: cocoascript.CGFloat):cocoascript.NSLayoutConstraint;
    // doc://com.apple.documentation/documentation/uikit/nslayoutxaxisanchor/2865871-constraintgreaterthanorequaltosy
    constraintGreaterThanOrEqualToSystemSpacingAfterAnchor_multiplier(anchor: cocoascript.NSLayoutXAxisAnchor, multiplier: cocoascript.CGFloat):cocoascript.NSLayoutConstraint;
    // doc://com.apple.documentation/documentation/uikit/nslayoutxaxisanchor/2866018-constraintlessthanorequaltosyste
    constraintLessThanOrEqualToSystemSpacingAfterAnchor_multiplier(anchor: cocoascript.NSLayoutXAxisAnchor, multiplier: cocoascript.CGFloat):cocoascript.NSLayoutConstraint;
    // doc://com.apple.documentation/documentation/uikit/nslayoutxaxisanchor/2866024-anchorwithoffsettoanchor
    anchorWithOffsetToAnchor(otherAnchor: cocoascript.NSLayoutXAxisAnchor):cocoascript.NSLayoutDimension;
    //
    alloc():cocoascript.NSLayoutXAxisAnchor;
    //
    init():cocoascript.NSLayoutXAxisAnchor;
  }
}

declare const NSLayoutXAxisAnchor: cocoascript.NSLayoutXAxisAnchor;
