declare namespace cocoascript {
  /**
   * The decoded representation of a GeoJSON feature.
   * doc://com.apple.documentation/documentation/mapkit/mkgeojsonfeature
   */
  interface MKGeoJSONFeature extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkgeojsonfeature/3113996-geometry
    geometry(): cocoascript.MKGeoJSONObject;
    setGeometry(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkgeojsonfeature/3113997-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkgeojsonfeature/3113998-properties
    properties(): cocoascript.NSData;
    setProperties(): void;
    //
    alloc():cocoascript.MKGeoJSONFeature;
    //
    init():cocoascript.MKGeoJSONFeature;
  }
}

declare const MKGeoJSONFeature: cocoascript.MKGeoJSONFeature;
