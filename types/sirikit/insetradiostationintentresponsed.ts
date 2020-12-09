declare namespace cocoascript {
/**
 * Your app’s response to a set radio station intent.
 * doc://com.apple.documentation/documentation/sirikit/insetradiostationintentresponse
 */
interface INSetRadioStationIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/insetradiostationintentresponse/1650045-initwithcode
  initWithCode_userActivity(code: cocoascript.INSetRadioStationIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSetRadioStationIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/insetradiostationintentresponse/1833303-code
  code(): cocoascript.INSetRadioStationIntentResponseCode;
  setCode(): void;
  // 
  alloc():cocoascript.INSetRadioStationIntentResponse;
  // 
  init():cocoascript.INSetRadioStationIntentResponse;
}
}
declare const INSetRadioStationIntentResponse: cocoascript.INSetRadioStationIntentResponse;

