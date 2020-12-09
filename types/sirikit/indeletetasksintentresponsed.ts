declare namespace cocoascript {
/**
 * Your response to a request to delete tasks.
 * doc://com.apple.documentation/documentation/sirikit/indeletetasksintentresponse
 */
interface INDeleteTasksIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/indeletetasksintentresponse/3141697-initwithcode
  initWithCode_userActivity(code: cocoascript.INDeleteTasksIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INDeleteTasksIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/indeletetasksintentresponse/3141696-deletedtasks
  deletedTasks(): cocoascript.INTask;
  setDeletedTasks(): void;
  // doc://com.apple.documentation/documentation/sirikit/indeletetasksintentresponse/3141695-code
  code(): cocoascript.INDeleteTasksIntentResponseCode;
  setCode(): void;
  // 
  alloc():cocoascript.INDeleteTasksIntentResponse;
  // 
  init():cocoascript.INDeleteTasksIntentResponse;
}
}
declare const INDeleteTasksIntentResponse: cocoascript.INDeleteTasksIntentResponse;

