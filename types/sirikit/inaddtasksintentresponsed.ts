declare namespace cocoascript {
/**
 * Your response to a request to add tasks to a task list.
 * doc://com.apple.documentation/documentation/sirikit/inaddtasksintentresponse
 */
interface INAddTasksIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/inaddtasksintentresponse/2874051-initwithcode
  initWithCode_userActivity(code: cocoascript.INAddTasksIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INAddTasksIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/inaddtasksintentresponse/2874042-code
  code(): cocoascript.INAddTasksIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/inaddtasksintentresponse/2874043-addedtasks
  addedTasks(): cocoascript.INTask;
  setAddedTasks(): void;
  // doc://com.apple.documentation/documentation/sirikit/inaddtasksintentresponse/2880149-modifiedtasklist
  modifiedTaskList(): cocoascript.INTaskList;
  setModifiedTaskList(): void;
  // 
  alloc():cocoascript.INAddTasksIntentResponse;
  // 
  init():cocoascript.INAddTasksIntentResponse;
}
}
declare const INAddTasksIntentResponse: cocoascript.INAddTasksIntentResponse;

