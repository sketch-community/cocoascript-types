declare namespace cocoascript {
/**
 * An object that applies field-based physics to dynamic items.   
 * doc://com.apple.documentation/documentation/uikit/uifieldbehavior
 */
interface UIFieldBehavior extends UIDynamicBehavior {
  // doc://com.apple.documentation/documentation/uikit/uifieldbehavior/1624996-additem
  addItem(item: cocoascript.UIDynamicItem):void;
  // doc://com.apple.documentation/documentation/uikit/uifieldbehavior/1624993-removeitem
  removeItem(item: cocoascript.UIDynamicItem):void;
  // doc://com.apple.documentation/documentation/uikit/uifieldbehavior/1625002-items
  items(): cocoascript.UIDynamicItem;
  setItems(): void;
  // doc://com.apple.documentation/documentation/uikit/uifieldbehavior/1625003-position
  position(): cocoascript.CGPoint;
  setPosition(): void;
  // doc://com.apple.documentation/documentation/uikit/uifieldbehavior/1625005-region
  region(): cocoascript.UIRegion;
  setRegion(): void;
  // doc://com.apple.documentation/documentation/uikit/uifieldbehavior/1624997-strength
  strength(): cocoascript.CGFloat;
  setStrength(): void;
  // doc://com.apple.documentation/documentation/uikit/uifieldbehavior/1624988-falloff
  falloff(): cocoascript.CGFloat;
  setFalloff(): void;
  // doc://com.apple.documentation/documentation/uikit/uifieldbehavior/1624994-minimumradius
  minimumRadius(): cocoascript.CGFloat;
  setMinimumRadius(): void;
  // doc://com.apple.documentation/documentation/uikit/uifieldbehavior/1624987-direction
  direction(): cocoascript.CGVector;
  setDirection(): void;
  // doc://com.apple.documentation/documentation/uikit/uifieldbehavior/1624998-smoothness
  smoothness(): cocoascript.CGFloat;
  setSmoothness(): void;
  // doc://com.apple.documentation/documentation/uikit/uifieldbehavior/1624986-animationspeed
  animationSpeed(): cocoascript.CGFloat;
  setAnimationSpeed(): void;
  // 
  alloc():cocoascript.UIFieldBehavior;
  // 
  init():cocoascript.UIFieldBehavior;
}
}
declare const UIFieldBehavior: cocoascript.UIFieldBehavior;

