declare namespace cocoascript {
/**
 * Your app’s response to a request to transfer money.
 * doc://com.apple.documentation/documentation/sirikit/intransfermoneyintentresponse
 */
interface INTransferMoneyIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintentresponse/2868342-initwithcode
  initWithCode_userActivity(code: cocoascript.INTransferMoneyIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INTransferMoneyIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintentresponse/2868337-code
  code(): cocoascript.INTransferMoneyIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintentresponse/2868343-fromaccount
  fromAccount(): cocoascript.INPaymentAccount;
  setFromAccount(): void;
  // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintentresponse/2868335-toaccount
  toAccount(): cocoascript.INPaymentAccount;
  setToAccount(): void;
  // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintentresponse/2868336-transactionamount
  transactionAmount(): cocoascript.INPaymentAmount;
  setTransactionAmount(): void;
  // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintentresponse/2868340-transactionscheduleddate
  transactionScheduledDate(): cocoascript.INDateComponentsRange;
  setTransactionScheduledDate(): void;
  // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintentresponse/2868331-transactionnote
  transactionNote(): cocoascript.NSString;
  setTransactionNote(): void;
  // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintentresponse/2919431-transferfee
  transferFee(): cocoascript.INCurrencyAmount;
  setTransferFee(): void;
  // 
  alloc():cocoascript.INTransferMoneyIntentResponse;
  // 
  init():cocoascript.INTransferMoneyIntentResponse;
}
}
declare const INTransferMoneyIntentResponse: cocoascript.INTransferMoneyIntentResponse;

