declare namespace cocoascript {
  /**
   * An interface that handles requests to search the current user’s messages.
   * doc://com.apple.documentation/documentation/sirikit/insearchformessagesintenthandling
   */
  interface INSearchForMessagesIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintenthandling/1902441-resolverecipientsforsearchformes
    resolveRecipientsForSearchForMessages_withCompletion(intent: cocoascript.INSearchForMessagesIntent, completion: cocoascript.INPersonResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintenthandling/1902439-resolvesendersforsearchformessag
    resolveSendersForSearchForMessages_withCompletion(intent: cocoascript.INSearchForMessagesIntent, completion: cocoascript.INPersonResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintenthandling/1902440-resolveattributesforsearchformes
    resolveAttributesForSearchForMessages_withCompletion(intent: cocoascript.INSearchForMessagesIntent, completion: cocoascript.INMessageAttributeOptionsResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintenthandling/1902436-resolvedatetimerangeforsearchfor
    resolveDateTimeRangeForSearchForMessages_withCompletion(intent: cocoascript.INSearchForMessagesIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintenthandling/2867285-resolvespeakablegroupnamesforsea
    resolveSpeakableGroupNamesForSearchForMessages_withCompletion(intent: cocoascript.INSearchForMessagesIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintenthandling/1902438-resolvegroupnamesforsearchformes
    resolveGroupNamesForSearchForMessages_withCompletion(intent: cocoascript.INSearchForMessagesIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintenthandling/1638410-confirmsearchformessages
    confirmSearchForMessages_completion(intent: cocoascript.INSearchForMessagesIntent, completion: cocoascript.INSearchForMessagesIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintenthandling/1638324-handlesearchformessages
    handleSearchForMessages_completion(intent: cocoascript.INSearchForMessagesIntent, completion: cocoascript.INSearchForMessagesIntentResponse):void;
  }
}
