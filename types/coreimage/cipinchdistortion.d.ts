declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cipinchdistortion
   */
  interface CIPinchDistortion extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cipinchdistortion/3600187-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipinchdistortion/3600188-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipinchdistortion/3600189-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipinchdistortion/3600190-scale
    scale(): number;
    setScale(): void;
  }
}
