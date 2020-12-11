declare namespace cocoascript {
  /**
   * Your app’s response to a request to create a task list.
   * doc://com.apple.documentation/documentation/sirikit/increatetasklistintentresponse
   */
  interface INCreateTaskListIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/increatetasklistintentresponse/2874148-initwithcode
    initWithCode_userActivity(code: cocoascript.INCreateTaskListIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INCreateTaskListIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/increatetasklistintentresponse/2874147-code
    code(): cocoascript.INCreateTaskListIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/increatetasklistintentresponse/2880162-createdtasklist
    createdTaskList(): cocoascript.INTaskList;
    setCreatedTaskList(): void;
    //
    alloc():cocoascript.INCreateTaskListIntentResponse;
    //
    init():cocoascript.INCreateTaskListIntentResponse;
  }
}

declare const INCreateTaskListIntentResponse: cocoascript.INCreateTaskListIntentResponse;
