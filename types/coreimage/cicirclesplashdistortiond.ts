declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/coreimage/cicirclesplashdistortion
 */
interface CICircleSplashDistortion extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cicirclesplashdistortion/3600118-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicirclesplashdistortion/3600119-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicirclesplashdistortion/3600120-radius
  radius(): number;
  setRadius(): void;
}
}

