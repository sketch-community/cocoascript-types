declare namespace cocoascript {
  /**
   * Your app’s response to a get user current restaurant reservation bookings intent.
   * doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintentresponse
   */
  interface INGetUserCurrentRestaurantReservationBookingsIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintentresponse/2102292-initwithusercurrentbookings
    initWithUserCurrentBookings_code_userActivity(userCurrentBookings: cocoascript.INRestaurantReservationUserBooking, code: cocoascript.INGetUserCurrentRestaurantReservationBookingsIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INGetUserCurrentRestaurantReservationBookingsIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintentresponse/1829446-code
    code(): cocoascript.INGetUserCurrentRestaurantReservationBookingsIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintentresponse/1648495-usercurrentbookings
    userCurrentBookings(): cocoascript.INRestaurantReservationUserBooking;
    setUserCurrentBookings(): void;
    //
    alloc():cocoascript.INGetUserCurrentRestaurantReservationBookingsIntentResponse;
    //
    init():cocoascript.INGetUserCurrentRestaurantReservationBookingsIntentResponse;
  }
}

declare const INGetUserCurrentRestaurantReservationBookingsIntentResponse: cocoascript.INGetUserCurrentRestaurantReservationBookingsIntentResponse;
