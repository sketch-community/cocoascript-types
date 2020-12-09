declare namespace cocoascript {
/**
 * The properties you use to configure an eightfold reflected tile filter.
 * doc://com.apple.documentation/documentation/coreimage/cieightfoldreflectedtile
 */
interface CIEightfoldReflectedTile extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cieightfoldreflectedtile/3228248-angle
  angle(): number;
  setAngle(): void;
  // doc://com.apple.documentation/documentation/coreimage/cieightfoldreflectedtile/3228249-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/cieightfoldreflectedtile/3228250-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cieightfoldreflectedtile/3228251-width
  width(): number;
  setWidth(): void;
}
}

