declare namespace cocoascript {
/**
 * A request for the time slots available for making a reservation.
 * doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent
 */
interface INGetAvailableRestaurantReservationBookingsIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/2877503-initwithrestaurant
  initWithRestaurant_partySize_preferredBookingDateComponents_maximumNumberOfResults_earliestBookingDateForResults_latestBookingDateForResults(restaurant: cocoascript.INRestaurant, partySize: cocoascript.NSUInteger, preferredBookingDateComponents: cocoascript.NSDateComponents, maximumNumberOfResults: cocoascript.NSNumber, earliestBookingDateForResults: cocoascript.NSDate, latestBookingDateForResults: cocoascript.NSDate):cocoascript.INGetAvailableRestaurantReservationBookingsIntent;
  // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/1648718-restaurant
  restaurant(): cocoascript.INRestaurant;
  setRestaurant(): void;
  // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/1648712-partysize
  partySize(): cocoascript.NSUInteger;
  setPartySize(): void;
  // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/2305423-preferredbookingdatecomponents
  preferredBookingDateComponents(): cocoascript.NSDateComponents;
  setPreferredBookingDateComponents(): void;
  // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/1778387-earliestbookingdateforresults
  earliestBookingDateForResults(): cocoascript.NSDate;
  setEarliestBookingDateForResults(): void;
  // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/1778418-latestbookingdateforresults
  latestBookingDateForResults(): cocoascript.NSDate;
  setLatestBookingDateForResults(): void;
  // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/1778378-maximumnumberofresults
  maximumNumberOfResults(): cocoascript.NSNumber;
  setMaximumNumberOfResults(): void;
  // 
  alloc():cocoascript.INGetAvailableRestaurantReservationBookingsIntent;
  // 
  init():cocoascript.INGetAvailableRestaurantReservationBookingsIntent;
}
}
declare const INGetAvailableRestaurantReservationBookingsIntent: cocoascript.INGetAvailableRestaurantReservationBookingsIntent;

