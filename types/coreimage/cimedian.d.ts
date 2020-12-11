declare namespace cocoascript {
  /**
   * The properties you use to configure a median filter.
   * doc://com.apple.documentation/documentation/coreimage/cimedian
   */
  interface CIMedian extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimedian/3228557-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
