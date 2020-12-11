declare namespace cocoascript {
  /**
   * The properties you use to configure a convolution filter.
   * doc://com.apple.documentation/documentation/coreimage/ciconvolution
   */
  interface CIConvolution extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciconvolution/3228185-bias
    bias(): number;
    setBias(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciconvolution/3228186-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciconvolution/3228187-weights
    weights(): cocoascript.CIVector;
    setWeights(): void;
  }
}
