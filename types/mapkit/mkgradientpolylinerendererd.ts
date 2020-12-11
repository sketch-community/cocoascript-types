declare namespace cocoascript {
  /**
   * The visual representation for any polyline overlay object with a gradient.
   * doc://com.apple.documentation/documentation/mapkit/mkgradientpolylinerenderer
   */
  interface MKGradientPolylineRenderer extends MKPolylineRenderer {
    // doc://com.apple.documentation/documentation/mapkit/mkgradientpolylinerenderer/3571235-setcolors
    setColors_atLocations(colors: cocoascript.UIColor, locations: cocoascript.NSNumber):void;
    // doc://com.apple.documentation/documentation/mapkit/mkgradientpolylinerenderer/3571233-colors
    colors(): cocoascript.UIColor;
    setColors(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkgradientpolylinerenderer/3571234-locations
    locations(): cocoascript.NSNumber;
    setLocations(): void;
    //
    alloc():cocoascript.MKGradientPolylineRenderer;
    //
    init():cocoascript.MKGradientPolylineRenderer;
  }
}

declare const MKGradientPolylineRenderer: cocoascript.MKGradientPolylineRenderer;
