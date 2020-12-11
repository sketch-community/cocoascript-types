declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cicircularwrap
   */
  interface CICircularWrap extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicircularwrap/3600122-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicircularwrap/3600123-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicircularwrap/3600124-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicircularwrap/3600125-radius
    radius(): number;
    setRadius(): void;
  }
}
