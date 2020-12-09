declare namespace cocoascript {
/**
 * A resolution result for the currency amount to send to another user.
 * doc://com.apple.documentation/documentation/sirikit/insendpaymentcurrencyamountresolutionresult
 */
interface INSendPaymentCurrencyAmountResolutionResult extends INCurrencyAmountResolutionResult {
  // doc://com.apple.documentation/documentation/sirikit/insendpaymentcurrencyamountresolutionresult/2915223-initwithcurrencyamountresolution
  initWithCurrencyAmountResolutionResult(currencyAmountResolutionResult: cocoascript.INCurrencyAmountResolutionResult):cocoascript.INSendPaymentCurrencyAmountResolutionResult;
  // 
  alloc():cocoascript.INSendPaymentCurrencyAmountResolutionResult;
  // 
  init():cocoascript.INSendPaymentCurrencyAmountResolutionResult;
}
}
declare const INSendPaymentCurrencyAmountResolutionResult: cocoascript.INSendPaymentCurrencyAmountResolutionResult;

