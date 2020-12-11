declare namespace cocoascript {
  /**
   * The properties you use to configure a glide reflected tile filter.
   * doc://com.apple.documentation/documentation/coreimage/ciglidereflectedtile
   */
  interface CIGlideReflectedTile extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciglidereflectedtile/3228472-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciglidereflectedtile/3228473-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciglidereflectedtile/3228474-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciglidereflectedtile/3228475-width
    width(): number;
    setWidth(): void;
  }
}
