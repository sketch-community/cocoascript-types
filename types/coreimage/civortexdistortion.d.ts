declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/civortexdistortion
   */
  interface CIVortexDistortion extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/civortexdistortion/3600208-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/civortexdistortion/3600209-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/civortexdistortion/3600210-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/civortexdistortion/3600211-radius
    radius(): number;
    setRadius(): void;
  }
}
