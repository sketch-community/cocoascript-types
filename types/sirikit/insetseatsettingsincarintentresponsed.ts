declare namespace cocoascript {
/**
 * Your app’s response to a set seat settings in car intent.
 * doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintentresponse
 */
interface INSetSeatSettingsInCarIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintentresponse/2102255-initwithcode
  initWithCode_userActivity(code: cocoascript.INSetSeatSettingsInCarIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSetSeatSettingsInCarIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintentresponse/2102256-code
  code(): cocoascript.INSetSeatSettingsInCarIntentResponseCode;
  setCode(): void;
  // 
  alloc():cocoascript.INSetSeatSettingsInCarIntentResponse;
  // 
  init():cocoascript.INSetSeatSettingsInCarIntentResponse;
}
}
declare const INSetSeatSettingsInCarIntentResponse: cocoascript.INSetSeatSettingsInCarIntentResponse;

