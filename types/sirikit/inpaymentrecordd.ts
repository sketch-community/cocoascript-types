declare namespace cocoascript {
/**
 * Detailed information about a financial transaction made between two users.
 * doc://com.apple.documentation/documentation/sirikit/inpaymentrecord
 */
interface INPaymentRecord extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inpaymentrecord/2274388-initwithpayee
  initWithPayee_payer_currencyAmount_paymentMethod_note_status_feeAmount(payee: cocoascript.INPerson, payer: cocoascript.INPerson, currencyAmount: cocoascript.INCurrencyAmount, paymentMethod: cocoascript.INPaymentMethod, note: cocoascript.NSString, status: cocoascript.INPaymentStatus, feeAmount: cocoascript.INCurrencyAmount):cocoascript.INPaymentRecord;
  // doc://com.apple.documentation/documentation/sirikit/inpaymentrecord/1638960-initwithpayee
  initWithPayee_payer_currencyAmount_paymentMethod_note_status(payee: cocoascript.INPerson, payer: cocoascript.INPerson, currencyAmount: cocoascript.INCurrencyAmount, paymentMethod: cocoascript.INPaymentMethod, note: cocoascript.NSString, status: cocoascript.INPaymentStatus):cocoascript.INPaymentRecord;
  // doc://com.apple.documentation/documentation/sirikit/inpaymentrecord/1639333-status
  status(): cocoascript.INPaymentStatus;
  setStatus(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaymentrecord/1639172-payee
  payee(): cocoascript.INPerson;
  setPayee(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaymentrecord/1639269-payer
  payer(): cocoascript.INPerson;
  setPayer(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaymentrecord/1638675-currencyamount
  currencyAmount(): cocoascript.INCurrencyAmount;
  setCurrencyAmount(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaymentrecord/2274390-feeamount
  feeAmount(): cocoascript.INCurrencyAmount;
  setFeeAmount(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaymentrecord/1638939-paymentmethod
  paymentMethod(): cocoascript.INPaymentMethod;
  setPaymentMethod(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaymentrecord/1638190-note
  note(): cocoascript.NSString;
  setNote(): void;
  // 
  alloc():cocoascript.INPaymentRecord;
  // 
  init():cocoascript.INPaymentRecord;
}
}
declare const INPaymentRecord: cocoascript.INPaymentRecord;

