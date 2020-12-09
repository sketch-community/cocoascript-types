declare namespace cocoascript {
/**
 * A unit of measure for an amount-of-substance fraction.
 * doc://com.apple.documentation/documentation/foundation/nsunitdispersion
 */
interface NSUnitDispersion extends NSDimension {
  // doc://com.apple.documentation/documentation/foundation/nsunitdispersion/1690700-partspermillion
  partsPerMillion(): cocoascript.NSUnitDispersion;
  setPartsPerMillion(): void;
  // 
  alloc():cocoascript.NSUnitDispersion;
  // 
  init():cocoascript.NSUnitDispersion;
}
}
declare const NSUnitDispersion: cocoascript.NSUnitDispersion;

