declare namespace cocoascript {
  /**
   * The handler interface for changing a vehicle’s defroster settings.
   * doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintenthandling
   */
  interface INSetDefrosterSettingsInCarIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintenthandling/1902493-resolveenableforsetdefrostersett
    resolveEnableForSetDefrosterSettingsInCar_withCompletion(intent: cocoascript.INSetDefrosterSettingsInCarIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintenthandling/1902494-resolvedefrosterforsetdefrosters
    resolveDefrosterForSetDefrosterSettingsInCar_withCompletion(intent: cocoascript.INSetDefrosterSettingsInCarIntent, completion: cocoascript.INCarDefrosterResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintenthandling/3019573-resolvecarnameforsetdefrosterset
    resolveCarNameForSetDefrosterSettingsInCar_withCompletion(intent: cocoascript.INSetDefrosterSettingsInCarIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintenthandling/1649421-confirmsetdefrostersettingsincar
    confirmSetDefrosterSettingsInCar_completion(intent: cocoascript.INSetDefrosterSettingsInCarIntent, completion: cocoascript.INSetDefrosterSettingsInCarIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintenthandling/1649423-handlesetdefrostersettingsincar
    handleSetDefrosterSettingsInCar_completion(intent: cocoascript.INSetDefrosterSettingsInCarIntent, completion: cocoascript.INSetDefrosterSettingsInCarIntentResponse):void;
  }
}
