declare namespace cocoascript {
/**
 * Your app’s response to a request to lock or unlock the car.
 * doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintentresponse
 */
interface INSetCarLockStatusIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintentresponse/2799303-initwithcode
  initWithCode_userActivity(code: cocoascript.INSetCarLockStatusIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSetCarLockStatusIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintentresponse/2799302-code
  code(): cocoascript.INSetCarLockStatusIntentResponseCode;
  setCode(): void;
  // 
  alloc():cocoascript.INSetCarLockStatusIntentResponse;
  // 
  init():cocoascript.INSetCarLockStatusIntentResponse;
}
}
declare const INSetCarLockStatusIntentResponse: cocoascript.INSetCarLockStatusIntentResponse;

