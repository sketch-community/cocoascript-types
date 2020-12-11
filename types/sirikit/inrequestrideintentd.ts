declare namespace cocoascript {
  /**
   * A request to book the specified ride from your service.
   * doc://com.apple.documentation/documentation/sirikit/inrequestrideintent
   */
  interface INRequestRideIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintent/2838713-initwithpickuplocation
    initWithPickupLocation_dropOffLocation_rideOptionName_partySize_paymentMethod_scheduledPickupTime(pickupLocation: cocoascript.CLPlacemark, dropOffLocation: cocoascript.CLPlacemark, rideOptionName: cocoascript.INSpeakableString, partySize: cocoascript.NSNumber, paymentMethod: cocoascript.INPaymentMethod, scheduledPickupTime: cocoascript.INDateComponentsRange):cocoascript.INRequestRideIntent;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintent/2274389-initwithpickuplocation
    initWithPickupLocation_dropOffLocation_rideOptionName_partySize_paymentMethod(pickupLocation: cocoascript.CLPlacemark, dropOffLocation: cocoascript.CLPlacemark, rideOptionName: cocoascript.INSpeakableString, partySize: cocoascript.NSNumber, paymentMethod: cocoascript.INPaymentMethod):cocoascript.INRequestRideIntent;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintent/1649615-rideoptionname
    rideOptionName(): cocoascript.INSpeakableString;
    setRideOptionName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintent/1649610-partysize
    partySize(): cocoascript.NSNumber;
    setPartySize(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintent/1649623-pickuplocation
    pickupLocation(): cocoascript.CLPlacemark;
    setPickupLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintent/2838714-scheduledpickuptime
    scheduledPickupTime(): cocoascript.INDateComponentsRange;
    setScheduledPickupTime(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintent/1649618-dropofflocation
    dropOffLocation(): cocoascript.CLPlacemark;
    setDropOffLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintent/2274382-paymentmethod
    paymentMethod(): cocoascript.INPaymentMethod;
    setPaymentMethod(): void;
    //
    alloc():cocoascript.INRequestRideIntent;
    //
    init():cocoascript.INRequestRideIntent;
  }
}

declare const INRequestRideIntent: cocoascript.INRequestRideIntent;
