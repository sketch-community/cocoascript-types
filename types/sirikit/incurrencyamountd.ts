declare namespace cocoascript {
/**
 * An amount of money to transfer during a financial transaction.
 * doc://com.apple.documentation/documentation/sirikit/incurrencyamount
 */
interface INCurrencyAmount extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/incurrencyamount/1638814-initwithamount
  initWithAmount_currencyCode(amount: cocoascript.NSDecimalNumber, currencyCode: cocoascript.NSString):cocoascript.INCurrencyAmount;
  // doc://com.apple.documentation/documentation/sirikit/incurrencyamount/1638388-amount
  amount(): cocoascript.NSDecimalNumber;
  setAmount(): void;
  // doc://com.apple.documentation/documentation/sirikit/incurrencyamount/1638973-currencycode
  currencyCode(): cocoascript.NSString;
  setCurrencyCode(): void;
  // 
  alloc():cocoascript.INCurrencyAmount;
  // 
  init():cocoascript.INCurrencyAmount;
}
}
declare const INCurrencyAmount: cocoascript.INCurrencyAmount;

