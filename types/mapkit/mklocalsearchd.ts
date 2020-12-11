declare namespace cocoascript {
  /**
   * A utility object for initiating map-based searches and processing the results.
   * doc://com.apple.documentation/documentation/mapkit/mklocalsearch
   */
  interface MKLocalSearch extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearch/1452759-initwithrequest
    initWithRequest(request: cocoascript.MKLocalSearchRequest):cocoascript.MKLocalSearch;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearch/3564418-initwithpointsofinterestrequest
    initWithPointsOfInterestRequest(request: cocoascript.MKLocalPointsOfInterestRequest):cocoascript.MKLocalSearch;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearch/1452652-startwithcompletionhandler
    startWithCompletionHandler(completionHandler: cocoascript.MKLocalSearchCompletionHandler):void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearch/1452349-searching
    searching(): cocoascript.BOOL;
    setSearching(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearch/1452160-cancel
    cancel():void;
    //
    alloc():cocoascript.MKLocalSearch;
    //
    init():cocoascript.MKLocalSearch;
  }
}

declare const MKLocalSearch: cocoascript.MKLocalSearch;
