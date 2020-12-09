declare namespace cocoascript {
/**
 * An intent for requesting money from another user’s account.
 * doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintent
 */
interface INRequestPaymentIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintent/2102241-initwithpayer
  initWithPayer_currencyAmount_note(payer: cocoascript.INPerson, currencyAmount: cocoascript.INCurrencyAmount, note: cocoascript.NSString):cocoascript.INRequestPaymentIntent;
  // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintent/1638567-payer
  payer(): cocoascript.INPerson;
  setPayer(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintent/1639090-currencyamount
  currencyAmount(): cocoascript.INCurrencyAmount;
  setCurrencyAmount(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintent/1638628-note
  note(): cocoascript.NSString;
  setNote(): void;
  // 
  alloc():cocoascript.INRequestPaymentIntent;
  // 
  init():cocoascript.INRequestPaymentIntent;
}
}
declare const INRequestPaymentIntent: cocoascript.INRequestPaymentIntent;

