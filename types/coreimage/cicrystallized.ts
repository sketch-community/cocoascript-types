declare namespace cocoascript {
  /**
   * The properties you use to configure a crystalize filter.
   * doc://com.apple.documentation/documentation/coreimage/cicrystallize
   */
  interface CICrystallize extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicrystallize/3228200-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicrystallize/3228201-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicrystallize/3228202-radius
    radius(): number;
    setRadius(): void;
  }
}
