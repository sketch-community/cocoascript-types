declare namespace cocoascript {
/**
 * Your app’s response to a send payment intent.
 * doc://com.apple.documentation/documentation/sirikit/insendpaymentintentresponse
 */
interface INSendPaymentIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/insendpaymentintentresponse/1639483-initwithcode
  initWithCode_userActivity(code: cocoascript.INSendPaymentIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSendPaymentIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/insendpaymentintentresponse/1829426-code
  code(): cocoascript.INSendPaymentIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/insendpaymentintentresponse/1638625-paymentrecord
  paymentRecord(): cocoascript.INPaymentRecord;
  setPaymentRecord(): void;
  // 
  alloc():cocoascript.INSendPaymentIntentResponse;
  // 
  init():cocoascript.INSendPaymentIntentResponse;
}
}
declare const INSendPaymentIntentResponse: cocoascript.INSendPaymentIntentResponse;

