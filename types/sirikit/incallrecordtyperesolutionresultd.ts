declare namespace cocoascript {
  /**
   * A resolution result for the types of calls that your app handled.
   * doc://com.apple.documentation/documentation/sirikit/incallrecordtyperesolutionresult
   */
  interface INCallRecordTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INCallRecordTypeResolutionResult;
    //
    init():cocoascript.INCallRecordTypeResolutionResult;
  }
}

declare const INCallRecordTypeResolutionResult: cocoascript.INCallRecordTypeResolutionResult;
