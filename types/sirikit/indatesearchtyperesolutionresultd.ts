declare namespace cocoascript {
  /**
   * A resolution result for the types of dates supported by a search.
   * doc://com.apple.documentation/documentation/sirikit/indatesearchtyperesolutionresult
   */
  interface INDateSearchTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INDateSearchTypeResolutionResult;
    //
    init():cocoascript.INDateSearchTypeResolutionResult;
  }
}

declare const INDateSearchTypeResolutionResult: cocoascript.INDateSearchTypeResolutionResult;
