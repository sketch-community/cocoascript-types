declare namespace cocoascript {
  /**
   * An intents handler's response to an add media intent.
   * doc://com.apple.documentation/documentation/sirikit/inaddmediaintentresponse
   */
  interface INAddMediaIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inaddmediaintentresponse/3074196-initwithcode
    initWithCode_userActivity(code: cocoascript.INAddMediaIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INAddMediaIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inaddmediaintentresponse/3074195-code
    code(): cocoascript.INAddMediaIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INAddMediaIntentResponse;
    //
    init():cocoascript.INAddMediaIntentResponse;
  }
}

declare const INAddMediaIntentResponse: cocoascript.INAddMediaIntentResponse;
