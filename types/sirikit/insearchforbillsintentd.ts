declare namespace cocoascript {
/**
 * A request for the list of bills matching the specified criteria.
 * doc://com.apple.documentation/documentation/sirikit/insearchforbillsintent
 */
interface INSearchForBillsIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintent/2798970-initwithbillpayee
  initWithBillPayee_paymentDateRange_billType_status_dueDateRange(billPayee: cocoascript.INBillPayee, paymentDateRange: cocoascript.INDateComponentsRange, billType: cocoascript.INBillType, status: cocoascript.INPaymentStatus, dueDateRange: cocoascript.INDateComponentsRange):cocoascript.INSearchForBillsIntent;
  // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintent/2798975-billpayee
  billPayee(): cocoascript.INBillPayee;
  setBillPayee(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintent/2798974-billtype
  billType(): cocoascript.INBillType;
  setBillType(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintent/2798969-duedaterange
  dueDateRange(): cocoascript.INDateComponentsRange;
  setDueDateRange(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintent/2798976-paymentdaterange
  paymentDateRange(): cocoascript.INDateComponentsRange;
  setPaymentDateRange(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintent/2798980-status
  status(): cocoascript.INPaymentStatus;
  setStatus(): void;
  // 
  alloc():cocoascript.INSearchForBillsIntent;
  // 
  init():cocoascript.INSearchForBillsIntent;
}
}
declare const INSearchForBillsIntent: cocoascript.INSearchForBillsIntent;

