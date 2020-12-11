declare namespace cocoascript {
  /**
   * A resolution result for a double value associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/indoubleresolutionresult
   */
  interface INDoubleResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INDoubleResolutionResult;
    //
    init():cocoascript.INDoubleResolutionResult;
  }
}

declare const INDoubleResolutionResult: cocoascript.INDoubleResolutionResult;
