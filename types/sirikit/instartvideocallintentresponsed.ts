declare namespace cocoascript {
/**
 * Your response to a start video call intent. 
 * doc://com.apple.documentation/documentation/sirikit/instartvideocallintentresponse
 */
interface INStartVideoCallIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/instartvideocallintentresponse/1639246-initwithcode
  initWithCode_userActivity(code: cocoascript.INStartVideoCallIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INStartVideoCallIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/instartvideocallintentresponse/1823493-code
  code(): cocoascript.INStartVideoCallIntentResponseCode;
  setCode(): void;
  // 
  alloc():cocoascript.INStartVideoCallIntentResponse;
  // 
  init():cocoascript.INStartVideoCallIntentResponse;
}
}
declare const INStartVideoCallIntentResponse: cocoascript.INStartVideoCallIntentResponse;

