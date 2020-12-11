declare namespace cocoascript {
  /**
   * An interface for associating content with a specific map region.
   * doc://com.apple.documentation/documentation/mapkit/mkoverlay
   */
  interface MKOverlay extends MKAnnotation {
    // doc://com.apple.documentation/documentation/mapkit/mkoverlay/1452113-coordinate
    coordinate(): cocoascript.CLLocationCoordinate2D;
    setCoordinate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlay/1452791-boundingmaprect
    boundingMapRect(): cocoascript.MKMapRect;
    setBoundingMapRect(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlay/1452138-intersectsmaprect
    intersectsMapRect(mapRect: cocoascript.MKMapRect):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlay/1452399-canreplacemapcontent
    canReplaceMapContent():cocoascript.BOOL;
  }
}
