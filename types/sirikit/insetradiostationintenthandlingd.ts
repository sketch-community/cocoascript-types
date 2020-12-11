declare namespace cocoascript {
  /**
   * The handler interface for changing a radio station.
   * doc://com.apple.documentation/documentation/sirikit/insetradiostationintenthandling
   */
  interface INSetRadioStationIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintenthandling/1906895-resolveradiotypeforsetradiostati
    resolveRadioTypeForSetRadioStation_withCompletion(intent: cocoascript.INSetRadioStationIntent, completion: cocoascript.INRadioTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintenthandling/1906892-resolvefrequencyforsetradiostati
    resolveFrequencyForSetRadioStation_withCompletion(intent: cocoascript.INSetRadioStationIntent, completion: cocoascript.INDoubleResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintenthandling/1906896-resolvestationnameforsetradiosta
    resolveStationNameForSetRadioStation_withCompletion(intent: cocoascript.INSetRadioStationIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintenthandling/1906894-resolvechannelforsetradiostation
    resolveChannelForSetRadioStation_withCompletion(intent: cocoascript.INSetRadioStationIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintenthandling/1906893-resolvepresetnumberforsetradiost
    resolvePresetNumberForSetRadioStation_withCompletion(intent: cocoascript.INSetRadioStationIntent, completion: cocoascript.INIntegerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintenthandling/1649479-confirmsetradiostation
    confirmSetRadioStation_completion(intent: cocoascript.INSetRadioStationIntent, completion: cocoascript.INSetRadioStationIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintenthandling/1649474-handlesetradiostation
    handleSetRadioStation_completion(intent: cocoascript.INSetRadioStationIntent, completion: cocoascript.INSetRadioStationIntentResponse):void;
  }
}
