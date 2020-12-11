declare namespace cocoascript {
  /**
   * A request to transfer money from the current user’s account to a different user’s account.
   * doc://com.apple.documentation/documentation/sirikit/insendpaymentintent
   */
  interface INSendPaymentIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insendpaymentintent/2102644-initwithpayee
    initWithPayee_currencyAmount_note(payee: cocoascript.INPerson, currencyAmount: cocoascript.INCurrencyAmount, note: cocoascript.NSString):cocoascript.INSendPaymentIntent;
    // doc://com.apple.documentation/documentation/sirikit/insendpaymentintent/1639374-payee
    payee(): cocoascript.INPerson;
    setPayee(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendpaymentintent/1638381-currencyamount
    currencyAmount(): cocoascript.INCurrencyAmount;
    setCurrencyAmount(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendpaymentintent/1639091-note
    note(): cocoascript.NSString;
    setNote(): void;
    //
    alloc():cocoascript.INSendPaymentIntent;
    //
    init():cocoascript.INSendPaymentIntent;
  }
}

declare const INSendPaymentIntent: cocoascript.INSendPaymentIntent;
