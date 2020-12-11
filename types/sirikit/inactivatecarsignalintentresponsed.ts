declare namespace cocoascript {
  /**
   * Your app’s response to a request to activate a car’s signals.
   * doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintentresponse
   */
  interface INActivateCarSignalIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintentresponse/2798997-initwithcode
    initWithCode_userActivity(code: cocoascript.INActivateCarSignalIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INActivateCarSignalIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintentresponse/2799003-code
    code(): cocoascript.INActivateCarSignalIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintentresponse/2798994-signals
    signals(): cocoascript.INCarSignalOptions;
    setSignals(): void;
    //
    alloc():cocoascript.INActivateCarSignalIntentResponse;
    //
    init():cocoascript.INActivateCarSignalIntentResponse;
  }
}

declare const INActivateCarSignalIntentResponse: cocoascript.INActivateCarSignalIntentResponse;
