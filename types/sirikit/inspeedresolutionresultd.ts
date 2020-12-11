declare namespace cocoascript {
  /**
   * A resolution result for a speed associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/inspeedresolutionresult
   */
  interface INSpeedResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INSpeedResolutionResult;
    //
    init():cocoascript.INSpeedResolutionResult;
  }
}

declare const INSpeedResolutionResult: cocoascript.INSpeedResolutionResult;
