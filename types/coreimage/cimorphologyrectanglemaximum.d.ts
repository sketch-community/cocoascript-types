declare namespace cocoascript {
  /**
   * The properties you use to configure a morphology rectangle maximum filter.
   * doc://com.apple.documentation/documentation/coreimage/cimorphologyrectanglemaximum
   */
  interface CIMorphologyRectangleMaximum extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimorphologyrectanglemaximum/3228583-height
    height(): number;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimorphologyrectanglemaximum/3228584-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimorphologyrectanglemaximum/3228585-width
    width(): number;
    setWidth(): void;
  }
}
