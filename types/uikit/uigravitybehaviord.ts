declare namespace cocoascript {
  /**
   * An object that applies a gravity-like force to all of its associated dynamic items.
   * doc://com.apple.documentation/documentation/uikit/uigravitybehavior
   */
  interface UIGravityBehavior extends UIDynamicBehavior {
    // doc://com.apple.documentation/documentation/uikit/uigravitybehavior/1620416-initwithitems
    initWithItems(items: cocoascript.UIDynamicItem):cocoascript.UIGravityBehavior;
    // doc://com.apple.documentation/documentation/uikit/uigravitybehavior/1620420-items
    items(): cocoascript.UIDynamicItem;
    setItems(): void;
    // doc://com.apple.documentation/documentation/uikit/uigravitybehavior/1620415-additem
    addItem(item: cocoascript.UIDynamicItem):void;
    // doc://com.apple.documentation/documentation/uikit/uigravitybehavior/1620422-removeitem
    removeItem(item: cocoascript.UIDynamicItem):void;
    // doc://com.apple.documentation/documentation/uikit/uigravitybehavior/1620423-gravitydirection
    gravityDirection(): cocoascript.CGVector;
    setGravityDirection(): void;
    // doc://com.apple.documentation/documentation/uikit/uigravitybehavior/1620417-angle
    angle(): cocoascript.CGFloat;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/uikit/uigravitybehavior/1620418-magnitude
    magnitude(): cocoascript.CGFloat;
    setMagnitude(): void;
    // doc://com.apple.documentation/documentation/uikit/uigravitybehavior/1620414-setangle
    setAngle_magnitude(angle: cocoascript.CGFloat, magnitude: cocoascript.CGFloat):void;
    //
    alloc():cocoascript.UIGravityBehavior;
    //
    init():cocoascript.UIGravityBehavior;
  }
}

declare const UIGravityBehavior: cocoascript.UIGravityBehavior;
