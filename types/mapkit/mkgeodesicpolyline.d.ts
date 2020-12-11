declare namespace cocoascript {
  /**
   * A line-based shape that follows the contours of the Earth to create the shortest path between the specified points.
   * doc://com.apple.documentation/documentation/mapkit/mkgeodesicpolyline
   */
  interface MKGeodesicPolyline extends MKPolyline {
    //
    alloc():cocoascript.MKGeodesicPolyline;
    //
    init():cocoascript.MKGeodesicPolyline;
  }
}

declare const MKGeodesicPolyline: cocoascript.MKGeodesicPolyline;
