declare namespace cocoascript {
  /**
   * The handler interface for changing a vehicle’s climate control settings.
   * doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling
   */
  interface INSetClimateSettingsInCarIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1905635-resolveenablefanforsetclimateset
    resolveEnableFanForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1905614-resolveenableairconditionerforse
    resolveEnableAirConditionerForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1905609-resolveenableclimatecontrolforse
    resolveEnableClimateControlForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1905617-resolveenableautomodeforsetclima
    resolveEnableAutoModeForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1905621-resolveaircirculationmodeforsetc
    resolveAirCirculationModeForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INCarAirCirculationModeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1905633-resolvefanspeedindexforsetclimat
    resolveFanSpeedIndexForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INIntegerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1905607-resolvefanspeedpercentageforsetc
    resolveFanSpeedPercentageForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INDoubleResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1905619-resolverelativefanspeedsettingfo
    resolveRelativeFanSpeedSettingForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INRelativeSettingResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1905630-resolvetemperatureforsetclimates
    resolveTemperatureForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INTemperatureResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1905623-resolverelativetemperaturesettin
    resolveRelativeTemperatureSettingForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INRelativeSettingResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/2102613-resolveclimatezoneforsetclimates
    resolveClimateZoneForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INCarSeatResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/3019570-resolvecarnameforsetclimatesetti
    resolveCarNameForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1649053-confirmsetclimatesettingsincar
    confirmSetClimateSettingsInCar_completion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INSetClimateSettingsInCarIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1649065-handlesetclimatesettingsincar
    handleSetClimateSettingsInCar_completion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INSetClimateSettingsInCarIntentResponse):void;
  }
}
