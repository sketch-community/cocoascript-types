declare namespace cocoascript {
  /**
   * One portion of an overall route.
   * doc://com.apple.documentation/documentation/mapkit/mkroutestep
   */
  interface MKRouteStep extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkroutestep/1452223-polyline
    polyline(): cocoascript.MKPolyline;
    setPolyline(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroutestep/1452447-instructions
    instructions(): cocoascript.NSString;
    setInstructions(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroutestep/1452347-notice
    notice(): cocoascript.NSString;
    setNotice(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroutestep/1452004-distance
    distance(): cocoascript.CLLocationDistance;
    setDistance(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroutestep/1452051-transporttype
    transportType(): cocoascript.MKDirectionsTransportType;
    setTransportType(): void;
    //
    alloc():cocoascript.MKRouteStep;
    //
    init():cocoascript.MKRouteStep;
  }
}

declare const MKRouteStep: cocoascript.MKRouteStep;
