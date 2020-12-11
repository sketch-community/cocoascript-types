declare namespace cocoascript {
  /**
   * A resolution result for a parameter of an intent object.
   * doc://com.apple.documentation/documentation/sirikit/inintentresolutionresult
   */
  interface INIntentResolutionResult extends NSObject {
    //
    alloc():cocoascript.INIntentResolutionResult;
    //
    init():cocoascript.INIntentResolutionResult;
  }
}

declare const INIntentResolutionResult: cocoascript.INIntentResolutionResult;
