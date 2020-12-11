declare namespace cocoascript {
  /**
   * Identifying information about a driver of a ride service.
   * doc://com.apple.documentation/documentation/sirikit/inridedriver
   */
  interface INRideDriver extends INPerson {
    // doc://com.apple.documentation/documentation/sirikit/inridedriver/2727146-initwithphonenumber
    initWithPhoneNumber_nameComponents_displayName_image_rating(phoneNumber: cocoascript.NSString, nameComponents: cocoascript.NSPersonNameComponents, displayName: cocoascript.NSString, image: cocoascript.INImage, rating: cocoascript.NSString):cocoascript.INRideDriver;
    // doc://com.apple.documentation/documentation/sirikit/inridedriver/1639295-initwithhandle
    initWithHandle_displayName_image_rating_phoneNumber(handle: cocoascript.NSString, displayName: cocoascript.NSString, image: cocoascript.INImage, rating: cocoascript.NSString, phoneNumber: cocoascript.NSString):cocoascript.INRideDriver;
    // doc://com.apple.documentation/documentation/sirikit/inridedriver/1638407-initwithhandle
    initWithHandle_nameComponents_image_rating_phoneNumber(handle: cocoascript.NSString, nameComponents: cocoascript.NSPersonNameComponents, image: cocoascript.INImage, rating: cocoascript.NSString, phoneNumber: cocoascript.NSString):cocoascript.INRideDriver;
    // doc://com.apple.documentation/documentation/sirikit/inridedriver/2143442-initwithpersonhandle
    initWithPersonHandle_nameComponents_displayName_image_rating_phoneNumber(personHandle: cocoascript.INPersonHandle, nameComponents: cocoascript.NSPersonNameComponents, displayName: cocoascript.NSString, image: cocoascript.INImage, rating: cocoascript.NSString, phoneNumber: cocoascript.NSString):cocoascript.INRideDriver;
    // doc://com.apple.documentation/documentation/sirikit/inridedriver/1638184-rating
    rating(): cocoascript.NSString;
    setRating(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridedriver/1639331-phonenumber
    phoneNumber(): cocoascript.NSString;
    setPhoneNumber(): void;
    //
    alloc():cocoascript.INRideDriver;
    //
    init():cocoascript.INRideDriver;
  }
}

declare const INRideDriver: cocoascript.INRideDriver;
