declare namespace cocoascript {
  /**
   * Price information, as a range of possible values.
   * doc://com.apple.documentation/documentation/sirikit/inpricerange
   */
  interface INPriceRange extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inpricerange/1638476-initwithprice
    initWithPrice_currencyCode(price: cocoascript.NSDecimalNumber, currencyCode: cocoascript.NSString):cocoascript.INPriceRange;
    // doc://com.apple.documentation/documentation/sirikit/inpricerange/1639347-initwithrangebetweenprice
    initWithRangeBetweenPrice_andPrice_currencyCode(firstPrice: cocoascript.NSDecimalNumber, secondPrice: cocoascript.NSDecimalNumber, currencyCode: cocoascript.NSString):cocoascript.INPriceRange;
    // doc://com.apple.documentation/documentation/sirikit/inpricerange/1638268-initwithmaximumprice
    initWithMaximumPrice_currencyCode(maximumPrice: cocoascript.NSDecimalNumber, currencyCode: cocoascript.NSString):cocoascript.INPriceRange;
    // doc://com.apple.documentation/documentation/sirikit/inpricerange/1639229-initwithminimumprice
    initWithMinimumPrice_currencyCode(minimumPrice: cocoascript.NSDecimalNumber, currencyCode: cocoascript.NSString):cocoascript.INPriceRange;
    // doc://com.apple.documentation/documentation/sirikit/inpricerange/1638727-minimumprice
    minimumPrice(): cocoascript.NSDecimalNumber;
    setMinimumPrice(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpricerange/1638626-maximumprice
    maximumPrice(): cocoascript.NSDecimalNumber;
    setMaximumPrice(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpricerange/1638555-currencycode
    currencyCode(): cocoascript.NSString;
    setCurrencyCode(): void;
    //
    alloc():cocoascript.INPriceRange;
    //
    init():cocoascript.INPriceRange;
  }
}

declare const INPriceRange: cocoascript.INPriceRange;
