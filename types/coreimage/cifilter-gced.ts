declare namespace cocoascript {
/**
 * The properties you use to configure a Core Image filter.
 * doc://com.apple.documentation/documentation/coreimage/cifilter-gce
 */
interface CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cifilter/3228048-outputimage
  outputImage(): cocoascript.CIImage;
  setOutputImage(): void;
}
}

