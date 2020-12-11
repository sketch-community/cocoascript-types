declare namespace cocoascript {
  /**
   * A resolution result for the status of a task.
   * doc://com.apple.documentation/documentation/sirikit/intaskstatusresolutionresult
   */
  interface INTaskStatusResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INTaskStatusResolutionResult;
    //
    init():cocoascript.INTaskStatusResolutionResult;
  }
}

declare const INTaskStatusResolutionResult: cocoascript.INTaskStatusResolutionResult;
