declare namespace cocoascript {
  /**
   * The properties you use to configure a dither filter.
   * doc://com.apple.documentation/documentation/coreimage/cidither
   */
  interface CIDither extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cidither/3228225-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidither/3228226-intensity
    intensity(): number;
    setIntensity(): void;
  }
}
