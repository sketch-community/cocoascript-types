declare namespace cocoascript {
  /**
   * The handler interface for displaying your app’s visual codes.
   * doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintenthandling
   */
  interface INGetVisualCodeIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintenthandling/2873903-resolvevisualcodetypeforgetvisua
    resolveVisualCodeTypeForGetVisualCode_withCompletion(intent: cocoascript.INGetVisualCodeIntent, completion: cocoascript.INVisualCodeTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintenthandling/2873902-confirmgetvisualcode
    confirmGetVisualCode_completion(intent: cocoascript.INGetVisualCodeIntent, completion: cocoascript.INGetVisualCodeIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintenthandling/2873897-handlegetvisualcode
    handleGetVisualCode_completion(intent: cocoascript.INGetVisualCodeIntent, completion: cocoascript.INGetVisualCodeIntentResponse):void;
  }
}
