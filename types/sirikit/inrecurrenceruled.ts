declare namespace cocoascript {
/**
 * An object that describes the pattern to use when repeating an event.
 * doc://com.apple.documentation/documentation/sirikit/inrecurrencerule
 */
interface INRecurrenceRule extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inrecurrencerule/2890769-initwithinterval
  initWithInterval_frequency(interval: cocoascript.NSUInteger, frequency: cocoascript.INRecurrenceFrequency):cocoascript.INRecurrenceRule;
  // doc://com.apple.documentation/documentation/sirikit/inrecurrencerule/2890761-frequency
  frequency(): cocoascript.INRecurrenceFrequency;
  setFrequency(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrecurrencerule/2890760-interval
  interval(): cocoascript.NSUInteger;
  setInterval(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrecurrencerule/3552226-initwithinterval
  initWithInterval_frequency_weeklyRecurrenceDays(interval: cocoascript.NSUInteger, frequency: cocoascript.INRecurrenceFrequency, weeklyRecurrenceDays: cocoascript.INDayOfWeekOptions):cocoascript.INRecurrenceRule;
  // doc://com.apple.documentation/documentation/sirikit/inrecurrencerule/3552227-weeklyrecurrencedays
  weeklyRecurrenceDays(): cocoascript.INDayOfWeekOptions;
  setWeeklyRecurrenceDays(): void;
  // 
  alloc():cocoascript.INRecurrenceRule;
  // 
  init():cocoascript.INRecurrenceRule;
}
}
declare const INRecurrenceRule: cocoascript.INRecurrenceRule;

