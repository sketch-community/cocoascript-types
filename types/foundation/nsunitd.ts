declare namespace cocoascript {
/**
 * An abstract class representing a unit of measure. 
 * doc://com.apple.documentation/documentation/foundation/nsunit
 */
interface NSUnit extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsunit/1642700-symbol
  symbol(): cocoascript.NSString;
  setSymbol(): void;
  // doc://com.apple.documentation/documentation/foundation/nsunit/1690760-initwithsymbol
  initWithSymbol(symbol: cocoascript.NSString):cocoascript.NSUnit;
  // 
  alloc():cocoascript.NSUnit;
  // 
  init():cocoascript.NSUnit;
}
}
declare const NSUnit: cocoascript.NSUnit;

