declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cibumpdistortion
   */
  interface CIBumpDistortion extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cibumpdistortion/3600107-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibumpdistortion/3600108-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibumpdistortion/3600109-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibumpdistortion/3600110-scale
    scale(): number;
    setScale(): void;
  }
}
