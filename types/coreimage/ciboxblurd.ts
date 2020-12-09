declare namespace cocoascript {
/**
 * The properties you use to configure a box blur filter.
 * doc://com.apple.documentation/documentation/coreimage/ciboxblur
 */
interface CIBoxBlur extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/ciboxblur/3228094-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciboxblur/3228095-radius
  radius(): number;
  setRadius(): void;
}
}

