declare namespace cocoascript {
  /**
   * The width and height of a map region.
   * doc://com.apple.documentation/documentation/mapkit/mkcoordinatespan
   */
  interface MKCoordinateSpan {
    // doc://com.apple.documentation/documentation/mapkit/mkcoordinatespan/1452417-latitudedelta
    latitudeDelta(): cocoascript.CLLocationDegrees;
    setLatitudeDelta(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkcoordinatespan/1452573-longitudedelta
    longitudeDelta(): cocoascript.CLLocationDegrees;
    setLongitudeDelta(): void;
  }
}
