declare namespace cocoascript {
  /**
   * A resolution result for a volume associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/involumeresolutionresult
   */
  interface INVolumeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INVolumeResolutionResult;
    //
    init():cocoascript.INVolumeResolutionResult;
  }
}

declare const INVolumeResolutionResult: cocoascript.INVolumeResolutionResult;
