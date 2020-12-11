declare namespace cocoascript {
  /**
   * The handler interface for searching the user’s call history.
   * doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintenthandling
   */
  interface INSearchCallHistoryIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintenthandling/2866198-resolvecalltypesforsearchcallhis
    resolveCallTypesForSearchCallHistory_withCompletion(intent: cocoascript.INSearchCallHistoryIntent, completion: cocoascript.INCallRecordTypeOptionsResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintenthandling/1902447-resolvecalltypeforsearchcallhist
    resolveCallTypeForSearchCallHistory_withCompletion(intent: cocoascript.INSearchCallHistoryIntent, completion: cocoascript.INCallRecordTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintenthandling/1902450-resolverecipientforsearchcallhis
    resolveRecipientForSearchCallHistory_withCompletion(intent: cocoascript.INSearchCallHistoryIntent, completion: cocoascript.INPersonResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintenthandling/1902448-resolvedatecreatedforsearchcallh
    resolveDateCreatedForSearchCallHistory_withCompletion(intent: cocoascript.INSearchCallHistoryIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintenthandling/2879131-resolveunseenforsearchcallhistor
    resolveUnseenForSearchCallHistory_withCompletion(intent: cocoascript.INSearchCallHistoryIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintenthandling/1639070-confirmsearchcallhistory
    confirmSearchCallHistory_completion(intent: cocoascript.INSearchCallHistoryIntent, completion: cocoascript.INSearchCallHistoryIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintenthandling/1638471-handlesearchcallhistory
    handleSearchCallHistory_completion(intent: cocoascript.INSearchCallHistoryIntent, completion: cocoascript.INSearchCallHistoryIntentResponse):void;
  }
}
