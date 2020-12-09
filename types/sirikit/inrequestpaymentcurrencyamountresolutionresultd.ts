declare namespace cocoascript {
/**
 * A resolution result for the currency amount associated with a payment request.
 * doc://com.apple.documentation/documentation/sirikit/inrequestpaymentcurrencyamountresolutionresult
 */
interface INRequestPaymentCurrencyAmountResolutionResult extends INCurrencyAmountResolutionResult {
  // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentcurrencyamountresolutionresult/2915220-initwithcurrencyamountresolution
  initWithCurrencyAmountResolutionResult(currencyAmountResolutionResult: cocoascript.INCurrencyAmountResolutionResult):cocoascript.INRequestPaymentCurrencyAmountResolutionResult;
  // 
  alloc():cocoascript.INRequestPaymentCurrencyAmountResolutionResult;
  // 
  init():cocoascript.INRequestPaymentCurrencyAmountResolutionResult;
}
}
declare const INRequestPaymentCurrencyAmountResolutionResult: cocoascript.INRequestPaymentCurrencyAmountResolutionResult;

