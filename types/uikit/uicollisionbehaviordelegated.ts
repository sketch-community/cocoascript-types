declare namespace cocoascript {
/**
 * To respond to UIKit dynamic item collisions, configure a custom class to adopt the 
 * doc://com.apple.documentation/documentation/uikit/uicollisionbehaviordelegate
 */
interface UICollisionBehaviorDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uicollisionbehaviordelegate/1624816-collisionbehavior
  collisionBehavior_beganContactForItem_withBoundaryIdentifier_atPoint(behavior: cocoascript.UICollisionBehavior, item: cocoascript.UIDynamicItem, identifier: cocoascript.NSCopying, p: cocoascript.CGPoint):void;
  // doc://com.apple.documentation/documentation/uikit/uicollisionbehaviordelegate/1624835-collisionbehavior
  collisionBehavior_beganContactForItem_withItem_atPoint(behavior: cocoascript.UICollisionBehavior, item1: cocoascript.UIDynamicItem, item2: cocoascript.UIDynamicItem, p: cocoascript.CGPoint):void;
  // doc://com.apple.documentation/documentation/uikit/uicollisionbehaviordelegate/1624834-collisionbehavior
  collisionBehavior_endedContactForItem_withBoundaryIdentifier(behavior: cocoascript.UICollisionBehavior, item: cocoascript.UIDynamicItem, identifier: cocoascript.NSCopying):void;
  // doc://com.apple.documentation/documentation/uikit/uicollisionbehaviordelegate/1624833-collisionbehavior
  collisionBehavior_endedContactForItem_withItem(behavior: cocoascript.UICollisionBehavior, item1: cocoascript.UIDynamicItem, item2: cocoascript.UIDynamicItem):void;
}
}

