declare namespace cocoascript {
/**
 * The detailed information associated with a bill.
 * doc://com.apple.documentation/documentation/sirikit/inbilldetails
 */
interface INBillDetails extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inbilldetails/2852117-initwithbilltype
  initWithBillType_paymentStatus_billPayee_amountDue_minimumDue_lateFee_dueDate_paymentDate(billType: cocoascript.INBillType, paymentStatus: cocoascript.INPaymentStatus, billPayee: cocoascript.INBillPayee, amountDue: cocoascript.INCurrencyAmount, minimumDue: cocoascript.INCurrencyAmount, lateFee: cocoascript.INCurrencyAmount, dueDate: cocoascript.NSDateComponents, paymentDate: cocoascript.NSDateComponents):cocoascript.INBillDetails;
  // doc://com.apple.documentation/documentation/sirikit/inbilldetails/2799228-billpayee
  billPayee(): cocoascript.INBillPayee;
  setBillPayee(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbilldetails/2799231-paymentdate
  paymentDate(): cocoascript.NSDateComponents;
  setPaymentDate(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbilldetails/2799232-paymentstatus
  paymentStatus(): cocoascript.INPaymentStatus;
  setPaymentStatus(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbilldetails/2799226-billtype
  billType(): cocoascript.INBillType;
  setBillType(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbilldetails/2799230-minimumdue
  minimumDue(): cocoascript.INCurrencyAmount;
  setMinimumDue(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbilldetails/2799229-amountdue
  amountDue(): cocoascript.INCurrencyAmount;
  setAmountDue(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbilldetails/2799234-duedate
  dueDate(): cocoascript.NSDateComponents;
  setDueDate(): void;
  // doc://com.apple.documentation/documentation/sirikit/inbilldetails/2799233-latefee
  lateFee(): cocoascript.INCurrencyAmount;
  setLateFee(): void;
  // 
  alloc():cocoascript.INBillDetails;
  // 
  init():cocoascript.INBillDetails;
}
}
declare const INBillDetails: cocoascript.INBillDetails;

