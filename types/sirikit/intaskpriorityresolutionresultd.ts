declare namespace cocoascript {
  /**
   * A resolution result for the priority associated with a task.
   * doc://com.apple.documentation/documentation/sirikit/intaskpriorityresolutionresult
   */
  interface INTaskPriorityResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INTaskPriorityResolutionResult;
    //
    init():cocoascript.INTaskPriorityResolutionResult;
  }
}

declare const INTaskPriorityResolutionResult: cocoascript.INTaskPriorityResolutionResult;
