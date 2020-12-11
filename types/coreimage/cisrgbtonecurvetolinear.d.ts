declare namespace cocoascript {
  /**
   * The properties you use to configure an sRGB-to-linear filter.
   * doc://com.apple.documentation/documentation/coreimage/cisrgbtonecurvetolinear
   */
  interface CISRGBToneCurveToLinear extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cisrgbtonecurvetolinear/3228698-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
