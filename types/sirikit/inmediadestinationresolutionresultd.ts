declare namespace cocoascript {
  /**
   * A resolution result for the media destination types.
   * doc://com.apple.documentation/documentation/sirikit/inmediadestinationresolutionresult
   */
  interface INMediaDestinationResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INMediaDestinationResolutionResult;
    //
    init():cocoascript.INMediaDestinationResolutionResult;
  }
}

declare const INMediaDestinationResolutionResult: cocoascript.INMediaDestinationResolutionResult;
