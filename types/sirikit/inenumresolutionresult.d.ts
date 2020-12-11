declare namespace cocoascript {
  /**
   * A resolution result for an enumeration associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/inenumresolutionresult
   */
  interface INEnumResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INEnumResolutionResult;
    //
    init():cocoascript.INEnumResolutionResult;
  }
}

declare const INEnumResolutionResult: cocoascript.INEnumResolutionResult;
