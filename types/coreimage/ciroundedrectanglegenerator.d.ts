declare namespace cocoascript {
  /**
   * The properties you use to configure a rounded rectangle generator filter.
   * doc://com.apple.documentation/documentation/coreimage/ciroundedrectanglegenerator
   */
  interface CIRoundedRectangleGenerator extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciroundedrectanglegenerator/3338737-color
    color(): cocoascript.CIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciroundedrectanglegenerator/3338738-extent
    extent(): cocoascript.CGRect;
    setExtent(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciroundedrectanglegenerator/3338739-radius
    radius(): number;
    setRadius(): void;
  }
}
