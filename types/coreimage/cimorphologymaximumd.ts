declare namespace cocoascript {
  /**
   * The properties you use to configure a morphology maximum filter.
   * doc://com.apple.documentation/documentation/coreimage/cimorphologymaximum
   */
  interface CIMorphologyMaximum extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimorphologymaximum/3228577-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimorphologymaximum/3228578-radius
    radius(): number;
    setRadius(): void;
  }
}
