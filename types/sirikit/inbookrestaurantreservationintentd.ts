declare namespace cocoascript {
/**
 * A request to create a reservation at the specified restaurant.
 * doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintent
 */
interface INBookRestaurantReservationIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintent/2877498-initwithrestaurant
  initWithRestaurant_bookingDateComponents_partySize_bookingIdentifier_guest_selectedOffer_guestProvidedSpecialRequestText(restaurant: cocoascript.INRestaurant, bookingDateComponents: cocoascript.NSDateComponents, partySize: cocoascript.NSUInteger, bookingIdentifier: cocoascript.NSString, guest: cocoascript.INRestaurantGuest, selectedOffer: cocoascript.INRestaurantOffer, guestProvidedSpecialRequestText: cocoascript.NSString):cocoascript.INBookRestaurantReservationIntent;
  // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintent/1649559-restaurant
  restaurant(): cocoascript.INRestaurant;
  setRestaurant(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintent/2305412-bookingdatecomponents
  bookingDateComponents(): cocoascript.NSDateComponents;
  setBookingDateComponents(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintent/1649557-bookingidentifier
  bookingIdentifier(): cocoascript.NSString;
  setBookingIdentifier(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintent/1649565-partysize
  partySize(): cocoascript.NSUInteger;
  setPartySize(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintent/1778392-guest
  guest(): cocoascript.INRestaurantGuest;
  setGuest(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintent/1778382-guestprovidedspecialrequesttext
  guestProvidedSpecialRequestText(): cocoascript.NSString;
  setGuestProvidedSpecialRequestText(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintent/1649561-selectedoffer
  selectedOffer(): cocoascript.INRestaurantOffer;
  setSelectedOffer(): void;
  // 
  alloc():cocoascript.INBookRestaurantReservationIntent;
  // 
  init():cocoascript.INBookRestaurantReservationIntent;
}
}
declare const INBookRestaurantReservationIntent: cocoascript.INBookRestaurantReservationIntent;

