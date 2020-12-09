declare namespace cocoascript {
/**
 * The properties you use to configure a straighten filter.
 * doc://com.apple.documentation/documentation/coreimage/cistraighten
 */
interface CIStraighten extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cistraighten/3228758-angle
  angle(): number;
  setAngle(): void;
  // doc://com.apple.documentation/documentation/coreimage/cistraighten/3228759-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
}
}

