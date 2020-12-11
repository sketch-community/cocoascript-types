declare namespace cocoascript {
  /**
   * The handler interface for generating a list of potential reservation times from which the user can select.
   * doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintenthandling
   */
  interface INGetAvailableRestaurantReservationBookingsIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintenthandling/1845244-resolverestaurantforgetavailable
    resolveRestaurantForGetAvailableRestaurantReservationBookings_withCompletion(intent: cocoascript.INGetAvailableRestaurantReservationBookingsIntent, completion: cocoascript.INRestaurantResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintenthandling/1845252-resolvepartysizeforgetavailabler
    resolvePartySizeForGetAvailableRestaurantReservationBookings_withCompletion(intent: cocoascript.INGetAvailableRestaurantReservationBookingsIntent, completion: cocoascript.INIntegerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintenthandling/2305422-resolvepreferredbookingdatecompo
    resolvePreferredBookingDateComponentsForGetAvailableRestaurantReservationBookings_withCompletion(intent: cocoascript.INGetAvailableRestaurantReservationBookingsIntent, completion: cocoascript.INDateComponentsResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintenthandling/1845258-confirmgetavailablerestaurantres
    confirmGetAvailableRestaurantReservationBookings_completion(intent: cocoascript.INGetAvailableRestaurantReservationBookingsIntent, completion: cocoascript.INGetAvailableRestaurantReservationBookingsIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintenthandling/1648716-handlegetavailablerestaurantrese
    handleGetAvailableRestaurantReservationBookings_completion(intent: cocoascript.INGetAvailableRestaurantReservationBookingsIntent, completion: cocoascript.INGetAvailableRestaurantReservationBookingsIntentResponse):void;
  }
}
