declare namespace cocoascript {
  /**
   * The properties you use to configure a morphology minimum filter.
   * doc://com.apple.documentation/documentation/coreimage/cimorphologyminimum
   */
  interface CIMorphologyMinimum extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimorphologyminimum/3228580-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimorphologyminimum/3228581-radius
    radius(): number;
    setRadius(): void;
  }
}
