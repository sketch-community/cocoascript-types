declare namespace cocoascript {
/**
 * The properties you use to configure a color cross-polynomial filter.
 * doc://com.apple.documentation/documentation/coreimage/cicolorcrosspolynomial
 */
interface CIColorCrossPolynomial extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cicolorcrosspolynomial/3228129-bluecoefficients
  blueCoefficients(): cocoascript.CIVector;
  setBlueCoefficients(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolorcrosspolynomial/3228130-greencoefficients
  greenCoefficients(): cocoascript.CIVector;
  setGreenCoefficients(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolorcrosspolynomial/3228131-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolorcrosspolynomial/3228132-redcoefficients
  redCoefficients(): cocoascript.CIVector;
  setRedCoefficients(): void;
}
}

