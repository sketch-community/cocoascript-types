declare namespace cocoascript {
  /**
   * Your app’s response to a get available restaurant reservation bookings intent.
   * doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse
   */
  interface INGetAvailableRestaurantReservationBookingsIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse/2102234-initwithavailablebookings
    initWithAvailableBookings_code_userActivity(availableBookings: cocoascript.INRestaurantReservationBooking, code: cocoascript.INGetAvailableRestaurantReservationBookingsIntentCode, userActivity: cocoascript.NSUserActivity):cocoascript.INGetAvailableRestaurantReservationBookingsIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse/1649829-availablebookings
    availableBookings(): cocoascript.INRestaurantReservationBooking;
    setAvailableBookings(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse/2102233-localizedrestaurantdescriptionte
    localizedRestaurantDescriptionText(): cocoascript.NSString;
    setLocalizedRestaurantDescriptionText(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse/1778416-localizedbookingadvisementtext
    localizedBookingAdvisementText(): cocoascript.NSString;
    setLocalizedBookingAdvisementText(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse/2132101-termsandconditions
    termsAndConditions(): cocoascript.INTermsAndConditions;
    setTermsAndConditions(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse/1829404-code
    code(): cocoascript.INGetAvailableRestaurantReservationBookingsIntentCode;
    setCode(): void;
    //
    alloc():cocoascript.INGetAvailableRestaurantReservationBookingsIntentResponse;
    //
    init():cocoascript.INGetAvailableRestaurantReservationBookingsIntentResponse;
  }
}

declare const INGetAvailableRestaurantReservationBookingsIntentResponse: cocoascript.INGetAvailableRestaurantReservationBookingsIntentResponse;
