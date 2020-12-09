declare namespace cocoascript {
/**
 * A factory class for creating size-based layout constraint objects using a fluent API. 
 * doc://com.apple.documentation/documentation/uikit/nslayoutdimension
 */
interface NSLayoutDimension extends NSLayoutAnchor {
  // doc://com.apple.documentation/documentation/uikit/nslayoutdimension/1500951-constraintequaltoanchor
  constraintEqualToAnchor_multiplier(anchor: cocoascript.NSLayoutDimension, m: cocoascript.CGFloat):cocoascript.NSLayoutConstraint;
  // doc://com.apple.documentation/documentation/uikit/nslayoutdimension/1500934-constraintequaltoanchor
  constraintEqualToAnchor_multiplier_constant(anchor: cocoascript.NSLayoutDimension, m: cocoascript.CGFloat, c: cocoascript.CGFloat):cocoascript.NSLayoutConstraint;
  // doc://com.apple.documentation/documentation/uikit/nslayoutdimension/1500941-constraintequaltoconstant
  constraintEqualToConstant(c: cocoascript.CGFloat):cocoascript.NSLayoutConstraint;
  // doc://com.apple.documentation/documentation/uikit/nslayoutdimension/1500961-constraintgreaterthanorequaltoan
  constraintGreaterThanOrEqualToAnchor_multiplier(anchor: cocoascript.NSLayoutDimension, m: cocoascript.CGFloat):cocoascript.NSLayoutConstraint;
  // doc://com.apple.documentation/documentation/uikit/nslayoutdimension/1500965-constraintgreaterthanorequaltoan
  constraintGreaterThanOrEqualToAnchor_multiplier_constant(anchor: cocoascript.NSLayoutDimension, m: cocoascript.CGFloat, c: cocoascript.CGFloat):cocoascript.NSLayoutConstraint;
  // doc://com.apple.documentation/documentation/uikit/nslayoutdimension/1500939-constraintgreaterthanorequaltoco
  constraintGreaterThanOrEqualToConstant(c: cocoascript.CGFloat):cocoascript.NSLayoutConstraint;
  // doc://com.apple.documentation/documentation/uikit/nslayoutdimension/1500943-constraintlessthanorequaltoancho
  constraintLessThanOrEqualToAnchor_multiplier(anchor: cocoascript.NSLayoutDimension, m: cocoascript.CGFloat):cocoascript.NSLayoutConstraint;
  // doc://com.apple.documentation/documentation/uikit/nslayoutdimension/1500957-constraintlessthanorequaltoancho
  constraintLessThanOrEqualToAnchor_multiplier_constant(anchor: cocoascript.NSLayoutDimension, m: cocoascript.CGFloat, c: cocoascript.CGFloat):cocoascript.NSLayoutConstraint;
  // doc://com.apple.documentation/documentation/uikit/nslayoutdimension/1500963-constraintlessthanorequaltoconst
  constraintLessThanOrEqualToConstant(c: cocoascript.CGFloat):cocoascript.NSLayoutConstraint;
  // 
  alloc():cocoascript.NSLayoutDimension;
  // 
  init():cocoascript.NSLayoutDimension;
}
}
declare const NSLayoutDimension: cocoascript.NSLayoutDimension;

