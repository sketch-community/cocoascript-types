declare namespace cocoascript {
  /**
   * An intents handler's response to an update media affinity intent.
   * doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintentresponse
   */
  interface INUpdateMediaAffinityIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintentresponse/3074324-initwithcode
    initWithCode_userActivity(code: cocoascript.INUpdateMediaAffinityIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INUpdateMediaAffinityIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintentresponse/3074323-code
    code(): cocoascript.INUpdateMediaAffinityIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INUpdateMediaAffinityIntentResponse;
    //
    init():cocoascript.INUpdateMediaAffinityIntentResponse;
  }
}

declare const INUpdateMediaAffinityIntentResponse: cocoascript.INUpdateMediaAffinityIntentResponse;
