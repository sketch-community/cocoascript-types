declare namespace cocoascript {
  /**
   * A request for information about the guest who is making reservations.
   * doc://com.apple.documentation/documentation/sirikit/ingetrestaurantguestintent
   */
  interface INGetRestaurantGuestIntent extends INIntent {
    //
    alloc():cocoascript.INGetRestaurantGuestIntent;
    //
    init():cocoascript.INGetRestaurantGuestIntent;
  }
}

declare const INGetRestaurantGuestIntent: cocoascript.INGetRestaurantGuestIntent;
