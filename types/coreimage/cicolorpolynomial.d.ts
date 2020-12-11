declare namespace cocoascript {
  /**
   * The properties you use to configure a color polynomial filter.
   * doc://com.apple.documentation/documentation/coreimage/cicolorpolynomial
   */
  interface CIColorPolynomial extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolorpolynomial/3228171-alphacoefficients
    alphaCoefficients(): cocoascript.CIVector;
    setAlphaCoefficients(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorpolynomial/3228172-bluecoefficients
    blueCoefficients(): cocoascript.CIVector;
    setBlueCoefficients(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorpolynomial/3228173-greencoefficients
    greenCoefficients(): cocoascript.CIVector;
    setGreenCoefficients(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorpolynomial/3228174-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorpolynomial/3228175-redcoefficients
    redCoefficients(): cocoascript.CIVector;
    setRedCoefficients(): void;
  }
}
