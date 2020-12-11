declare namespace cocoascript {
  /**
   * A resolution result for the recipient of a bill payment.
   * doc://com.apple.documentation/documentation/sirikit/inbillpayeeresolutionresult
   */
  interface INBillPayeeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INBillPayeeResolutionResult;
    //
    init():cocoascript.INBillPayeeResolutionResult;
  }
}

declare const INBillPayeeResolutionResult: cocoascript.INBillPayeeResolutionResult;
