declare namespace cocoascript {
  /**
   * A representation of a single layout constraint between two layers.
   * doc://com.apple.documentation/documentation/quartzcore/caconstraint
   */
  interface CAConstraint extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1522213-initwithattribute
    initWithAttribute_relativeTo_attribute_scale_offset(attr: cocoascript.CAConstraintAttribute, srcId: cocoascript.NSString, srcAttr: cocoascript.CAConstraintAttribute, m: cocoascript.CGFloat, c: cocoascript.CGFloat):cocoascript.CAConstraint;
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1522186-attribute
    attribute(): cocoascript.CAConstraintAttribute;
    setAttribute(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1522142-offset
    offset(): cocoascript.CGFloat;
    setOffset(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1521911-scale
    scale(): cocoascript.CGFloat;
    setScale(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1522385-sourceattribute
    sourceAttribute(): cocoascript.CAConstraintAttribute;
    setSourceAttribute(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1522224-sourcename
    sourceName(): cocoascript.NSString;
    setSourceName(): void;
    //
    alloc():cocoascript.CAConstraint;
    //
    init():cocoascript.CAConstraint;
  }
}

declare const CAConstraint: cocoascript.CAConstraint;
