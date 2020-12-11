declare namespace cocoascript {
  /**
   * A formatter that creates string representations of quantities of time.
   * doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter
   */
  interface NSDateComponentsFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1407641-stringfromdatecomponents
    stringFromDateComponents(components: cocoascript.NSDateComponents):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1417219-stringforobjectvalue
    stringForObjectValue(obj: cocoascript.NSDateComponentsFormatter):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1415967-stringfromdate
    stringFromDate_toDate(startDate: cocoascript.NSDate, endDate: cocoascript.NSDate):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1409040-stringfromtimeinterval
    stringFromTimeInterval(ti: cocoascript.NSTimeInterval):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1410216-allowedunits
    allowedUnits(): cocoascript.NSCalendarUnit;
    setAllowedUnits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1413084-allowsfractionalunits
    allowsFractionalUnits(): cocoascript.BOOL;
    setAllowsFractionalUnits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1407359-calendar
    calendar(): cocoascript.NSCalendar;
    setCalendar(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1410812-collapseslargestunit
    collapsesLargestUnit(): cocoascript.BOOL;
    setCollapsesLargestUnit(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1416387-includesapproximationphrase
    includesApproximationPhrase(): cocoascript.BOOL;
    setIncludesApproximationPhrase(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1416416-includestimeremainingphrase
    includesTimeRemainingPhrase(): cocoascript.BOOL;
    setIncludesTimeRemainingPhrase(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1416214-maximumunitcount
    maximumUnitCount(): cocoascript.NSInteger;
    setMaximumUnitCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1413441-unitsstyle
    unitsStyle(): cocoascript.NSDateComponentsFormatterUnitsStyle;
    setUnitsStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1413749-zeroformattingbehavior
    zeroFormattingBehavior(): cocoascript.NSDateComponentsFormatterZeroFormattingBehavior;
    setZeroFormattingBehavior(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1414198-formattingcontext
    formattingContext(): cocoascript.NSFormattingContext;
    setFormattingContext(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/2878110-referencedate
    referenceDate(): cocoascript.NSDate;
    setReferenceDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdatecomponentsformatter/1412149-getobjectvalue
    getObjectValue_forString_errorDescription(obj: cocoascript._Nullable, string: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.BOOL;
    //
    alloc():cocoascript.NSDateComponentsFormatter;
    //
    init():cocoascript.NSDateComponentsFormatter;
  }
}

declare const NSDateComponentsFormatter: cocoascript.NSDateComponentsFormatter;
