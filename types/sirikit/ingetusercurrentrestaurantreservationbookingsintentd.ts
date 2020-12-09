declare namespace cocoascript {
/**
 * A request for the list of the user’s current reservations.
 * doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintent
 */
interface INGetUserCurrentRestaurantReservationBookingsIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintent/2877506-initwithrestaurant
  initWithRestaurant_reservationIdentifier_maximumNumberOfResults_earliestBookingDateForResults(restaurant: cocoascript.INRestaurant, reservationIdentifier: cocoascript.NSString, maximumNumberOfResults: cocoascript.NSNumber, earliestBookingDateForResults: cocoascript.NSDate):cocoascript.INGetUserCurrentRestaurantReservationBookingsIntent;
  // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintent/1650029-restaurant
  restaurant(): cocoascript.INRestaurant;
  setRestaurant(): void;
  // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintent/1650028-reservationidentifier
  reservationIdentifier(): cocoascript.NSString;
  setReservationIdentifier(): void;
  // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintent/2102242-maximumnumberofresults
  maximumNumberOfResults(): cocoascript.NSNumber;
  setMaximumNumberOfResults(): void;
  // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintent/2102243-earliestbookingdateforresults
  earliestBookingDateForResults(): cocoascript.NSDate;
  setEarliestBookingDateForResults(): void;
  // 
  alloc():cocoascript.INGetUserCurrentRestaurantReservationBookingsIntent;
  // 
  init():cocoascript.INGetUserCurrentRestaurantReservationBookingsIntent;
}
}
declare const INGetUserCurrentRestaurantReservationBookingsIntent: cocoascript.INGetUserCurrentRestaurantReservationBookingsIntent;

