declare namespace cocoascript {
/**
 * An object that defines the relationships between calendar units (such as eras, years, and weekdays) and absolute points in time, providing features for calculation and comparison of dates.  
 * doc://com.apple.documentation/documentation/foundation/nscalendar
 */
interface NSCalendar extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1415991-initwithcalendaridentifier
  initWithCalendarIdentifier(ident: cocoascript.NSCalendarIdentifier):cocoascript.NSCalendar;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1408501-currentcalendar
  currentCalendar(): cocoascript.NSCalendar;
  setCurrentCalendar(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1413771-autoupdatingcurrentcalendar
  autoupdatingCurrentCalendar(): cocoascript.NSCalendar;
  setAutoupdatingCurrentCalendar(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1407954-date
  date_matchesComponents(date: cocoascript.NSDate, components: cocoascript.NSDateComponents):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1416505-component
  component_fromDate(unit: cocoascript.NSCalendarUnit, date: cocoascript.NSDate):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1414841-components
  components_fromDate(unitFlags: cocoascript.NSCalendarUnit, date: cocoascript.NSDate):cocoascript.NSDateComponents;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1407925-components
  components_fromDate_toDate_options(unitFlags: cocoascript.NSCalendarUnit, startingDate: cocoascript.NSDate, resultDate: cocoascript.NSDate, opts: cocoascript.NSCalendarOptions):cocoascript.NSDateComponents;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1411297-components
  components_fromDateComponents_toDateComponents_options(unitFlags: cocoascript.NSCalendarUnit, startingDateComp: cocoascript.NSDateComponents, resultDateComp: cocoascript.NSDateComponents, options: cocoascript.NSCalendarOptions):cocoascript.NSDateComponents;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1413194-componentsintimezone
  componentsInTimeZone_fromDate(timezone: cocoascript.NSTimeZone, date: cocoascript.NSDate):cocoascript.NSDateComponents;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1418143-getera
  getEra_year_month_day_fromDate(eraValuePointer: cocoascript.NSInteger, yearValuePointer: cocoascript.NSInteger, monthValuePointer: cocoascript.NSInteger, dayValuePointer: cocoascript.NSInteger, date: cocoascript.NSDate):void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1410912-getera
  getEra_yearForWeekOfYear_weekOfYear_weekday_fromDate(eraValuePointer: cocoascript.NSInteger, yearValuePointer: cocoascript.NSInteger, weekValuePointer: cocoascript.NSInteger, weekdayValuePointer: cocoascript.NSInteger, date: cocoascript.NSDate):void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1415012-gethour
  getHour_minute_second_nanosecond_fromDate(hourValuePointer: cocoascript.NSInteger, minuteValuePointer: cocoascript.NSInteger, secondValuePointer: cocoascript.NSInteger, nanosecondValuePointer: cocoascript.NSInteger, date: cocoascript.NSDate):void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1408268-calendaridentifier
  calendarIdentifier(): cocoascript.NSCalendarIdentifier;
  setCalendarIdentifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1408310-firstweekday
  firstWeekday(): cocoascript.NSUInteger;
  setFirstWeekday(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1418111-locale
  locale(): cocoascript.NSLocale;
  setLocale(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1409969-timezone
  timeZone(): cocoascript.NSTimeZone;
  setTimeZone(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1414251-maximumrangeofunit
  maximumRangeOfUnit(unit: cocoascript.NSCalendarUnit):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1413638-minimumrangeofunit
  minimumRangeOfUnit(unit: cocoascript.NSCalendarUnit):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1410186-minimumdaysinfirstweek
  minimumDaysInFirstWeek(): cocoascript.NSUInteger;
  setMinimumDaysInFirstWeek(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1408595-ordinalityofunit
  ordinalityOfUnit_inUnit_forDate(smaller: cocoascript.NSCalendarUnit, larger: cocoascript.NSCalendarUnit, date: cocoascript.NSDate):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1418344-rangeofunit
  rangeOfUnit_inUnit_forDate(smaller: cocoascript.NSCalendarUnit, larger: cocoascript.NSCalendarUnit, date: cocoascript.NSDate):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1408013-rangeofunit
  rangeOfUnit_startDate_interval_forDate(unit: cocoascript.NSCalendarUnit, datep: cocoascript._Nullable, tip: cocoascript.NSTimeInterval, date: cocoascript.NSDate):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1413286-rangeofweekendstartdate
  rangeOfWeekendStartDate_interval_containingDate(datep: cocoascript._Nullable, tip: cocoascript.NSTimeInterval, date: cocoascript.NSDate):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1417161-startofdayfordate
  startOfDayForDate(date: cocoascript.NSDate):cocoascript.NSDate;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1413938-enumeratedatesstartingafterdate
  enumerateDatesStartingAfterDate_matchingComponents_options_usingBlock(start: cocoascript.NSDate, comps: cocoascript.NSDateComponents, opts: cocoascript.NSCalendarOptions, block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1416165-nextdateafterdate
  nextDateAfterDate_matchingComponents_options(date: cocoascript.NSDate, comps: cocoascript.NSDateComponents, options: cocoascript.NSCalendarOptions):cocoascript.NSDate;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1416814-nextdateafterdate
  nextDateAfterDate_matchingHour_minute_second_options(date: cocoascript.NSDate, hourValue: cocoascript.NSInteger, minuteValue: cocoascript.NSInteger, secondValue: cocoascript.NSInteger, options: cocoascript.NSCalendarOptions):cocoascript.NSDate;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1417170-nextdateafterdate
  nextDateAfterDate_matchingUnit_value_options(date: cocoascript.NSDate, unit: cocoascript.NSCalendarUnit, value: cocoascript.NSInteger, options: cocoascript.NSCalendarOptions):cocoascript.NSDate;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1407609-datefromcomponents
  dateFromComponents(comps: cocoascript.NSDateComponents):cocoascript.NSDate;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1409577-datebyaddingcomponents
  dateByAddingComponents_toDate_options(comps: cocoascript.NSDateComponents, date: cocoascript.NSDate, opts: cocoascript.NSCalendarOptions):cocoascript.NSDate;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1407989-datebyaddingunit
  dateByAddingUnit_value_toDate_options(unit: cocoascript.NSCalendarUnit, value: cocoascript.NSInteger, date: cocoascript.NSDate, options: cocoascript.NSCalendarOptions):cocoascript.NSDate;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1407363-datebysettinghour
  dateBySettingHour_minute_second_ofDate_options(h: cocoascript.NSInteger, m: cocoascript.NSInteger, s: cocoascript.NSInteger, date: cocoascript.NSDate, opts: cocoascript.NSCalendarOptions):cocoascript.NSDate;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1417915-datebysettingunit
  dateBySettingUnit_value_ofDate_options(unit: cocoascript.NSCalendarUnit, v: cocoascript.NSInteger, date: cocoascript.NSDate, opts: cocoascript.NSCalendarOptions):cocoascript.NSDate;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1415254-datewithera
  dateWithEra_year_month_day_hour_minute_second_nanosecond(eraValue: cocoascript.NSInteger, yearValue: cocoascript.NSInteger, monthValue: cocoascript.NSInteger, dayValue: cocoascript.NSInteger, hourValue: cocoascript.NSInteger, minuteValue: cocoascript.NSInteger, secondValue: cocoascript.NSInteger, nanosecondValue: cocoascript.NSInteger):cocoascript.NSDate;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1413628-datewithera
  dateWithEra_yearForWeekOfYear_weekOfYear_weekday_hour_minute_second_nanosecond(eraValue: cocoascript.NSInteger, yearValue: cocoascript.NSInteger, weekValue: cocoascript.NSInteger, weekdayValue: cocoascript.NSInteger, hourValue: cocoascript.NSInteger, minuteValue: cocoascript.NSInteger, secondValue: cocoascript.NSInteger, nanosecondValue: cocoascript.NSInteger):cocoascript.NSDate;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1409905-nextweekendstartdate
  nextWeekendStartDate_interval_options_afterDate(datep: cocoascript._Nullable, tip: cocoascript.NSTimeInterval, options: cocoascript.NSCalendarOptions, date: cocoascript.NSDate):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1415661-comparedate
  compareDate_toDate_toUnitGranularity(date1: cocoascript.NSDate, date2: cocoascript.NSDate, unit: cocoascript.NSCalendarUnit):cocoascript.NSComparisonResult;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1411431-isdate
  isDate_equalToDate_toUnitGranularity(date1: cocoascript.NSDate, date2: cocoascript.NSDate, unit: cocoascript.NSCalendarUnit):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1417649-isdate
  isDate_inSameDayAsDate(date1: cocoascript.NSDate, date2: cocoascript.NSDate):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1417149-isdateintoday
  isDateInToday(date: cocoascript.NSDate):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1410279-isdateintomorrow
  isDateInTomorrow(date: cocoascript.NSDate):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1412175-isdateinweekend
  isDateInWeekend(date: cocoascript.NSDate):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1409356-isdateinyesterday
  isDateInYesterday(date: cocoascript.NSDate):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1416226-amsymbol
  AMSymbol(): cocoascript.NSString;
  setAMSymbol(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1416343-pmsymbol
  PMSymbol(): cocoascript.NSString;
  setPMSymbol(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1412939-weekdaysymbols
  weekdaySymbols(): cocoascript.NSString;
  setWeekdaySymbols(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1407268-shortweekdaysymbols
  shortWeekdaySymbols(): cocoascript.NSString;
  setShortWeekdaySymbols(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1417207-veryshortweekdaysymbols
  veryShortWeekdaySymbols(): cocoascript.NSString;
  setVeryShortWeekdaySymbols(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1411219-standaloneweekdaysymbols
  standaloneWeekdaySymbols(): cocoascript.NSString;
  setStandaloneWeekdaySymbols(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1413871-shortstandaloneweekdaysymbols
  shortStandaloneWeekdaySymbols(): cocoascript.NSString;
  setShortStandaloneWeekdaySymbols(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1418273-veryshortstandaloneweekdaysymbol
  veryShortStandaloneWeekdaySymbols(): cocoascript.NSString;
  setVeryShortStandaloneWeekdaySymbols(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1414872-monthsymbols
  monthSymbols(): cocoascript.NSString;
  setMonthSymbols(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1408952-shortmonthsymbols
  shortMonthSymbols(): cocoascript.NSString;
  setShortMonthSymbols(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1412779-veryshortmonthsymbols
  veryShortMonthSymbols(): cocoascript.NSString;
  setVeryShortMonthSymbols(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1409598-standalonemonthsymbols
  standaloneMonthSymbols(): cocoascript.NSString;
  setStandaloneMonthSymbols(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1418180-shortstandalonemonthsymbols
  shortStandaloneMonthSymbols(): cocoascript.NSString;
  setShortStandaloneMonthSymbols(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1408035-veryshortstandalonemonthsymbols
  veryShortStandaloneMonthSymbols(): cocoascript.NSString;
  setVeryShortStandaloneMonthSymbols(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1411517-quartersymbols
  quarterSymbols(): cocoascript.NSString;
  setQuarterSymbols(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1414864-shortquartersymbols
  shortQuarterSymbols(): cocoascript.NSString;
  setShortQuarterSymbols(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1407159-standalonequartersymbols
  standaloneQuarterSymbols(): cocoascript.NSString;
  setStandaloneQuarterSymbols(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1409823-shortstandalonequartersymbols
  shortStandaloneQuarterSymbols(): cocoascript.NSString;
  setShortStandaloneQuarterSymbols(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1415038-erasymbols
  eraSymbols(): cocoascript.NSString;
  setEraSymbols(): void;
  // doc://com.apple.documentation/documentation/foundation/nscalendar/1414285-longerasymbols
  longEraSymbols(): cocoascript.NSString;
  setLongEraSymbols(): void;
  // 
  alloc():cocoascript.NSCalendar;
  // 
  init():cocoascript.NSCalendar;
}
}
declare const NSCalendar: cocoascript.NSCalendar;

