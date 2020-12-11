declare namespace cocoascript {
  /**
   * Your app’s response to a set profile in car intent.
   * doc://com.apple.documentation/documentation/sirikit/insetprofileincarintentresponse
   */
  interface INSetProfileInCarIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintentresponse/2102641-initwithcode
    initWithCode_userActivity(code: cocoascript.INSetProfileInCarIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSetProfileInCarIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintentresponse/2102634-code
    code(): cocoascript.INSetProfileInCarIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INSetProfileInCarIntentResponse;
    //
    init():cocoascript.INSetProfileInCarIntentResponse;
  }
}

declare const INSetProfileInCarIntentResponse: cocoascript.INSetProfileInCarIntentResponse;
