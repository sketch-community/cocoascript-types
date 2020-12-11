declare namespace cocoascript {
  /**
   * The handler interface for fetching information about the person making a reservation.
   * doc://com.apple.documentation/documentation/sirikit/ingetrestaurantguestintenthandling
   */
  interface INGetRestaurantGuestIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/ingetrestaurantguestintenthandling/1845238-confirmgetrestaurantguest
    confirmGetRestaurantGuest_completion(guestIntent: cocoascript.INGetRestaurantGuestIntent, completion: cocoascript.INGetRestaurantGuestIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetrestaurantguestintenthandling/1778395-handlegetrestaurantguest
    handleGetRestaurantGuest_completion(intent: cocoascript.INGetRestaurantGuestIntent, completion: cocoascript.INGetRestaurantGuestIntentResponse):void;
  }
}
