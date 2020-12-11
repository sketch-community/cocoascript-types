declare namespace cocoascript {
  /**
   * Your app’s response to a pause workout intent.
   * doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintentresponse
   */
  interface INPauseWorkoutIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintentresponse/1638462-initwithcode
    initWithCode_userActivity(code: cocoascript.INPauseWorkoutIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INPauseWorkoutIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintentresponse/1829799-code
    code(): cocoascript.INPauseWorkoutIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INPauseWorkoutIntentResponse;
    //
    init():cocoascript.INPauseWorkoutIntentResponse;
  }
}

declare const INPauseWorkoutIntentResponse: cocoascript.INPauseWorkoutIntentResponse;
