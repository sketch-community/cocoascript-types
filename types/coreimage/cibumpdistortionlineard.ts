declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/coreimage/cibumpdistortionlinear
 */
interface CIBumpDistortionLinear extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cibumpdistortionlinear/3600112-angle
  angle(): number;
  setAngle(): void;
  // doc://com.apple.documentation/documentation/coreimage/cibumpdistortionlinear/3600113-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/cibumpdistortionlinear/3600114-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cibumpdistortionlinear/3600115-radius
  radius(): number;
  setRadius(): void;
  // doc://com.apple.documentation/documentation/coreimage/cibumpdistortionlinear/3600116-scale
  scale(): number;
  setScale(): void;
}
}

