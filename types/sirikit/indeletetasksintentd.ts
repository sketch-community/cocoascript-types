declare namespace cocoascript {
/**
 * A request to delete one or more tasks.
 * doc://com.apple.documentation/documentation/sirikit/indeletetasksintent
 */
interface INDeleteTasksIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/indeletetasksintent/3141686-initwithtasklist
  initWithTaskList_tasks_all(taskList: cocoascript.INTaskList, tasks: cocoascript.INTask, all: cocoascript.NSNumber):cocoascript.INDeleteTasksIntent;
  // doc://com.apple.documentation/documentation/sirikit/indeletetasksintent/3141687-tasklist
  taskList(): cocoascript.INTaskList;
  setTaskList(): void;
  // doc://com.apple.documentation/documentation/sirikit/indeletetasksintent/3141688-tasks
  tasks(): cocoascript.INTask;
  setTasks(): void;
  // doc://com.apple.documentation/documentation/sirikit/indeletetasksintent/3141685-all
  all(): cocoascript.NSNumber;
  setAll(): void;
  // 
  alloc():cocoascript.INDeleteTasksIntent;
  // 
  init():cocoascript.INDeleteTasksIntent;
}
}
declare const INDeleteTasksIntent: cocoascript.INDeleteTasksIntent;

