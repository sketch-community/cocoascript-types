declare namespace cocoascript {
  /**
   * A resolution result for a time interval associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/intimeintervalresolutionresult
   */
  interface INTimeIntervalResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INTimeIntervalResolutionResult;
    //
    init():cocoascript.INTimeIntervalResolutionResult;
  }
}

declare const INTimeIntervalResolutionResult: cocoascript.INTimeIntervalResolutionResult;
