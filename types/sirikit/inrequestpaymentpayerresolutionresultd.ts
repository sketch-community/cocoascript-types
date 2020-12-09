declare namespace cocoascript {
/**
 * A resolution result for the person making the payment.
 * doc://com.apple.documentation/documentation/sirikit/inrequestpaymentpayerresolutionresult
 */
interface INRequestPaymentPayerResolutionResult extends INPersonResolutionResult {
  // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentpayerresolutionresult/2915217-initwithpersonresolutionresult
  initWithPersonResolutionResult(personResolutionResult: cocoascript.INPersonResolutionResult):cocoascript.INRequestPaymentPayerResolutionResult;
  // 
  alloc():cocoascript.INRequestPaymentPayerResolutionResult;
  // 
  init():cocoascript.INRequestPaymentPayerResolutionResult;
}
}
declare const INRequestPaymentPayerResolutionResult: cocoascript.INRequestPaymentPayerResolutionResult;

