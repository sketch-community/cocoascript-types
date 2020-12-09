declare namespace cocoascript {
/**
 * The handler interface for fetching the list of rides currently available from your ride-booking service.
 * doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintenthandling
 */
interface INListRideOptionsIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintenthandling/1902396-resolvepickuplocationforlistride
  resolvePickupLocationForListRideOptions_withCompletion(intent: cocoascript.INListRideOptionsIntent, completion: cocoascript.INPlacemarkResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintenthandling/1902395-resolvedropofflocationforlistrid
  resolveDropOffLocationForListRideOptions_withCompletion(intent: cocoascript.INListRideOptionsIntent, completion: cocoascript.INPlacemarkResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintenthandling/1648128-confirmlistrideoptions
  confirmListRideOptions_completion(intent: cocoascript.INListRideOptionsIntent, completion: cocoascript.INListRideOptionsIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintenthandling/1648129-handlelistrideoptions
  handleListRideOptions_completion(intent: cocoascript.INListRideOptionsIntent, completion: cocoascript.INListRideOptionsIntentResponse):void;
}
}

