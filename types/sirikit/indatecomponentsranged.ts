declare namespace cocoascript {
/**
 * A span of time.
 * doc://com.apple.documentation/documentation/sirikit/indatecomponentsrange
 */
interface INDateComponentsRange extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/indatecomponentsrange/1639081-initwithstartdatecomponents
  initWithStartDateComponents_endDateComponents(startDateComponents: cocoascript.NSDateComponents, endDateComponents: cocoascript.NSDateComponents):cocoascript.INDateComponentsRange;
  // doc://com.apple.documentation/documentation/sirikit/indatecomponentsrange/2890754-initwithstartdatecomponents
  initWithStartDateComponents_endDateComponents_recurrenceRule(startDateComponents: cocoascript.NSDateComponents, endDateComponents: cocoascript.NSDateComponents, recurrenceRule: cocoascript.INRecurrenceRule):cocoascript.INDateComponentsRange;
  // doc://com.apple.documentation/documentation/sirikit/indatecomponentsrange/2915225-initwithekrecurrencerule
  initWithEKRecurrenceRule(recurrenceRule: cocoascript.EKRecurrenceRule):cocoascript.INDateComponentsRange;
  // doc://com.apple.documentation/documentation/sirikit/indatecomponentsrange/1639214-startdatecomponents
  startDateComponents(): cocoascript.NSDateComponents;
  setStartDateComponents(): void;
  // doc://com.apple.documentation/documentation/sirikit/indatecomponentsrange/1639237-enddatecomponents
  endDateComponents(): cocoascript.NSDateComponents;
  setEndDateComponents(): void;
  // doc://com.apple.documentation/documentation/sirikit/indatecomponentsrange/2890755-recurrencerule
  recurrenceRule(): cocoascript.INRecurrenceRule;
  setRecurrenceRule(): void;
  // doc://com.apple.documentation/documentation/sirikit/indatecomponentsrange/2915224-ekrecurrencerule
  EKRecurrenceRule():cocoascript.EKRecurrenceRule;
  // 
  alloc():cocoascript.INDateComponentsRange;
  // 
  init():cocoascript.INDateComponentsRange;
}
}
declare const INDateComponentsRange: cocoascript.INDateComponentsRange;

