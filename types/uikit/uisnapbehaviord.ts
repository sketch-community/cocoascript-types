declare namespace cocoascript {
/**
 * A spring-like behavior whose initial motion is damped over time so that the object settles at a specific point.
 * doc://com.apple.documentation/documentation/uikit/uisnapbehavior
 */
interface UISnapBehavior extends UIDynamicBehavior {
  // doc://com.apple.documentation/documentation/uikit/uisnapbehavior/1621011-initwithitem
  initWithItem_snapToPoint(item: cocoascript.UIDynamicItem, point: cocoascript.CGPoint):cocoascript.UISnapBehavior;
  // doc://com.apple.documentation/documentation/uikit/uisnapbehavior/1621013-snappoint
  snapPoint(): cocoascript.CGPoint;
  setSnapPoint(): void;
  // doc://com.apple.documentation/documentation/uikit/uisnapbehavior/1621012-damping
  damping(): cocoascript.CGFloat;
  setDamping(): void;
  // 
  alloc():cocoascript.UISnapBehavior;
  // 
  init():cocoascript.UISnapBehavior;
}
}
declare const UISnapBehavior: cocoascript.UISnapBehavior;

