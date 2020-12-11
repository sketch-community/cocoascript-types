declare namespace cocoascript {
  /**
   * A resolution result for assorted attributes of a message.
   * doc://com.apple.documentation/documentation/sirikit/inmessageattributeresolutionresult
   */
  interface INMessageAttributeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INMessageAttributeResolutionResult;
    //
    init():cocoascript.INMessageAttributeResolutionResult;
  }
}

declare const INMessageAttributeResolutionResult: cocoascript.INMessageAttributeResolutionResult;
