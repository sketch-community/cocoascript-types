declare namespace cocoascript {
/**
 * The properties you use to configure a dot screen filter.
 * doc://com.apple.documentation/documentation/coreimage/cidotscreen
 */
interface CIDotScreen extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cidotscreen/3228231-angle
  angle(): number;
  setAngle(): void;
  // doc://com.apple.documentation/documentation/coreimage/cidotscreen/3228232-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/cidotscreen/3228233-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cidotscreen/3228234-sharpness
  sharpness(): number;
  setSharpness(): void;
  // doc://com.apple.documentation/documentation/coreimage/cidotscreen/3228235-width
  width(): number;
  setWidth(): void;
}
}

