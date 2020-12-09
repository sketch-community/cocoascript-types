declare namespace cocoascript {
/**
 * A resolution result that adds tasks to a target task list.
 * doc://com.apple.documentation/documentation/sirikit/inaddtaskstargettasklistresolutionresult
 */
interface INAddTasksTargetTaskListResolutionResult extends INTaskListResolutionResult {
  // doc://com.apple.documentation/documentation/sirikit/inaddtaskstargettasklistresolutionresult/3131046-initwithtasklistresolutionresult
  initWithTaskListResolutionResult(taskListResolutionResult: cocoascript.INTaskListResolutionResult):cocoascript.INAddTasksTargetTaskListResolutionResult;
  // 
  alloc():cocoascript.INAddTasksTargetTaskListResolutionResult;
  // 
  init():cocoascript.INAddTasksTargetTaskListResolutionResult;
}
}
declare const INAddTasksTargetTaskListResolutionResult: cocoascript.INAddTasksTargetTaskListResolutionResult;

