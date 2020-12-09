declare namespace cocoascript {
/**
 * The properties you use to configure a gloom filter.
 * doc://com.apple.documentation/documentation/coreimage/cigloom
 */
interface CIGloom extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cigloom/3228477-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cigloom/3228478-intensity
  intensity(): number;
  setIntensity(): void;
  // doc://com.apple.documentation/documentation/coreimage/cigloom/3228479-radius
  radius(): number;
  setRadius(): void;
}
}

