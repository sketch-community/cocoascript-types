declare namespace cocoascript {
/**
 * Your app’s response to a request to a search for bills.
 * doc://com.apple.documentation/documentation/sirikit/insearchforbillsintentresponse
 */
interface INSearchForBillsIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintentresponse/2799219-initwithcode
  initWithCode_userActivity(code: cocoascript.INSearchForBillsIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSearchForBillsIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintentresponse/2799216-code
  code(): cocoascript.INSearchForBillsIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintentresponse/2799221-bills
  bills(): cocoascript.INBillDetails;
  setBills(): void;
  // 
  alloc():cocoascript.INSearchForBillsIntentResponse;
  // 
  init():cocoascript.INSearchForBillsIntentResponse;
}
}
declare const INSearchForBillsIntentResponse: cocoascript.INSearchForBillsIntentResponse;

