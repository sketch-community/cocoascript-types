declare namespace cocoascript {
  /**
   * The properties you use to configure an X-ray filter.
   * doc://com.apple.documentation/documentation/coreimage/cixray
   */
  interface CIXRay extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cixray/3228839-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
