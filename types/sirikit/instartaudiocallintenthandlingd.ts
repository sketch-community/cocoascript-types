declare namespace cocoascript {
  /**
   * The handler interface for initiating an audio call from your app.
   * doc://com.apple.documentation/documentation/sirikit/instartaudiocallintenthandling
   */
  interface INStartAudioCallIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintenthandling/1902341-resolvecontactsforstartaudiocall
    resolveContactsForStartAudioCall_withCompletion(intent: cocoascript.INStartAudioCallIntent, completion: cocoascript.INPersonResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintenthandling/2873772-resolvedestinationtypeforstartau
    resolveDestinationTypeForStartAudioCall_withCompletion(intent: cocoascript.INStartAudioCallIntent, completion: cocoascript.INCallDestinationTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintenthandling/1638634-confirmstartaudiocall
    confirmStartAudioCall_completion(intent: cocoascript.INStartAudioCallIntent, completion: cocoascript.INStartAudioCallIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintenthandling/1639088-handlestartaudiocall
    handleStartAudioCall_completion(intent: cocoascript.INStartAudioCallIntent, completion: cocoascript.INStartAudioCallIntentResponse):void;
  }
}
