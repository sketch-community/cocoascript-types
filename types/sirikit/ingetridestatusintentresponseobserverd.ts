declare namespace cocoascript {
/**
 * An interface for providing updated status for an active ride.
 * doc://com.apple.documentation/documentation/sirikit/ingetridestatusintentresponseobserver
 */
interface INGetRideStatusIntentResponseObserver extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/ingetridestatusintentresponseobserver/1639309-getridestatusresponsedidupdate
  getRideStatusResponseDidUpdate(response: cocoascript.INGetRideStatusIntentResponse):void;
}
}

