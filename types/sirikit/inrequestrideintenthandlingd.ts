declare namespace cocoascript {
/**
 * The handler interface for booking a ride for the user.
 * doc://com.apple.documentation/documentation/sirikit/inrequestrideintenthandling
 */
interface INRequestRideIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inrequestrideintenthandling/1902428-resolvepickuplocationforrequestr
  resolvePickupLocationForRequestRide_withCompletion(intent: cocoascript.INRequestRideIntent, completion: cocoascript.INPlacemarkResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inrequestrideintenthandling/2838715-resolvescheduledpickuptimeforreq
  resolveScheduledPickupTimeForRequestRide_withCompletion(intent: cocoascript.INRequestRideIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inrequestrideintenthandling/1902427-resolvedropofflocationforrequest
  resolveDropOffLocationForRequestRide_withCompletion(intent: cocoascript.INRequestRideIntent, completion: cocoascript.INPlacemarkResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inrequestrideintenthandling/1902429-resolverideoptionnameforrequestr
  resolveRideOptionNameForRequestRide_withCompletion(intent: cocoascript.INRequestRideIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inrequestrideintenthandling/1902425-resolvepartysizeforrequestride
  resolvePartySizeForRequestRide_withCompletion(intent: cocoascript.INRequestRideIntent, completion: cocoascript.INIntegerResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inrequestrideintenthandling/1649612-confirmrequestride
  confirmRequestRide_completion(intent: cocoascript.INRequestRideIntent, completion: cocoascript.INRequestRideIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/inrequestrideintenthandling/1649625-handlerequestride
  handleRequestRide_completion(intent: cocoascript.INRequestRideIntent, completion: cocoascript.INRequestRideIntentResponse):void;
}
}

