declare namespace cocoascript {
/**
 * The properties you use to configure a transition filter.
 * doc://com.apple.documentation/documentation/coreimage/citransitionfilter
 */
interface CITransitionFilter extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/citransitionfilter/3228799-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/citransitionfilter/3228800-targetimage
  targetImage(): cocoascript.CIImage;
  setTargetImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/citransitionfilter/3228801-time
  time(): number;
  setTime(): void;
}
}

