declare namespace cocoascript {
/**
 * The properties you use to configure a tone curve filter.
 * doc://com.apple.documentation/documentation/coreimage/citonecurve
 */
interface CIToneCurve extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/citonecurve/3228792-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/citonecurve/3228793-point0
  point0(): cocoascript.CGPoint;
  setPoint0(): void;
  // doc://com.apple.documentation/documentation/coreimage/citonecurve/3228794-point1
  point1(): cocoascript.CGPoint;
  setPoint1(): void;
  // doc://com.apple.documentation/documentation/coreimage/citonecurve/3228795-point2
  point2(): cocoascript.CGPoint;
  setPoint2(): void;
  // doc://com.apple.documentation/documentation/coreimage/citonecurve/3228796-point3
  point3(): cocoascript.CGPoint;
  setPoint3(): void;
  // doc://com.apple.documentation/documentation/coreimage/citonecurve/3228797-point4
  point4(): cocoascript.CGPoint;
  setPoint4(): void;
}
}

