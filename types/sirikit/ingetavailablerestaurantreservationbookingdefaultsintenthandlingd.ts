declare namespace cocoascript {
  /**
   * The handler interface for providing default values to the system when pre-fetching an initial set of possible reservation times.
   * doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintenthandling
   */
  interface INGetAvailableRestaurantReservationBookingDefaultsIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintenthandling/1845246-resolverestaurantforgetavailable
    resolveRestaurantForGetAvailableRestaurantReservationBookingDefaults_withCompletion(intent: cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntent, completion: cocoascript.INRestaurantResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintenthandling/1845257-confirmgetavailablerestaurantres
    confirmGetAvailableRestaurantReservationBookingDefaults_completion(intent: cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntent, completion: cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintenthandling/1650055-handlegetavailablerestaurantrese
    handleGetAvailableRestaurantReservationBookingDefaults_completion(intent: cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntent, completion: cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntentResponse):void;
  }
}
