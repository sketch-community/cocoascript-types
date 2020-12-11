declare namespace cocoascript {
  /**
   * A resolution result for the types of destinations when adding media.
   * doc://com.apple.documentation/documentation/sirikit/inaddmediamediadestinationresolutionresult
   */
  interface INAddMediaMediaDestinationResolutionResult extends INMediaDestinationResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/inaddmediamediadestinationresolutionresult/3180117-initwithmediadestinationresoluti
    initWithMediaDestinationResolutionResult(mediaDestinationResolutionResult: cocoascript.INMediaDestinationResolutionResult):cocoascript.INAddMediaMediaDestinationResolutionResult;
    //
    alloc():cocoascript.INAddMediaMediaDestinationResolutionResult;
    //
    init():cocoascript.INAddMediaMediaDestinationResolutionResult;
  }
}

declare const INAddMediaMediaDestinationResolutionResult: cocoascript.INAddMediaMediaDestinationResolutionResult;
