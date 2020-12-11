declare namespace cocoascript {
  /**
   * Information about the user's location during a specific period of time.
   * doc://com.apple.documentation/documentation/corelocation/clvisit
   */
  interface CLVisit extends NSObject {
    // doc://com.apple.documentation/documentation/corelocation/clvisit/1614677-coordinate
    coordinate(): cocoascript.CLLocationCoordinate2D;
    setCoordinate(): void;
    // doc://com.apple.documentation/documentation/corelocation/clvisit/1614679-horizontalaccuracy
    horizontalAccuracy(): cocoascript.CLLocationAccuracy;
    setHorizontalAccuracy(): void;
    // doc://com.apple.documentation/documentation/corelocation/clvisit/1614681-arrivaldate
    arrivalDate(): cocoascript.NSDate;
    setArrivalDate(): void;
    // doc://com.apple.documentation/documentation/corelocation/clvisit/1614685-departuredate
    departureDate(): cocoascript.NSDate;
    setDepartureDate(): void;
    //
    alloc():cocoascript.CLVisit;
    //
    init():cocoascript.CLVisit;
  }
}

declare const CLVisit: cocoascript.CLVisit;
