declare namespace cocoascript {
/**
 * The amount of money to apply to a bill payment.
 * doc://com.apple.documentation/documentation/sirikit/inpaymentamount
 */
interface INPaymentAmount extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inpaymentamount/2799131-initwithamounttype
  initWithAmountType_amount(amountType: cocoascript.INAmountType, amount: cocoascript.INCurrencyAmount):cocoascript.INPaymentAmount;
  // doc://com.apple.documentation/documentation/sirikit/inpaymentamount/2799132-amount
  amount(): cocoascript.INCurrencyAmount;
  setAmount(): void;
  // doc://com.apple.documentation/documentation/sirikit/inpaymentamount/2799130-amounttype
  amountType(): cocoascript.INAmountType;
  setAmountType(): void;
  // 
  alloc():cocoascript.INPaymentAmount;
  // 
  init():cocoascript.INPaymentAmount;
}
}
declare const INPaymentAmount: cocoascript.INPaymentAmount;

