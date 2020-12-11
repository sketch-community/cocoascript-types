declare namespace cocoascript {
  /**
   * Provides the visual representation for an
   * doc://com.apple.documentation/documentation/mapkit/mkpolylineview
   */
  interface MKPolylineView extends MKOverlayPathView {
    // doc://com.apple.documentation/documentation/mapkit/mkpolylineview/1618189-initwithpolyline
    initWithPolyline(polyline: cocoascript.MKPolyline):cocoascript.MKPolylineView;
    // doc://com.apple.documentation/documentation/mapkit/mkpolylineview/1618188-polyline
    polyline(): cocoascript.MKPolyline;
    setPolyline(): void;
    //
    alloc():cocoascript.MKPolylineView;
    //
    init():cocoascript.MKPolylineView;
  }
}

declare const MKPolylineView: cocoascript.MKPolylineView;
