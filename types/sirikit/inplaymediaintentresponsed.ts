declare namespace cocoascript {
/**
 * An intents handler's response to a play media intent.
 * doc://com.apple.documentation/documentation/sirikit/inplaymediaintentresponse
 */
interface INPlayMediaIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/inplaymediaintentresponse/2963024-initwithcode
  initWithCode_userActivity(code: cocoascript.INPlayMediaIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INPlayMediaIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/inplaymediaintentresponse/2963023-code
  code(): cocoascript.INPlayMediaIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/inplaymediaintentresponse/2963025-nowplayinginfo
  nowPlayingInfo(): cocoascript.id;
  setNowPlayingInfo(): void;
  // 
  alloc():cocoascript.INPlayMediaIntentResponse;
  // 
  init():cocoascript.INPlayMediaIntentResponse;
}
}
declare const INPlayMediaIntentResponse: cocoascript.INPlayMediaIntentResponse;

