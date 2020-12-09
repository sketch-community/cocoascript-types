declare namespace cocoascript {
/**
 * An intent requesting the cancellation of a previously booked ride.
 * doc://com.apple.documentation/documentation/sirikit/incancelrideintent
 */
interface INCancelRideIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/incancelrideintent/2875693-initwithrideidentifier
  initWithRideIdentifier(rideIdentifier: cocoascript.NSString):cocoascript.INCancelRideIntent;
  // doc://com.apple.documentation/documentation/sirikit/incancelrideintent/2875648-rideidentifier
  rideIdentifier(): cocoascript.NSString;
  setRideIdentifier(): void;
  // 
  alloc():cocoascript.INCancelRideIntent;
  // 
  init():cocoascript.INCancelRideIntent;
}
}
declare const INCancelRideIntent: cocoascript.INCancelRideIntent;

