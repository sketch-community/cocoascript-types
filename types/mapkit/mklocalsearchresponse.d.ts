declare namespace cocoascript {
  /**
   * The results from a map-based search.
   * doc://com.apple.documentation/documentation/mapkit/mklocalsearchresponse
   */
  interface MKLocalSearchResponse extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchresponse/1451939-mapitems
    mapItems(): cocoascript.MKMapItem;
    setMapItems(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchresponse/1452501-boundingregion
    boundingRegion(): cocoascript.MKCoordinateRegion;
    setBoundingRegion(): void;
    //
    alloc():cocoascript.MKLocalSearchResponse;
    //
    init():cocoascript.MKLocalSearchResponse;
  }
}

declare const MKLocalSearchResponse: cocoascript.MKLocalSearchResponse;
