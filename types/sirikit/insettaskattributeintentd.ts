declare namespace cocoascript {
/**
 * A request to modify the attributes of a task.
 * doc://com.apple.documentation/documentation/sirikit/insettaskattributeintent
 */
interface INSetTaskAttributeIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintent/3141834-initwithtargettask
  initWithTargetTask_taskTitle_status_priority_spatialEventTrigger_temporalEventTrigger(targetTask: cocoascript.INTask, taskTitle: cocoascript.INSpeakableString, status: cocoascript.INTaskStatus, priority: cocoascript.INTaskPriority, spatialEventTrigger: cocoascript.INSpatialEventTrigger, temporalEventTrigger: cocoascript.INTemporalEventTrigger):cocoascript.INSetTaskAttributeIntent;
  // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintent/2878117-initwithtargettask
  initWithTargetTask_status_spatialEventTrigger_temporalEventTrigger(targetTask: cocoascript.INTask, status: cocoascript.INTaskStatus, spatialEventTrigger: cocoascript.INSpatialEventTrigger, temporalEventTrigger: cocoascript.INTemporalEventTrigger):cocoascript.INSetTaskAttributeIntent;
  // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintent/3141835-priority
  priority(): cocoascript.INTaskPriority;
  setPriority(): void;
  // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintent/3141836-tasktitle
  taskTitle(): cocoascript.INSpeakableString;
  setTaskTitle(): void;
  // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintent/2878119-targettask
  targetTask(): cocoascript.INTask;
  setTargetTask(): void;
  // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintent/2873569-status
  status(): cocoascript.INTaskStatus;
  setStatus(): void;
  // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintent/2873567-temporaleventtrigger
  temporalEventTrigger(): cocoascript.INTemporalEventTrigger;
  setTemporalEventTrigger(): void;
  // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintent/2873571-spatialeventtrigger
  spatialEventTrigger(): cocoascript.INSpatialEventTrigger;
  setSpatialEventTrigger(): void;
  // 
  alloc():cocoascript.INSetTaskAttributeIntent;
  // 
  init():cocoascript.INSetTaskAttributeIntent;
}
}
declare const INSetTaskAttributeIntent: cocoascript.INSetTaskAttributeIntent;

