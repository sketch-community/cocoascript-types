declare namespace cocoascript {
/**
 * The handler interface booking a reservation that the user selected.
 * doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintenthandling
 */
interface INBookRestaurantReservationIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintenthandling/1845261-resolverestaurantforbookrestaura
  resolveRestaurantForBookRestaurantReservation_withCompletion(intent: cocoascript.INBookRestaurantReservationIntent, completion: cocoascript.INRestaurantResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintenthandling/2305427-resolvebookingdatecomponentsforb
  resolveBookingDateComponentsForBookRestaurantReservation_withCompletion(intent: cocoascript.INBookRestaurantReservationIntent, completion: cocoascript.INDateComponentsResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintenthandling/1845260-resolvepartysizeforbookrestauran
  resolvePartySizeForBookRestaurantReservation_withCompletion(intent: cocoascript.INBookRestaurantReservationIntent, completion: cocoascript.INIntegerResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintenthandling/1845253-resolveguestforbookrestaurantres
  resolveGuestForBookRestaurantReservation_withCompletion(intent: cocoascript.INBookRestaurantReservationIntent, completion: cocoascript.INRestaurantGuestResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintenthandling/1845245-resolveguestprovidedspecialreque
  resolveGuestProvidedSpecialRequestTextForBookRestaurantReservation_withCompletion(intent: cocoascript.INBookRestaurantReservationIntent, completion: cocoascript.INStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintenthandling/1845255-confirmbookrestaurantreservation
  confirmBookRestaurantReservation_completion(intent: cocoascript.INBookRestaurantReservationIntent, completion: cocoascript.INBookRestaurantReservationIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintenthandling/1649560-handlebookrestaurantreservation
  handleBookRestaurantReservation_completion(intent: cocoascript.INBookRestaurantReservationIntent, completion: cocoascript.INBookRestaurantReservationIntentResponse):void;
}
}

