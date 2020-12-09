declare namespace cocoascript {
/**
 * The properties you use to configure a fourfold reflected tile filter.
 * doc://com.apple.documentation/documentation/coreimage/cifourfoldreflectedtile
 */
interface CIFourfoldReflectedTile extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cifourfoldreflectedtile/3228444-acuteangle
  acuteAngle(): number;
  setAcuteAngle(): void;
  // doc://com.apple.documentation/documentation/coreimage/cifourfoldreflectedtile/3228445-angle
  angle(): number;
  setAngle(): void;
  // doc://com.apple.documentation/documentation/coreimage/cifourfoldreflectedtile/3228446-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/cifourfoldreflectedtile/3228447-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cifourfoldreflectedtile/3228448-width
  width(): number;
  setWidth(): void;
}
}

