declare namespace cocoascript {
  /**
   * An object that provides physics-related capabilities and animations for its dynamic items, and provides the context for those animations.
   * doc://com.apple.documentation/documentation/uikit/uidynamicanimator
   */
  interface UIDynamicAnimator extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uidynamicanimator/1621203-initwithreferenceview
    initWithReferenceView(view: cocoascript.UIView):cocoascript.UIDynamicAnimator;
    // doc://com.apple.documentation/documentation/uikit/uidynamicanimator/1621196-initwithcollectionviewlayout
    initWithCollectionViewLayout(layout: cocoascript.UICollectionViewLayout):cocoascript.UIDynamicAnimator;
    // doc://com.apple.documentation/documentation/uikit/uidynamicanimator/1621191-itemsinrect
    itemsInRect(rect: cocoascript.CGRect):cocoascript.UIDynamicItem;
    // doc://com.apple.documentation/documentation/uikit/uidynamicanimator/1621189-addbehavior
    addBehavior(behavior: cocoascript.UIDynamicBehavior):void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicanimator/1621201-removebehavior
    removeBehavior(behavior: cocoascript.UIDynamicBehavior):void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicanimator/1621197-removeallbehaviors
    removeAllBehaviors():void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicanimator/1621199-delegate
    delegate(): cocoascript.UIDynamicAnimatorDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicanimator/1621202-elapsedtime
    elapsedTime(): cocoascript.NSTimeInterval;
    setElapsedTime(): void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicanimator/1621192-running
    running(): cocoascript.BOOL;
    setRunning(): void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicanimator/1621198-behaviors
    behaviors(): cocoascript.UIDynamicBehavior;
    setBehaviors(): void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicanimator/1621200-referenceview
    referenceView(): cocoascript.UIView;
    setReferenceView(): void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicanimator/1621190-updateitemusingcurrentstate
    updateItemUsingCurrentState(item: cocoascript.UIDynamicItem):void;
    // doc://com.apple.documentation/documentation/uikit/uidynamicanimator/1621204-layoutattributesforcellatindexpa
    layoutAttributesForCellAtIndexPath(indexPath: cocoascript.NSIndexPath):cocoascript.UICollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/uikit/uidynamicanimator/1621195-layoutattributesfordecorationvie
    layoutAttributesForDecorationViewOfKind_atIndexPath(decorationViewKind: cocoascript.NSString, indexPath: cocoascript.NSIndexPath):cocoascript.UICollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/uikit/uidynamicanimator/1621186-layoutattributesforsupplementary
    layoutAttributesForSupplementaryViewOfKind_atIndexPath(kind: cocoascript.NSString, indexPath: cocoascript.NSIndexPath):cocoascript.UICollectionViewLayoutAttributes;
    //
    alloc():cocoascript.UIDynamicAnimator;
    //
    init():cocoascript.UIDynamicAnimator;
  }
}

declare const UIDynamicAnimator: cocoascript.UIDynamicAnimator;
