declare namespace cocoascript {
  /**
   * The properties you use to configure a motion blur filter.
   * doc://com.apple.documentation/documentation/coreimage/cimotionblur
   */
  interface CIMotionBlur extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimotionblur/3228591-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimotionblur/3228592-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimotionblur/3228593-radius
    radius(): number;
    setRadius(): void;
  }
}
