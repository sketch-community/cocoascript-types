declare namespace cocoascript {
  /**
   * The handler interface for requesting a car’s current power level.
   * doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintenthandling
   */
  interface INGetCarPowerLevelStatusIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintenthandling/2799247-resolvecarnameforgetcarpowerleve
    resolveCarNameForGetCarPowerLevelStatus_withCompletion(intent: cocoascript.INGetCarPowerLevelStatusIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintenthandling/2799244-confirmgetcarpowerlevelstatus
    confirmGetCarPowerLevelStatus_completion(intent: cocoascript.INGetCarPowerLevelStatusIntent, completion: cocoascript.INGetCarPowerLevelStatusIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintenthandling/2799241-handlegetcarpowerlevelstatus
    handleGetCarPowerLevelStatus_completion(intent: cocoascript.INGetCarPowerLevelStatusIntent, completion: cocoascript.INGetCarPowerLevelStatusIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintenthandling/3552166-startsendingupdatesforgetcarpowe
    startSendingUpdatesForGetCarPowerLevelStatus_toObserver(intent: cocoascript.INGetCarPowerLevelStatusIntent, observer: cocoascript.INGetCarPowerLevelStatusIntentResponseObserver):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintenthandling/3552167-stopsendingupdatesforgetcarpower
    stopSendingUpdatesForGetCarPowerLevelStatus(intent: cocoascript.INGetCarPowerLevelStatusIntent):void;
  }
}
