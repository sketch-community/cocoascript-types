declare namespace cocoascript {
  /**
   * A resolution result for snoozing a task.
   * doc://com.apple.documentation/documentation/sirikit/insnoozetaskstaskresolutionresult
   */
  interface INSnoozeTasksTaskResolutionResult extends INTaskResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/insnoozetaskstaskresolutionresult/3141861-initwithtaskresolutionresult
    initWithTaskResolutionResult(taskResolutionResult: cocoascript.INTaskResolutionResult):cocoascript.INSnoozeTasksTaskResolutionResult;
    //
    alloc():cocoascript.INSnoozeTasksTaskResolutionResult;
    //
    init():cocoascript.INSnoozeTasksTaskResolutionResult;
  }
}

declare const INSnoozeTasksTaskResolutionResult: cocoascript.INSnoozeTasksTaskResolutionResult;
