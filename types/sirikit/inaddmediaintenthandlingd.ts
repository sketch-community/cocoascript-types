declare namespace cocoascript {
/**
 * The handler interface that adds media.
 * doc://com.apple.documentation/documentation/sirikit/inaddmediaintenthandling
 */
interface INAddMediaIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inaddmediaintenthandling/3074192-resolvemediadestinationforaddmed
  resolveMediaDestinationForAddMedia_withCompletion(intent: cocoascript.INAddMediaIntent, completion: cocoascript.INAddMediaMediaDestinationResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inaddmediaintenthandling/3074193-resolvemediaitemsforaddmedia
  resolveMediaItemsForAddMedia_withCompletion(intent: cocoascript.INAddMediaIntent, completion: cocoascript.INAddMediaMediaItemResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inaddmediaintenthandling/3074190-confirmaddmedia
  confirmAddMedia_completion(intent: cocoascript.INAddMediaIntent, completion: cocoascript.INAddMediaIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/inaddmediaintenthandling/3074191-handleaddmedia
  handleAddMedia_completion(intent: cocoascript.INAddMediaIntent, completion: cocoascript.INAddMediaIntentResponse):void;
}
}

