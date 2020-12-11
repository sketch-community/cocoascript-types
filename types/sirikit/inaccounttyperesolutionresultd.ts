declare namespace cocoascript {
  /**
   * A resolution result for account types.
   * doc://com.apple.documentation/documentation/sirikit/inaccounttyperesolutionresult
   */
  interface INAccountTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INAccountTypeResolutionResult;
    //
    init():cocoascript.INAccountTypeResolutionResult;
  }
}

declare const INAccountTypeResolutionResult: cocoascript.INAccountTypeResolutionResult;
