declare namespace cocoascript {
  /**
   * Your app’s response to a start audio call intent.
   * doc://com.apple.documentation/documentation/sirikit/instartaudiocallintentresponse
   */
  interface INStartAudioCallIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintentresponse/1638718-initwithcode
    initWithCode_userActivity(code: cocoascript.INStartAudioCallIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INStartAudioCallIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintentresponse/1823483-code
    code(): cocoascript.INStartAudioCallIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INStartAudioCallIntentResponse;
    //
    init():cocoascript.INStartAudioCallIntentResponse;
  }
}

declare const INStartAudioCallIntentResponse: cocoascript.INStartAudioCallIntentResponse;
