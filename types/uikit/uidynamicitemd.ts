declare namespace cocoascript {
  /**
   * A set of methods that can make a custom object eligible to participate in UIKit Dynamics.
   * doc://com.apple.documentation/documentation/uikit/uidynamicitem
   */
  interface UIDynamicItem extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uidynamicitem/1618495-bounds
    bounds(): cocoascript.CGRect;
    setBounds(): void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicitem/1618491-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicitem/1618483-transform
    transform(): cocoascript.CGAffineTransform;
    setTransform(): void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicitem/1618493-collisionboundstype
    collisionBoundsType(): cocoascript.UIDynamicItemCollisionBoundsType;
    setCollisionBoundsType(): void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicitem/1618494-collisionboundingpath
    collisionBoundingPath(): cocoascript.UIBezierPath;
    setCollisionBoundingPath(): void;
  }
}
