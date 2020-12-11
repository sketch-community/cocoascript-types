declare namespace cocoascript {
  /**
   * Information about a rectangular region detected in a still or video image.
   * doc://com.apple.documentation/documentation/coreimage/cirectanglefeature
   */
  interface CIRectangleFeature extends CIFeature {
    // doc://com.apple.documentation/documentation/coreimage/cirectanglefeature/1438024-bounds
    bounds(): cocoascript.CGRect;
    setBounds(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirectanglefeature/1437878-bottomleft
    bottomLeft(): cocoascript.CGPoint;
    setBottomLeft(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirectanglefeature/1437888-bottomright
    bottomRight(): cocoascript.CGPoint;
    setBottomRight(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirectanglefeature/1437951-topleft
    topLeft(): cocoascript.CGPoint;
    setTopLeft(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirectanglefeature/1438071-topright
    topRight(): cocoascript.CGPoint;
    setTopRight(): void;
    //
    alloc():cocoascript.CIRectangleFeature;
    //
    init():cocoascript.CIRectangleFeature;
  }
}

declare const CIRectangleFeature: cocoascript.CIRectangleFeature;
