declare namespace cocoascript {
  /**
   * A resolution result for the requested playback queue location.
   * doc://com.apple.documentation/documentation/sirikit/inplaybackqueuelocationresolutionresult
   */
  interface INPlaybackQueueLocationResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INPlaybackQueueLocationResolutionResult;
    //
    init():cocoascript.INPlaybackQueueLocationResolutionResult;
  }
}

declare const INPlaybackQueueLocationResolutionResult: cocoascript.INPlaybackQueueLocationResolutionResult;
