declare namespace cocoascript {
/**
 * A formatter that provides localized descriptions of linear distances, such as length and height measurements.
 * doc://com.apple.documentation/documentation/foundation/nslengthformatter
 */
interface NSLengthFormatter extends NSFormatter {
  // doc://com.apple.documentation/documentation/foundation/nslengthformatter/1416517-forpersonheightuse
  forPersonHeightUse(): cocoascript.BOOL;
  setForPersonHeightUse(): void;
  // doc://com.apple.documentation/documentation/foundation/nslengthformatter/1413280-getobjectvalue
  getObjectValue_forString_errorDescription(obj: cocoascript._Nullable, string: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nslengthformatter/1417778-numberformatter
  numberFormatter(): cocoascript.NSNumberFormatter;
  setNumberFormatter(): void;
  // doc://com.apple.documentation/documentation/foundation/nslengthformatter/1416111-stringfrommeters
  stringFromMeters(numberInMeters: number):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nslengthformatter/1418018-stringfromvalue
  stringFromValue_unit(value: number, unit: cocoascript.NSLengthFormatterUnit):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nslengthformatter/1407661-unitstringfrommeters
  unitStringFromMeters_usedUnit(numberInMeters: number, unitp: cocoascript.NSLengthFormatterUnit):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nslengthformatter/1416076-unitstringfromvalue
  unitStringFromValue_unit(value: number, unit: cocoascript.NSLengthFormatterUnit):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nslengthformatter/1409965-unitstyle
  unitStyle(): cocoascript.NSFormattingUnitStyle;
  setUnitStyle(): void;
  // 
  alloc():cocoascript.NSLengthFormatter;
  // 
  init():cocoascript.NSLengthFormatter;
}
}
declare const NSLengthFormatter: cocoascript.NSLengthFormatter;

