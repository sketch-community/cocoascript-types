declare namespace cocoascript {
/**
 * The properties you use to configure a Lab Delta E filter.
 * doc://com.apple.documentation/documentation/coreimage/cilabdeltae
 */
interface CILabDeltaE extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cilabdeltae/3228513-image2
  image2(): cocoascript.CIImage;
  setImage2(): void;
  // doc://com.apple.documentation/documentation/coreimage/cilabdeltae/3228514-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
}
}

