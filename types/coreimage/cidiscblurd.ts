declare namespace cocoascript {
/**
 * The properties you use to configure a disc blur filter.
 * doc://com.apple.documentation/documentation/coreimage/cidiscblur
 */
interface CIDiscBlur extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cidiscblur/3228214-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cidiscblur/3228215-radius
  radius(): number;
  setRadius(): void;
}
}

