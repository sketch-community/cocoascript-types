declare namespace cocoascript {
  /**
   * The handler interface that snoozes tasks in a task list.
   * doc://com.apple.documentation/documentation/sirikit/insnoozetasksintenthandling
   */
  interface INSnoozeTasksIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintenthandling/3141847-resolvenexttriggertimeforsnoozet
    resolveNextTriggerTimeForSnoozeTasks_withCompletion(intent: cocoascript.INSnoozeTasksIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintenthandling/3141848-resolvetasksforsnoozetasks
    resolveTasksForSnoozeTasks_withCompletion(intent: cocoascript.INSnoozeTasksIntent, completion: cocoascript.INSnoozeTasksTaskResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintenthandling/3141845-confirmsnoozetasks
    confirmSnoozeTasks_completion(intent: cocoascript.INSnoozeTasksIntent, completion: cocoascript.INSnoozeTasksIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintenthandling/3141846-handlesnoozetasks
    handleSnoozeTasks_completion(intent: cocoascript.INSnoozeTasksIntent, completion: cocoascript.INSnoozeTasksIntentResponse):void;
  }
}
