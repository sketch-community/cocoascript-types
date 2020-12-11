declare namespace cocoascript {
  /**
   * The visual representation for multiple polyline objects.
   * doc://com.apple.documentation/documentation/mapkit/mkmultipolylinerenderer
   */
  interface MKMultiPolylineRenderer extends MKOverlayPathRenderer {
    // doc://com.apple.documentation/documentation/mapkit/mkmultipolylinerenderer/3088844-initwithmultipolyline
    initWithMultiPolyline(multiPolyline: cocoascript.MKMultiPolyline):cocoascript.MKMultiPolylineRenderer;
    // doc://com.apple.documentation/documentation/mapkit/mkmultipolylinerenderer/3088845-multipolyline
    multiPolyline(): cocoascript.MKMultiPolyline;
    setMultiPolyline(): void;
    //
    alloc():cocoascript.MKMultiPolylineRenderer;
    //
    init():cocoascript.MKMultiPolylineRenderer;
  }
}

declare const MKMultiPolylineRenderer: cocoascript.MKMultiPolylineRenderer;
