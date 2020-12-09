declare namespace cocoascript {
/**
 * The properties you use to configure a twelvefold reflected tile filter.
 * doc://com.apple.documentation/documentation/coreimage/citwelvefoldreflectedtile
 */
interface CITwelvefoldReflectedTile extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/citwelvefoldreflectedtile/3228814-angle
  angle(): number;
  setAngle(): void;
  // doc://com.apple.documentation/documentation/coreimage/citwelvefoldreflectedtile/3228815-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/citwelvefoldreflectedtile/3228816-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/citwelvefoldreflectedtile/3228817-width
  width(): number;
  setWidth(): void;
}
}

