declare namespace cocoascript {
  /**
   * The interface that handles media search requests.
   * doc://com.apple.documentation/documentation/sirikit/insearchformediaintenthandling
   */
  interface INSearchForMediaIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insearchformediaintenthandling/3180154-resolvemediaitemsforsearchformed
    resolveMediaItemsForSearchForMedia_withCompletion(intent: cocoascript.INSearchForMediaIntent, completion: cocoascript.INSearchForMediaMediaItemResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformediaintenthandling/3074297-confirmsearchformedia
    confirmSearchForMedia_completion(intent: cocoascript.INSearchForMediaIntent, completion: cocoascript.INSearchForMediaIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformediaintenthandling/3074298-handlesearchformedia
    handleSearchForMedia_completion(intent: cocoascript.INSearchForMediaIntent, completion: cocoascript.INSearchForMediaIntentResponse):void;
  }
}
