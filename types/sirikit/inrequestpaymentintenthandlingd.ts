declare namespace cocoascript {
  /**
   * The handler interface for delivering a request for payment from another user of your app.
   * doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintenthandling
   */
  interface INRequestPaymentIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintenthandling/1638225-resolvepayerforrequestpayment
    resolvePayerForRequestPayment_completion(intent: cocoascript.INRequestPaymentIntent, completion: cocoascript.INRequestPaymentPayerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintenthandling/1638148-resolvecurrencyamountforrequestp
    resolveCurrencyAmountForRequestPayment_completion(intent: cocoascript.INRequestPaymentIntent, completion: cocoascript.INRequestPaymentCurrencyAmountResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintenthandling/1902486-resolvenoteforrequestpayment
    resolveNoteForRequestPayment_withCompletion(intent: cocoascript.INRequestPaymentIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintenthandling/1902484-resolvepayerforrequestpayment
    resolvePayerForRequestPayment_withCompletion(intent: cocoascript.INRequestPaymentIntent, completion: cocoascript.INPersonResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintenthandling/1902487-resolvecurrencyamountforrequestp
    resolveCurrencyAmountForRequestPayment_withCompletion(intent: cocoascript.INRequestPaymentIntent, completion: cocoascript.INCurrencyAmountResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintenthandling/1638330-confirmrequestpayment
    confirmRequestPayment_completion(intent: cocoascript.INRequestPaymentIntent, completion: cocoascript.INRequestPaymentIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintenthandling/1638420-handlerequestpayment
    handleRequestPayment_completion(intent: cocoascript.INRequestPaymentIntent, completion: cocoascript.INRequestPaymentIntentResponse):void;
  }
}
