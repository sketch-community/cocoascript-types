declare namespace cocoascript {
  /**
   * A resolution result for the contact for the call.
   * doc://com.apple.documentation/documentation/sirikit/instartcallcontactresolutionresult
   */
  interface INStartCallContactResolutionResult extends INPersonResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/instartcallcontactresolutionresult/3165931-initwithpersonresolutionresult
    initWithPersonResolutionResult(personResolutionResult: cocoascript.INPersonResolutionResult):cocoascript.INStartCallContactResolutionResult;
    //
    alloc():cocoascript.INStartCallContactResolutionResult;
    //
    init():cocoascript.INStartCallContactResolutionResult;
  }
}

declare const INStartCallContactResolutionResult: cocoascript.INStartCallContactResolutionResult;
