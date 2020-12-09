declare namespace cocoascript {
/**
 * An abstract class that provides a description of how to convert a unit to and from the base unit of its dimension.
 * doc://com.apple.documentation/documentation/foundation/nsunitconverter
 */
interface NSUnitConverter extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsunitconverter/1823668-baseunitvaluefromvalue
  baseUnitValueFromValue(value: number):number;
  // doc://com.apple.documentation/documentation/foundation/nsunitconverter/1823657-valuefrombaseunitvalue
  valueFromBaseUnitValue(baseUnitValue: number):number;
  // 
  alloc():cocoascript.NSUnitConverter;
  // 
  init():cocoascript.NSUnitConverter;
}
}
declare const NSUnitConverter: cocoascript.NSUnitConverter;

