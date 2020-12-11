declare namespace cocoascript {
  /**
   * The properties you use to configure a blend with mask filter.
   * doc://com.apple.documentation/documentation/coreimage/ciblendwithmask
   */
  interface CIBlendWithMask extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciblendwithmask/3228080-backgroundimage
    backgroundImage(): cocoascript.CIImage;
    setBackgroundImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendwithmask/3228081-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendwithmask/3228082-maskimage
    maskImage(): cocoascript.CIImage;
    setMaskImage(): void;
  }
}
