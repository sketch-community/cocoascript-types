declare namespace cocoascript {
  /**
   * The properties you use to configure a gamma adjust filter.
   * doc://com.apple.documentation/documentation/coreimage/cigammaadjust
   */
  interface CIGammaAdjust extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cigammaadjust/3228461-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cigammaadjust/3228462-power
    power(): number;
    setPower(): void;
  }
}
