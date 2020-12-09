declare namespace cocoascript {
/**
 * An interface that handles modifying message attributes.
 * doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintenthandling
 */
interface INSetMessageAttributeIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintenthandling/1902387-resolveattributeforsetmessageatt
  resolveAttributeForSetMessageAttribute_withCompletion(intent: cocoascript.INSetMessageAttributeIntent, completion: cocoascript.INMessageAttributeResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintenthandling/1829397-confirmsetmessageattribute
  confirmSetMessageAttribute_completion(intent: cocoascript.INSetMessageAttributeIntent, completion: cocoascript.INSetMessageAttributeIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintenthandling/1829394-handlesetmessageattribute
  handleSetMessageAttribute_completion(intent: cocoascript.INSetMessageAttributeIntent, completion: cocoascript.INSetMessageAttributeIntentResponse):void;
}
}

