declare namespace cocoascript {
/**
 * An object that confers to a specified array of dynamic items the ability to engage in collisions with each other and with the behavior’s specified boundaries. 
 * doc://com.apple.documentation/documentation/uikit/uicollisionbehavior
 */
interface UICollisionBehavior extends UIDynamicBehavior {
  // doc://com.apple.documentation/documentation/uikit/uicollisionbehavior/1624829-additem
  addItem(item: cocoascript.UIDynamicItem):void;
  // doc://com.apple.documentation/documentation/uikit/uicollisionbehavior/1624820-initwithitems
  initWithItems(items: cocoascript.UIDynamicItem):cocoascript.UICollisionBehavior;
  // doc://com.apple.documentation/documentation/uikit/uicollisionbehavior/1624830-removeitem
  removeItem(item: cocoascript.UIDynamicItem):void;
  // doc://com.apple.documentation/documentation/uikit/uicollisionbehavior/1624819-items
  items(): cocoascript.UIDynamicItem;
  setItems(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollisionbehavior/1624828-collisiondelegate
  collisionDelegate(): cocoascript.UICollisionBehaviorDelegate;
  setCollisionDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollisionbehavior/1624822-addboundarywithidentifier
  addBoundaryWithIdentifier_forPath(identifier: cocoascript.NSCopying, bezierPath: cocoascript.UIBezierPath):void;
  // doc://com.apple.documentation/documentation/uikit/uicollisionbehavior/1624821-addboundarywithidentifier
  addBoundaryWithIdentifier_fromPoint_toPoint(identifier: cocoascript.NSCopying, p1: cocoascript.CGPoint, p2: cocoascript.CGPoint):void;
  // doc://com.apple.documentation/documentation/uikit/uicollisionbehavior/1624812-boundaryidentifiers
  boundaryIdentifiers(): cocoascript.NSCopying;
  setBoundaryIdentifiers(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollisionbehavior/1624825-boundarywithidentifier
  boundaryWithIdentifier(identifier: cocoascript.NSCopying):cocoascript.UIBezierPath;
  // doc://com.apple.documentation/documentation/uikit/uicollisionbehavior/1624832-collisionmode
  collisionMode(): cocoascript.UICollisionBehaviorMode;
  setCollisionMode(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollisionbehavior/1624827-removeallboundaries
  removeAllBoundaries():void;
  // doc://com.apple.documentation/documentation/uikit/uicollisionbehavior/1624823-removeboundarywithidentifier
  removeBoundaryWithIdentifier(identifier: cocoascript.NSCopying):void;
  // doc://com.apple.documentation/documentation/uikit/uicollisionbehavior/1624818-settranslatesreferenceboundsinto
  setTranslatesReferenceBoundsIntoBoundaryWithInsets(insets: cocoascript.UIEdgeInsets):void;
  // doc://com.apple.documentation/documentation/uikit/uicollisionbehavior/1624826-translatesreferenceboundsintobou
  translatesReferenceBoundsIntoBoundary(): cocoascript.BOOL;
  setTranslatesReferenceBoundsIntoBoundary(): void;
  // 
  alloc():cocoascript.UICollisionBehavior;
  // 
  init():cocoascript.UICollisionBehavior;
}
}
declare const UICollisionBehavior: cocoascript.UICollisionBehavior;

