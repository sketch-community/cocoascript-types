declare namespace cocoascript {
/**
 * Your app’s response to a start workout intent.
 * doc://com.apple.documentation/documentation/sirikit/instartworkoutintentresponse
 */
interface INStartWorkoutIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/instartworkoutintentresponse/1638220-initwithcode
  initWithCode_userActivity(code: cocoascript.INStartWorkoutIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INStartWorkoutIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/instartworkoutintentresponse/1833305-code
  code(): cocoascript.INStartWorkoutIntentResponseCode;
  setCode(): void;
  // 
  alloc():cocoascript.INStartWorkoutIntentResponse;
  // 
  init():cocoascript.INStartWorkoutIntentResponse;
}
}
declare const INStartWorkoutIntentResponse: cocoascript.INStartWorkoutIntentResponse;

