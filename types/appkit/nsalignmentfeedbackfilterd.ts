declare namespace cocoascript {
/**
 * An object that can filter the movement of an object and provides haptic feedback when alignment occurs.
 * doc://com.apple.documentation/documentation/appkit/nsalignmentfeedbackfilter
 */
interface NSAlignmentFeedbackFilter extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsalignmentfeedbackfilter/1530921-inputeventmask
  inputEventMask(): cocoascript.NSEventMask;
  setInputEventMask(): void;
  // doc://com.apple.documentation/documentation/appkit/nsalignmentfeedbackfilter/1532257-updatewithevent
  updateWithEvent(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsalignmentfeedbackfilter/1527844-updatewithpanrecognizer
  updateWithPanRecognizer(panRecognizer: cocoascript.NSPanGestureRecognizer):void;
  // doc://com.apple.documentation/documentation/appkit/nsalignmentfeedbackfilter/1535346-alignmentfeedbacktokenformovemen
  alignmentFeedbackTokenForMovementInView_previousPoint_alignedPoint_defaultPoint(view: cocoascript.NSView, previousPoint: cocoascript.NSPoint, alignedPoint: cocoascript.NSPoint, defaultPoint: cocoascript.NSPoint):cocoascript.NSAlignmentFeedbackToken;
  // doc://com.apple.documentation/documentation/appkit/nsalignmentfeedbackfilter/1534596-alignmentfeedbacktokenforhorizon
  alignmentFeedbackTokenForHorizontalMovementInView_previousX_alignedX_defaultX(view: cocoascript.NSView, previousX: cocoascript.CGFloat, alignedX: cocoascript.CGFloat, defaultX: cocoascript.CGFloat):cocoascript.NSAlignmentFeedbackToken;
  // doc://com.apple.documentation/documentation/appkit/nsalignmentfeedbackfilter/1531563-alignmentfeedbacktokenforvertica
  alignmentFeedbackTokenForVerticalMovementInView_previousY_alignedY_defaultY(view: cocoascript.NSView, previousY: cocoascript.CGFloat, alignedY: cocoascript.CGFloat, defaultY: cocoascript.CGFloat):cocoascript.NSAlignmentFeedbackToken;
  // doc://com.apple.documentation/documentation/appkit/nsalignmentfeedbackfilter/1534423-performfeedback
  performFeedback_performanceTime(alignmentFeedbackTokens: cocoascript.NSAlignmentFeedbackToken, performanceTime: cocoascript.NSHapticFeedbackPerformanceTime):void;
  // 
  alloc():cocoascript.NSAlignmentFeedbackFilter;
  // 
  init():cocoascript.NSAlignmentFeedbackFilter;
}
}
declare const NSAlignmentFeedbackFilter: cocoascript.NSAlignmentFeedbackFilter;

