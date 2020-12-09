declare namespace cocoascript {
/**
 * The properties you use to configure a color controls filter.
 * doc://com.apple.documentation/documentation/coreimage/cicolorcontrols
 */
interface CIColorControls extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cicolorcontrols/3228124-brightness
  brightness(): number;
  setBrightness(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolorcontrols/3228125-contrast
  contrast(): number;
  setContrast(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolorcontrols/3228126-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolorcontrols/3228127-saturation
  saturation(): number;
  setSaturation(): void;
}
}

