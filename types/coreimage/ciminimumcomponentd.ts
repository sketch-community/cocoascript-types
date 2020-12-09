declare namespace cocoascript {
/**
 * The properties you use to configure a minimum component filter.
 * doc://com.apple.documentation/documentation/coreimage/ciminimumcomponent
 */
interface CIMinimumComponent extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/ciminimumcomponent/3228563-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
}
}

