declare namespace cocoascript {
/**
 * The information that describes a ticketed event reservation.
 * doc://com.apple.documentation/documentation/sirikit/inticketedeventreservation
 */
interface INTicketedEventReservation extends INReservation {
  // doc://com.apple.documentation/documentation/sirikit/inticketedeventreservation/3552237-initwithitemreference
  initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_reservedSeat_event(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, URL: cocoascript.NSURL, reservedSeat: cocoascript.INSeat, event: cocoascript.INTicketedEvent):cocoascript.INTicketedEventReservation;
  // doc://com.apple.documentation/documentation/sirikit/inticketedeventreservation/3191895-initwithitemreference
  initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_reservedSeat_event(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, reservedSeat: cocoascript.INSeat, event: cocoascript.INTicketedEvent):cocoascript.INTicketedEventReservation;
  // doc://com.apple.documentation/documentation/sirikit/inticketedeventreservation/3141887-event
  event(): cocoascript.INTicketedEvent;
  setEvent(): void;
  // doc://com.apple.documentation/documentation/sirikit/inticketedeventreservation/3141889-reservedseat
  reservedSeat(): cocoascript.INSeat;
  setReservedSeat(): void;
  // 
  alloc():cocoascript.INTicketedEventReservation;
  // 
  init():cocoascript.INTicketedEventReservation;
}
}
declare const INTicketedEventReservation: cocoascript.INTicketedEventReservation;

