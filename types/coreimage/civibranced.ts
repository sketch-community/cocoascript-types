declare namespace cocoascript {
  /**
   * The properties you use to configure a vibrance filter.
   * doc://com.apple.documentation/documentation/coreimage/civibrance
   */
  interface CIVibrance extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/civibrance/3228823-amount
    amount(): number;
    setAmount(): void;
    // doc://com.apple.documentation/documentation/coreimage/civibrance/3228824-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
