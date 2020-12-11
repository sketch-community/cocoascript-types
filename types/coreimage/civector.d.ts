declare namespace cocoascript {
  /**
   * A container for coordinate values, direction vectors, matrices, and other non-scalar values, typically used in Core Image for filter parameters.
   * doc://com.apple.documentation/documentation/coreimage/civector
   */
  interface CIVector extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/civector/1437849-initwithvalues
    initWithValues_count(values: cocoascript.CGFloat, count: cocoascript.size_t):cocoascript.CIVector;
    // doc://com.apple.documentation/documentation/coreimage/civector/1437657-initwithx
    initWithX(x: cocoascript.CGFloat):cocoascript.CIVector;
    // doc://com.apple.documentation/documentation/coreimage/civector/1437865-initwithx
    initWithX_Y(x: cocoascript.CGFloat, y: cocoascript.CGFloat):cocoascript.CIVector;
    // doc://com.apple.documentation/documentation/coreimage/civector/1438056-initwithx
    initWithX_Y_Z(x: cocoascript.CGFloat, y: cocoascript.CGFloat, z: cocoascript.CGFloat):cocoascript.CIVector;
    // doc://com.apple.documentation/documentation/coreimage/civector/1438088-initwithx
    initWithX_Y_Z_W(x: cocoascript.CGFloat, y: cocoascript.CGFloat, z: cocoascript.CGFloat, w: cocoascript.CGFloat):cocoascript.CIVector;
    // doc://com.apple.documentation/documentation/coreimage/civector/1437938-initwithstring
    initWithString(representation: cocoascript.NSString):cocoascript.CIVector;
    // doc://com.apple.documentation/documentation/coreimage/civector/1438102-initwithcgaffinetransform
    initWithCGAffineTransform(r: cocoascript.CGAffineTransform):cocoascript.CIVector;
    // doc://com.apple.documentation/documentation/coreimage/civector/1438133-initwithcgpoint
    initWithCGPoint(p: cocoascript.CGPoint):cocoascript.CIVector;
    // doc://com.apple.documentation/documentation/coreimage/civector/1437644-initwithcgrect
    initWithCGRect(r: cocoascript.CGRect):cocoascript.CIVector;
    // doc://com.apple.documentation/documentation/coreimage/civector/1438207-valueatindex
    valueAtIndex(index: cocoascript.size_t):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/coreimage/civector/1438197-count
    count(): cocoascript.size_t;
    setCount(): void;
    // doc://com.apple.documentation/documentation/coreimage/civector/1437738-x
    X(): cocoascript.CGFloat;
    setX(): void;
    // doc://com.apple.documentation/documentation/coreimage/civector/1437843-y
    Y(): cocoascript.CGFloat;
    setY(): void;
    // doc://com.apple.documentation/documentation/coreimage/civector/1437627-z
    Z(): cocoascript.CGFloat;
    setZ(): void;
    // doc://com.apple.documentation/documentation/coreimage/civector/1438058-w
    W(): cocoascript.CGFloat;
    setW(): void;
    // doc://com.apple.documentation/documentation/coreimage/civector/1437752-stringrepresentation
    stringRepresentation(): cocoascript.NSString;
    setStringRepresentation(): void;
    // doc://com.apple.documentation/documentation/coreimage/civector/1438249-cgaffinetransformvalue
    CGAffineTransformValue(): cocoascript.CGAffineTransform;
    setCGAffineTransformValue(): void;
    // doc://com.apple.documentation/documentation/coreimage/civector/1437672-cgpointvalue
    CGPointValue(): cocoascript.CGPoint;
    setCGPointValue(): void;
    // doc://com.apple.documentation/documentation/coreimage/civector/1438108-cgrectvalue
    CGRectValue(): cocoascript.CGRect;
    setCGRectValue(): void;
    //
    alloc():cocoascript.CIVector;
    //
    init():cocoascript.CIVector;
  }
}

declare const CIVector: cocoascript.CIVector;
