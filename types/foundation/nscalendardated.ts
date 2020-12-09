declare namespace cocoascript {
/**
 * A specialized date object with embedded calendar information.
 * doc://com.apple.documentation/documentation/foundation/nscalendardate
 */
interface NSCalendarDate extends NSDate {
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564272-calendarformat
  calendarFormat():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564251-datebyaddingyears
  dateByAddingYears_months_days_hours_minutes_seconds(year: cocoascript.NSInteger, month: cocoascript.NSInteger, day: cocoascript.NSInteger, hour: cocoascript.NSInteger, minute: cocoascript.NSInteger, second: cocoascript.NSInteger):cocoascript.NSCalendarDate;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564253-dayofcommonera
  dayOfCommonEra():cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564274-dayofmonth
  dayOfMonth():cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564254-dayofweek
  dayOfWeek():cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564264-dayofyear
  dayOfYear():cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564261-descriptionwithcalendarformat
  descriptionWithCalendarFormat(format: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564265-descriptionwithcalendarformat
  descriptionWithCalendarFormat_locale(format: cocoascript.NSString, locale: cocoascript.NSCalendarDate):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564269-descriptionwithlocale
  descriptionWithLocale(locale: cocoascript.NSCalendarDate):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564259-hourofday
  hourOfDay():cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564258-initwithstring
  initWithString(description: cocoascript.NSString):cocoascript.NSCalendarDate;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564268-initwithstring
  initWithString_calendarFormat(description: cocoascript.NSString, format: cocoascript.NSString):cocoascript.NSCalendarDate;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564263-initwithstring
  initWithString_calendarFormat_locale(description: cocoascript.NSString, format: cocoascript.NSString, locale: cocoascript.NSCalendarDate):cocoascript.NSCalendarDate;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564270-initwithyear
  initWithYear_month_day_hour_minute_second_timeZone(year: cocoascript.NSInteger, month: cocoascript.NSUInteger, day: cocoascript.NSUInteger, hour: cocoascript.NSUInteger, minute: cocoascript.NSUInteger, second: cocoascript.NSUInteger, aTimeZone: cocoascript.NSTimeZone):cocoascript.NSCalendarDate;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564271-minuteofhour
  minuteOfHour():cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564260-monthofyear
  monthOfYear():cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564273-secondofminute
  secondOfMinute():cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564250-setcalendarformat
  setCalendarFormat(format: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564267-settimezone
  setTimeZone(aTimeZone: cocoascript.NSTimeZone):void;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564277-timezone
  timeZone():cocoascript.NSTimeZone;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564262-yearofcommonera
  yearOfCommonEra():cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/foundation/nscalendardate/1564256-years
  years_months_days_hours_minutes_seconds_sinceDate(yp: cocoascript.NSInteger, mop: cocoascript.NSInteger, dp: cocoascript.NSInteger, hp: cocoascript.NSInteger, mip: cocoascript.NSInteger, sp: cocoascript.NSInteger, date: cocoascript.NSCalendarDate):void;
  // 
  alloc():cocoascript.NSCalendarDate;
  // 
  init():cocoascript.NSCalendarDate;
}
}
declare const NSCalendarDate: cocoascript.NSCalendarDate;

