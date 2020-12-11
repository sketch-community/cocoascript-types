declare namespace cocoascript {
  /**
   * The handler interface for creating task lists.
   * doc://com.apple.documentation/documentation/sirikit/increatetasklistintenthandling
   */
  interface INCreateTaskListIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/increatetasklistintenthandling/2873993-resolvetitleforcreatetasklist
    resolveTitleForCreateTaskList_withCompletion(intent: cocoascript.INCreateTaskListIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/increatetasklistintenthandling/2873991-resolvetasktitlesforcreatetaskli
    resolveTaskTitlesForCreateTaskList_withCompletion(intent: cocoascript.INCreateTaskListIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/increatetasklistintenthandling/2873989-resolvegroupnameforcreatetasklis
    resolveGroupNameForCreateTaskList_withCompletion(intent: cocoascript.INCreateTaskListIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/increatetasklistintenthandling/2873990-confirmcreatetasklist
    confirmCreateTaskList_completion(intent: cocoascript.INCreateTaskListIntent, completion: cocoascript.INCreateTaskListIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/increatetasklistintenthandling/2873996-handlecreatetasklist
    handleCreateTaskList_completion(intent: cocoascript.INCreateTaskListIntent, completion: cocoascript.INCreateTaskListIntentResponse):void;
  }
}
