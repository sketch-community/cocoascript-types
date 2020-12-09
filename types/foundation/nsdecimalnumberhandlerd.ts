declare namespace cocoascript {
/**
 * A class that adopts the decimal number behaviors protocol. 
 * doc://com.apple.documentation/documentation/foundation/nsdecimalnumberhandler
 */
interface NSDecimalNumberHandler extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumberhandler/1407825-defaultdecimalnumberhandler
  defaultDecimalNumberHandler(): cocoascript.NSDecimalNumberHandler;
  setDefaultDecimalNumberHandler(): void;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumberhandler/1416492-initwithroundingmode
  initWithRoundingMode_scale_raiseOnExactness_raiseOnOverflow_raiseOnUnderflow_raiseOnDivideByZero(roundingMode: cocoascript.NSRoundingMode, scale: cocoascript.short, exact: cocoascript.BOOL, overflow: cocoascript.BOOL, underflow: cocoascript.BOOL, divideByZero: cocoascript.BOOL):cocoascript.NSDecimalNumberHandler;
  // 
  alloc():cocoascript.NSDecimalNumberHandler;
  // 
  init():cocoascript.NSDecimalNumberHandler;
}
}
declare const NSDecimalNumberHandler: cocoascript.NSDecimalNumberHandler;

