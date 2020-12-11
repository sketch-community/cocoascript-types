declare namespace cocoascript {
  /**
   * A request for details about one or more reservations.
   * doc://com.apple.documentation/documentation/sirikit/ingetreservationdetailsintent
   */
  interface INGetReservationDetailsIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/ingetreservationdetailsintent/3172598-initwithreservationcontainerrefe
    initWithReservationContainerReference_reservationItemReferences(reservationContainerReference: cocoascript.INSpeakableString, reservationItemReferences: cocoascript.INSpeakableString):cocoascript.INGetReservationDetailsIntent;
    // doc://com.apple.documentation/documentation/sirikit/ingetreservationdetailsintent/3172599-reservationcontainerreference
    reservationContainerReference(): cocoascript.INSpeakableString;
    setReservationContainerReference(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetreservationdetailsintent/3172600-reservationitemreferences
    reservationItemReferences(): cocoascript.INSpeakableString;
    setReservationItemReferences(): void;
    //
    alloc():cocoascript.INGetReservationDetailsIntent;
    //
    init():cocoascript.INGetReservationDetailsIntent;
  }
}

declare const INGetReservationDetailsIntent: cocoascript.INGetReservationDetailsIntent;
