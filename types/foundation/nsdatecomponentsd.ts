declare namespace cocoascript {
  /**
   * An object that specifies a date or time in terms of units (such as year, month, day, hour, and minute) to be evaluated in a calendar system and time zone.
   * doc://com.apple.documentation/documentation/foundation/nsdatecomponents
   */
  interface NSDateComponents extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1415799-calendar
    calendar(): cocoascript.NSCalendar;
    setCalendar(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1408233-timezone
    timeZone(): cocoascript.NSTimeZone;
    setTimeZone(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1408788-validdate
    validDate(): cocoascript.BOOL;
    setValidDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1412707-isvaliddateincalendar
    isValidDateInCalendar(calendar: cocoascript.NSCalendar):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1412861-date
    date(): cocoascript.NSDate;
    setDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1416364-era
    era(): cocoascript.NSInteger;
    setEra(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1412462-year
    year(): cocoascript.NSInteger;
    setYear(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1413809-yearforweekofyear
    yearForWeekOfYear(): cocoascript.NSInteger;
    setYearForWeekOfYear(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1416503-quarter
    quarter(): cocoascript.NSInteger;
    setQuarter(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1408724-month
    month(): cocoascript.NSInteger;
    setMonth(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1408836-leapmonth
    leapMonth(): cocoascript.BOOL;
    setLeapMonth(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1410442-weekday
    weekday(): cocoascript.NSInteger;
    setWeekday(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1409476-weekdayordinal
    weekdayOrdinal(): cocoascript.NSInteger;
    setWeekdayOrdinal(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1413168-weekofmonth
    weekOfMonth(): cocoascript.NSInteger;
    setWeekOfMonth(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1416908-weekofyear
    weekOfYear(): cocoascript.NSInteger;
    setWeekOfYear(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1415267-day
    day(): cocoascript.NSInteger;
    setDay(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1430328-week
    week():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1430337-setweek
    setWeek(v: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1411355-hour
    hour(): cocoascript.NSInteger;
    setHour(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1409443-minute
    minute(): cocoascript.NSInteger;
    setMinute(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1414045-second
    second(): cocoascript.NSInteger;
    setSecond(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1415730-nanosecond
    nanosecond(): cocoascript.NSInteger;
    setNanosecond(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1416763-valueforcomponent
    valueForComponent(unit: cocoascript.NSCalendarUnit):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponents/1415961-setvalue
    setValue_forComponent(value: cocoascript.NSInteger, unit: cocoascript.NSCalendarUnit):void;
    //
    alloc():cocoascript.NSDateComponents;
    //
    init():cocoascript.NSDateComponents;
  }
}

declare const NSDateComponents: cocoascript.NSDateComponents;
