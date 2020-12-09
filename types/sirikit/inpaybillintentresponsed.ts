declare namespace cocoascript {
/**
 * Your app’s response to a request to pay a bill.
 * doc://com.apple.documentation/documentation/sirikit/inpaybillintentresponse
 */
interface INPayBillIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintentresponse/2799029-initwithcode
  initWithCode_userActivity(code: cocoascript.INPayBillIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INPayBillIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintentresponse/2799031-code
  code(): cocoascript.INPayBillIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintentresponse/2799022-fromaccount
  fromAccount(): cocoascript.INPaymentAccount;
  setFromAccount(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintentresponse/2799032-billdetails
  billDetails(): cocoascript.INBillDetails;
  setBillDetails(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintentresponse/2799037-transactionamount
  transactionAmount(): cocoascript.INPaymentAmount;
  setTransactionAmount(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintentresponse/2799036-transactionscheduleddate
  transactionScheduledDate(): cocoascript.INDateComponentsRange;
  setTransactionScheduledDate(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintentresponse/2799035-transactionnote
  transactionNote(): cocoascript.NSString;
  setTransactionNote(): void;
  // 
  alloc():cocoascript.INPayBillIntentResponse;
  // 
  init():cocoascript.INPayBillIntentResponse;
}
}
declare const INPayBillIntentResponse: cocoascript.INPayBillIntentResponse;

