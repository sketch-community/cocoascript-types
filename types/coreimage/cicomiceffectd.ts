declare namespace cocoascript {
  /**
   * The properties you use to configure a comic effect filter.
   * doc://com.apple.documentation/documentation/coreimage/cicomiceffect
   */
  interface CIComicEffect extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicomiceffect/3228180-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
