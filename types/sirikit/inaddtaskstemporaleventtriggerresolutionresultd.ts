declare namespace cocoascript {
/**
 * A resolution result for a temporal event trigger.
 * doc://com.apple.documentation/documentation/sirikit/inaddtaskstemporaleventtriggerresolutionresult
 */
interface INAddTasksTemporalEventTriggerResolutionResult extends INTemporalEventTriggerResolutionResult {
  // doc://com.apple.documentation/documentation/sirikit/inaddtaskstemporaleventtriggerresolutionresult/3327002-initwithtemporaleventtriggerreso
  initWithTemporalEventTriggerResolutionResult(temporalEventTriggerResolutionResult: cocoascript.INTemporalEventTriggerResolutionResult):cocoascript.INAddTasksTemporalEventTriggerResolutionResult;
  // 
  alloc():cocoascript.INAddTasksTemporalEventTriggerResolutionResult;
  // 
  init():cocoascript.INAddTasksTemporalEventTriggerResolutionResult;
}
}
declare const INAddTasksTemporalEventTriggerResolutionResult: cocoascript.INAddTasksTemporalEventTriggerResolutionResult;

