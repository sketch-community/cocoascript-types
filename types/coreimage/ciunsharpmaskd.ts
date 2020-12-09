declare namespace cocoascript {
/**
 * The properties you use to configure an unsharp mask filter.
 * doc://com.apple.documentation/documentation/coreimage/ciunsharpmask
 */
interface CIUnsharpMask extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/ciunsharpmask/3228819-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciunsharpmask/3228820-intensity
  intensity(): number;
  setIntensity(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciunsharpmask/3228821-radius
  radius(): number;
  setRadius(): void;
}
}

