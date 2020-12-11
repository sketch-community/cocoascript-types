declare namespace cocoascript {
  /**
   * The handler interface for requesting a list of the user’s electric vehicles.
   * doc://com.apple.documentation/documentation/sirikit/inlistcarsintenthandling
   */
  interface INListCarsIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inlistcarsintenthandling/3552191-confirmlistcars
    confirmListCars_completion(intent: cocoascript.INListCarsIntent, completion: cocoascript.INListCarsIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inlistcarsintenthandling/3552192-handlelistcars
    handleListCars_completion(intent: cocoascript.INListCarsIntent, completion: cocoascript.INListCarsIntentResponse):void;
  }
}
