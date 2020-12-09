declare namespace cocoascript {
/**
 * An abstract class that defines the common behavior shared by polygon and polyline overlays.  
 * doc://com.apple.documentation/documentation/mapkit/mkmultipoint
 */
interface MKMultiPoint extends MKShape {
  // doc://com.apple.documentation/documentation/mapkit/mkmultipoint/1452425-points
  points():cocoascript.MKMapPoint;
  // doc://com.apple.documentation/documentation/mapkit/mkmultipoint/1452179-pointcount
  pointCount(): cocoascript.NSUInteger;
  setPointCount(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmultipoint/3571236-locationatpointindex
  locationAtPointIndex(index: cocoascript.NSUInteger):cocoascript.CGFloat;
  // doc://com.apple.documentation/documentation/mapkit/mkmultipoint/3571237-locationsatpointindexes
  locationsAtPointIndexes(indexes: cocoascript.NSIndexSet):cocoascript.NSNumber;
  // doc://com.apple.documentation/documentation/mapkit/mkmultipoint/1451911-getcoordinates
  getCoordinates_range(coords: cocoascript.CLLocationCoordinate2D, range: cocoascript.NSRange):void;
  // 
  alloc():cocoascript.MKMultiPoint;
  // 
  init():cocoascript.MKMultiPoint;
}
}
declare const MKMultiPoint: cocoascript.MKMultiPoint;

