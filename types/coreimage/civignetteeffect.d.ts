declare namespace cocoascript {
  /**
   * The properties you use to configure a vignette-effect filter.
   * doc://com.apple.documentation/documentation/coreimage/civignetteeffect
   */
  interface CIVignetteEffect extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/civignetteeffect/3228830-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/civignetteeffect/3228831-falloff
    falloff(): number;
    setFalloff(): void;
    // doc://com.apple.documentation/documentation/coreimage/civignetteeffect/3228832-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/civignetteeffect/3228833-intensity
    intensity(): number;
    setIntensity(): void;
    // doc://com.apple.documentation/documentation/coreimage/civignetteeffect/3228834-radius
    radius(): number;
    setRadius(): void;
  }
}
