declare namespace cocoascript {
/**
 * Your app’s response to a search call history intent.
 * doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintentresponse
 */
interface INSearchCallHistoryIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintentresponse/1638691-initwithcode
  initWithCode_userActivity(code: cocoascript.INSearchCallHistoryIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSearchCallHistoryIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintentresponse/1823492-code
  code(): cocoascript.INSearchCallHistoryIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintentresponse/2873252-callrecords
  callRecords(): cocoascript.INCallRecord;
  setCallRecords(): void;
  // 
  alloc():cocoascript.INSearchCallHistoryIntentResponse;
  // 
  init():cocoascript.INSearchCallHistoryIntentResponse;
}
}
declare const INSearchCallHistoryIntentResponse: cocoascript.INSearchCallHistoryIntentResponse;

