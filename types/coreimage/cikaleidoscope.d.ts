declare namespace cocoascript {
  /**
   * The properties you use to configure a kaleidoscope filter.
   * doc://com.apple.documentation/documentation/coreimage/cikaleidoscope
   */
  interface CIKaleidoscope extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cikaleidoscope/3228508-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cikaleidoscope/3228509-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cikaleidoscope/3228510-count
    count(): cocoascript.NSInteger;
    setCount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cikaleidoscope/3228511-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
