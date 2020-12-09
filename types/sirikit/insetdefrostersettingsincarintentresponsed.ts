declare namespace cocoascript {
/**
 * Your app’s response to a set defroster settings in car intent.
 * doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintentresponse
 */
interface INSetDefrosterSettingsInCarIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintentresponse/1648507-initwithcode
  initWithCode_userActivity(code: cocoascript.INSetDefrosterSettingsInCarIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSetDefrosterSettingsInCarIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintentresponse/1829409-code
  code(): cocoascript.INSetDefrosterSettingsInCarIntentResponseCode;
  setCode(): void;
  // 
  alloc():cocoascript.INSetDefrosterSettingsInCarIntentResponse;
  // 
  init():cocoascript.INSetDefrosterSettingsInCarIntentResponse;
}
}
declare const INSetDefrosterSettingsInCarIntentResponse: cocoascript.INSetDefrosterSettingsInCarIntentResponse;

