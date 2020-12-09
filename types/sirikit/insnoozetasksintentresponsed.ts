declare namespace cocoascript {
/**
 * Your response to a delete tasks request.
 * doc://com.apple.documentation/documentation/sirikit/insnoozetasksintentresponse
 */
interface INSnoozeTasksIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintentresponse/3141851-initwithcode
  initWithCode_userActivity(code: cocoascript.INSnoozeTasksIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSnoozeTasksIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintentresponse/3141850-code
  code(): cocoascript.INSnoozeTasksIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintentresponse/3141852-snoozedtasks
  snoozedTasks(): cocoascript.INTask;
  setSnoozedTasks(): void;
  // 
  alloc():cocoascript.INSnoozeTasksIntentResponse;
  // 
  init():cocoascript.INSnoozeTasksIntentResponse;
}
}
declare const INSnoozeTasksIntentResponse: cocoascript.INSnoozeTasksIntentResponse;

