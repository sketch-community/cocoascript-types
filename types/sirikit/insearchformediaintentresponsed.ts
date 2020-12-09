declare namespace cocoascript {
/**
 * An intents handler’s response to a search media intent.
 * doc://com.apple.documentation/documentation/sirikit/insearchformediaintentresponse
 */
interface INSearchForMediaIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/insearchformediaintentresponse/3074301-initwithcode
  initWithCode_userActivity(code: cocoascript.INSearchForMediaIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSearchForMediaIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/insearchformediaintentresponse/3074300-code
  code(): cocoascript.INSearchForMediaIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchformediaintentresponse/3074302-mediaitems
  mediaItems(): cocoascript.INMediaItem;
  setMediaItems(): void;
  // 
  alloc():cocoascript.INSearchForMediaIntentResponse;
  // 
  init():cocoascript.INSearchForMediaIntentResponse;
}
}
declare const INSearchForMediaIntentResponse: cocoascript.INSearchForMediaIntentResponse;

