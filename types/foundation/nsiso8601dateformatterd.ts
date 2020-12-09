declare namespace cocoascript {
/**
 * A formatter that converts between dates and their ISO 8601 string representations.
 * doc://com.apple.documentation/documentation/foundation/nsiso8601dateformatter
 */
interface NSISO8601DateFormatter extends NSFormatter {
  // doc://com.apple.documentation/documentation/foundation/nsiso8601dateformatter/1643324-formatoptions
  formatOptions(): cocoascript.NSISO8601DateFormatOptions;
  setFormatOptions(): void;
  // doc://com.apple.documentation/documentation/foundation/nsiso8601dateformatter/1643185-timezone
  timeZone(): cocoascript.NSTimeZone;
  setTimeZone(): void;
  // doc://com.apple.documentation/documentation/foundation/nsiso8601dateformatter/1643114-init
  init():cocoascript.NSISO8601DateFormatter;
  // doc://com.apple.documentation/documentation/foundation/nsiso8601dateformatter/1643076-stringfromdate
  stringFromDate(date: cocoascript.NSDate):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsiso8601dateformatter/1643127-datefromstring
  dateFromString(string: cocoascript.NSString):cocoascript.NSDate;
  // 
  alloc():cocoascript.NSISO8601DateFormatter;
  // 
  init():cocoascript.NSISO8601DateFormatter;
}
}
declare const NSISO8601DateFormatter: cocoascript.NSISO8601DateFormatter;

