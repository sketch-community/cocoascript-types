declare namespace cocoascript {
/**
 * Your app’s response to a request ride intent.
 * doc://com.apple.documentation/documentation/sirikit/inrequestrideintentresponse
 */
interface INRequestRideIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/inrequestrideintentresponse/1649171-initwithcode
  initWithCode_userActivity(code: cocoascript.INRequestRideIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INRequestRideIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/inrequestrideintentresponse/1833290-code
  code(): cocoascript.INRequestRideIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrequestrideintentresponse/1649156-ridestatus
  rideStatus(): cocoascript.INRideStatus;
  setRideStatus(): void;
  // 
  alloc():cocoascript.INRequestRideIntentResponse;
  // 
  init():cocoascript.INRequestRideIntentResponse;
}
}
declare const INRequestRideIntentResponse: cocoascript.INRequestRideIntentResponse;

