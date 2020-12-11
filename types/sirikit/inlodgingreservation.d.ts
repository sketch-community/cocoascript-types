declare namespace cocoascript {
  /**
   * The information that describes a lodging reservation.
   * doc://com.apple.documentation/documentation/sirikit/inlodgingreservation
   */
  interface INLodgingReservation extends INReservation {
    // doc://com.apple.documentation/documentation/sirikit/inlodgingreservation/3601149-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_lodgingBusinessLocation_reservationDuration_numberOfAdults_numberOfChildren(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, URL: cocoascript.NSURL, lodgingBusinessLocation: cocoascript.CLPlacemark, reservationDuration: cocoascript.INDateComponentsRange, numberOfAdults: cocoascript.NSNumber, numberOfChildren: cocoascript.NSNumber):cocoascript.INLodgingReservation;
    // doc://com.apple.documentation/documentation/sirikit/inlodgingreservation/3191875-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_lodgingBusinessLocation_reservationDuration_numberOfAdults_numberOfChildren(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, lodgingBusinessLocation: cocoascript.CLPlacemark, reservationDuration: cocoascript.INDateComponentsRange, numberOfAdults: cocoascript.NSNumber, numberOfChildren: cocoascript.NSNumber):cocoascript.INLodgingReservation;
    // doc://com.apple.documentation/documentation/sirikit/inlodgingreservation/3141807-lodgingbusinesslocation
    lodgingBusinessLocation(): cocoascript.CLPlacemark;
    setLodgingBusinessLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/inlodgingreservation/3141810-reservationduration
    reservationDuration(): cocoascript.INDateComponentsRange;
    setReservationDuration(): void;
    // doc://com.apple.documentation/documentation/sirikit/inlodgingreservation/3141808-numberofadults
    numberOfAdults(): cocoascript.NSNumber;
    setNumberOfAdults(): void;
    // doc://com.apple.documentation/documentation/sirikit/inlodgingreservation/3141809-numberofchildren
    numberOfChildren(): cocoascript.NSNumber;
    setNumberOfChildren(): void;
    //
    alloc():cocoascript.INLodgingReservation;
    //
    init():cocoascript.INLodgingReservation;
  }
}

declare const INLodgingReservation: cocoascript.INLodgingReservation;
