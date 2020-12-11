declare namespace cocoascript {
  /**
   * The properties you use to configure a Gaussian gradient filter.
   * doc://com.apple.documentation/documentation/coreimage/cigaussiangradient
   */
  interface CIGaussianGradient extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cigaussiangradient/3228467-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cigaussiangradient/3228468-color0
    color0(): cocoascript.CIColor;
    setColor0(): void;
    // doc://com.apple.documentation/documentation/coreimage/cigaussiangradient/3228469-color1
    color1(): cocoascript.CIColor;
    setColor1(): void;
    // doc://com.apple.documentation/documentation/coreimage/cigaussiangradient/3228470-radius
    radius(): number;
    setRadius(): void;
  }
}
