declare namespace cocoascript {
  /**
   * The route information returned by Apple servers in response to one of your requests for directions.
   * doc://com.apple.documentation/documentation/mapkit/mkdirectionsresponse
   */
  interface MKDirectionsResponse extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsresponse/1452261-source
    source(): cocoascript.MKMapItem;
    setSource(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsresponse/1451981-destination
    destination(): cocoascript.MKMapItem;
    setDestination(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirectionsresponse/1452071-routes
    routes(): cocoascript.MKRoute;
    setRoutes(): void;
    //
    alloc():cocoascript.MKDirectionsResponse;
    //
    init():cocoascript.MKDirectionsResponse;
  }
}

declare const MKDirectionsResponse: cocoascript.MKDirectionsResponse;
