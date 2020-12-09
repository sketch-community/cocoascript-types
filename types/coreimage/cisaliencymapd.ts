declare namespace cocoascript {
/**
 * The properties you use to configure a saliency map filter.
 * doc://com.apple.documentation/documentation/coreimage/cisaliencymap
 */
interface CISaliencyMap extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cisaliencymap/3228700-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
}
}

