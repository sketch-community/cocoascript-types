declare namespace cocoascript {
  /**
   * A resolution result for the destination type of a call.
   * doc://com.apple.documentation/documentation/sirikit/incalldestinationtyperesolutionresult
   */
  interface INCallDestinationTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INCallDestinationTypeResolutionResult;
    //
    init():cocoascript.INCallDestinationTypeResolutionResult;
  }
}

declare const INCallDestinationTypeResolutionResult: cocoascript.INCallDestinationTypeResolutionResult;
