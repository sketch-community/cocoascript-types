declare namespace cocoascript {
/**
 * A structured request to use when searching for points of interest.
 * doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest
 */
interface MKLocalPointsOfInterestRequest extends NSObject {
  // doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest/3564412-initwithcentercoordinate
  initWithCenterCoordinate_radius(coordinate: cocoascript.CLLocationCoordinate2D, radius: cocoascript.CLLocationDistance):cocoascript.MKLocalPointsOfInterestRequest;
  // doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest/3564413-initwithcoordinateregion
  initWithCoordinateRegion(region: cocoascript.MKCoordinateRegion):cocoascript.MKLocalPointsOfInterestRequest;
  // doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest/3564416-region
  region(): cocoascript.MKCoordinateRegion;
  setRegion(): void;
  // doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest/3564411-coordinate
  coordinate(): cocoascript.CLLocationCoordinate2D;
  setCoordinate(): void;
  // doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest/3564415-radius
  radius(): cocoascript.CLLocationDistance;
  setRadius(): void;
  // doc://com.apple.documentation/documentation/mapkit/mklocalpointsofinterestrequest/3564414-pointofinterestfilter
  pointOfInterestFilter(): cocoascript.MKPointOfInterestFilter;
  setPointOfInterestFilter(): void;
  // 
  alloc():cocoascript.MKLocalPointsOfInterestRequest;
  // 
  init():cocoascript.MKLocalPointsOfInterestRequest;
}
}
declare const MKLocalPointsOfInterestRequest: cocoascript.MKLocalPointsOfInterestRequest;

