declare namespace cocoascript {
  /**
   * The properties you use to configure a linear-to-sRGB filter.
   * doc://com.apple.documentation/documentation/coreimage/cilineartosrgbtonecurve
   */
  interface CILinearToSRGBToneCurve extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cilineartosrgbtonecurve/3228547-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
