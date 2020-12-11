declare namespace cocoascript {
  /**
   * The properties you use to configure a Gabor gradients filter.
   * doc://com.apple.documentation/documentation/coreimage/cigaborgradients
   */
  interface CIGaborGradients extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cigaborgradients/3325514-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
