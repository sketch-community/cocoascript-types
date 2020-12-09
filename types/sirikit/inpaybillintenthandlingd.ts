declare namespace cocoascript {
/**
 * The handler interface for paying a bill using money from the user’s account.
 * doc://com.apple.documentation/documentation/sirikit/inpaybillintenthandling
 */
interface INPayBillIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintenthandling/2799071-resolvebillpayeeforpaybill
  resolveBillPayeeForPayBill_withCompletion(intent: cocoascript.INPayBillIntent, completion: cocoascript.INBillPayeeResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintenthandling/2799065-resolvebilltypeforpaybill
  resolveBillTypeForPayBill_withCompletion(intent: cocoascript.INPayBillIntent, completion: cocoascript.INBillTypeResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintenthandling/2799069-resolvefromaccountforpaybill
  resolveFromAccountForPayBill_withCompletion(intent: cocoascript.INPayBillIntent, completion: cocoascript.INPaymentAccountResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintenthandling/2799076-resolvetransactionamountforpaybi
  resolveTransactionAmountForPayBill_withCompletion(intent: cocoascript.INPayBillIntent, completion: cocoascript.INPaymentAmountResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintenthandling/2799068-resolveduedateforpaybill
  resolveDueDateForPayBill_withCompletion(intent: cocoascript.INPayBillIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintenthandling/2799074-resolvetransactionscheduleddatef
  resolveTransactionScheduledDateForPayBill_withCompletion(intent: cocoascript.INPayBillIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintenthandling/2799078-resolvetransactionnoteforpaybill
  resolveTransactionNoteForPayBill_withCompletion(intent: cocoascript.INPayBillIntent, completion: cocoascript.INStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintenthandling/2799070-confirmpaybill
  confirmPayBill_completion(intent: cocoascript.INPayBillIntent, completion: cocoascript.INPayBillIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintenthandling/2799072-handlepaybill
  handlePayBill_completion(intent: cocoascript.INPayBillIntent, completion: cocoascript.INPayBillIntentResponse):void;
}
}

