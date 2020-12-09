declare namespace cocoascript {
/**
 * Your app’s response to a list ride options intent.
 * doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintentresponse
 */
interface INListRideOptionsIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintentresponse/1648791-initwithcode
  initWithCode_userActivity(code: cocoascript.INListRideOptionsIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INListRideOptionsIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintentresponse/1833313-code
  code(): cocoascript.INListRideOptionsIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintentresponse/1648795-rideoptions
  rideOptions(): cocoascript.INRideOption;
  setRideOptions(): void;
  // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintentresponse/1648792-expirationdate
  expirationDate(): cocoascript.NSDate;
  setExpirationDate(): void;
  // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintentresponse/1648786-paymentmethods
  paymentMethods(): cocoascript.INPaymentMethod;
  setPaymentMethods(): void;
  // 
  alloc():cocoascript.INListRideOptionsIntentResponse;
  // 
  init():cocoascript.INListRideOptionsIntentResponse;
}
}
declare const INListRideOptionsIntentResponse: cocoascript.INListRideOptionsIntentResponse;

