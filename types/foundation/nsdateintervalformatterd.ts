declare namespace cocoascript {
  /**
   * A formatter that creates string representations of time intervals.
   * doc://com.apple.documentation/documentation/foundation/nsdateintervalformatter
   */
  interface NSDateIntervalFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nsdateintervalformatter/1418368-stringfromdate
    stringFromDate_toDate(fromDate: cocoascript.NSDate, toDate: cocoascript.NSDate):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdateintervalformatter/1409519-datestyle
    dateStyle(): cocoascript.NSDateIntervalFormatterStyle;
    setDateStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateintervalformatter/1415655-timestyle
    timeStyle(): cocoascript.NSDateIntervalFormatterStyle;
    setTimeStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateintervalformatter/1407373-datetemplate
    dateTemplate(): cocoascript.NSString;
    setDateTemplate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateintervalformatter/1417984-calendar
    calendar(): cocoascript.NSCalendar;
    setCalendar(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateintervalformatter/1409992-locale
    locale(): cocoascript.NSLocale;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateintervalformatter/1410228-timezone
    timeZone(): cocoascript.NSTimeZone;
    setTimeZone(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateintervalformatter/1642848-stringfromdateinterval
    stringFromDateInterval(dateInterval: cocoascript.NSDateInterval):cocoascript.NSString;
    //
    alloc():cocoascript.NSDateIntervalFormatter;
    //
    init():cocoascript.NSDateIntervalFormatter;
  }
}

declare const NSDateIntervalFormatter: cocoascript.NSDateIntervalFormatter;
