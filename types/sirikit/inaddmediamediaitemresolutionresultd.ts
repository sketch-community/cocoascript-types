declare namespace cocoascript {
  /**
   * A resolution result for the media item to add.
   * doc://com.apple.documentation/documentation/sirikit/inaddmediamediaitemresolutionresult
   */
  interface INAddMediaMediaItemResolutionResult extends INMediaItemResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/inaddmediamediaitemresolutionresult/3180122-initwithmediaitemresolutionresul
    initWithMediaItemResolutionResult(mediaItemResolutionResult: cocoascript.INMediaItemResolutionResult):cocoascript.INAddMediaMediaItemResolutionResult;
    //
    alloc():cocoascript.INAddMediaMediaItemResolutionResult;
    //
    init():cocoascript.INAddMediaMediaItemResolutionResult;
  }
}

declare const INAddMediaMediaItemResolutionResult: cocoascript.INAddMediaMediaItemResolutionResult;
