declare namespace cocoascript {
  /**
   * A resolution result for a speakable string object associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/inspeakablestringresolutionresult
   */
  interface INSpeakableStringResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INSpeakableStringResolutionResult;
    //
    init():cocoascript.INSpeakableStringResolutionResult;
  }
}

declare const INSpeakableStringResolutionResult: cocoascript.INSpeakableStringResolutionResult;
