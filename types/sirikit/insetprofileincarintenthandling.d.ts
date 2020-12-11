declare namespace cocoascript {
  /**
   * The handler interface for restoring vehicle environment settings from a user-specified profile.
   * doc://com.apple.documentation/documentation/sirikit/insetprofileincarintenthandling
   */
  interface INSetProfileInCarIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintenthandling/2102251-resolveprofilenumberforsetprofil
    resolveProfileNumberForSetProfileInCar_withCompletion(intent: cocoascript.INSetProfileInCarIntent, completion: cocoascript.INIntegerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintenthandling/2726870-resolveprofilenameforsetprofilei
    resolveProfileNameForSetProfileInCar_withCompletion(intent: cocoascript.INSetProfileInCarIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintenthandling/3019576-resolvecarnameforsetprofileincar
    resolveCarNameForSetProfileInCar_withCompletion(intent: cocoascript.INSetProfileInCarIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintenthandling/2102247-resolvedefaultprofileforsetprofi
    resolveDefaultProfileForSetProfileInCar_withCompletion(intent: cocoascript.INSetProfileInCarIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintenthandling/2102249-confirmsetprofileincar
    confirmSetProfileInCar_completion(intent: cocoascript.INSetProfileInCarIntent, completion: cocoascript.INSetProfileInCarIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintenthandling/2102246-handlesetprofileincar
    handleSetProfileInCar_completion(intent: cocoascript.INSetProfileInCarIntent, completion: cocoascript.INSetProfileInCarIntentResponse):void;
  }
}
