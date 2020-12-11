declare namespace cocoascript {
  /**
   * The properties you use to configure a color invert filter.
   * doc://com.apple.documentation/documentation/coreimage/cicolorinvert
   */
  interface CIColorInvert extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolorinvert/3228155-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
