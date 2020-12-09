declare namespace cocoascript {
/**
 * Your response to an intent object. 
 * doc://com.apple.documentation/documentation/sirikit/inintentresponse
 */
interface INIntentResponse extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inintentresponse/1639469-useractivity
  userActivity(): cocoascript.NSUserActivity;
  setUserActivity(): void;
  // 
  alloc():cocoascript.INIntentResponse;
  // 
  init():cocoascript.INIntentResponse;
}
}
declare const INIntentResponse: cocoascript.INIntentResponse;

