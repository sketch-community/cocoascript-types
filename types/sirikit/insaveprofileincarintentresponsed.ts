declare namespace cocoascript {
/**
 * Your app’s response to a save profile in car intent.
 * doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintentresponse
 */
interface INSaveProfileInCarIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintentresponse/2102277-initwithcode
  initWithCode_userActivity(code: cocoascript.INSaveProfileInCarIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSaveProfileInCarIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintentresponse/2102282-code
  code(): cocoascript.INSaveProfileInCarIntentResponseCode;
  setCode(): void;
  // 
  alloc():cocoascript.INSaveProfileInCarIntentResponse;
  // 
  init():cocoascript.INSaveProfileInCarIntentResponse;
}
}
declare const INSaveProfileInCarIntentResponse: cocoascript.INSaveProfileInCarIntentResponse;

