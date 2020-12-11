declare namespace cocoascript {
  /**
   * Additional details about whether a ride completed successfully or someone canceled the ride.
   * doc://com.apple.documentation/documentation/sirikit/inridecompletionstatus
   */
  interface INRideCompletionStatus extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inridecompletionstatus/2132108-completionuseractivity
    completionUserActivity(): cocoascript.NSUserActivity;
    setCompletionUserActivity(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridecompletionstatus/2132109-completed
    completed(): cocoascript.BOOL;
    setCompleted(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridecompletionstatus/2132104-canceled
    canceled(): cocoascript.BOOL;
    setCanceled(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridecompletionstatus/2132115-missedpickup
    missedPickup(): cocoascript.BOOL;
    setMissedPickup(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridecompletionstatus/2132114-outstanding
    outstanding(): cocoascript.BOOL;
    setOutstanding(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridecompletionstatus/2132106-paymentamount
    paymentAmount(): cocoascript.INCurrencyAmount;
    setPaymentAmount(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridecompletionstatus/2875467-feedbacktype
    feedbackType(): cocoascript.INRideFeedbackTypeOptions;
    setFeedbackType(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridecompletionstatus/2875466-defaulttippingoptions
    defaultTippingOptions(): cocoascript.INCurrencyAmount;
    setDefaultTippingOptions(): void;
    //
    alloc():cocoascript.INRideCompletionStatus;
    //
    init():cocoascript.INRideCompletionStatus;
  }
}

declare const INRideCompletionStatus: cocoascript.INRideCompletionStatus;
