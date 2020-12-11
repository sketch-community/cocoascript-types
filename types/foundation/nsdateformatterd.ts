declare namespace cocoascript {
  /**
   * A formatter that converts between dates and their textual representations.
   * doc://com.apple.documentation/documentation/foundation/nsdateformatter
   */
  interface NSDateFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1409994-datefromstring
    dateFromString(string: cocoascript.NSString):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1415810-stringfromdate
    stringFromDate(date: cocoascript.NSDate):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1409248-getobjectvalue
    getObjectValue_forString_range_error(obj: cocoascript._Nullable, string: cocoascript.NSString, rangep: cocoascript.NSRange, error: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1415411-datestyle
    dateStyle(): cocoascript.NSDateFormatterStyle;
    setDateStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1413467-timestyle
    timeStyle(): cocoascript.NSDateFormatterStyle;
    setTimeStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1413514-dateformat
    dateFormat(): cocoascript.NSString;
    setDateFormat(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1417087-setlocalizeddateformatfromtempla
    setLocalizedDateFormatFromTemplate(dateFormatTemplate: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1408066-formattingcontext
    formattingContext(): cocoascript.NSFormattingContext;
    setFormattingContext(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1413675-calendar
    calendar(): cocoascript.NSCalendar;
    setCalendar(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1408312-defaultdate
    defaultDate(): cocoascript.NSDate;
    setDefaultDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1411973-locale
    locale(): cocoascript.NSLocale;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1411406-timezone
    timeZone(): cocoascript.NSTimeZone;
    setTimeZone(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1417203-twodigitstartdate
    twoDigitStartDate(): cocoascript.NSDate;
    setTwoDigitStartDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1416389-gregorianstartdate
    gregorianStartDate(): cocoascript.NSDate;
    setGregorianStartDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1409720-formatterbehavior
    formatterBehavior(): cocoascript.NSDateFormatterBehavior;
    setFormatterBehavior(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1409266-defaultformatterbehavior
    defaultFormatterBehavior(): cocoascript.NSDateFormatterBehavior;
    setDefaultFormatterBehavior(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1554835-allowsnaturallanguage
    allowsNaturalLanguage():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1411441-lenient
    lenient(): cocoascript.BOOL;
    setLenient(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1415848-doesrelativedateformatting
    doesRelativeDateFormatting(): cocoascript.BOOL;
    setDoesRelativeDateFormatting(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1409506-amsymbol
    AMSymbol(): cocoascript.NSString;
    setAMSymbol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1412367-pmsymbol
    PMSymbol(): cocoascript.NSString;
    setPMSymbol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1412405-weekdaysymbols
    weekdaySymbols(): cocoascript.NSString;
    setWeekdaySymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1416121-shortweekdaysymbols
    shortWeekdaySymbols(): cocoascript.NSString;
    setShortWeekdaySymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1415109-veryshortweekdaysymbols
    veryShortWeekdaySymbols(): cocoascript.NSString;
    setVeryShortWeekdaySymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1413618-standaloneweekdaysymbols
    standaloneWeekdaySymbols(): cocoascript.NSString;
    setStandaloneWeekdaySymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1409119-shortstandaloneweekdaysymbols
    shortStandaloneWeekdaySymbols(): cocoascript.NSString;
    setShortStandaloneWeekdaySymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1418238-veryshortstandaloneweekdaysymbol
    veryShortStandaloneWeekdaySymbols(): cocoascript.NSString;
    setVeryShortStandaloneWeekdaySymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1412049-monthsymbols
    monthSymbols(): cocoascript.NSString;
    setMonthSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1409209-shortmonthsymbols
    shortMonthSymbols(): cocoascript.NSString;
    setShortMonthSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1413632-veryshortmonthsymbols
    veryShortMonthSymbols(): cocoascript.NSString;
    setVeryShortMonthSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1416227-standalonemonthsymbols
    standaloneMonthSymbols(): cocoascript.NSString;
    setStandaloneMonthSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1414771-shortstandalonemonthsymbols
    shortStandaloneMonthSymbols(): cocoascript.NSString;
    setShortStandaloneMonthSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1413322-veryshortstandalonemonthsymbols
    veryShortStandaloneMonthSymbols(): cocoascript.NSString;
    setVeryShortStandaloneMonthSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1417587-quartersymbols
    quarterSymbols(): cocoascript.NSString;
    setQuarterSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1409851-shortquartersymbols
    shortQuarterSymbols(): cocoascript.NSString;
    setShortQuarterSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1411487-standalonequartersymbols
    standaloneQuarterSymbols(): cocoascript.NSString;
    setStandaloneQuarterSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1416421-shortstandalonequartersymbols
    shortStandaloneQuarterSymbols(): cocoascript.NSString;
    setShortStandaloneQuarterSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1418282-erasymbols
    eraSymbols(): cocoascript.NSString;
    setEraSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1418081-longerasymbols
    longEraSymbols(): cocoascript.NSString;
    setLongEraSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1554834-initwithdateformat
    initWithDateFormat_allowNaturalLanguage(format: cocoascript.NSString, flag: cocoascript.BOOL):cocoascript.NSDateFormatter;
    // doc://com.apple.documentation/documentation/foundation/nsdateformatter/1411107-generatescalendardates
    generatesCalendarDates(): cocoascript.BOOL;
    setGeneratesCalendarDates(): void;
    //
    alloc():cocoascript.NSDateFormatter;
    //
    init():cocoascript.NSDateFormatter;
  }
}

declare const NSDateFormatter: cocoascript.NSDateFormatter;
