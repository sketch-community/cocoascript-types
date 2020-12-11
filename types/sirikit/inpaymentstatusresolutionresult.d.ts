declare namespace cocoascript {
  /**
   * A resolution result for the payment status of a bill during a search.
   * doc://com.apple.documentation/documentation/sirikit/inpaymentstatusresolutionresult
   */
  interface INPaymentStatusResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INPaymentStatusResolutionResult;
    //
    init():cocoascript.INPaymentStatusResolutionResult;
  }
}

declare const INPaymentStatusResolutionResult: cocoascript.INPaymentStatusResolutionResult;
