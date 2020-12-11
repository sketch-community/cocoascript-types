declare namespace cocoascript {
  /**
   * The properties you use to configure a fourfold rotated tile filter.
   * doc://com.apple.documentation/documentation/coreimage/cifourfoldrotatedtile
   */
  interface CIFourfoldRotatedTile extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldrotatedtile/3228450-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldrotatedtile/3228451-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldrotatedtile/3228452-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldrotatedtile/3228453-width
    width(): number;
    setWidth(): void;
  }
}
