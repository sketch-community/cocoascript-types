declare namespace cocoascript {
/**
 * The information that describes a rental car reservation.
 * doc://com.apple.documentation/documentation/sirikit/inrentalcarreservation
 */
interface INRentalCarReservation extends INReservation {
  // doc://com.apple.documentation/documentation/sirikit/inrentalcarreservation/3552228-initwithitemreference
  initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_rentalCar_rentalDuration_pickupLocation_dropOffLocation(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, URL: cocoascript.NSURL, rentalCar: cocoascript.INRentalCar, rentalDuration: cocoascript.INDateComponentsRange, pickupLocation: cocoascript.CLPlacemark, dropOffLocation: cocoascript.CLPlacemark):cocoascript.INRentalCarReservation;
  // doc://com.apple.documentation/documentation/sirikit/inrentalcarreservation/3191876-initwithitemreference
  initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_rentalCar_rentalDuration_pickupLocation_dropOffLocation(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, rentalCar: cocoascript.INRentalCar, rentalDuration: cocoascript.INDateComponentsRange, pickupLocation: cocoascript.CLPlacemark, dropOffLocation: cocoascript.CLPlacemark):cocoascript.INRentalCarReservation;
  // doc://com.apple.documentation/documentation/sirikit/inrentalcarreservation/3141822-rentalcar
  rentalCar(): cocoascript.INRentalCar;
  setRentalCar(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrentalcarreservation/3141823-rentalduration
  rentalDuration(): cocoascript.INDateComponentsRange;
  setRentalDuration(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrentalcarreservation/3141821-pickuplocation
  pickupLocation(): cocoascript.CLPlacemark;
  setPickupLocation(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrentalcarreservation/3141819-dropofflocation
  dropOffLocation(): cocoascript.CLPlacemark;
  setDropOffLocation(): void;
  // 
  alloc():cocoascript.INRentalCarReservation;
  // 
  init():cocoascript.INRentalCarReservation;
}
}
declare const INRentalCarReservation: cocoascript.INRentalCarReservation;

