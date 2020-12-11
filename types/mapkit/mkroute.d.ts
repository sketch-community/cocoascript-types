declare namespace cocoascript {
  /**
   * A single route between a requested start and end point.
   * doc://com.apple.documentation/documentation/mapkit/mkroute
   */
  interface MKRoute extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1451943-polyline
    polyline(): cocoascript.MKPolyline;
    setPolyline(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1452173-steps
    steps(): cocoascript.MKRouteStep;
    setSteps(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1452684-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1452359-advisorynotices
    advisoryNotices(): cocoascript.NSString;
    setAdvisoryNotices(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1452405-distance
    distance(): cocoascript.CLLocationDistance;
    setDistance(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1452297-expectedtraveltime
    expectedTravelTime(): cocoascript.NSTimeInterval;
    setExpectedTravelTime(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkroute/1452674-transporttype
    transportType(): cocoascript.MKDirectionsTransportType;
    setTransportType(): void;
    //
    alloc():cocoascript.MKRoute;
    //
    init():cocoascript.MKRoute;
  }
}

declare const MKRoute: cocoascript.MKRoute;
