declare namespace cocoascript {
/**
 * The information that describes a boat reservation.
 * doc://com.apple.documentation/documentation/sirikit/inboatreservation
 */
interface INBoatReservation extends INReservation {
  // doc://com.apple.documentation/documentation/sirikit/inboatreservation/3601143-initwithitemreference
  initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_reservedSeat_boatTrip(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, URL: cocoascript.NSURL, reservedSeat: cocoascript.INSeat, boatTrip: cocoascript.INBoatTrip):cocoascript.INBoatReservation;
  // doc://com.apple.documentation/documentation/sirikit/inboatreservation/3601142-boattrip
  boatTrip(): cocoascript.INBoatTrip;
  setBoatTrip(): void;
  // doc://com.apple.documentation/documentation/sirikit/inboatreservation/3601144-reservedseat
  reservedSeat(): cocoascript.INSeat;
  setReservedSeat(): void;
  // 
  alloc():cocoascript.INBoatReservation;
  // 
  init():cocoascript.INBoatReservation;
}
}
declare const INBoatReservation: cocoascript.INBoatReservation;

