declare namespace cocoascript {
  /**
   * The properties you use to configure a radial gradient filter.
   * doc://com.apple.documentation/documentation/coreimage/ciradialgradient
   */
  interface CIRadialGradient extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciradialgradient/3228685-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciradialgradient/3228686-color0
    color0(): cocoascript.CIColor;
    setColor0(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciradialgradient/3228687-color1
    color1(): cocoascript.CIColor;
    setColor1(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciradialgradient/3228688-radius0
    radius0(): number;
    setRadius0(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciradialgradient/3228689-radius1
    radius1(): number;
    setRadius1(): void;
  }
}
