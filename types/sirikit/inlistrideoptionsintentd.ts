declare namespace cocoascript {
  /**
   * An intent for getting the types of rides available from a ride-booking service.
   * doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintent
   */
  interface INListRideOptionsIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintent/1648131-initwithpickuplocation
    initWithPickupLocation_dropOffLocation(pickupLocation: cocoascript.CLPlacemark, dropOffLocation: cocoascript.CLPlacemark):cocoascript.INListRideOptionsIntent;
    // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintent/1648136-pickuplocation
    pickupLocation(): cocoascript.CLPlacemark;
    setPickupLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintent/1648133-dropofflocation
    dropOffLocation(): cocoascript.CLPlacemark;
    setDropOffLocation(): void;
    //
    alloc():cocoascript.INListRideOptionsIntent;
    //
    init():cocoascript.INListRideOptionsIntent;
  }
}

declare const INListRideOptionsIntent: cocoascript.INListRideOptionsIntent;
