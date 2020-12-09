declare namespace cocoascript {
/**
 * Your app’s response to a set audio source in car intent.
 * doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintentresponse
 */
interface INSetAudioSourceInCarIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintentresponse/1648501-initwithcode
  initWithCode_userActivity(code: cocoascript.INSetAudioSourceInCarIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSetAudioSourceInCarIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintentresponse/1833289-code
  code(): cocoascript.INSetAudioSourceInCarIntentResponseCode;
  setCode(): void;
  // 
  alloc():cocoascript.INSetAudioSourceInCarIntentResponse;
  // 
  init():cocoascript.INSetAudioSourceInCarIntentResponse;
}
}
declare const INSetAudioSourceInCarIntentResponse: cocoascript.INSetAudioSourceInCarIntentResponse;

