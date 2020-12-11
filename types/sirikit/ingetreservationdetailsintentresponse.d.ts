declare namespace cocoascript {
  /**
   * Your app’s response to a request for reservation details.
   * doc://com.apple.documentation/documentation/sirikit/ingetreservationdetailsintentresponse
   */
  interface INGetReservationDetailsIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/ingetreservationdetailsintentresponse/3172608-initwithcode
    initWithCode_userActivity(code: cocoascript.INGetReservationDetailsIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INGetReservationDetailsIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/ingetreservationdetailsintentresponse/3172609-reservations
    reservations(): cocoascript.INReservation;
    setReservations(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetreservationdetailsintentresponse/3172607-code
    code(): cocoascript.INGetReservationDetailsIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INGetReservationDetailsIntentResponse;
    //
    init():cocoascript.INGetReservationDetailsIntentResponse;
  }
}

declare const INGetReservationDetailsIntentResponse: cocoascript.INGetReservationDetailsIntentResponse;
