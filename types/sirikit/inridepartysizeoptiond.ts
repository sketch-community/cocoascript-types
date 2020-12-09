declare namespace cocoascript {
/**
 * The price of a ride involving the specified number of people.
 * doc://com.apple.documentation/documentation/sirikit/inridepartysizeoption
 */
interface INRidePartySizeOption extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inridepartysizeoption/1649721-initwithpartysizerange
  initWithPartySizeRange_sizeDescription_priceRange(partySizeRange: cocoascript.NSRange, sizeDescription: cocoascript.NSString, priceRange: cocoascript.INPriceRange):cocoascript.INRidePartySizeOption;
  // doc://com.apple.documentation/documentation/sirikit/inridepartysizeoption/1649719-partysizerange
  partySizeRange(): cocoascript.NSRange;
  setPartySizeRange(): void;
  // doc://com.apple.documentation/documentation/sirikit/inridepartysizeoption/1649722-sizedescription
  sizeDescription(): cocoascript.NSString;
  setSizeDescription(): void;
  // doc://com.apple.documentation/documentation/sirikit/inridepartysizeoption/1649723-pricerange
  priceRange(): cocoascript.INPriceRange;
  setPriceRange(): void;
  // 
  alloc():cocoascript.INRidePartySizeOption;
  // 
  init():cocoascript.INRidePartySizeOption;
}
}
declare const INRidePartySizeOption: cocoascript.INRidePartySizeOption;

