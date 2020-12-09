declare namespace cocoascript {
/**
 * A display of a calendar date with controls for editing the date value. 
 * doc://com.apple.documentation/documentation/appkit/nsdatepicker
 */
interface NSDatePicker extends NSControl {
  // doc://com.apple.documentation/documentation/appkit/nsdatepicker/1533534-bezeled
  bezeled(): cocoascript.BOOL;
  setBezeled(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepicker/1534176-bordered
  bordered(): cocoascript.BOOL;
  setBordered(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepicker/1527710-backgroundcolor
  backgroundColor(): cocoascript.NSColor;
  setBackgroundColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepicker/1528266-drawsbackground
  drawsBackground(): cocoascript.BOOL;
  setDrawsBackground(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepicker/1534294-textcolor
  textColor(): cocoascript.NSColor;
  setTextColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepicker/1528570-datepickerstyle
  datePickerStyle(): cocoascript.NSDatePickerStyle;
  setDatePickerStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepicker/3521157-presentscalendaroverlay
  presentsCalendarOverlay(): cocoascript.BOOL;
  setPresentsCalendarOverlay(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepicker/1533878-delegate
  delegate(): cocoascript.NSDatePickerCellDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepicker/1533480-datepickerelements
  datePickerElements(): cocoascript.NSDatePickerElementFlags;
  setDatePickerElements(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepicker/1533591-calendar
  calendar(): cocoascript.NSCalendar;
  setCalendar(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepicker/1525940-locale
  locale(): cocoascript.NSLocale;
  setLocale(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepicker/1527214-datepickermode
  datePickerMode(): cocoascript.NSDatePickerMode;
  setDatePickerMode(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepicker/1535451-timezone
  timeZone(): cocoascript.NSTimeZone;
  setTimeZone(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepicker/1527606-datevalue
  dateValue(): cocoascript.NSDate;
  setDateValue(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepicker/1526681-timeinterval
  timeInterval(): cocoascript.NSTimeInterval;
  setTimeInterval(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepicker/1526893-mindate
  minDate(): cocoascript.NSDate;
  setMinDate(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepicker/1535887-maxdate
  maxDate(): cocoascript.NSDate;
  setMaxDate(): void;
  // 
  alloc():cocoascript.NSDatePicker;
  // 
  init():cocoascript.NSDatePicker;
}
}
declare const NSDatePicker: cocoascript.NSDatePicker;

