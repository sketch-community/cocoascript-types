declare namespace cocoascript {
  /**
   * A resolution result for a mass associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/inmassresolutionresult
   */
  interface INMassResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INMassResolutionResult;
    //
    init():cocoascript.INMassResolutionResult;
  }
}

declare const INMassResolutionResult: cocoascript.INMassResolutionResult;
