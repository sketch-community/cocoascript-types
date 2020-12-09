declare namespace cocoascript {
/**
 * The handler interface for transferring money between accounts.
 * doc://com.apple.documentation/documentation/sirikit/intransfermoneyintenthandling
 */
interface INTransferMoneyIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintenthandling/2868064-resolvefromaccountfortransfermon
  resolveFromAccountForTransferMoney_withCompletion(intent: cocoascript.INTransferMoneyIntent, completion: cocoascript.INPaymentAccountResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintenthandling/2868069-resolvetoaccountfortransfermoney
  resolveToAccountForTransferMoney_withCompletion(intent: cocoascript.INTransferMoneyIntent, completion: cocoascript.INPaymentAccountResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintenthandling/2868055-resolvetransactionamountfortrans
  resolveTransactionAmountForTransferMoney_withCompletion(intent: cocoascript.INTransferMoneyIntent, completion: cocoascript.INPaymentAmountResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintenthandling/2868070-resolvetransactionscheduleddatef
  resolveTransactionScheduledDateForTransferMoney_withCompletion(intent: cocoascript.INTransferMoneyIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintenthandling/2868066-resolvetransactionnotefortransfe
  resolveTransactionNoteForTransferMoney_withCompletion(intent: cocoascript.INTransferMoneyIntent, completion: cocoascript.INStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintenthandling/2868057-confirmtransfermoney
  confirmTransferMoney_completion(intent: cocoascript.INTransferMoneyIntent, completion: cocoascript.INTransferMoneyIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintenthandling/2868059-handletransfermoney
  handleTransferMoney_completion(intent: cocoascript.INTransferMoneyIntent, completion: cocoascript.INTransferMoneyIntentResponse):void;
}
}

