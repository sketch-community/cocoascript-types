declare namespace cocoascript {
/**
 * The properties you use to configure a mask-to-alpha filter.
 * doc://com.apple.documentation/documentation/coreimage/cimasktoalpha
 */
interface CIMaskToAlpha extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cimasktoalpha/3228549-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
}
}

