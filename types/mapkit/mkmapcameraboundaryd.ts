declare namespace cocoascript {
/**
 * A boundary of an area within which the map's center must remain.
 * doc://com.apple.documentation/documentation/mapkit/mkmapcameraboundary
 */
interface MKMapCameraBoundary extends NSObject {
  // doc://com.apple.documentation/documentation/mapkit/mkmapcameraboundary/3141908-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.MKMapCameraBoundary;
  // doc://com.apple.documentation/documentation/mapkit/mkmapcameraboundary/3141909-initwithcoordinateregion
  initWithCoordinateRegion(region: cocoascript.MKCoordinateRegion):cocoascript.MKMapCameraBoundary;
  // doc://com.apple.documentation/documentation/mapkit/mkmapcameraboundary/3141910-initwithmaprect
  initWithMapRect(mapRect: cocoascript.MKMapRect):cocoascript.MKMapCameraBoundary;
  // doc://com.apple.documentation/documentation/mapkit/mkmapcameraboundary/3141911-maprect
  mapRect(): cocoascript.MKMapRect;
  setMapRect(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapcameraboundary/3141912-region
  region(): cocoascript.MKCoordinateRegion;
  setRegion(): void;
  // 
  alloc():cocoascript.MKMapCameraBoundary;
  // 
  init():cocoascript.MKMapCameraBoundary;
}
}
declare const MKMapCameraBoundary: cocoascript.MKMapCameraBoundary;

