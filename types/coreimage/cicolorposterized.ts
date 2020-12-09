declare namespace cocoascript {
/**
 * The properties you use to configure a color posterize filter.
 * doc://com.apple.documentation/documentation/coreimage/cicolorposterize
 */
interface CIColorPosterize extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cicolorposterize/3228177-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolorposterize/3228178-levels
  levels(): number;
  setLevels(): void;
}
}

