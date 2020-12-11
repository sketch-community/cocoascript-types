declare namespace cocoascript {
  /**
   * A representation of a specific point in time, independent of any calendar or time zone.
   * doc://com.apple.documentation/documentation/foundation/nsdate
   */
  interface NSDate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsdate/1415407-init
    init():cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1411701-initwithtimeintervalsincenow
    initWithTimeIntervalSinceNow(secs: cocoascript.NSTimeInterval):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1414201-initwithtimeinterval
    initWithTimeInterval_sinceDate(secsToBeAdded: cocoascript.NSTimeInterval, date: cocoascript.NSDate):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1409769-initwithtimeintervalsincereferen
    initWithTimeIntervalSinceReferenceDate(ti: cocoascript.NSTimeInterval):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1416453-initwithtimeintervalsince1970
    initWithTimeIntervalSince1970(secs: cocoascript.NSTimeInterval):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1412602-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1415385-distantfuture
    distantFuture(): cocoascript.NSDate;
    setDistantFuture(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1418197-distantpast
    distantPast(): cocoascript.NSDate;
    setDistantPast(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1416400-isequaltodate
    isEqualToDate(otherDate: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1412791-earlierdate
    earlierDate(anotherDate: cocoascript.NSDate):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1409058-laterdate
    laterDate(anotherDate: cocoascript.NSDate):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1409748-compare
    compare(other: cocoascript.NSDate):cocoascript.NSComparisonResult;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1410206-timeintervalsincedate
    timeIntervalSinceDate(anotherDate: cocoascript.NSDate):cocoascript.NSTimeInterval;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1407937-timeintervalsincenow
    timeIntervalSinceNow(): cocoascript.NSTimeInterval;
    setTimeIntervalSinceNow(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1417376-timeintervalsincereferencedate
    timeIntervalSinceReferenceDate(): cocoascript.NSTimeInterval;
    setTimeIntervalSinceReferenceDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1407504-timeintervalsince1970
    timeIntervalSince1970(): cocoascript.NSTimeInterval;
    setTimeIntervalSince1970(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1408189-timeintervalsincereferencedate
    timeIntervalSinceReferenceDate(): cocoascript.NSTimeInterval;
    setTimeIntervalSinceReferenceDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1408823-datebyaddingtimeinterval
    dateByAddingTimeInterval(ti: cocoascript.NSTimeInterval):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1409767-description
    description(): cocoascript.NSString;
    setDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1414108-descriptionwithlocale
    descriptionWithLocale(locale: cocoascript.NSDate):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1407172-initwithstring
    initWithString(description: cocoascript.NSString):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1591575-addtimeinterval
    addTimeInterval(seconds: cocoascript.NSTimeInterval):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1407899-datewithcalendarformat
    dateWithCalendarFormat_timeZone(format: cocoascript.NSString, aTimeZone: cocoascript.NSTimeZone):cocoascript.NSCalendarDate;
    // doc://com.apple.documentation/documentation/foundation/nsdate/1415983-descriptionwithcalendarformat
    descriptionWithCalendarFormat_timeZone_locale(format: cocoascript.NSString, aTimeZone: cocoascript.NSTimeZone, locale: cocoascript.NSDate):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdate/3180113-now
    now(): cocoascript.NSDate;
    setNow(): void;
    //
    alloc():cocoascript.NSDate;
    //
    init():cocoascript.NSDate;
  }
}

declare const NSDate: cocoascript.NSDate;
