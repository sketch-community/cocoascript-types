declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/coreimage/ciholedistortion
 */
interface CIHoleDistortion extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/ciholedistortion/3600167-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciholedistortion/3600168-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciholedistortion/3600169-radius
  radius(): number;
  setRadius(): void;
}
}

