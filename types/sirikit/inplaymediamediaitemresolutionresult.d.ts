declare namespace cocoascript {
  /**
   * A resolution result for the media item to play.
   * doc://com.apple.documentation/documentation/sirikit/inplaymediamediaitemresolutionresult
   */
  interface INPlayMediaMediaItemResolutionResult extends INMediaItemResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/inplaymediamediaitemresolutionresult/3180133-initwithmediaitemresolutionresul
    initWithMediaItemResolutionResult(mediaItemResolutionResult: cocoascript.INMediaItemResolutionResult):cocoascript.INPlayMediaMediaItemResolutionResult;
    //
    alloc():cocoascript.INPlayMediaMediaItemResolutionResult;
    //
    init():cocoascript.INPlayMediaMediaItemResolutionResult;
  }
}

declare const INPlayMediaMediaItemResolutionResult: cocoascript.INPlayMediaMediaItemResolutionResult;
