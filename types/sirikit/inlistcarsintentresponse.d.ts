declare namespace cocoascript {
  /**
   * Your app’s response to a request to list the user’s electric vehicles.
   * doc://com.apple.documentation/documentation/sirikit/inlistcarsintentresponse
   */
  interface INListCarsIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inlistcarsintentresponse/3552196-initwithcode
    initWithCode_userActivity(code: cocoascript.INListCarsIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INListCarsIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inlistcarsintentresponse/3552195-code
    code(): cocoascript.INListCarsIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/inlistcarsintentresponse/3552194-cars
    cars(): cocoascript.INCar;
    setCars(): void;
    //
    alloc():cocoascript.INListCarsIntentResponse;
    //
    init():cocoascript.INListCarsIntentResponse;
  }
}

declare const INListCarsIntentResponse: cocoascript.INListCarsIntentResponse;
