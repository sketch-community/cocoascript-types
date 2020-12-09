declare namespace cocoascript {
/**
 * Your app’s response to a request payment intent.
 * doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintentresponse
 */
interface INRequestPaymentIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintentresponse/1638434-initwithcode
  initWithCode_userActivity(code: cocoascript.INRequestPaymentIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INRequestPaymentIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintentresponse/1829451-code
  code(): cocoascript.INRequestPaymentIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintentresponse/1638405-paymentrecord
  paymentRecord(): cocoascript.INPaymentRecord;
  setPaymentRecord(): void;
  // 
  alloc():cocoascript.INRequestPaymentIntentResponse;
  // 
  init():cocoascript.INRequestPaymentIntentResponse;
}
}
declare const INRequestPaymentIntentResponse: cocoascript.INRequestPaymentIntentResponse;

