declare namespace cocoascript {
/**
 * A camera zoom range that limits the distances to which the user can zoom.
 * doc://com.apple.documentation/documentation/mapkit/mkmapcamerazoomrange
 */
interface MKMapCameraZoomRange extends NSObject {
  // doc://com.apple.documentation/documentation/mapkit/mkmapcamerazoomrange/3114298-initwithmincentercoordinatedista
  initWithMinCenterCoordinateDistance_maxCenterCoordinateDistance(minDistance: cocoascript.CLLocationDistance, maxDistance: cocoascript.CLLocationDistance):cocoascript.MKMapCameraZoomRange;
  // doc://com.apple.documentation/documentation/mapkit/mkmapcamerazoomrange/3237246-initwithmincentercoordinatedista
  initWithMinCenterCoordinateDistance(minDistance: cocoascript.CLLocationDistance):cocoascript.MKMapCameraZoomRange;
  // doc://com.apple.documentation/documentation/mapkit/mkmapcamerazoomrange/3237245-initwithmaxcentercoordinatedista
  initWithMaxCenterCoordinateDistance(maxDistance: cocoascript.CLLocationDistance):cocoascript.MKMapCameraZoomRange;
  // doc://com.apple.documentation/documentation/mapkit/mkmapcamerazoomrange/3114299-maxcentercoordinatedistance
  maxCenterCoordinateDistance(): cocoascript.CLLocationDistance;
  setMaxCenterCoordinateDistance(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapcamerazoomrange/3114300-mincentercoordinatedistance
  minCenterCoordinateDistance(): cocoascript.CLLocationDistance;
  setMinCenterCoordinateDistance(): void;
  // 
  alloc():cocoascript.MKMapCameraZoomRange;
  // 
  init():cocoascript.MKMapCameraZoomRange;
}
}
declare const MKMapCameraZoomRange: cocoascript.MKMapCameraZoomRange;

