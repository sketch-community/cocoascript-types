declare namespace cocoascript {
  /**
   * The handler interface for changing a vehicle’s seat-related settings.
   * doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintenthandling
   */
  interface INSetSeatSettingsInCarIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintenthandling/2102624-resolveenablecoolingforsetseatse
    resolveEnableCoolingForSetSeatSettingsInCar_withCompletion(intent: cocoascript.INSetSeatSettingsInCarIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintenthandling/2102628-resolveenableheatingforsetseatse
    resolveEnableHeatingForSetSeatSettingsInCar_withCompletion(intent: cocoascript.INSetSeatSettingsInCarIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintenthandling/2102621-resolveenablemassageforsetseatse
    resolveEnableMassageForSetSeatSettingsInCar_withCompletion(intent: cocoascript.INSetSeatSettingsInCarIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintenthandling/2102616-resolveseatforsetseatsettingsinc
    resolveSeatForSetSeatSettingsInCar_withCompletion(intent: cocoascript.INSetSeatSettingsInCarIntent, completion: cocoascript.INCarSeatResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintenthandling/2102623-resolvelevelforsetseatsettingsin
    resolveLevelForSetSeatSettingsInCar_withCompletion(intent: cocoascript.INSetSeatSettingsInCarIntent, completion: cocoascript.INIntegerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintenthandling/2102625-resolverelativelevelsettingforse
    resolveRelativeLevelSettingForSetSeatSettingsInCar_withCompletion(intent: cocoascript.INSetSeatSettingsInCarIntent, completion: cocoascript.INRelativeSettingResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintenthandling/3019579-resolvecarnameforsetseatsettings
    resolveCarNameForSetSeatSettingsInCar_withCompletion(intent: cocoascript.INSetSeatSettingsInCarIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintenthandling/2102627-confirmsetseatsettingsincar
    confirmSetSeatSettingsInCar_completion(intent: cocoascript.INSetSeatSettingsInCarIntent, completion: cocoascript.INSetSeatSettingsInCarIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintenthandling/2102615-handlesetseatsettingsincar
    handleSetSeatSettingsInCar_completion(intent: cocoascript.INSetSeatSettingsInCarIntent, completion: cocoascript.INSetSeatSettingsInCarIntentResponse):void;
  }
}
