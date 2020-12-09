declare namespace cocoascript {
/**
 * A trigger condition based on a date or time.
 * doc://com.apple.documentation/documentation/sirikit/intemporaleventtrigger
 */
interface INTemporalEventTrigger extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/intemporaleventtrigger/2878115-initwithdatecomponentsrange
  initWithDateComponentsRange(dateComponentsRange: cocoascript.INDateComponentsRange):cocoascript.INTemporalEventTrigger;
  // doc://com.apple.documentation/documentation/sirikit/intemporaleventtrigger/2878114-datecomponentsrange
  dateComponentsRange(): cocoascript.INDateComponentsRange;
  setDateComponentsRange(): void;
  // 
  alloc():cocoascript.INTemporalEventTrigger;
  // 
  init():cocoascript.INTemporalEventTrigger;
}
}
declare const INTemporalEventTrigger: cocoascript.INTemporalEventTrigger;

