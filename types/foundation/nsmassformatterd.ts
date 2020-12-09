declare namespace cocoascript {
/**
 * A formatter that provides localized descriptions of mass and weight values.
 * doc://com.apple.documentation/documentation/foundation/nsmassformatter
 */
interface NSMassFormatter extends NSFormatter {
  // doc://com.apple.documentation/documentation/foundation/nsmassformatter/1407306-forpersonmassuse
  forPersonMassUse(): cocoascript.BOOL;
  setForPersonMassUse(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmassformatter/1417304-getobjectvalue
  getObjectValue_forString_errorDescription(obj: cocoascript._Nullable, string: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsmassformatter/1418462-numberformatter
  numberFormatter(): cocoascript.NSNumberFormatter;
  setNumberFormatter(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmassformatter/1414324-stringfromkilograms
  stringFromKilograms(numberInKilograms: number):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsmassformatter/1409002-stringfromvalue
  stringFromValue_unit(value: number, unit: cocoascript.NSMassFormatterUnit):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsmassformatter/1408475-unitstringfromkilograms
  unitStringFromKilograms_usedUnit(numberInKilograms: number, unitp: cocoascript.NSMassFormatterUnit):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsmassformatter/1415491-unitstringfromvalue
  unitStringFromValue_unit(value: number, unit: cocoascript.NSMassFormatterUnit):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsmassformatter/1411215-unitstyle
  unitStyle(): cocoascript.NSFormattingUnitStyle;
  setUnitStyle(): void;
  // 
  alloc():cocoascript.NSMassFormatter;
  // 
  init():cocoascript.NSMassFormatter;
}
}
declare const NSMassFormatter: cocoascript.NSMassFormatter;

