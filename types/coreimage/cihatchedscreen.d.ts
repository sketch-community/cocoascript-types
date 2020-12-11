declare namespace cocoascript {
  /**
   * The properties you use to configure a hatched screen filter.
   * doc://com.apple.documentation/documentation/coreimage/cihatchedscreen
   */
  interface CIHatchedScreen extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cihatchedscreen/3228481-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihatchedscreen/3228482-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihatchedscreen/3228483-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihatchedscreen/3228484-sharpness
    sharpness(): number;
    setSharpness(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihatchedscreen/3228485-width
    width(): number;
    setWidth(): void;
  }
}
