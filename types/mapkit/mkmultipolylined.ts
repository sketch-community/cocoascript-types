declare namespace cocoascript {
  /**
   * A collection of multipolyline shapes, each consisting of one or more connected line segments.
   * doc://com.apple.documentation/documentation/mapkit/mkmultipolyline
   */
  interface MKMultiPolyline extends MKShape {
    // doc://com.apple.documentation/documentation/mapkit/mkmultipolyline/3088841-initwithpolylines
    initWithPolylines(polylines: cocoascript.MKPolyline):cocoascript.MKMultiPolyline;
    // doc://com.apple.documentation/documentation/mapkit/mkmultipolyline/3088842-polylines
    polylines(): cocoascript.MKPolyline;
    setPolylines(): void;
    //
    alloc():cocoascript.MKMultiPolyline;
    //
    init():cocoascript.MKMultiPolyline;
  }
}

declare const MKMultiPolyline: cocoascript.MKMultiPolyline;
