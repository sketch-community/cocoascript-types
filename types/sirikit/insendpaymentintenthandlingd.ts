declare namespace cocoascript {
/**
 * The handler interface for transferring money from the current user’s account to a different user’s account.
 * doc://com.apple.documentation/documentation/sirikit/insendpaymentintenthandling
 */
interface INSendPaymentIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/insendpaymentintenthandling/1638813-resolvepayeeforsendpayment
  resolvePayeeForSendPayment_completion(intent: cocoascript.INSendPaymentIntent, completion: cocoascript.INSendPaymentPayeeResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insendpaymentintenthandling/1638362-resolvecurrencyamountforsendpaym
  resolveCurrencyAmountForSendPayment_completion(intent: cocoascript.INSendPaymentIntent, completion: cocoascript.INSendPaymentCurrencyAmountResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insendpaymentintenthandling/1906905-resolvenoteforsendpayment
  resolveNoteForSendPayment_withCompletion(intent: cocoascript.INSendPaymentIntent, completion: cocoascript.INStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insendpaymentintenthandling/1906907-resolvepayeeforsendpayment
  resolvePayeeForSendPayment_withCompletion(intent: cocoascript.INSendPaymentIntent, completion: cocoascript.INPersonResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insendpaymentintenthandling/1906906-resolvecurrencyamountforsendpaym
  resolveCurrencyAmountForSendPayment_withCompletion(intent: cocoascript.INSendPaymentIntent, completion: cocoascript.INCurrencyAmountResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insendpaymentintenthandling/1638929-confirmsendpayment
  confirmSendPayment_completion(intent: cocoascript.INSendPaymentIntent, completion: cocoascript.INSendPaymentIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/insendpaymentintenthandling/1638809-handlesendpayment
  handleSendPayment_completion(intent: cocoascript.INSendPaymentIntent, completion: cocoascript.INSendPaymentIntentResponse):void;
}
}

