declare namespace cocoascript {
  /**
   * The properties you use to configure a zoom blur filter.
   * doc://com.apple.documentation/documentation/coreimage/cizoomblur
   */
  interface CIZoomBlur extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cizoomblur/3228841-amount
    amount(): number;
    setAmount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cizoomblur/3228842-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cizoomblur/3228843-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
