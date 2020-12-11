declare namespace cocoascript {
  /**
   * The properties you use to configure a sixfold rotated tile filter.
   * doc://com.apple.documentation/documentation/coreimage/cisixfoldrotatedtile
   */
  interface CISixfoldRotatedTile extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cisixfoldrotatedtile/3228718-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisixfoldrotatedtile/3228719-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisixfoldrotatedtile/3228720-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisixfoldrotatedtile/3228721-width
    width(): number;
    setWidth(): void;
  }
}
