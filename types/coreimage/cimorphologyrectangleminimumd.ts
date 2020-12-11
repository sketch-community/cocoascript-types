declare namespace cocoascript {
  /**
   * The properties you use to configure a morphology rectangle minimum filter.
   * doc://com.apple.documentation/documentation/coreimage/cimorphologyrectangleminimum
   */
  interface CIMorphologyRectangleMinimum extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimorphologyrectangleminimum/3228587-height
    height(): number;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimorphologyrectangleminimum/3228588-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimorphologyrectangleminimum/3228589-width
    width(): number;
    setWidth(): void;
  }
}
