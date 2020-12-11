declare namespace cocoascript {
  /**
   * The person assigned to a reservation.
   * doc://com.apple.documentation/documentation/sirikit/inrestaurantguest
   */
  interface INRestaurantGuest extends INPerson {
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantguest/2102287-initwithnamecomponents
    initWithNameComponents_phoneNumber_emailAddress(nameComponents: cocoascript.NSPersonNameComponents, phoneNumber: cocoascript.NSString, emailAddress: cocoascript.NSString):cocoascript.INRestaurantGuest;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantguest/1778341-phonenumber
    phoneNumber(): cocoascript.NSString;
    setPhoneNumber(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantguest/1778340-emailaddress
    emailAddress(): cocoascript.NSString;
    setEmailAddress(): void;
    //
    alloc():cocoascript.INRestaurantGuest;
    //
    init():cocoascript.INRestaurantGuest;
  }
}

declare const INRestaurantGuest: cocoascript.INRestaurantGuest;
