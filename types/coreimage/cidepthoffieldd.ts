declare namespace cocoascript {
/**
 * The properties you use to configure a depth-of-field filter.
 * doc://com.apple.documentation/documentation/coreimage/cidepthoffield
 */
interface CIDepthOfField extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cidepthoffield/3228204-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cidepthoffield/3228205-point0
  point0(): cocoascript.CGPoint;
  setPoint0(): void;
  // doc://com.apple.documentation/documentation/coreimage/cidepthoffield/3228206-point1
  point1(): cocoascript.CGPoint;
  setPoint1(): void;
  // doc://com.apple.documentation/documentation/coreimage/cidepthoffield/3228207-radius
  radius(): number;
  setRadius(): void;
  // doc://com.apple.documentation/documentation/coreimage/cidepthoffield/3228208-saturation
  saturation(): number;
  setSaturation(): void;
  // doc://com.apple.documentation/documentation/coreimage/cidepthoffield/3228209-unsharpmaskintensity
  unsharpMaskIntensity(): number;
  setUnsharpMaskIntensity(): void;
  // doc://com.apple.documentation/documentation/coreimage/cidepthoffield/3228210-unsharpmaskradius
  unsharpMaskRadius(): number;
  setUnsharpMaskRadius(): void;
}
}

