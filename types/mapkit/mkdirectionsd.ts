declare namespace cocoascript {
  /**
   * A utility object that computes directions and travel-time information based on the route information you provide.
   * doc://com.apple.documentation/documentation/mapkit/mkdirections
   */
  interface MKDirections extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mkdirections/1452197-initwithrequest
    initWithRequest(request: cocoascript.MKDirectionsRequest):cocoascript.MKDirections;
    // doc://com.apple.documentation/documentation/mapkit/mkdirections/1452078-calculatedirectionswithcompletio
    calculateDirectionsWithCompletionHandler(completionHandler: cocoascript.MKDirectionsHandler):void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirections/1452736-calculateetawithcompletionhandle
    calculateETAWithCompletionHandler(completionHandler: cocoascript.MKETAHandler):void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirections/1452656-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/mapkit/mkdirections/1452217-calculating
    calculating(): cocoascript.BOOL;
    setCalculating(): void;
    //
    alloc():cocoascript.MKDirections;
    //
    init():cocoascript.MKDirections;
  }
}

declare const MKDirections: cocoascript.MKDirections;
