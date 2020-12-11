declare namespace cocoascript {
  /**
   * A resolution result that determines the playback speed of a media item.
   * doc://com.apple.documentation/documentation/sirikit/inplaymediaplaybackspeedresolutionresult
   */
  interface INPlayMediaPlaybackSpeedResolutionResult extends INDoubleResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaplaybackspeedresolutionresult/3180142-initwithdoubleresolutionresult
    initWithDoubleResolutionResult(doubleResolutionResult: cocoascript.INDoubleResolutionResult):cocoascript.INPlayMediaPlaybackSpeedResolutionResult;
    //
    alloc():cocoascript.INPlayMediaPlaybackSpeedResolutionResult;
    //
    init():cocoascript.INPlayMediaPlaybackSpeedResolutionResult;
  }
}

declare const INPlayMediaPlaybackSpeedResolutionResult: cocoascript.INPlayMediaPlaybackSpeedResolutionResult;
