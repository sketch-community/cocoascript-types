declare namespace cocoascript {
  /**
   * A resolution result for a file associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/infileresolutionresult
   */
  interface INFileResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INFileResolutionResult;
    //
    init():cocoascript.INFileResolutionResult;
  }
}

declare const INFileResolutionResult: cocoascript.INFileResolutionResult;
