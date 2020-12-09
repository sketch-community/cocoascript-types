declare namespace cocoascript {
/**
 * A resolution result for deleting tasks.
 * doc://com.apple.documentation/documentation/sirikit/indeletetaskstaskresolutionresult
 */
interface INDeleteTasksTaskResolutionResult extends INTaskResolutionResult {
  // doc://com.apple.documentation/documentation/sirikit/indeletetaskstaskresolutionresult/3141711-initwithtaskresolutionresult
  initWithTaskResolutionResult(taskResolutionResult: cocoascript.INTaskResolutionResult):cocoascript.INDeleteTasksTaskResolutionResult;
  // 
  alloc():cocoascript.INDeleteTasksTaskResolutionResult;
  // 
  init():cocoascript.INDeleteTasksTaskResolutionResult;
}
}
declare const INDeleteTasksTaskResolutionResult: cocoascript.INDeleteTasksTaskResolutionResult;

