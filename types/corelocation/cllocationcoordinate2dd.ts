declare namespace cocoascript {
  /**
   * The latitude and longitude associated with a location, specified using the WGS 84 reference frame.
   * doc://com.apple.documentation/documentation/corelocation/cllocationcoordinate2d
   */
  interface CLLocationCoordinate2D {
    // doc://com.apple.documentation/documentation/corelocation/cllocationcoordinate2d/1423513-latitude
    latitude(): cocoascript.CLLocationDegrees;
    setLatitude(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationcoordinate2d/1423552-longitude
    longitude(): cocoascript.CLLocationDegrees;
    setLongitude(): void;
    // doc://com.apple.documentation/documentation/corelocation/1423838-cllocationcoordinate2dmake
    CLLocationCoordinate2DMake(): cocoascript.CLLocationDegrees;
    setCLLocationCoordinate2DMake(): void;
  }
}
