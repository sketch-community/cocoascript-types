declare namespace cocoascript {
/**
 * The properties you use to configure a morphology gradient filter.
 * doc://com.apple.documentation/documentation/coreimage/cimorphologygradient
 */
interface CIMorphologyGradient extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cimorphologygradient/3228574-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cimorphologygradient/3228575-radius
  radius(): number;
  setRadius(): void;
}
}

