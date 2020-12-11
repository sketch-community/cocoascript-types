declare namespace cocoascript {
  /**
   * The properties you use to configure a white-point adjust filter.
   * doc://com.apple.documentation/documentation/coreimage/ciwhitepointadjust
   */
  interface CIWhitePointAdjust extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciwhitepointadjust/3228836-color
    color(): cocoascript.CIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciwhitepointadjust/3228837-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
