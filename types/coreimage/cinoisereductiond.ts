declare namespace cocoascript {
  /**
   * The properties you use to configure a noise reduction filter.
   * doc://com.apple.documentation/documentation/coreimage/cinoisereduction
   */
  interface CINoiseReduction extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cinoisereduction/3228595-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cinoisereduction/3228596-noiselevel
    noiseLevel(): number;
    setNoiseLevel(): void;
    // doc://com.apple.documentation/documentation/coreimage/cinoisereduction/3228597-sharpness
    sharpness(): number;
    setSharpness(): void;
  }
}
