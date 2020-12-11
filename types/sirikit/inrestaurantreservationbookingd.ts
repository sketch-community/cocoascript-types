declare namespace cocoascript {
  /**
   * A potential reservation that a user can book.
   * doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking
   */
  interface INRestaurantReservationBooking extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/2132093-initwithrestaurant
    initWithRestaurant_bookingDate_partySize_bookingIdentifier(restaurant: cocoascript.INRestaurant, bookingDate: cocoascript.NSDate, partySize: cocoascript.NSUInteger, bookingIdentifier: cocoascript.NSString):cocoascript.INRestaurantReservationBooking;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1648075-restaurant
    restaurant(): cocoascript.INRestaurant;
    setRestaurant(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1648082-partysize
    partySize(): cocoascript.NSUInteger;
    setPartySize(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1648081-offers
    offers(): cocoascript.INRestaurantOffer;
    setOffers(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1648077-bookingidentifier
    bookingIdentifier(): cocoascript.NSString;
    setBookingIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1648080-bookingavailable
    bookingAvailable(): cocoascript.BOOL;
    setBookingAvailable(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1648078-bookingdate
    bookingDate(): cocoascript.NSDate;
    setBookingDate(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1778334-bookingdescription
    bookingDescription(): cocoascript.NSString;
    setBookingDescription(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1778336-requiresname
    requiresName(): cocoascript.BOOL;
    setRequiresName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1778335-requiresemailaddress
    requiresEmailAddress(): cocoascript.BOOL;
    setRequiresEmailAddress(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1778337-requiresphonenumber
    requiresPhoneNumber(): cocoascript.BOOL;
    setRequiresPhoneNumber(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1771692-requiresmanualrequest
    requiresManualRequest(): cocoascript.BOOL;
    setRequiresManualRequest(): void;
    //
    alloc():cocoascript.INRestaurantReservationBooking;
    //
    init():cocoascript.INRestaurantReservationBooking;
  }
}

declare const INRestaurantReservationBooking: cocoascript.INRestaurantReservationBooking;
