declare namespace cocoascript {
  /**
   * Your response to a request to modify the attributes of an existing task.
   * doc://com.apple.documentation/documentation/sirikit/insettaskattributeintentresponse
   */
  interface INSetTaskAttributeIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintentresponse/2873807-initwithcode
    initWithCode_userActivity(code: cocoascript.INSetTaskAttributeIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSetTaskAttributeIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintentresponse/2873802-code
    code(): cocoascript.INSetTaskAttributeIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintentresponse/2873806-modifiedtask
    modifiedTask(): cocoascript.INTask;
    setModifiedTask(): void;
    //
    alloc():cocoascript.INSetTaskAttributeIntentResponse;
    //
    init():cocoascript.INSetTaskAttributeIntentResponse;
  }
}

declare const INSetTaskAttributeIntentResponse: cocoascript.INSetTaskAttributeIntentResponse;
