declare namespace cocoascript {
/**
 * The handler interface for fetching the status of the user’s current ride.
 * doc://com.apple.documentation/documentation/sirikit/ingetridestatusintenthandling
 */
interface INGetRideStatusIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/ingetridestatusintenthandling/1649849-confirmgetridestatus
  confirmGetRideStatus_completion(intent: cocoascript.INGetRideStatusIntent, completion: cocoascript.INGetRideStatusIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/ingetridestatusintenthandling/1649848-handlegetridestatus
  handleGetRideStatus_completion(intent: cocoascript.INGetRideStatusIntent, completion: cocoascript.INGetRideStatusIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/ingetridestatusintenthandling/1649845-startsendingupdatesforgetridesta
  startSendingUpdatesForGetRideStatus_toObserver(intent: cocoascript.INGetRideStatusIntent, observer: cocoascript.INGetRideStatusIntentResponseObserver):void;
  // doc://com.apple.documentation/documentation/sirikit/ingetridestatusintenthandling/1649844-stopsendingupdatesforgetridestat
  stopSendingUpdatesForGetRideStatus(intent: cocoascript.INGetRideStatusIntent):void;
}
}

