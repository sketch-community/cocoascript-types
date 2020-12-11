declare namespace cocoascript {
  /**
   * The handler interface for adding tasks to a task list.
   * doc://com.apple.documentation/documentation/sirikit/inaddtasksintenthandling
   */
  interface INAddTasksIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintenthandling/3131041-resolvetargettasklistforaddtasks
    resolveTargetTaskListForAddTasks_completion(intent: cocoascript.INAddTasksIntent, completion: cocoascript.INAddTasksTargetTaskListResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintenthandling/2874166-resolvetasktitlesforaddtasks
    resolveTaskTitlesForAddTasks_withCompletion(intent: cocoascript.INAddTasksIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintenthandling/2874168-resolvespatialeventtriggerforadd
    resolveSpatialEventTriggerForAddTasks_withCompletion(intent: cocoascript.INAddTasksIntent, completion: cocoascript.INSpatialEventTriggerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintenthandling/3327000-resolvetemporaleventtriggerforad
    resolveTemporalEventTriggerForAddTasks_completion(intent: cocoascript.INAddTasksIntent, completion: cocoascript.INAddTasksTemporalEventTriggerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintenthandling/3227906-resolvepriorityforaddtasks
    resolvePriorityForAddTasks_withCompletion(intent: cocoascript.INAddTasksIntent, completion: cocoascript.INTaskPriorityResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintenthandling/2878113-resolvetargettasklistforaddtasks
    resolveTargetTaskListForAddTasks_withCompletion(intent: cocoascript.INAddTasksIntent, completion: cocoascript.INTaskListResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintenthandling/2874164-resolvetemporaleventtriggerforad
    resolveTemporalEventTriggerForAddTasks_withCompletion(intent: cocoascript.INAddTasksIntent, completion: cocoascript.INTemporalEventTriggerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintenthandling/2874165-confirmaddtasks
    confirmAddTasks_completion(intent: cocoascript.INAddTasksIntent, completion: cocoascript.INAddTasksIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintenthandling/2874162-handleaddtasks
    handleAddTasks_completion(intent: cocoascript.INAddTasksIntent, completion: cocoascript.INAddTasksIntentResponse):void;
  }
}
