declare namespace cocoascript {
  /**
   * A resolution result for the options applied to a message.
   * doc://com.apple.documentation/documentation/sirikit/inmessageattributeoptionsresolutionresult
   */
  interface INMessageAttributeOptionsResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INMessageAttributeOptionsResolutionResult;
    //
    init():cocoascript.INMessageAttributeOptionsResolutionResult;
  }
}

declare const INMessageAttributeOptionsResolutionResult: cocoascript.INMessageAttributeOptionsResolutionResult;
