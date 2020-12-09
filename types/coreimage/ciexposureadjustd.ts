declare namespace cocoascript {
/**
 * The properties you use to configure an exposure adjust filter.
 * doc://com.apple.documentation/documentation/coreimage/ciexposureadjust
 */
interface CIExposureAdjust extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/ciexposureadjust/3228253-ev
  EV(): number;
  setEV(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciexposureadjust/3228254-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
}
}

