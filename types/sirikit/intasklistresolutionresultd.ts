declare namespace cocoascript {
  /**
   * A resolution result for a list of tasks.
   * doc://com.apple.documentation/documentation/sirikit/intasklistresolutionresult
   */
  interface INTaskListResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INTaskListResolutionResult;
    //
    init():cocoascript.INTaskListResolutionResult;
  }
}

declare const INTaskListResolutionResult: cocoascript.INTaskListResolutionResult;
