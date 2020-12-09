declare namespace cocoascript {
/**
 * The properties you use to configure a parallelogram tile filter.
 * doc://com.apple.documentation/documentation/coreimage/ciparallelogramtile
 */
interface CIParallelogramTile extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/ciparallelogramtile/3228640-acuteangle
  acuteAngle(): number;
  setAcuteAngle(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciparallelogramtile/3228641-angle
  angle(): number;
  setAngle(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciparallelogramtile/3228642-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciparallelogramtile/3228643-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciparallelogramtile/3228644-width
  width(): number;
  setWidth(): void;
}
}

