declare namespace cocoascript {
/**
 * An object containing seat information associated with a reservation.
 * doc://com.apple.documentation/documentation/sirikit/inseat
 */
interface INSeat extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inseat/3113845-initwithseatsection
  initWithSeatSection_seatRow_seatNumber_seatingType(seatSection: cocoascript.NSString, seatRow: cocoascript.NSString, seatNumber: cocoascript.NSString, seatingType: cocoascript.NSString):cocoascript.INSeat;
  // doc://com.apple.documentation/documentation/sirikit/inseat/3113848-seatsection
  seatSection(): cocoascript.NSString;
  setSeatSection(): void;
  // doc://com.apple.documentation/documentation/sirikit/inseat/3113847-seatrow
  seatRow(): cocoascript.NSString;
  setSeatRow(): void;
  // doc://com.apple.documentation/documentation/sirikit/inseat/3113846-seatnumber
  seatNumber(): cocoascript.NSString;
  setSeatNumber(): void;
  // doc://com.apple.documentation/documentation/sirikit/inseat/3113849-seatingtype
  seatingType(): cocoascript.NSString;
  setSeatingType(): void;
  // 
  alloc():cocoascript.INSeat;
  // 
  init():cocoascript.INSeat;
}
}
declare const INSeat: cocoascript.INSeat;

