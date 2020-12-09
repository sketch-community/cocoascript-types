declare namespace cocoascript {
/**
 * An object that describes a reservation.
 * doc://com.apple.documentation/documentation/sirikit/inreservation
 */
interface INReservation extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inreservation/3113834-reservationholdername
  reservationHolderName(): cocoascript.NSString;
  setReservationHolderName(): void;
  // doc://com.apple.documentation/documentation/sirikit/inreservation/3113835-reservationnumber
  reservationNumber(): cocoascript.NSString;
  setReservationNumber(): void;
  // doc://com.apple.documentation/documentation/sirikit/inreservation/3113836-reservationstatus
  reservationStatus(): cocoascript.INReservationStatus;
  setReservationStatus(): void;
  // doc://com.apple.documentation/documentation/sirikit/inreservation/3113833-bookingtime
  bookingTime(): cocoascript.NSDate;
  setBookingTime(): void;
  // doc://com.apple.documentation/documentation/sirikit/inreservation/3172624-itemreference
  itemReference(): cocoascript.INSpeakableString;
  setItemReference(): void;
  // doc://com.apple.documentation/documentation/sirikit/inreservation/3191877-actions
  actions(): cocoascript.INReservationAction;
  setActions(): void;
  // doc://com.apple.documentation/documentation/sirikit/inreservation/3552229-url
  URL(): cocoascript.NSURL;
  setURL(): void;
  // 
  alloc():cocoascript.INReservation;
  // 
  init():cocoascript.INReservation;
}
}
declare const INReservation: cocoascript.INReservation;

