declare namespace cocoascript {
/**
 * Your app’s response to a send ride feedback intent.
 * doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintentresponse
 */
interface INSendRideFeedbackIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintentresponse/2875679-initwithcode
  initWithCode_userActivity(code: cocoascript.INSendRideFeedbackIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSendRideFeedbackIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintentresponse/2875626-code
  code(): cocoascript.INSendRideFeedbackIntentResponseCode;
  setCode(): void;
  // 
  alloc():cocoascript.INSendRideFeedbackIntentResponse;
  // 
  init():cocoascript.INSendRideFeedbackIntentResponse;
}
}
declare const INSendRideFeedbackIntentResponse: cocoascript.INSendRideFeedbackIntentResponse;

