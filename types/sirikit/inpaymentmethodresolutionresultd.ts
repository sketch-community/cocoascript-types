declare namespace cocoascript {
  /**
   * Describes the result of resolving a payment method.
   * doc://com.apple.documentation/documentation/sirikit/inpaymentmethodresolutionresult
   */
  interface INPaymentMethodResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INPaymentMethodResolutionResult;
    //
    init():cocoascript.INPaymentMethodResolutionResult;
  }
}

declare const INPaymentMethodResolutionResult: cocoascript.INPaymentMethodResolutionResult;
