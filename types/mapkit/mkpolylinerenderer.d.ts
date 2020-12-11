declare namespace cocoascript {
  /**
   * The visual representation for any polyline overlay object.
   * doc://com.apple.documentation/documentation/mapkit/mkpolylinerenderer
   */
  interface MKPolylineRenderer extends MKOverlayPathRenderer {
    // doc://com.apple.documentation/documentation/mapkit/mkpolylinerenderer/1452074-initwithpolyline
    initWithPolyline(polyline: cocoascript.MKPolyline):cocoascript.MKPolylineRenderer;
    // doc://com.apple.documentation/documentation/mapkit/mkpolylinerenderer/1452465-polyline
    polyline(): cocoascript.MKPolyline;
    setPolyline(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkpolylinerenderer/3573875-strokestart
    strokeStart(): cocoascript.CGFloat;
    setStrokeStart(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkpolylinerenderer/3573874-strokeend
    strokeEnd(): cocoascript.CGFloat;
    setStrokeEnd(): void;
    //
    alloc():cocoascript.MKPolylineRenderer;
    //
    init():cocoascript.MKPolylineRenderer;
  }
}

declare const MKPolylineRenderer: cocoascript.MKPolylineRenderer;
