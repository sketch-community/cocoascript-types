declare namespace cocoascript {
/**
 * A description of how to convert between units using a linear equation.
 * doc://com.apple.documentation/documentation/foundation/nsunitconverterlinear
 */
interface NSUnitConverterLinear extends NSUnitConverter {
  // doc://com.apple.documentation/documentation/foundation/nsunitconverterlinear/1823683-coefficient
  coefficient(): number;
  setCoefficient(): void;
  // doc://com.apple.documentation/documentation/foundation/nsunitconverterlinear/1823598-constant
  constant(): number;
  setConstant(): void;
  // doc://com.apple.documentation/documentation/foundation/nsunitconverterlinear/1823611-initwithcoefficient
  initWithCoefficient(coefficient: number):cocoascript.NSUnitConverterLinear;
  // doc://com.apple.documentation/documentation/foundation/nsunitconverterlinear/1823577-initwithcoefficient
  initWithCoefficient_constant(coefficient: number, constant: number):cocoascript.NSUnitConverterLinear;
  // 
  alloc():cocoascript.NSUnitConverterLinear;
  // 
  init():cocoascript.NSUnitConverterLinear;
}
}
declare const NSUnitConverterLinear: cocoascript.NSUnitConverterLinear;

