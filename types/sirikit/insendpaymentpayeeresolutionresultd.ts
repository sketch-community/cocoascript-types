declare namespace cocoascript {
/**
 * A resolution result for the recipient of a payment.
 * doc://com.apple.documentation/documentation/sirikit/insendpaymentpayeeresolutionresult
 */
interface INSendPaymentPayeeResolutionResult extends INPersonResolutionResult {
  // doc://com.apple.documentation/documentation/sirikit/insendpaymentpayeeresolutionresult/2914909-initwithpersonresolutionresult
  initWithPersonResolutionResult(personResolutionResult: cocoascript.INPersonResolutionResult):cocoascript.INSendPaymentPayeeResolutionResult;
  // 
  alloc():cocoascript.INSendPaymentPayeeResolutionResult;
  // 
  init():cocoascript.INSendPaymentPayeeResolutionResult;
}
}
declare const INSendPaymentPayeeResolutionResult: cocoascript.INSendPaymentPayeeResolutionResult;

