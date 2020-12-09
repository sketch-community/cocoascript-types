declare namespace cocoascript {
/**
 * The information that describes a train reservation.
 * doc://com.apple.documentation/documentation/sirikit/intrainreservation
 */
interface INTrainReservation extends INReservation {
  // doc://com.apple.documentation/documentation/sirikit/intrainreservation/3552238-initwithitemreference
  initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_reservedSeat_trainTrip(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, URL: cocoascript.NSURL, reservedSeat: cocoascript.INSeat, trainTrip: cocoascript.INTrainTrip):cocoascript.INTrainReservation;
  // doc://com.apple.documentation/documentation/sirikit/intrainreservation/3191896-initwithitemreference
  initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_reservedSeat_trainTrip(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, reservedSeat: cocoascript.INSeat, trainTrip: cocoascript.INTrainTrip):cocoascript.INTrainReservation;
  // doc://com.apple.documentation/documentation/sirikit/intrainreservation/3141895-reservedseat
  reservedSeat(): cocoascript.INSeat;
  setReservedSeat(): void;
  // doc://com.apple.documentation/documentation/sirikit/intrainreservation/3141896-traintrip
  trainTrip(): cocoascript.INTrainTrip;
  setTrainTrip(): void;
  // 
  alloc():cocoascript.INTrainReservation;
  // 
  init():cocoascript.INTrainReservation;
}
}
declare const INTrainReservation: cocoascript.INTrainReservation;

