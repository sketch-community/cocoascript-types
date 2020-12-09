declare namespace cocoascript {
/**
 * An interface to handle sending messages to one or more designated users.
 * doc://com.apple.documentation/documentation/sirikit/insendmessageintenthandling
 */
interface INSendMessageIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/insendmessageintenthandling/1638459-resolverecipientsforsendmessage
  resolveRecipientsForSendMessage_completion(intent: cocoascript.INSendMessageIntent, completion: cocoascript.INSendMessageRecipientResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insendmessageintenthandling/1902359-resolvecontentforsendmessage
  resolveContentForSendMessage_withCompletion(intent: cocoascript.INSendMessageIntent, completion: cocoascript.INStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insendmessageintenthandling/2866588-resolvespeakablegroupnameforsend
  resolveSpeakableGroupNameForSendMessage_withCompletion(intent: cocoascript.INSendMessageIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insendmessageintenthandling/1902356-resolverecipientsforsendmessage
  resolveRecipientsForSendMessage_withCompletion(intent: cocoascript.INSendMessageIntent, completion: cocoascript.INPersonResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insendmessageintenthandling/1902358-resolvegroupnameforsendmessage
  resolveGroupNameForSendMessage_withCompletion(intent: cocoascript.INSendMessageIntent, completion: cocoascript.INStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insendmessageintenthandling/1639459-confirmsendmessage
  confirmSendMessage_completion(intent: cocoascript.INSendMessageIntent, completion: cocoascript.INSendMessageIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/insendmessageintenthandling/1639338-handlesendmessage
  handleSendMessage_completion(intent: cocoascript.INSendMessageIntent, completion: cocoascript.INSendMessageIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/insendmessageintenthandling/3552233-resolveoutgoingmessagetypeforsen
  resolveOutgoingMessageTypeForSendMessage_withCompletion(intent: cocoascript.INSendMessageIntent, completion: cocoascript.INOutgoingMessageTypeResolutionResult):void;
}
}

