declare namespace cocoascript {
  /**
   * Your app’s response to a cancel workout intent.
   * doc://com.apple.documentation/documentation/sirikit/incancelworkoutintentresponse
   */
  interface INCancelWorkoutIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/incancelworkoutintentresponse/1638270-initwithcode
    initWithCode_userActivity(code: cocoascript.INCancelWorkoutIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INCancelWorkoutIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/incancelworkoutintentresponse/1833315-code
    code(): cocoascript.INCancelWorkoutIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INCancelWorkoutIntentResponse;
    //
    init():cocoascript.INCancelWorkoutIntentResponse;
  }
}

declare const INCancelWorkoutIntentResponse: cocoascript.INCancelWorkoutIntentResponse;
