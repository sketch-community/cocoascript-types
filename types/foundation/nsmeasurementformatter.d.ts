declare namespace cocoascript {
  /**
   * A formatter that provides localized representations of units and measurements.
   * doc://com.apple.documentation/documentation/foundation/nsmeasurementformatter
   */
  interface NSMeasurementFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nsmeasurementformatter/1642066-unitoptions
    unitOptions(): cocoascript.NSMeasurementFormatterUnitOptions;
    setUnitOptions(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmeasurementformatter/1642067-unitstyle
    unitStyle(): cocoascript.NSFormattingUnitStyle;
    setUnitStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmeasurementformatter/1642061-locale
    locale(): cocoascript.NSLocale;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmeasurementformatter/1642056-numberformatter
    numberFormatter(): cocoascript.NSNumberFormatter;
    setNumberFormatter(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmeasurementformatter/1642057-stringfrommeasurement
    stringFromMeasurement(measurement: cocoascript.NSMeasurement):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsmeasurementformatter/1642059-stringfromunit
    stringFromUnit(unit: cocoascript.NSUnit):cocoascript.NSString;
    //
    alloc():cocoascript.NSMeasurementFormatter;
    //
    init():cocoascript.NSMeasurementFormatter;
  }
}

declare const NSMeasurementFormatter: cocoascript.NSMeasurementFormatter;
