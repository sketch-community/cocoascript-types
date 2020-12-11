declare namespace cocoascript {
  /**
   * A balance associated with an account.
   * doc://com.apple.documentation/documentation/sirikit/inbalanceamount
   */
  interface INBalanceAmount extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inbalanceamount/2867278-initwithamount
    initWithAmount_currencyCode(amount: cocoascript.NSDecimalNumber, currencyCode: cocoascript.NSString):cocoascript.INBalanceAmount;
    // doc://com.apple.documentation/documentation/sirikit/inbalanceamount/2867277-initwithamount
    initWithAmount_balanceType(amount: cocoascript.NSDecimalNumber, balanceType: cocoascript.INBalanceType):cocoascript.INBalanceAmount;
    // doc://com.apple.documentation/documentation/sirikit/inbalanceamount/2867279-amount
    amount(): cocoascript.NSDecimalNumber;
    setAmount(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbalanceamount/2867275-currencycode
    currencyCode(): cocoascript.NSString;
    setCurrencyCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbalanceamount/2867280-balancetype
    balanceType(): cocoascript.INBalanceType;
    setBalanceType(): void;
    //
    alloc():cocoascript.INBalanceAmount;
    //
    init():cocoascript.INBalanceAmount;
  }
}

declare const INBalanceAmount: cocoascript.INBalanceAmount;
