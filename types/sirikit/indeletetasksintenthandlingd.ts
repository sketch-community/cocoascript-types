declare namespace cocoascript {
/**
 * An interface that handles requests to delete tasks from a task list.
 * doc://com.apple.documentation/documentation/sirikit/indeletetasksintenthandling
 */
interface INDeleteTasksIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/indeletetasksintenthandling/3141692-resolvetasklistfordeletetasks
  resolveTaskListForDeleteTasks_withCompletion(intent: cocoascript.INDeleteTasksIntent, completion: cocoascript.INDeleteTasksTaskListResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/indeletetasksintenthandling/3141693-resolvetasksfordeletetasks
  resolveTasksForDeleteTasks_withCompletion(intent: cocoascript.INDeleteTasksIntent, completion: cocoascript.INDeleteTasksTaskResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/indeletetasksintenthandling/3141690-confirmdeletetasks
  confirmDeleteTasks_completion(intent: cocoascript.INDeleteTasksIntent, completion: cocoascript.INDeleteTasksIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/indeletetasksintenthandling/3141691-handledeletetasks
  handleDeleteTasks_completion(intent: cocoascript.INDeleteTasksIntent, completion: cocoascript.INDeleteTasksIntentResponse):void;
}
}

