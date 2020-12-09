declare namespace cocoascript {
/**
 * A base class representing an area that can be monitored.
 * doc://com.apple.documentation/documentation/corelocation/clregion
 */
interface CLRegion extends NSObject {
  // doc://com.apple.documentation/documentation/corelocation/clregion/1423583-identifier
  identifier(): cocoascript.NSString;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/corelocation/clregion/1423566-notifyonentry
  notifyOnEntry(): cocoascript.BOOL;
  setNotifyOnEntry(): void;
  // doc://com.apple.documentation/documentation/corelocation/clregion/1423595-notifyonexit
  notifyOnExit(): cocoascript.BOOL;
  setNotifyOnExit(): void;
  // doc://com.apple.documentation/documentation/corelocation/clregion/1423681-initcircularregionwithcenter
  initCircularRegionWithCenter_radius_identifier(center: cocoascript.CLLocationCoordinate2D, radius: cocoascript.CLLocationDistance, identifier: cocoascript.NSString):cocoascript.CLRegion;
  // doc://com.apple.documentation/documentation/corelocation/clregion/1423828-containscoordinate
  containsCoordinate(coordinate: cocoascript.CLLocationCoordinate2D):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/corelocation/clregion/1423691-center
  center(): cocoascript.CLLocationCoordinate2D;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/corelocation/clregion/1423730-radius
  radius(): cocoascript.CLLocationDistance;
  setRadius(): void;
  // 
  alloc():cocoascript.CLRegion;
  // 
  init():cocoascript.CLRegion;
}
}
declare const CLRegion: cocoascript.CLRegion;

