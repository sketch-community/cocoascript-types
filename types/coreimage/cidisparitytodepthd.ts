declare namespace cocoascript {
/**
 * The properties you use to configure a disparity-to-depth filter.
 * doc://com.apple.documentation/documentation/coreimage/cidisparitytodepth
 */
interface CIDisparityToDepth extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cidisparitytodepth/3228222-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
}
}

