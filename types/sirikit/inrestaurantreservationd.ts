declare namespace cocoascript {
/**
 * The information that describes a restaurant reservation.
 * doc://com.apple.documentation/documentation/sirikit/inrestaurantreservation
 */
interface INRestaurantReservation extends INReservation {
  // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservation/3601152-initwithitemreference
  initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_reservationDuration_partySize_restaurantLocation(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, URL: cocoascript.NSURL, reservationDuration: cocoascript.INDateComponentsRange, partySize: cocoascript.NSNumber, restaurantLocation: cocoascript.CLPlacemark):cocoascript.INRestaurantReservation;
  // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservation/3191888-initwithitemreference
  initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_reservationDuration_partySize_restaurantLocation(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, reservationDuration: cocoascript.INDateComponentsRange, partySize: cocoascript.NSNumber, restaurantLocation: cocoascript.CLPlacemark):cocoascript.INRestaurantReservation;
  // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservation/3141827-reservationduration
  reservationDuration(): cocoascript.INDateComponentsRange;
  setReservationDuration(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservation/3141828-restaurantlocation
  restaurantLocation(): cocoascript.CLPlacemark;
  setRestaurantLocation(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservation/3141826-partysize
  partySize(): cocoascript.NSNumber;
  setPartySize(): void;
  // 
  alloc():cocoascript.INRestaurantReservation;
  // 
  init():cocoascript.INRestaurantReservation;
}
}
declare const INRestaurantReservation: cocoascript.INRestaurantReservation;

