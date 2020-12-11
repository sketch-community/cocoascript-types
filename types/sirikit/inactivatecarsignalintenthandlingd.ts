declare namespace cocoascript {
  /**
   * The handler interface for requesting to activate the car’s signals.
   * doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintenthandling
   */
  interface INActivateCarSignalIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintenthandling/2799256-resolvecarnameforactivatecarsign
    resolveCarNameForActivateCarSignal_withCompletion(intent: cocoascript.INActivateCarSignalIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintenthandling/2799254-resolvesignalsforactivatecarsign
    resolveSignalsForActivateCarSignal_withCompletion(intent: cocoascript.INActivateCarSignalIntent, completion: cocoascript.INCarSignalOptionsResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintenthandling/2799259-confirmactivatecarsignal
    confirmActivateCarSignal_completion(intent: cocoascript.INActivateCarSignalIntent, completion: cocoascript.INActivateCarSignalIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintenthandling/2799253-handleactivatecarsignal
    handleActivateCarSignal_completion(intent: cocoascript.INActivateCarSignalIntent, completion: cocoascript.INActivateCarSignalIntentResponse):void;
  }
}
