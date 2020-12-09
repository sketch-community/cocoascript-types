declare namespace cocoascript {
/**
 * Your app’s response to a start call intent.
 * doc://com.apple.documentation/documentation/sirikit/instartcallintentresponse
 */
interface INStartCallIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/instartcallintentresponse/3165954-initwithcode
  initWithCode_userActivity(code: cocoascript.INStartCallIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INStartCallIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/instartcallintentresponse/3165953-code
  code(): cocoascript.INStartCallIntentResponseCode;
  setCode(): void;
  // 
  alloc():cocoascript.INStartCallIntentResponse;
  // 
  init():cocoascript.INStartCallIntentResponse;
}
}
declare const INStartCallIntentResponse: cocoascript.INStartCallIntentResponse;

