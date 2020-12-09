declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/coreimage/citoruslensdistortion
 */
interface CITorusLensDistortion extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/citoruslensdistortion/3600197-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/citoruslensdistortion/3600198-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/citoruslensdistortion/3600199-radius
  radius(): number;
  setRadius(): void;
  // doc://com.apple.documentation/documentation/coreimage/citoruslensdistortion/3600200-refraction
  refraction(): number;
  setRefraction(): void;
  // doc://com.apple.documentation/documentation/coreimage/citoruslensdistortion/3600201-width
  width(): number;
  setWidth(): void;
}
}

