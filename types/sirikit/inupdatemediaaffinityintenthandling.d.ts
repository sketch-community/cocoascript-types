declare namespace cocoascript {
  /**
   * The interface that handles requests to update the user’s preference for a media item.
   * doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintenthandling
   */
  interface INUpdateMediaAffinityIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintenthandling/3074320-resolveaffinitytypeforupdatemedi
    resolveAffinityTypeForUpdateMediaAffinity_withCompletion(intent: cocoascript.INUpdateMediaAffinityIntent, completion: cocoascript.INMediaAffinityTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintenthandling/3074321-resolvemediaitemsforupdatemediaa
    resolveMediaItemsForUpdateMediaAffinity_withCompletion(intent: cocoascript.INUpdateMediaAffinityIntent, completion: cocoascript.INUpdateMediaAffinityMediaItemResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintenthandling/3074318-confirmupdatemediaaffinity
    confirmUpdateMediaAffinity_completion(intent: cocoascript.INUpdateMediaAffinityIntent, completion: cocoascript.INUpdateMediaAffinityIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintenthandling/3074319-handleupdatemediaaffinity
    handleUpdateMediaAffinity_completion(intent: cocoascript.INUpdateMediaAffinityIntent, completion: cocoascript.INUpdateMediaAffinityIntentResponse):void;
  }
}
