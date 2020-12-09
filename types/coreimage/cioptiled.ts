declare namespace cocoascript {
/**
 * The properties you use to configure an optical tile filter.
 * doc://com.apple.documentation/documentation/coreimage/cioptile
 */
interface CIOpTile extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cioptile/3228599-angle
  angle(): number;
  setAngle(): void;
  // doc://com.apple.documentation/documentation/coreimage/cioptile/3228600-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/cioptile/3228601-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cioptile/3228602-scale
  scale(): number;
  setScale(): void;
  // doc://com.apple.documentation/documentation/coreimage/cioptile/3228603-width
  width(): number;
  setWidth(): void;
}
}

