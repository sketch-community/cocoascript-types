declare namespace cocoascript {
/**
 * A request for the default values to use when fetching potential reservation options.
 * doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintent
 */
interface INGetAvailableRestaurantReservationBookingDefaultsIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintent/2877495-initwithrestaurant
  initWithRestaurant(restaurant: cocoascript.INRestaurant):cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntent;
  // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintent/1650053-restaurant
  restaurant(): cocoascript.INRestaurant;
  setRestaurant(): void;
  // 
  alloc():cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntent;
  // 
  init():cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntent;
}
}
declare const INGetAvailableRestaurantReservationBookingDefaultsIntent: cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntent;

