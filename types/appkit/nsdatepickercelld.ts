declare namespace cocoascript {
/**
 * An object that controls the behavior of a date picker, or of a single date picker cell in a matrix.
 * doc://com.apple.documentation/documentation/appkit/nsdatepickercell
 */
interface NSDatePickerCell extends NSActionCell {
  // doc://com.apple.documentation/documentation/appkit/nsdatepickercell/1459629-backgroundcolor
  backgroundColor(): cocoascript.NSColor;
  setBackgroundColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepickercell/1459591-drawsbackground
  drawsBackground(): cocoascript.BOOL;
  setDrawsBackground(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepickercell/1459644-textcolor
  textColor(): cocoascript.NSColor;
  setTextColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepickercell/1459635-datepickerstyle
  datePickerStyle(): cocoascript.NSDatePickerStyle;
  setDatePickerStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepickercell/1459639-datepickerelements
  datePickerElements(): cocoascript.NSDatePickerElementFlags;
  setDatePickerElements(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepickercell/1459602-datepickermode
  datePickerMode(): cocoascript.NSDatePickerMode;
  setDatePickerMode(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepickercell/1459594-datevalue
  dateValue(): cocoascript.NSDate;
  setDateValue(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepickercell/1459589-timeinterval
  timeInterval(): cocoascript.NSTimeInterval;
  setTimeInterval(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepickercell/1459609-calendar
  calendar(): cocoascript.NSCalendar;
  setCalendar(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepickercell/1459625-locale
  locale(): cocoascript.NSLocale;
  setLocale(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepickercell/1459633-timezone
  timeZone(): cocoascript.NSTimeZone;
  setTimeZone(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepickercell/1459619-mindate
  minDate(): cocoascript.NSDate;
  setMinDate(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepickercell/1459640-maxdate
  maxDate(): cocoascript.NSDate;
  setMaxDate(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepickercell/1459615-delegate
  delegate(): cocoascript.NSDatePickerCellDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdatepickercell/1643567-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSDatePickerCell;
  // doc://com.apple.documentation/documentation/appkit/nsdatepickercell/1643566-inittextcell
  initTextCell(string: cocoascript.NSString):cocoascript.NSDatePickerCell;
  // 
  alloc():cocoascript.NSDatePickerCell;
  // 
  init():cocoascript.NSDatePickerCell;
}
}
declare const NSDatePickerCell: cocoascript.NSDatePickerCell;

