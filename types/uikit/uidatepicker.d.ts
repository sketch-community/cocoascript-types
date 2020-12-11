declare namespace cocoascript {
  /**
   * A control for the inputting of date and time values.
   * doc://com.apple.documentation/documentation/uikit/uidatepicker
   */
  interface UIDatePicker extends UIControl {
    // doc://com.apple.documentation/documentation/uikit/uidatepicker/1615973-calendar
    calendar(): cocoascript.NSCalendar;
    setCalendar(): void;
    // doc://com.apple.documentation/documentation/uikit/uidatepicker/1615975-date
    date(): cocoascript.NSDate;
    setDate(): void;
    // doc://com.apple.documentation/documentation/uikit/uidatepicker/1615995-locale
    locale(): cocoascript.NSLocale;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/uikit/uidatepicker/1615971-setdate
    setDate_animated(date: cocoascript.NSDate, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uidatepicker/1615976-timezone
    timeZone(): cocoascript.NSTimeZone;
    setTimeZone(): void;
    // doc://com.apple.documentation/documentation/uikit/uidatepicker/1615997-datepickermode
    datePickerMode(): cocoascript.UIDatePickerMode;
    setDatePickerMode(): void;
    // doc://com.apple.documentation/documentation/uikit/uidatepicker/3526123-datepickerstyle
    datePickerStyle(): cocoascript.UIDatePickerStyle;
    setDatePickerStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uidatepicker/3526124-preferreddatepickerstyle
    preferredDatePickerStyle(): cocoascript.UIDatePickerStyle;
    setPreferredDatePickerStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uidatepicker/1615999-maximumdate
    maximumDate(): cocoascript.NSDate;
    setMaximumDate(): void;
    // doc://com.apple.documentation/documentation/uikit/uidatepicker/1615980-minimumdate
    minimumDate(): cocoascript.NSDate;
    setMinimumDate(): void;
    // doc://com.apple.documentation/documentation/uikit/uidatepicker/1615998-minuteinterval
    minuteInterval(): cocoascript.NSInteger;
    setMinuteInterval(): void;
    // doc://com.apple.documentation/documentation/uikit/uidatepicker/1615986-countdownduration
    countDownDuration(): cocoascript.NSTimeInterval;
    setCountDownDuration(): void;
    //
    alloc():cocoascript.UIDatePicker;
    //
    init():cocoascript.UIDatePicker;
  }
}

declare const UIDatePicker: cocoascript.UIDatePicker;
