declare namespace cocoascript {
/**
 * The properties you use to configure a mix filter.
 * doc://com.apple.documentation/documentation/coreimage/cimix
 */
interface CIMix extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cimix/3228565-amount
  amount(): number;
  setAmount(): void;
  // doc://com.apple.documentation/documentation/coreimage/cimix/3228566-backgroundimage
  backgroundImage(): cocoascript.CIImage;
  setBackgroundImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cimix/3228567-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
}
}

