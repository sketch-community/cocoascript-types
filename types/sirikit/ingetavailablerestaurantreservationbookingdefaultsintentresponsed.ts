declare namespace cocoascript {
  /**
   * Your app’s response to a get available restaurant reservation booking defaults intent.
   * doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse
   */
  interface INGetAvailableRestaurantReservationBookingDefaultsIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/2102588-initwithdefaultpartysize
    initWithDefaultPartySize_defaultBookingDate_code_userActivity(defaultPartySize: cocoascript.NSUInteger, defaultBookingDate: cocoascript.NSDate, code: cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/1833312-code
    code(): cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/1648798-defaultbookingdate
    defaultBookingDate(): cocoascript.NSDate;
    setDefaultBookingDate(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/1648799-defaultpartysize
    defaultPartySize(): cocoascript.NSUInteger;
    setDefaultPartySize(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/1778390-maximumpartysize
    maximumPartySize(): cocoascript.NSNumber;
    setMaximumPartySize(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/2102587-minimumpartysize
    minimumPartySize(): cocoascript.NSNumber;
    setMinimumPartySize(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/1778384-providerimage
    providerImage(): cocoascript.INImage;
    setProviderImage(): void;
    //
    alloc():cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntentResponse;
    //
    init():cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntentResponse;
  }
}

declare const INGetAvailableRestaurantReservationBookingDefaultsIntentResponse: cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntentResponse;
