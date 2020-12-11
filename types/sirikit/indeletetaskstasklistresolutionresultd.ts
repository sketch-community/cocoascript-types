declare namespace cocoascript {
  /**
   * A resolution result for deleting task lists.
   * doc://com.apple.documentation/documentation/sirikit/indeletetaskstasklistresolutionresult
   */
  interface INDeleteTasksTaskListResolutionResult extends INTaskListResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/indeletetaskstasklistresolutionresult/3141706-initwithtasklistresolutionresult
    initWithTaskListResolutionResult(taskListResolutionResult: cocoascript.INTaskListResolutionResult):cocoascript.INDeleteTasksTaskListResolutionResult;
    //
    alloc():cocoascript.INDeleteTasksTaskListResolutionResult;
    //
    init():cocoascript.INDeleteTasksTaskListResolutionResult;
  }
}

declare const INDeleteTasksTaskListResolutionResult: cocoascript.INDeleteTasksTaskListResolutionResult;
