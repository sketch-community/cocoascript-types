declare namespace cocoascript {
  /**
   * A base dynamic animation configuration for one or more dynamic items.
   * doc://com.apple.documentation/documentation/uikit/uidynamicitembehavior
   */
  interface UIDynamicItemBehavior extends UIDynamicBehavior {
    // doc://com.apple.documentation/documentation/uikit/uidynamicitembehavior/1624393-additem
    addItem(item: cocoascript.UIDynamicItem):void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicitembehavior/1624397-initwithitems
    initWithItems(items: cocoascript.UIDynamicItem):cocoascript.UIDynamicItemBehavior;
    // doc://com.apple.documentation/documentation/uikit/uidynamicitembehavior/1624385-removeitem
    removeItem(item: cocoascript.UIDynamicItem):void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicitembehavior/1624400-items
    items(): cocoascript.UIDynamicItem;
    setItems(): void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicitembehavior/1624384-addangularvelocity
    addAngularVelocity_forItem(velocity: cocoascript.CGFloat, item: cocoascript.UIDynamicItem):void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicitembehavior/1624391-addlinearvelocity
    addLinearVelocity_forItem(velocity: cocoascript.CGPoint, item: cocoascript.UIDynamicItem):void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicitembehavior/1624386-allowsrotation
    allowsRotation(): cocoascript.BOOL;
    setAllowsRotation(): void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicitembehavior/1624396-angularresistance
    angularResistance(): cocoascript.CGFloat;
    setAngularResistance(): void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicitembehavior/1624389-angularvelocityforitem
    angularVelocityForItem(item: cocoascript.UIDynamicItem):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/uikit/uidynamicitembehavior/1624388-linearvelocityforitem
    linearVelocityForItem(item: cocoascript.UIDynamicItem):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/uikit/uidynamicitembehavior/1624395-density
    density(): cocoascript.CGFloat;
    setDensity(): void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicitembehavior/1624387-elasticity
    elasticity(): cocoascript.CGFloat;
    setElasticity(): void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicitembehavior/1624392-friction
    friction(): cocoascript.CGFloat;
    setFriction(): void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicitembehavior/1624399-resistance
    resistance(): cocoascript.CGFloat;
    setResistance(): void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicitembehavior/1624390-charge
    charge(): cocoascript.CGFloat;
    setCharge(): void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicitembehavior/1624394-anchored
    anchored(): cocoascript.BOOL;
    setAnchored(): void;
    //
    alloc():cocoascript.UIDynamicItemBehavior;
    //
    init():cocoascript.UIDynamicItemBehavior;
  }
}

declare const UIDynamicItemBehavior: cocoascript.UIDynamicItemBehavior;
