declare namespace cocoascript {
  /**
   * A specific type of ride-related charge.
   * doc://com.apple.documentation/documentation/sirikit/inridefarelineitem
   */
  interface INRideFareLineItem extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inridefarelineitem/1649902-initwithtitle
    initWithTitle_price_currencyCode(title: cocoascript.NSString, price: cocoascript.NSDecimalNumber, currencyCode: cocoascript.NSString):cocoascript.INRideFareLineItem;
    // doc://com.apple.documentation/documentation/sirikit/inridefarelineitem/1649900-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridefarelineitem/1649903-price
    price(): cocoascript.NSDecimalNumber;
    setPrice(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridefarelineitem/1649901-currencycode
    currencyCode(): cocoascript.NSString;
    setCurrencyCode(): void;
    //
    alloc():cocoascript.INRideFareLineItem;
    //
    init():cocoascript.INRideFareLineItem;
  }
}

declare const INRideFareLineItem: cocoascript.INRideFareLineItem;
