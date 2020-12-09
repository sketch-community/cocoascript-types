declare namespace cocoascript {
/**
 * The properties you use to configure a masked variable blur filter.
 * doc://com.apple.documentation/documentation/coreimage/cimaskedvariableblur
 */
interface CIMaskedVariableBlur extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cimaskedvariableblur/3228551-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cimaskedvariableblur/3228552-mask
  mask(): cocoascript.CIImage;
  setMask(): void;
  // doc://com.apple.documentation/documentation/coreimage/cimaskedvariableblur/3228553-radius
  radius(): number;
  setRadius(): void;
}
}

