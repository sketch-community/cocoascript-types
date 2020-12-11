declare namespace cocoascript {
  /**
   * The properties you use to configure a linear gradient filter.
   * doc://com.apple.documentation/documentation/coreimage/cilineargradient
   */
  interface CILinearGradient extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cilineargradient/3228542-color0
    color0(): cocoascript.CIColor;
    setColor0(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilineargradient/3228543-color1
    color1(): cocoascript.CIColor;
    setColor1(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilineargradient/3228544-point0
    point0(): cocoascript.CGPoint;
    setPoint0(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilineargradient/3228545-point1
    point1(): cocoascript.CGPoint;
    setPoint1(): void;
  }
}
