declare namespace cocoascript {
  /**
   * The properties you use to configure a line screen filter.
   * doc://com.apple.documentation/documentation/coreimage/cilinescreen
   */
  interface CILineScreen extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cilinescreen/3228536-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilinescreen/3228537-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilinescreen/3228538-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilinescreen/3228539-sharpness
    sharpness(): number;
    setSharpness(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilinescreen/3228540-width
    width(): number;
    setWidth(): void;
  }
}
