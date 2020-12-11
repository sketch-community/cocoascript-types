declare namespace cocoascript {
  /**
   * A point on a two-dimensional map projection.
   * doc://com.apple.documentation/documentation/mapkit/mkmappoint
   */
  interface MKMapPoint {
    // doc://com.apple.documentation/documentation/mapkit/1452534-mkcoordinateformappoint
    MKCoordinateForMapPoint(): cocoascript.MKMapPoint;
    setMKCoordinateForMapPoint(): void;
    // doc://com.apple.documentation/documentation/mapkit/1452729-mkmetersbetweenmappoints
    MKMetersBetweenMapPoints(): cocoascript.MKMapPoint;
    setMKMetersBetweenMapPoints(): void;
    // doc://com.apple.documentation/documentation/mapkit/1452467-mkmeterspermappointatlatitude
    MKMetersPerMapPointAtLatitude(): cocoascript.CLLocationDegrees;
    setMKMetersPerMapPointAtLatitude(): void;
    // doc://com.apple.documentation/documentation/mapkit/1451962-mkstringfrommappoint
    MKStringFromMapPoint(): cocoascript.MKMapPoint;
    setMKStringFromMapPoint(): void;
  }
}
