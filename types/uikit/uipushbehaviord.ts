declare namespace cocoascript {
/**
 * A behavior that applies a continuous or instantaneous force to one or more dynamic items, causing those items to change position accordingly.
 * doc://com.apple.documentation/documentation/uikit/uipushbehavior
 */
interface UIPushBehavior extends UIDynamicBehavior {
  // doc://com.apple.documentation/documentation/uikit/uipushbehavior/1623336-active
  active(): cocoascript.BOOL;
  setActive(): void;
  // doc://com.apple.documentation/documentation/uikit/uipushbehavior/1623333-additem
  addItem(item: cocoascript.UIDynamicItem):void;
  // doc://com.apple.documentation/documentation/uikit/uipushbehavior/1623329-initwithitems
  initWithItems_mode(items: cocoascript.UIDynamicItem, mode: cocoascript.UIPushBehaviorMode):cocoascript.UIPushBehavior;
  // doc://com.apple.documentation/documentation/uikit/uipushbehavior/1623343-removeitem
  removeItem(item: cocoascript.UIDynamicItem):void;
  // doc://com.apple.documentation/documentation/uikit/uipushbehavior/1623339-items
  items(): cocoascript.UIDynamicItem;
  setItems(): void;
  // doc://com.apple.documentation/documentation/uikit/uipushbehavior/1623335-setangle
  setAngle_magnitude(angle: cocoascript.CGFloat, magnitude: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/uikit/uipushbehavior/1623332-angle
  angle(): cocoascript.CGFloat;
  setAngle(): void;
  // doc://com.apple.documentation/documentation/uikit/uipushbehavior/1623330-magnitude
  magnitude(): cocoascript.CGFloat;
  setMagnitude(): void;
  // doc://com.apple.documentation/documentation/uikit/uipushbehavior/1623340-mode
  mode(): cocoascript.UIPushBehaviorMode;
  setMode(): void;
  // doc://com.apple.documentation/documentation/uikit/uipushbehavior/1623341-settargetoffsetfromcenter
  setTargetOffsetFromCenter_forItem(o: cocoascript.UIOffset, item: cocoascript.UIDynamicItem):void;
  // doc://com.apple.documentation/documentation/uikit/uipushbehavior/1623338-targetoffsetfromcenterforitem
  targetOffsetFromCenterForItem(item: cocoascript.UIDynamicItem):cocoascript.UIOffset;
  // doc://com.apple.documentation/documentation/uikit/uipushbehavior/1623331-pushdirection
  pushDirection(): cocoascript.CGVector;
  setPushDirection(): void;
  // 
  alloc():cocoascript.UIPushBehavior;
  // 
  init():cocoascript.UIPushBehavior;
}
}
declare const UIPushBehavior: cocoascript.UIPushBehavior;

