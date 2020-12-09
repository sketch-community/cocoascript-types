declare namespace cocoascript {
/**
 * A relationship between two dynamic items, or between a dynamic item and an anchor point.  
 * doc://com.apple.documentation/documentation/uikit/uiattachmentbehavior
 */
interface UIAttachmentBehavior extends UIDynamicBehavior {
  // doc://com.apple.documentation/documentation/uikit/uiattachmentbehavior/1621297-initwithitem
  initWithItem_attachedToAnchor(item: cocoascript.UIDynamicItem, point: cocoascript.CGPoint):cocoascript.UIAttachmentBehavior;
  // doc://com.apple.documentation/documentation/uikit/uiattachmentbehavior/1621309-initwithitem
  initWithItem_attachedToItem(item1: cocoascript.UIDynamicItem, item2: cocoascript.UIDynamicItem):cocoascript.UIAttachmentBehavior;
  // doc://com.apple.documentation/documentation/uikit/uiattachmentbehavior/1621301-initwithitem
  initWithItem_offsetFromCenter_attachedToAnchor(item: cocoascript.UIDynamicItem, offset: cocoascript.UIOffset, point: cocoascript.CGPoint):cocoascript.UIAttachmentBehavior;
  // doc://com.apple.documentation/documentation/uikit/uiattachmentbehavior/1621298-initwithitem
  initWithItem_offsetFromCenter_attachedToItem_offsetFromCenter(item1: cocoascript.UIDynamicItem, offset1: cocoascript.UIOffset, item2: cocoascript.UIDynamicItem, offset2: cocoascript.UIOffset):cocoascript.UIAttachmentBehavior;
  // doc://com.apple.documentation/documentation/uikit/uiattachmentbehavior/1621311-items
  items(): cocoascript.UIDynamicItem;
  setItems(): void;
  // doc://com.apple.documentation/documentation/uikit/uiattachmentbehavior/1621315-anchorpoint
  anchorPoint(): cocoascript.CGPoint;
  setAnchorPoint(): void;
  // doc://com.apple.documentation/documentation/uikit/uiattachmentbehavior/1621312-attachedbehaviortype
  attachedBehaviorType(): cocoascript.UIAttachmentBehaviorType;
  setAttachedBehaviorType(): void;
  // doc://com.apple.documentation/documentation/uikit/uiattachmentbehavior/1621302-damping
  damping(): cocoascript.CGFloat;
  setDamping(): void;
  // doc://com.apple.documentation/documentation/uikit/uiattachmentbehavior/1621321-frequency
  frequency(): cocoascript.CGFloat;
  setFrequency(): void;
  // doc://com.apple.documentation/documentation/uikit/uiattachmentbehavior/1621304-length
  length(): cocoascript.CGFloat;
  setLength(): void;
  // doc://com.apple.documentation/documentation/uikit/uiattachmentbehavior/1621307-frictiontorque
  frictionTorque(): cocoascript.CGFloat;
  setFrictionTorque(): void;
  // doc://com.apple.documentation/documentation/uikit/uiattachmentbehavior/1621294-attachmentrange
  attachmentRange(): cocoascript.UIFloatRange;
  setAttachmentRange(): void;
  // 
  alloc():cocoascript.UIAttachmentBehavior;
  // 
  init():cocoascript.UIAttachmentBehavior;
}
}
declare const UIAttachmentBehavior: cocoascript.UIAttachmentBehavior;

