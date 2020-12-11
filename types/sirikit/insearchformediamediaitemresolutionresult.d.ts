declare namespace cocoascript {
  /**
   * A resolution result for the media item for which to search.
   * doc://com.apple.documentation/documentation/sirikit/insearchformediamediaitemresolutionresult
   */
  interface INSearchForMediaMediaItemResolutionResult extends INMediaItemResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/insearchformediamediaitemresolutionresult/3180156-initwithmediaitemresolutionresul
    initWithMediaItemResolutionResult(mediaItemResolutionResult: cocoascript.INMediaItemResolutionResult):cocoascript.INSearchForMediaMediaItemResolutionResult;
    //
    alloc():cocoascript.INSearchForMediaMediaItemResolutionResult;
    //
    init():cocoascript.INSearchForMediaMediaItemResolutionResult;
  }
}

declare const INSearchForMediaMediaItemResolutionResult: cocoascript.INSearchForMediaMediaItemResolutionResult;
