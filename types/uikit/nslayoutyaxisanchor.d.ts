declare namespace cocoascript {
  /**
   * A factory class for creating vertical layout constraint objects using a fluent API.
   * doc://com.apple.documentation/documentation/uikit/nslayoutyaxisanchor
   */
  interface NSLayoutYAxisAnchor extends NSLayoutAnchor {
    // doc://com.apple.documentation/documentation/uikit/nslayoutyaxisanchor/2866022-constraintequaltosystemspacingbe
    constraintEqualToSystemSpacingBelowAnchor_multiplier(anchor: cocoascript.NSLayoutYAxisAnchor, multiplier: cocoascript.CGFloat):cocoascript.NSLayoutConstraint;
    // doc://com.apple.documentation/documentation/uikit/nslayoutyaxisanchor/2866086-constraintgreaterthanorequaltosy
    constraintGreaterThanOrEqualToSystemSpacingBelowAnchor_multiplier(anchor: cocoascript.NSLayoutYAxisAnchor, multiplier: cocoascript.CGFloat):cocoascript.NSLayoutConstraint;
    // doc://com.apple.documentation/documentation/uikit/nslayoutyaxisanchor/2865829-constraintlessthanorequaltosyste
    constraintLessThanOrEqualToSystemSpacingBelowAnchor_multiplier(anchor: cocoascript.NSLayoutYAxisAnchor, multiplier: cocoascript.CGFloat):cocoascript.NSLayoutConstraint;
    // doc://com.apple.documentation/documentation/uikit/nslayoutyaxisanchor/2865935-anchorwithoffsettoanchor
    anchorWithOffsetToAnchor(otherAnchor: cocoascript.NSLayoutYAxisAnchor):cocoascript.NSLayoutDimension;
    //
    alloc():cocoascript.NSLayoutYAxisAnchor;
    //
    init():cocoascript.NSLayoutYAxisAnchor;
  }
}

declare const NSLayoutYAxisAnchor: cocoascript.NSLayoutYAxisAnchor;
