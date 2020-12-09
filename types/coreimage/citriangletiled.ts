declare namespace cocoascript {
/**
 * The properties you use to configure a triangle tile filter.
 * doc://com.apple.documentation/documentation/coreimage/citriangletile
 */
interface CITriangleTile extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/citriangletile/3228809-angle
  angle(): number;
  setAngle(): void;
  // doc://com.apple.documentation/documentation/coreimage/citriangletile/3228810-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/citriangletile/3228811-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/citriangletile/3228812-width
  width(): number;
  setWidth(): void;
}
}

