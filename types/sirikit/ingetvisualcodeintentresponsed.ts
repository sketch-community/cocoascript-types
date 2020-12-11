declare namespace cocoascript {
  /**
   * Your app’s response to a request for a visual code.
   * doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintentresponse
   */
  interface INGetVisualCodeIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintentresponse/2874021-initwithcode
    initWithCode_userActivity(code: cocoascript.INGetVisualCodeIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INGetVisualCodeIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintentresponse/2874032-code
    code(): cocoascript.INGetVisualCodeIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintentresponse/2874029-visualcodeimage
    visualCodeImage(): cocoascript.INImage;
    setVisualCodeImage(): void;
    //
    alloc():cocoascript.INGetVisualCodeIntentResponse;
    //
    init():cocoascript.INGetVisualCodeIntentResponse;
  }
}

declare const INGetVisualCodeIntentResponse: cocoascript.INGetVisualCodeIntentResponse;
