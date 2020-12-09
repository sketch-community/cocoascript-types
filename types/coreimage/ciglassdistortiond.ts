declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/coreimage/ciglassdistortion
 */
interface CIGlassDistortion extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/ciglassdistortion/3600156-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciglassdistortion/3600157-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciglassdistortion/3600158-scale
  scale(): number;
  setScale(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciglassdistortion/3600159-textureimage
  textureImage(): cocoascript.CIImage;
  setTextureImage(): void;
}
}

