declare namespace cocoascript {
  /**
   * Your app’s response to a cancel ride intent.
   * doc://com.apple.documentation/documentation/sirikit/incancelrideintentresponse
   */
  interface INCancelRideIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/incancelrideintentresponse/2875682-initwithcode
    initWithCode_userActivity(code: cocoascript.INCancelRideIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INCancelRideIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/incancelrideintentresponse/2875627-code
    code(): cocoascript.INCancelRideIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/incancelrideintentresponse/2875694-cancellationfee
    cancellationFee(): cocoascript.INCurrencyAmount;
    setCancellationFee(): void;
    // doc://com.apple.documentation/documentation/sirikit/incancelrideintentresponse/2875684-cancellationfeethreshold
    cancellationFeeThreshold(): cocoascript.NSDateComponents;
    setCancellationFeeThreshold(): void;
    //
    alloc():cocoascript.INCancelRideIntentResponse;
    //
    init():cocoascript.INCancelRideIntentResponse;
  }
}

declare const INCancelRideIntentResponse: cocoascript.INCancelRideIntentResponse;
