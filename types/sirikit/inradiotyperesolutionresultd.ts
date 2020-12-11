declare namespace cocoascript {
  /**
   * A resolution result for the type of radio to use in a car.
   * doc://com.apple.documentation/documentation/sirikit/inradiotyperesolutionresult
   */
  interface INRadioTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INRadioTypeResolutionResult;
    //
    init():cocoascript.INRadioTypeResolutionResult;
  }
}

declare const INRadioTypeResolutionResult: cocoascript.INRadioTypeResolutionResult;
