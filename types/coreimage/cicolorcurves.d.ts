declare namespace cocoascript {
  /**
   * The properties you use to configure a color curves filter.
   * doc://com.apple.documentation/documentation/coreimage/cicolorcurves
   */
  interface CIColorCurves extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolorcurves/3228150-colorspace
    colorSpace(): cocoascript.CGColorSpaceRef;
    setColorSpace(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcurves/3228151-curvesdata
    curvesData(): cocoascript.NSData;
    setCurvesData(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcurves/3228152-curvesdomain
    curvesDomain(): cocoascript.CIVector;
    setCurvesDomain(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcurves/3228153-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
