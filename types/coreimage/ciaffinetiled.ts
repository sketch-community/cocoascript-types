declare namespace cocoascript {
/**
 * The properties you use to configure an affine tile filter.
 * doc://com.apple.documentation/documentation/coreimage/ciaffinetile
 */
interface CIAffineTile extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/ciaffinetile/3228057-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciaffinetile/3228058-transform
  transform(): cocoascript.CGAffineTransform;
  setTransform(): void;
}
}

