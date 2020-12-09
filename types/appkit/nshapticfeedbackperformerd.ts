declare namespace cocoascript {
/**
 * A set of methods and constants that a haptic feedback performer implements.
 * doc://com.apple.documentation/documentation/appkit/nshapticfeedbackperformer
 */
interface NSHapticFeedbackPerformer extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nshapticfeedbackperformer/1441738-performfeedbackpattern
  performFeedbackPattern_performanceTime(pattern: cocoascript.NSHapticFeedbackPattern, performanceTime: cocoascript.NSHapticFeedbackPerformanceTime):void;
}
}

