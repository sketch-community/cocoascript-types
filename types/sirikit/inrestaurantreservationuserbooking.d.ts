declare namespace cocoascript {
  /**
   * A reservation created by a user.
   * doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationuserbooking
   */
  interface INRestaurantReservationUserBooking extends INRestaurantReservationBooking {
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationuserbooking/2132117-initwithrestaurant
    initWithRestaurant_bookingDate_partySize_bookingIdentifier_guest_status_dateStatusModified(restaurant: cocoascript.INRestaurant, bookingDate: cocoascript.NSDate, partySize: cocoascript.NSUInteger, bookingIdentifier: cocoascript.NSString, guest: cocoascript.INRestaurantGuest, status: cocoascript.INRestaurantReservationUserBookingStatus, dateStatusModified: cocoascript.NSDate):cocoascript.INRestaurantReservationUserBooking;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationuserbooking/1778366-guest
    guest(): cocoascript.INRestaurantGuest;
    setGuest(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationuserbooking/1771364-status
    status(): cocoascript.INRestaurantReservationUserBookingStatus;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationuserbooking/2102576-datestatusmodified
    dateStatusModified(): cocoascript.NSDate;
    setDateStatusModified(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationuserbooking/2102578-guestprovidedspecialrequesttext
    guestProvidedSpecialRequestText(): cocoascript.NSString;
    setGuestProvidedSpecialRequestText(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationuserbooking/2102577-selectedoffer
    selectedOffer(): cocoascript.INRestaurantOffer;
    setSelectedOffer(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationuserbooking/1648213-advisementtext
    advisementText(): cocoascript.NSString;
    setAdvisementText(): void;
    //
    alloc():cocoascript.INRestaurantReservationUserBooking;
    //
    init():cocoascript.INRestaurantReservationUserBooking;
  }
}

declare const INRestaurantReservationUserBooking: cocoascript.INRestaurantReservationUserBooking;
