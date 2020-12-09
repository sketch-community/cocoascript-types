declare namespace cocoascript {
/**
 * An object representing the span of time between a specific start date and end date. 
 * doc://com.apple.documentation/documentation/foundation/nsdateinterval
 */
interface NSDateInterval extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641637-init
  init():cocoascript.NSDateInterval;
  // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641653-initwithstartdate
  initWithStartDate_duration(startDate: cocoascript.NSDate, duration: cocoascript.NSTimeInterval):cocoascript.NSDateInterval;
  // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641639-initwithstartdate
  initWithStartDate_endDate(startDate: cocoascript.NSDate, endDate: cocoascript.NSDate):cocoascript.NSDateInterval;
  // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641642-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSDateInterval;
  // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641656-startdate
  startDate(): cocoascript.NSDate;
  setStartDate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641651-enddate
  endDate(): cocoascript.NSDate;
  setEndDate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641643-duration
  duration(): cocoascript.NSTimeInterval;
  setDuration(): void;
  // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641636-compare
  compare(dateInterval: cocoascript.NSDateInterval):cocoascript.NSComparisonResult;
  // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641650-isequaltodateinterval
  isEqualToDateInterval(dateInterval: cocoascript.NSDateInterval):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641654-intersectsdateinterval
  intersectsDateInterval(dateInterval: cocoascript.NSDateInterval):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641645-intersectionwithdateinterval
  intersectionWithDateInterval(dateInterval: cocoascript.NSDateInterval):cocoascript.NSDateInterval;
  // doc://com.apple.documentation/documentation/foundation/nsdateinterval/1641647-containsdate
  containsDate(date: cocoascript.NSDate):cocoascript.BOOL;
  // 
  alloc():cocoascript.NSDateInterval;
  // 
  init():cocoascript.NSDateInterval;
}
}
declare const NSDateInterval: cocoascript.NSDateInterval;

