declare namespace cocoascript {
  /**
   * A resolution result for the user account that provides the funds to pay a bill.
   * doc://com.apple.documentation/documentation/sirikit/inpaymentaccountresolutionresult
   */
  interface INPaymentAccountResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INPaymentAccountResolutionResult;
    //
    init():cocoascript.INPaymentAccountResolutionResult;
  }
}

declare const INPaymentAccountResolutionResult: cocoascript.INPaymentAccountResolutionResult;
