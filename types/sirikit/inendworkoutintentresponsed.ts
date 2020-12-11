declare namespace cocoascript {
  /**
   * Your app’s response to an end workout intent.
   * doc://com.apple.documentation/documentation/sirikit/inendworkoutintentresponse
   */
  interface INEndWorkoutIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inendworkoutintentresponse/1639429-initwithcode
    initWithCode_userActivity(code: cocoascript.INEndWorkoutIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INEndWorkoutIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inendworkoutintentresponse/1833283-code
    code(): cocoascript.INEndWorkoutIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INEndWorkoutIntentResponse;
    //
    init():cocoascript.INEndWorkoutIntentResponse;
  }
}

declare const INEndWorkoutIntentResponse: cocoascript.INEndWorkoutIntentResponse;
