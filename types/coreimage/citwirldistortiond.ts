declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/coreimage/citwirldistortion
 */
interface CITwirlDistortion extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/citwirldistortion/3600203-angle
  angle(): number;
  setAngle(): void;
  // doc://com.apple.documentation/documentation/coreimage/citwirldistortion/3600204-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/citwirldistortion/3600205-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/citwirldistortion/3600206-radius
  radius(): number;
  setRadius(): void;
}
}

