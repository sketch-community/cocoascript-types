declare namespace cocoascript {
  /**
   * The properties you use to configure a sixfold reflected tile filter.
   * doc://com.apple.documentation/documentation/coreimage/cisixfoldreflectedtile
   */
  interface CISixfoldReflectedTile extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cisixfoldreflectedtile/3228713-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisixfoldreflectedtile/3228714-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisixfoldreflectedtile/3228715-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisixfoldreflectedtile/3228716-width
    width(): number;
    setWidth(): void;
  }
}
