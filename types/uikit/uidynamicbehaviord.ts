declare namespace cocoascript {
  /**
   * An object that confers a behavioral configuration on one or more dynamic items, for their participation in 2D animation.
   * doc://com.apple.documentation/documentation/uikit/uidynamicbehavior
   */
  interface UIDynamicBehavior extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uidynamicbehavior/1618499-action
    action(): void;
    setAction(): void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicbehavior/1618496-addchildbehavior
    addChildBehavior(behavior: cocoascript.UIDynamicBehavior):void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicbehavior/1618482-childbehaviors
    childBehaviors(): cocoascript.UIDynamicBehavior;
    setChildBehaviors(): void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicbehavior/1618486-removechildbehavior
    removeChildBehavior(behavior: cocoascript.UIDynamicBehavior):void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicbehavior/1618501-dynamicanimator
    dynamicAnimator(): cocoascript.UIDynamicAnimator;
    setDynamicAnimator(): void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicbehavior/1618488-willmovetoanimator
    willMoveToAnimator(dynamicAnimator: cocoascript.UIDynamicAnimator):void;
    //
    alloc():cocoascript.UIDynamicBehavior;
    //
    init():cocoascript.UIDynamicBehavior;
  }
}

declare const UIDynamicBehavior: cocoascript.UIDynamicBehavior;
