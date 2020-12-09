declare namespace cocoascript {
/**
 * An object that decodes GeoJSON objects into MapKit types.
 * doc://com.apple.documentation/documentation/mapkit/mkgeojsondecoder
 */
interface MKGeoJSONDecoder extends NSObject {
  // doc://com.apple.documentation/documentation/mapkit/mkgeojsondecoder/3113994-geojsonobjectswithdata
  geoJSONObjectsWithData_error(data: cocoascript.NSData, errorPtr: cocoascript._Nullable):cocoascript.MKGeoJSONObject;
  // 
  alloc():cocoascript.MKGeoJSONDecoder;
  // 
  init():cocoascript.MKGeoJSONDecoder;
}
}
declare const MKGeoJSONDecoder: cocoascript.MKGeoJSONDecoder;

