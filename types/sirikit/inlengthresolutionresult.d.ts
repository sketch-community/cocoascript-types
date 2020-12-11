declare namespace cocoascript {
  /**
   * A resolution result for a length associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/inlengthresolutionresult
   */
  interface INLengthResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INLengthResolutionResult;
    //
    init():cocoascript.INLengthResolutionResult;
  }
}

declare const INLengthResolutionResult: cocoascript.INLengthResolutionResult;
