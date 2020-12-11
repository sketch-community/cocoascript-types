declare namespace cocoascript {
  /**
   * The properties you use to configure a stripes generator filter.
   * doc://com.apple.documentation/documentation/coreimage/cistripesgenerator
   */
  interface CIStripesGenerator extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cistripesgenerator/3228761-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistripesgenerator/3228762-color0
    color0(): cocoascript.CIColor;
    setColor0(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistripesgenerator/3228763-color1
    color1(): cocoascript.CIColor;
    setColor1(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistripesgenerator/3228764-sharpness
    sharpness(): number;
    setSharpness(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistripesgenerator/3228765-width
    width(): number;
    setWidth(): void;
  }
}
