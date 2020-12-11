declare namespace cocoascript {
  /**
   * The handler interface for fetching and delivering the user’s current reservations.
   * doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintenthandling
   */
  interface INGetUserCurrentRestaurantReservationBookingsIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintenthandling/1845247-resolverestaurantforgetusercurre
    resolveRestaurantForGetUserCurrentRestaurantReservationBookings_withCompletion(intent: cocoascript.INGetUserCurrentRestaurantReservationBookingsIntent, completion: cocoascript.INRestaurantResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintenthandling/1845251-confirmgetusercurrentrestaurantr
    confirmGetUserCurrentRestaurantReservationBookings_completion(intent: cocoascript.INGetUserCurrentRestaurantReservationBookingsIntent, completion: cocoascript.INGetUserCurrentRestaurantReservationBookingsIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintenthandling/1650031-handlegetusercurrentrestaurantre
    handleGetUserCurrentRestaurantReservationBookings_completion(intent: cocoascript.INGetUserCurrentRestaurantReservationBookingsIntent, completion: cocoascript.INGetUserCurrentRestaurantReservationBookingsIntentResponse):void;
  }
}
