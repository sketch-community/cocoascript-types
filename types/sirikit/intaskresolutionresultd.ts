declare namespace cocoascript {
  /**
   * A resolution result for a single task within a task list.
   * doc://com.apple.documentation/documentation/sirikit/intaskresolutionresult
   */
  interface INTaskResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INTaskResolutionResult;
    //
    init():cocoascript.INTaskResolutionResult;
  }
}

declare const INTaskResolutionResult: cocoascript.INTaskResolutionResult;
