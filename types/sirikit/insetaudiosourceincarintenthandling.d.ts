declare namespace cocoascript {
  /**
   * The handler interface for changing a vehicle’s audio source.
   * doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintenthandling
   */
  interface INSetAudioSourceInCarIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintenthandling/1902349-resolveaudiosourceforsetaudiosou
    resolveAudioSourceForSetAudioSourceInCar_withCompletion(intent: cocoascript.INSetAudioSourceInCarIntent, completion: cocoascript.INCarAudioSourceResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintenthandling/1902350-resolverelativeaudiosourcerefere
    resolveRelativeAudioSourceReferenceForSetAudioSourceInCar_withCompletion(intent: cocoascript.INSetAudioSourceInCarIntent, completion: cocoascript.INRelativeReferenceResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintenthandling/1648408-confirmsetaudiosourceincar
    confirmSetAudioSourceInCar_completion(intent: cocoascript.INSetAudioSourceInCarIntent, completion: cocoascript.INSetAudioSourceInCarIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintenthandling/1648405-handlesetaudiosourceincar
    handleSetAudioSourceInCar_completion(intent: cocoascript.INSetAudioSourceInCarIntent, completion: cocoascript.INSetAudioSourceInCarIntentResponse):void;
  }
}
