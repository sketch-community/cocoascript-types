declare namespace cocoascript {
/**
 * An intent indicating that the user provided feedback for a completed ride.
 * doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintent
 */
interface INSendRideFeedbackIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintent/2875687-initwithrideidentifier
  initWithRideIdentifier(rideIdentifier: cocoascript.NSString):cocoascript.INSendRideFeedbackIntent;
  // doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintent/2875663-rideidentifier
  rideIdentifier(): cocoascript.NSString;
  setRideIdentifier(): void;
  // doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintent/2875638-rating
  rating(): cocoascript.NSNumber;
  setRating(): void;
  // doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintent/2875625-tip
  tip(): cocoascript.INCurrencyAmount;
  setTip(): void;
  // 
  alloc():cocoascript.INSendRideFeedbackIntent;
  // 
  init():cocoascript.INSendRideFeedbackIntent;
}
}
declare const INSendRideFeedbackIntent: cocoascript.INSendRideFeedbackIntent;

