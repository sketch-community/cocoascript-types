declare namespace cocoascript {
  /**
   * The properties you use to configure a smooth linear gradient filter.
   * doc://com.apple.documentation/documentation/coreimage/cismoothlineargradient
   */
  interface CISmoothLinearGradient extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cismoothlineargradient/3228723-color0
    color0(): cocoascript.CIColor;
    setColor0(): void;
    // doc://com.apple.documentation/documentation/coreimage/cismoothlineargradient/3228724-color1
    color1(): cocoascript.CIColor;
    setColor1(): void;
    // doc://com.apple.documentation/documentation/coreimage/cismoothlineargradient/3228725-point0
    point0(): cocoascript.CGPoint;
    setPoint0(): void;
    // doc://com.apple.documentation/documentation/coreimage/cismoothlineargradient/3228726-point1
    point1(): cocoascript.CGPoint;
    setPoint1(): void;
  }
}
