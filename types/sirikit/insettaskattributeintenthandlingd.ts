declare namespace cocoascript {
/**
 * The handler interface for updating the attributes of an existing task.
 * doc://com.apple.documentation/documentation/sirikit/insettaskattributeintenthandling
 */
interface INSetTaskAttributeIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintenthandling/2878118-resolvetargettaskforsettaskattri
  resolveTargetTaskForSetTaskAttribute_withCompletion(intent: cocoascript.INSetTaskAttributeIntent, completion: cocoascript.INTaskResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintenthandling/2873560-resolvestatusforsettaskattribute
  resolveStatusForSetTaskAttribute_withCompletion(intent: cocoascript.INSetTaskAttributeIntent, completion: cocoascript.INTaskStatusResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintenthandling/2873565-resolvespatialeventtriggerforset
  resolveSpatialEventTriggerForSetTaskAttribute_withCompletion(intent: cocoascript.INSetTaskAttributeIntent, completion: cocoascript.INSpatialEventTriggerResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintenthandling/3327010-resolvetemporaleventtriggerforse
  resolveTemporalEventTriggerForSetTaskAttribute_completion(intent: cocoascript.INSetTaskAttributeIntent, completion: cocoascript.INSetTaskAttributeTemporalEventTriggerResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintenthandling/3141837-resolvepriorityforsettaskattribu
  resolvePriorityForSetTaskAttribute_withCompletion(intent: cocoascript.INSetTaskAttributeIntent, completion: cocoascript.INTaskPriorityResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintenthandling/3141838-resolvetasktitleforsettaskattrib
  resolveTaskTitleForSetTaskAttribute_withCompletion(intent: cocoascript.INSetTaskAttributeIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintenthandling/2873568-resolvetemporaleventtriggerforse
  resolveTemporalEventTriggerForSetTaskAttribute_withCompletion(intent: cocoascript.INSetTaskAttributeIntent, completion: cocoascript.INTemporalEventTriggerResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintenthandling/2873562-confirmsettaskattribute
  confirmSetTaskAttribute_completion(intent: cocoascript.INSetTaskAttributeIntent, completion: cocoascript.INSetTaskAttributeIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintenthandling/2873564-handlesettaskattribute
  handleSetTaskAttribute_completion(intent: cocoascript.INSetTaskAttributeIntent, completion: cocoascript.INSetTaskAttributeIntentResponse):void;
}
}

