declare namespace cocoascript {
/**
 * Provides services for converting a map coordinate (specified as a latitude/longitude pair) into information about that coordinate, such as the country, city, or street.  
 * doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder
 */
interface MKReverseGeocoder extends NSObject {
  // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618471-initwithcoordinate
  initWithCoordinate(coordinate: cocoascript.CLLocationCoordinate2D):cocoascript.MKReverseGeocoder;
  // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618478-delegate
  delegate(): cocoascript.MKReverseGeocoderDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618477-coordinate
  coordinate(): cocoascript.CLLocationCoordinate2D;
  setCoordinate(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618481-placemark
  placemark(): cocoascript.MKPlacemark;
  setPlacemark(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618480-start
  start():void;
  // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618474-querying
  querying(): cocoascript.BOOL;
  setQuerying(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkreversegeocoder/1618479-cancel
  cancel():void;
  // 
  alloc():cocoascript.MKReverseGeocoder;
  // 
  init():cocoascript.MKReverseGeocoder;
}
}
declare const MKReverseGeocoder: cocoascript.MKReverseGeocoder;

