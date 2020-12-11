declare namespace cocoascript {
  /**
   * The properties you use to configure a depth-to-disparity filter.
   * doc://com.apple.documentation/documentation/coreimage/cidepthtodisparity
   */
  interface CIDepthToDisparity extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cidepthtodisparity/3228212-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
