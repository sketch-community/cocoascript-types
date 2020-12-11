declare namespace cocoascript {
  /**
   * A closed polygon shape.
   * doc://com.apple.documentation/documentation/mapkit/mkpolygon
   */
  interface MKPolygon extends MKMultiPoint {
    // doc://com.apple.documentation/documentation/mapkit/mkpolygon/1452521-interiorpolygons
    interiorPolygons(): cocoascript.MKPolygon;
    setInteriorPolygons(): void;
    //
    alloc():cocoascript.MKPolygon;
    //
    init():cocoascript.MKPolygon;
  }
}

declare const MKPolygon: cocoascript.MKPolygon;
