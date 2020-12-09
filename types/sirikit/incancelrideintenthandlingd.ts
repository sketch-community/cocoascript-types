declare namespace cocoascript {
/**
 * The handler interface for canceling a previously booked ride.
 * doc://com.apple.documentation/documentation/sirikit/incancelrideintenthandling
 */
interface INCancelRideIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/incancelrideintenthandling/2875585-confirmcancelride
  confirmCancelRide_completion(intent: cocoascript.INCancelRideIntent, completion: cocoascript.INCancelRideIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/incancelrideintenthandling/2875587-handlecancelride
  handleCancelRide_completion(intent: cocoascript.INCancelRideIntent, completion: cocoascript.INCancelRideIntentResponse):void;
}
}

