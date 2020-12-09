declare namespace cocoascript {
/**
 * Your app’s response to a get restaurant guest intent.
 * doc://com.apple.documentation/documentation/sirikit/ingetrestaurantguestintentresponse
 */
interface INGetRestaurantGuestIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/ingetrestaurantguestintentresponse/1833301-initwithcode
  initWithCode_userActivity(code: cocoascript.INGetRestaurantGuestIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INGetRestaurantGuestIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/ingetrestaurantguestintentresponse/1833300-code
  code(): cocoascript.INGetRestaurantGuestIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/ingetrestaurantguestintentresponse/1778393-guest
  guest(): cocoascript.INRestaurantGuest;
  setGuest(): void;
  // doc://com.apple.documentation/documentation/sirikit/ingetrestaurantguestintentresponse/2102599-guestdisplaypreferences
  guestDisplayPreferences(): cocoascript.INRestaurantGuestDisplayPreferences;
  setGuestDisplayPreferences(): void;
  // 
  alloc():cocoascript.INGetRestaurantGuestIntentResponse;
  // 
  init():cocoascript.INGetRestaurantGuestIntentResponse;
}
}
declare const INGetRestaurantGuestIntentResponse: cocoascript.INGetRestaurantGuestIntentResponse;

