declare namespace cocoascript {
  /**
   * The relationship between two user interface objects that must be satisfied by the constraint-based layout system.
   * doc://com.apple.documentation/documentation/uikit/nslayoutconstraint
   */
  interface NSLayoutConstraint extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/nslayoutconstraint/1527000-active
    active(): cocoascript.BOOL;
    setActive(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutconstraint/1526860-firstitem
    firstItem(): cocoascript.id;
    setFirstItem(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutconstraint/1525204-firstattribute
    firstAttribute(): cocoascript.NSLayoutAttribute;
    setFirstAttribute(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutconstraint/1526549-relation
    relation(): cocoascript.NSLayoutRelation;
    setRelation(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutconstraint/1526868-seconditem
    secondItem(): cocoascript.id;
    setSecondItem(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutconstraint/1526941-secondattribute
    secondAttribute(): cocoascript.NSLayoutAttribute;
    setSecondAttribute(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutconstraint/1526920-multiplier
    multiplier(): cocoascript.CGFloat;
    setMultiplier(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutconstraint/1526928-constant
    constant(): cocoascript.CGFloat;
    setConstant(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutconstraint/1644261-firstanchor
    firstAnchor(): cocoascript.NSLayoutAnchor;
    setFirstAnchor(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutconstraint/1644260-secondanchor
    secondAnchor(): cocoascript.NSLayoutAnchor;
    setSecondAnchor(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutconstraint/1526946-priority
    priority(): cocoascript.UILayoutPriority;
    setPriority(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutconstraint/1526879-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/uikit/nslayoutconstraint/1525647-shouldbearchived
    shouldBeArchived(): cocoascript.BOOL;
    setShouldBeArchived(): void;
    //
    alloc():cocoascript.NSLayoutConstraint;
    //
    init():cocoascript.NSLayoutConstraint;
  }
}

declare const NSLayoutConstraint: cocoascript.NSLayoutConstraint;
