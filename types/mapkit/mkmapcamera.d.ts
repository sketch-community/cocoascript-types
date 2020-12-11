declare namespace cocoascript {
  /**
   * A virtual camera for defining the appearance of the map.
   * doc://com.apple.documentation/documentation/mapkit/mkmapcamera
   */
  interface MKMapCamera extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamera/1411081-centercoordinate
    centerCoordinate(): cocoascript.CLLocationCoordinate2D;
    setCenterCoordinate(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamera/1411087-heading
    heading(): cocoascript.CLLocationDirection;
    setHeading(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamera/3114295-centercoordinatedistance
    centerCoordinateDistance(): cocoascript.CLLocationDistance;
    setCenterCoordinateDistance(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamera/1411083-pitch
    pitch(): cocoascript.CGFloat;
    setPitch(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmapcamera/1411078-altitude
    altitude(): cocoascript.CLLocationDistance;
    setAltitude(): void;
    //
    alloc():cocoascript.MKMapCamera;
    //
    init():cocoascript.MKMapCamera;
  }
}

declare const MKMapCamera: cocoascript.MKMapCamera;
