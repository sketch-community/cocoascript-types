declare namespace cocoascript {
/**
 * The properties you use to configure a color map filter.
 * doc://com.apple.documentation/documentation/coreimage/cicolormap
 */
interface CIColorMap extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cicolormap/3228157-gradientimage
  gradientImage(): cocoascript.CIImage;
  setGradientImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolormap/3228158-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
}
}

