declare namespace cocoascript {
/**
 * The properties you use to configure a height-field-from-mask filter.
 * doc://com.apple.documentation/documentation/coreimage/ciheightfieldfrommask
 */
interface CIHeightFieldFromMask extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/ciheightfieldfrommask/3228487-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciheightfieldfrommask/3228488-radius
  radius(): number;
  setRadius(): void;
}
}

