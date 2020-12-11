declare namespace cocoascript {
  /**
   * The properties you use to configure a sepia-tone filter.
   * doc://com.apple.documentation/documentation/coreimage/cisepiatone
   */
  interface CISepiaTone extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cisepiatone/3228702-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisepiatone/3228703-intensity
    intensity(): number;
    setIntensity(): void;
  }
}
