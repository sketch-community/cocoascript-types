declare namespace cocoascript {
/**
 * A request to transfer of money to facilitate payment of a bill.
 * doc://com.apple.documentation/documentation/sirikit/inpaybillintent
 */
interface INPayBillIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintent/2799077-initwithbillpayee
  initWithBillPayee_fromAccount_transactionAmount_transactionScheduledDate_transactionNote_billType_dueDate(billPayee: cocoascript.INBillPayee, fromAccount: cocoascript.INPaymentAccount, transactionAmount: cocoascript.INPaymentAmount, transactionScheduledDate: cocoascript.INDateComponentsRange, transactionNote: cocoascript.NSString, billType: cocoascript.INBillType, dueDate: cocoascript.INDateComponentsRange):cocoascript.INPayBillIntent;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintent/2799063-billpayee
  billPayee(): cocoascript.INBillPayee;
  setBillPayee(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintent/2799073-billtype
  billType(): cocoascript.INBillType;
  setBillType(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintent/2799067-duedate
  dueDate(): cocoascript.INDateComponentsRange;
  setDueDate(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintent/2799079-fromaccount
  fromAccount(): cocoascript.INPaymentAccount;
  setFromAccount(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintent/2799064-transactionamount
  transactionAmount(): cocoascript.INPaymentAmount;
  setTransactionAmount(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintent/2799062-transactionnote
  transactionNote(): cocoascript.NSString;
  setTransactionNote(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintent/2799075-transactionscheduleddate
  transactionScheduledDate(): cocoascript.INDateComponentsRange;
  setTransactionScheduledDate(): void;
  // 
  alloc():cocoascript.INPayBillIntent;
  // 
  init():cocoascript.INPayBillIntent;
}
}
declare const INPayBillIntent: cocoascript.INPayBillIntent;

