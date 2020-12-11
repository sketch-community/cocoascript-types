declare namespace cocoascript {
  /**
   * The properties you use to configure a hue adjust filter.
   * doc://com.apple.documentation/documentation/coreimage/cihueadjust
   */
  interface CIHueAdjust extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cihueadjust/3228499-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihueadjust/3228500-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
