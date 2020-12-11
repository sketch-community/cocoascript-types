declare namespace cocoascript {
  /**
   * The properties you use to configure a geometry adjustment filters that requires four coordinates.
   * doc://com.apple.documentation/documentation/coreimage/cifourcoordinategeometryfilter
   */
  interface CIFourCoordinateGeometryFilter extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cifourcoordinategeometryfilter/3338731-bottomleft
    bottomLeft(): cocoascript.CGPoint;
    setBottomLeft(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourcoordinategeometryfilter/3338732-bottomright
    bottomRight(): cocoascript.CGPoint;
    setBottomRight(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourcoordinategeometryfilter/3338733-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourcoordinategeometryfilter/3338734-topleft
    topLeft(): cocoascript.CGPoint;
    setTopLeft(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourcoordinategeometryfilter/3338735-topright
    topRight(): cocoascript.CGPoint;
    setTopRight(): void;
  }
}
