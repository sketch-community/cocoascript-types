declare namespace cocoascript {
/**
 * A circular overlay with a configurable radius and centered on a specific geographic coordinate. 
 * doc://com.apple.documentation/documentation/mapkit/mkcircle
 */
interface MKCircle extends MKShape {
  // doc://com.apple.documentation/documentation/mapkit/mkcircle/1411074-coordinate
  coordinate(): cocoascript.CLLocationCoordinate2D;
  setCoordinate(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkcircle/1411067-radius
  radius(): cocoascript.CLLocationDistance;
  setRadius(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkcircle/1411065-boundingmaprect
  boundingMapRect(): cocoascript.MKMapRect;
  setBoundingMapRect(): void;
  // 
  alloc():cocoascript.MKCircle;
  // 
  init():cocoascript.MKCircle;
}
}
declare const MKCircle: cocoascript.MKCircle;

