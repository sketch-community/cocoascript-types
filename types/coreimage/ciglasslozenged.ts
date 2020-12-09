declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/coreimage/ciglasslozenge
 */
interface CIGlassLozenge extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/ciglasslozenge/3600161-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciglasslozenge/3600162-point0
  point0(): cocoascript.CGPoint;
  setPoint0(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciglasslozenge/3600163-point1
  point1(): cocoascript.CGPoint;
  setPoint1(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciglasslozenge/3600164-radius
  radius(): number;
  setRadius(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciglasslozenge/3600165-refraction
  refraction(): number;
  setRefraction(): void;
}
}

