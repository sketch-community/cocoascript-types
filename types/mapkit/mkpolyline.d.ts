declare namespace cocoascript {
  /**
   * A shape consisting of one or more connected line segments.
   * doc://com.apple.documentation/documentation/mapkit/mkpolyline
   */
  interface MKPolyline extends MKMultiPoint {
    //
    alloc():cocoascript.MKPolyline;
    //
    init():cocoascript.MKPolyline;
  }
}

declare const MKPolyline: cocoascript.MKPolyline;
