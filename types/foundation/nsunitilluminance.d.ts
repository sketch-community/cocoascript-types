declare namespace cocoascript {
  /**
   * A unit of measure for luminance.
   * doc://com.apple.documentation/documentation/foundation/nsunitilluminance
   */
  interface NSUnitIlluminance extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitilluminance/1823716-lux
    lux(): cocoascript.NSUnitIlluminance;
    setLux(): void;
    //
    alloc():cocoascript.NSUnitIlluminance;
    //
    init():cocoascript.NSUnitIlluminance;
  }
}

declare const NSUnitIlluminance: cocoascript.NSUnitIlluminance;
