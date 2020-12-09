declare namespace cocoascript {
/**
 * A circular geographic region, specified as a center point and radius.
 * doc://com.apple.documentation/documentation/corelocation/clcircularregion
 */
interface CLCircularRegion extends CLRegion {
  // doc://com.apple.documentation/documentation/corelocation/clcircularregion/1423761-initwithcenter
  initWithCenter_radius_identifier(center: cocoascript.CLLocationCoordinate2D, radius: cocoascript.CLLocationDistance, identifier: cocoascript.NSString):cocoascript.CLCircularRegion;
  // doc://com.apple.documentation/documentation/corelocation/clcircularregion/1423601-center
  center(): cocoascript.CLLocationCoordinate2D;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/corelocation/clcircularregion/1423734-radius
  radius(): cocoascript.CLLocationDistance;
  setRadius(): void;
  // doc://com.apple.documentation/documentation/corelocation/clcircularregion/1423697-containscoordinate
  containsCoordinate(coordinate: cocoascript.CLLocationCoordinate2D):cocoascript.BOOL;
  // 
  alloc():cocoascript.CLCircularRegion;
  // 
  init():cocoascript.CLCircularRegion;
}
}
declare const CLCircularRegion: cocoascript.CLCircularRegion;

