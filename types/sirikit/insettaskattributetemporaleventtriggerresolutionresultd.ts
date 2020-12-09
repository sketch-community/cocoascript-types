declare namespace cocoascript {
/**
 * A resolution result for a temporal event trigger.
 * doc://com.apple.documentation/documentation/sirikit/insettaskattributetemporaleventtriggerresolutionresult
 */
interface INSetTaskAttributeTemporalEventTriggerResolutionResult extends INTemporalEventTriggerResolutionResult {
  // doc://com.apple.documentation/documentation/sirikit/insettaskattributetemporaleventtriggerresolutionresult/3327012-initwithtemporaleventtriggerreso
  initWithTemporalEventTriggerResolutionResult(temporalEventTriggerResolutionResult: cocoascript.INTemporalEventTriggerResolutionResult):cocoascript.INSetTaskAttributeTemporalEventTriggerResolutionResult;
  // 
  alloc():cocoascript.INSetTaskAttributeTemporalEventTriggerResolutionResult;
  // 
  init():cocoascript.INSetTaskAttributeTemporalEventTriggerResolutionResult;
}
}
declare const INSetTaskAttributeTemporalEventTriggerResolutionResult: cocoascript.INSetTaskAttributeTemporalEventTriggerResolutionResult;

