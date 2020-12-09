declare namespace cocoascript {
/**
 * A request to add tasks to a task list.
 * doc://com.apple.documentation/documentation/sirikit/inaddtasksintent
 */
interface INAddTasksIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/inaddtasksintent/3227904-initwithtargettasklist
  initWithTargetTaskList_taskTitles_spatialEventTrigger_temporalEventTrigger_priority(targetTaskList: cocoascript.INTaskList, taskTitles: cocoascript.INSpeakableString, spatialEventTrigger: cocoascript.INSpatialEventTrigger, temporalEventTrigger: cocoascript.INTemporalEventTrigger, priority: cocoascript.INTaskPriority):cocoascript.INAddTasksIntent;
  // doc://com.apple.documentation/documentation/sirikit/inaddtasksintent/2878111-initwithtargettasklist
  initWithTargetTaskList_taskTitles_spatialEventTrigger_temporalEventTrigger(targetTaskList: cocoascript.INTaskList, taskTitles: cocoascript.INSpeakableString, spatialEventTrigger: cocoascript.INSpatialEventTrigger, temporalEventTrigger: cocoascript.INTemporalEventTrigger):cocoascript.INAddTasksIntent;
  // doc://com.apple.documentation/documentation/sirikit/inaddtasksintent/2878112-targettasklist
  targetTaskList(): cocoascript.INTaskList;
  setTargetTaskList(): void;
  // doc://com.apple.documentation/documentation/sirikit/inaddtasksintent/2874158-tasktitles
  taskTitles(): cocoascript.INSpeakableString;
  setTaskTitles(): void;
  // doc://com.apple.documentation/documentation/sirikit/inaddtasksintent/3227905-priority
  priority(): cocoascript.INTaskPriority;
  setPriority(): void;
  // doc://com.apple.documentation/documentation/sirikit/inaddtasksintent/2874163-spatialeventtrigger
  spatialEventTrigger(): cocoascript.INSpatialEventTrigger;
  setSpatialEventTrigger(): void;
  // doc://com.apple.documentation/documentation/sirikit/inaddtasksintent/2874159-temporaleventtrigger
  temporalEventTrigger(): cocoascript.INTemporalEventTrigger;
  setTemporalEventTrigger(): void;
  // 
  alloc():cocoascript.INAddTasksIntent;
  // 
  init():cocoascript.INAddTasksIntent;
}
}
declare const INAddTasksIntent: cocoascript.INAddTasksIntent;

