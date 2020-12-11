declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatter
   */
  interface NSRelativeDateTimeFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatter/3130994-calendar
    calendar(): cocoascript.NSCalendar;
    setCalendar(): void;
    // doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatter/3130995-datetimestyle
    dateTimeStyle(): cocoascript.NSRelativeDateTimeFormatterStyle;
    setDateTimeStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatter/3130996-formattingcontext
    formattingContext(): cocoascript.NSFormattingContext;
    setFormattingContext(): void;
    // doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatter/3130997-locale
    locale(): cocoascript.NSLocale;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatter/3131002-unitsstyle
    unitsStyle(): cocoascript.NSRelativeDateTimeFormatterUnitsStyle;
    setUnitsStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatter/3130998-localizedstringfordate
    localizedStringForDate_relativeToDate(date: cocoascript.NSDate, referenceDate: cocoascript.NSDate):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatter/3130999-localizedstringfromdatecomponent
    localizedStringFromDateComponents(dateComponents: cocoascript.NSDateComponents):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatter/3131000-localizedstringfromtimeinterval
    localizedStringFromTimeInterval(timeInterval: cocoascript.NSTimeInterval):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsrelativedatetimeformatter/3131001-stringforobjectvalue
    stringForObjectValue(obj: cocoascript.NSRelativeDateTimeFormatter):cocoascript.NSString;
    //
    alloc():cocoascript.NSRelativeDateTimeFormatter;
    //
    init():cocoascript.NSRelativeDateTimeFormatter;
  }
}

declare const NSRelativeDateTimeFormatter: cocoascript.NSRelativeDateTimeFormatter;
