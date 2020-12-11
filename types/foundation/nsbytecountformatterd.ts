declare namespace cocoascript {
  /**
   * A formatter that converts a byte count value into a localized description that is formatted with the appropriate byte modifier (KB, MB, GB and so on).
   * doc://com.apple.documentation/documentation/foundation/nsbytecountformatter
   */
  interface NSByteCountFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/1415338-stringfrombytecount
    stringFromByteCount(byteCount: number):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/1412185-formattingcontext
    formattingContext(): cocoascript.NSFormattingContext;
    setFormattingContext(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/1417194-countstyle
    countStyle(): cocoascript.NSByteCountFormatterCountStyle;
    setCountStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/1408929-allowsnonnumericformatting
    allowsNonnumericFormatting(): cocoascript.BOOL;
    setAllowsNonnumericFormatting(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/1411068-includesactualbytecount
    includesActualByteCount(): cocoascript.BOOL;
    setIncludesActualByteCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/1417887-adaptive
    adaptive(): cocoascript.BOOL;
    setAdaptive(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/1409137-allowedunits
    allowedUnits(): cocoascript.NSByteCountFormatterUnits;
    setAllowedUnits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/1409874-includescount
    includesCount(): cocoascript.BOOL;
    setIncludesCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/1415784-includesunit
    includesUnit(): cocoascript.BOOL;
    setIncludesUnit(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/1409630-zeropadsfractiondigits
    zeroPadsFractionDigits(): cocoascript.BOOL;
    setZeroPadsFractionDigits(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/3172522-stringforobjectvalue
    stringForObjectValue(obj: cocoascript.NSByteCountFormatter):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsbytecountformatter/3172523-stringfrommeasurement
    stringFromMeasurement(measurement: cocoascript.NSUnitInformationStorage):cocoascript.NSString;
    //
    alloc():cocoascript.NSByteCountFormatter;
    //
    init():cocoascript.NSByteCountFormatter;
  }
}

declare const NSByteCountFormatter: cocoascript.NSByteCountFormatter;
