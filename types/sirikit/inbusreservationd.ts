declare namespace cocoascript {
  /**
   * The information that describes a bus reservation.
   * doc://com.apple.documentation/documentation/sirikit/inbusreservation
   */
  interface INBusReservation extends INReservation {
    // doc://com.apple.documentation/documentation/sirikit/inbusreservation/3601147-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_reservedSeat_busTrip(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, URL: cocoascript.NSURL, reservedSeat: cocoascript.INSeat, busTrip: cocoascript.INBusTrip):cocoascript.INBusReservation;
    // doc://com.apple.documentation/documentation/sirikit/inbusreservation/3601146-bustrip
    busTrip(): cocoascript.INBusTrip;
    setBusTrip(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbusreservation/3601148-reservedseat
    reservedSeat(): cocoascript.INSeat;
    setReservedSeat(): void;
    //
    alloc():cocoascript.INBusReservation;
    //
    init():cocoascript.INBusReservation;
  }
}

declare const INBusReservation: cocoascript.INBusReservation;
