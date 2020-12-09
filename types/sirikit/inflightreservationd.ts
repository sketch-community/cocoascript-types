declare namespace cocoascript {
/**
 * The information that describes a flight reservation.
 * doc://com.apple.documentation/documentation/sirikit/inflightreservation
 */
interface INFlightReservation extends INReservation {
  // doc://com.apple.documentation/documentation/sirikit/inflightreservation/3552165-initwithitemreference
  initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_reservedSeat_flight(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, URL: cocoascript.NSURL, reservedSeat: cocoascript.INSeat, flight: cocoascript.INFlight):cocoascript.INFlightReservation;
  // doc://com.apple.documentation/documentation/sirikit/inflightreservation/3191873-initwithitemreference
  initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_reservedSeat_flight(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, reservedSeat: cocoascript.INSeat, flight: cocoascript.INFlight):cocoascript.INFlightReservation;
  // doc://com.apple.documentation/documentation/sirikit/inflightreservation/3113811-flight
  flight(): cocoascript.INFlight;
  setFlight(): void;
  // doc://com.apple.documentation/documentation/sirikit/inflightreservation/3113813-reservedseat
  reservedSeat(): cocoascript.INSeat;
  setReservedSeat(): void;
  // 
  alloc():cocoascript.INFlightReservation;
  // 
  init():cocoascript.INFlightReservation;
}
}
declare const INFlightReservation: cocoascript.INFlightReservation;

