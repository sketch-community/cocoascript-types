declare namespace cocoascript {
/**
 * The properties you use to configure a Gaussian blur filter.
 * doc://com.apple.documentation/documentation/coreimage/cigaussianblur
 */
interface CIGaussianBlur extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cigaussianblur/3228464-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cigaussianblur/3228465-radius
  radius(): number;
  setRadius(): void;
}
}

