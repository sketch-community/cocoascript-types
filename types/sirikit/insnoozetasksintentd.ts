declare namespace cocoascript {
/**
 * A request to snooze one or more tasks.
 * doc://com.apple.documentation/documentation/sirikit/insnoozetasksintent
 */
interface INSnoozeTasksIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintent/3141841-initwithtasks
  initWithTasks_nextTriggerTime_all(tasks: cocoascript.INTask, nextTriggerTime: cocoascript.INDateComponentsRange, all: cocoascript.NSNumber):cocoascript.INSnoozeTasksIntent;
  // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintent/3141842-nexttriggertime
  nextTriggerTime(): cocoascript.INDateComponentsRange;
  setNextTriggerTime(): void;
  // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintent/3141843-tasks
  tasks(): cocoascript.INTask;
  setTasks(): void;
  // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintent/3141840-all
  all(): cocoascript.NSNumber;
  setAll(): void;
  // 
  alloc():cocoascript.INSnoozeTasksIntent;
  // 
  init():cocoascript.INSnoozeTasksIntent;
}
}
declare const INSnoozeTasksIntent: cocoascript.INSnoozeTasksIntent;

