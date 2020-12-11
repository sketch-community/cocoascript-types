declare namespace cocoascript {
  /**
   * A resolution result for the signals the intent is managing on the car.
   * doc://com.apple.documentation/documentation/sirikit/incarsignaloptionsresolutionresult
   */
  interface INCarSignalOptionsResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INCarSignalOptionsResolutionResult;
    //
    init():cocoascript.INCarSignalOptionsResolutionResult;
  }
}

declare const INCarSignalOptionsResolutionResult: cocoascript.INCarSignalOptionsResolutionResult;
