declare namespace cocoascript {
/**
 * A formatter that provides localized descriptions of energy values.
 * doc://com.apple.documentation/documentation/foundation/nsenergyformatter
 */
interface NSEnergyFormatter extends NSFormatter {
  // doc://com.apple.documentation/documentation/foundation/nsenergyformatter/1410338-forfoodenergyuse
  forFoodEnergyUse(): cocoascript.BOOL;
  setForFoodEnergyUse(): void;
  // doc://com.apple.documentation/documentation/foundation/nsenergyformatter/1414825-getobjectvalue
  getObjectValue_forString_errorDescription(obj: cocoascript._Nullable, string: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsenergyformatter/1412614-numberformatter
  numberFormatter(): cocoascript.NSNumberFormatter;
  setNumberFormatter(): void;
  // doc://com.apple.documentation/documentation/foundation/nsenergyformatter/1409502-stringfromjoules
  stringFromJoules(numberInJoules: number):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsenergyformatter/1411983-stringfromvalue
  stringFromValue_unit(value: number, unit: cocoascript.NSEnergyFormatterUnit):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsenergyformatter/1408656-unitstringfromjoules
  unitStringFromJoules_usedUnit(numberInJoules: number, unitp: cocoascript.NSEnergyFormatterUnit):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsenergyformatter/1411180-unitstringfromvalue
  unitStringFromValue_unit(value: number, unit: cocoascript.NSEnergyFormatterUnit):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsenergyformatter/1414075-unitstyle
  unitStyle(): cocoascript.NSFormattingUnitStyle;
  setUnitStyle(): void;
  // 
  alloc():cocoascript.NSEnergyFormatter;
  // 
  init():cocoascript.NSEnergyFormatter;
}
}
declare const NSEnergyFormatter: cocoascript.NSEnergyFormatter;

