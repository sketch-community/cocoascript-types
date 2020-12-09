declare namespace cocoascript {
/**
 * Your app’s response to a book restaurant reservation intent.
 * doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintentresponse
 */
interface INBookRestaurantReservationIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintentresponse/1778408-initwithcode
  initWithCode_userActivity(code: cocoascript.INBookRestaurantReservationIntentCode, userActivity: cocoascript.NSUserActivity):cocoascript.INBookRestaurantReservationIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintentresponse/1833287-code
  code(): cocoascript.INBookRestaurantReservationIntentCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintentresponse/1648277-userbooking
  userBooking(): cocoascript.INRestaurantReservationUserBooking;
  setUserBooking(): void;
  // 
  alloc():cocoascript.INBookRestaurantReservationIntentResponse;
  // 
  init():cocoascript.INBookRestaurantReservationIntentResponse;
}
}
declare const INBookRestaurantReservationIntentResponse: cocoascript.INBookRestaurantReservationIntentResponse;

