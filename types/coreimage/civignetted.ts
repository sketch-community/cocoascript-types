declare namespace cocoascript {
/**
 * The properties you use to configure a vignette filter.
 * doc://com.apple.documentation/documentation/coreimage/civignette
 */
interface CIVignette extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/civignette/3228826-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/civignette/3228827-intensity
  intensity(): number;
  setIntensity(): void;
  // doc://com.apple.documentation/documentation/coreimage/civignette/3228828-radius
  radius(): number;
  setRadius(): void;
}
}

