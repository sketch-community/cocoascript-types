declare namespace cocoascript {
/**
 * Your app’s response to a resume workout intent.
 * doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintentresponse
 */
interface INResumeWorkoutIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintentresponse/1638616-initwithcode
  initWithCode_userActivity(code: cocoascript.INResumeWorkoutIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INResumeWorkoutIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintentresponse/1833295-code
  code(): cocoascript.INResumeWorkoutIntentResponseCode;
  setCode(): void;
  // 
  alloc():cocoascript.INResumeWorkoutIntentResponse;
  // 
  init():cocoascript.INResumeWorkoutIntentResponse;
}
}
declare const INResumeWorkoutIntentResponse: cocoascript.INResumeWorkoutIntentResponse;

