declare namespace cocoascript {
/**
 * A numeric quantity labeled with a unit of measure, with support for unit conversion and unit-aware calculations.
 * doc://com.apple.documentation/documentation/foundation/nsmeasurement
 */
interface NSMeasurement extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsmeasurement/1643012-initwithdoublevalue
  initWithDoubleValue_unit(doubleValue: number, unit: cocoascript.):cocoascript.NSMeasurement;
  // doc://com.apple.documentation/documentation/foundation/nsmeasurement/1642831-unit
  unit(): cocoascript.UnitType;
  setUnit(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmeasurement/1643124-doublevalue
  doubleValue(): number;
  setDoubleValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmeasurement/1690850-canbeconvertedtounit
  canBeConvertedToUnit(unit: cocoascript.NSUnit):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsmeasurement/1642900-measurementbyconvertingtounit
  measurementByConvertingToUnit(unit: cocoascript.NSUnit):cocoascript.NSMeasurement;
  // doc://com.apple.documentation/documentation/foundation/nsmeasurement/1643170-measurementbyaddingmeasurement
  measurementByAddingMeasurement(measurement: cocoascript.NSMeasurement):cocoascript.NSMeasurement;
  // doc://com.apple.documentation/documentation/foundation/nsmeasurement/1642872-measurementbysubtractingmeasurem
  measurementBySubtractingMeasurement(measurement: cocoascript.NSMeasurement):cocoascript.NSMeasurement;
  // 
  alloc():cocoascript.NSMeasurement;
  // 
  init():cocoascript.NSMeasurement;
}
}
declare const NSMeasurement: cocoascript.NSMeasurement;

