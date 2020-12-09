declare namespace cocoascript {
/**
 * Your app’s response to a get ride status intent.
 * doc://com.apple.documentation/documentation/sirikit/ingetridestatusintentresponse
 */
interface INGetRideStatusIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/ingetridestatusintentresponse/1648160-initwithcode
  initWithCode_userActivity(code: cocoascript.INGetRideStatusIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INGetRideStatusIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/ingetridestatusintentresponse/1830547-code
  code(): cocoascript.INGetRideStatusIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/ingetridestatusintentresponse/1648161-ridestatus
  rideStatus(): cocoascript.INRideStatus;
  setRideStatus(): void;
  // 
  alloc():cocoascript.INGetRideStatusIntentResponse;
  // 
  init():cocoascript.INGetRideStatusIntentResponse;
}
}
declare const INGetRideStatusIntentResponse: cocoascript.INGetRideStatusIntentResponse;

