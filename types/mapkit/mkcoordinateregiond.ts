declare namespace cocoascript {
/**
 * A rectangular geographic region centered around a specific latitude and longitude.
 * doc://com.apple.documentation/documentation/mapkit/mkcoordinateregion
 */
interface MKCoordinateRegion {
  // doc://com.apple.documentation/documentation/mapkit/mkcoordinateregion/1452536-center
  center(): cocoascript.CLLocationCoordinate2D;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkcoordinateregion/1452293-span
  span(): cocoascript.MKCoordinateSpan;
  setSpan(): void;
}
}

