declare namespace cocoascript {
  /**
   * The properties you use to configure a document enhancer filter.
   * doc://com.apple.documentation/documentation/coreimage/cidocumentenhancer
   */
  interface CIDocumentEnhancer extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cidocumentenhancer/3228228-amount
    amount(): number;
    setAmount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidocumentenhancer/3228229-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
