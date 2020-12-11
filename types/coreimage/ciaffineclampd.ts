declare namespace cocoascript {
  /**
   * The properties you use to configure a affine clamp filter.
   * doc://com.apple.documentation/documentation/coreimage/ciaffineclamp
   */
  interface CIAffineClamp extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciaffineclamp/3228054-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciaffineclamp/3228055-transform
    transform(): cocoascript.CGAffineTransform;
    setTransform(): void;
  }
}
