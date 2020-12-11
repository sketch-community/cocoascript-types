declare namespace cocoascript {
  /**
   * A trigger condition based on the user’s arrival or departure from a given location.
   * doc://com.apple.documentation/documentation/sirikit/inspatialeventtrigger
   */
  interface INSpatialEventTrigger extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inspatialeventtrigger/2878151-initwithplacemark
    initWithPlacemark_event(placemark: cocoascript.CLPlacemark, event: cocoascript.INSpatialEvent):cocoascript.INSpatialEventTrigger;
    // doc://com.apple.documentation/documentation/sirikit/inspatialeventtrigger/2873869-placemark
    placemark(): cocoascript.CLPlacemark;
    setPlacemark(): void;
    // doc://com.apple.documentation/documentation/sirikit/inspatialeventtrigger/2878150-event
    event(): cocoascript.INSpatialEvent;
    setEvent(): void;
    //
    alloc():cocoascript.INSpatialEventTrigger;
    //
    init():cocoascript.INSpatialEventTrigger;
  }
}

declare const INSpatialEventTrigger: cocoascript.INSpatialEventTrigger;
