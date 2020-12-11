declare namespace cocoascript {
  /**
   * Your app’s response to a set message attribute intent.
   * doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintentresponse
   */
  interface INSetMessageAttributeIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintentresponse/1831692-initwithcode
    initWithCode_userActivity(code: cocoascript.INSetMessageAttributeIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSetMessageAttributeIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintentresponse/1831687-code
    code(): cocoascript.INSetMessageAttributeIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INSetMessageAttributeIntentResponse;
    //
    init():cocoascript.INSetMessageAttributeIntentResponse;
  }
}

declare const INSetMessageAttributeIntentResponse: cocoascript.INSetMessageAttributeIntentResponse;
