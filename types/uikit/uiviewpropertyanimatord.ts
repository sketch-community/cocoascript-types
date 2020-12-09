declare namespace cocoascript {
/**
 * A class that animates changes to views and allows the dynamic modification of those animations. 
 * doc://com.apple.documentation/documentation/uikit/uiviewpropertyanimator
 */
interface UIViewPropertyAnimator extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiviewpropertyanimator/1648366-initwithduration
  initWithDuration_curve_animations(duration: cocoascript.NSTimeInterval, curve: cocoascript.UIViewAnimationCurve, animations: void):cocoascript.UIViewPropertyAnimator;
  // doc://com.apple.documentation/documentation/uikit/uiviewpropertyanimator/1648368-initwithduration
  initWithDuration_controlPoint1_controlPoint2_animations(duration: cocoascript.NSTimeInterval, point1: cocoascript.CGPoint, point2: cocoascript.CGPoint, animations: void):cocoascript.UIViewPropertyAnimator;
  // doc://com.apple.documentation/documentation/uikit/uiviewpropertyanimator/1648369-initwithduration
  initWithDuration_dampingRatio_animations(duration: cocoascript.NSTimeInterval, ratio: cocoascript.CGFloat, animations: void):cocoascript.UIViewPropertyAnimator;
  // doc://com.apple.documentation/documentation/uikit/uiviewpropertyanimator/1648362-initwithduration
  initWithDuration_timingParameters(duration: cocoascript.NSTimeInterval, parameters: cocoascript.UITimingCurveProvider):cocoascript.UIViewPropertyAnimator;
  // doc://com.apple.documentation/documentation/uikit/uiviewpropertyanimator/1648374-addanimations
  addAnimations(animation: void):void;
  // doc://com.apple.documentation/documentation/uikit/uiviewpropertyanimator/1648370-addanimations
  addAnimations_delayFactor(animation: void, delayFactor: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/uikit/uiviewpropertyanimator/1648373-addcompletion
  addCompletion(completion: cocoascript.UIViewAnimatingPosition):void;
  // doc://com.apple.documentation/documentation/uikit/uiviewpropertyanimator/1648371-continueanimationwithtimingparam
  continueAnimationWithTimingParameters_durationFactor(parameters: cocoascript.UITimingCurveProvider, durationFactor: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/uikit/uiviewpropertyanimator/1648375-duration
  duration(): cocoascript.NSTimeInterval;
  setDuration(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewpropertyanimator/2097549-delay
  delay(): cocoascript.NSTimeInterval;
  setDelay(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewpropertyanimator/1648363-timingparameters
  timingParameters(): cocoascript.UITimingCurveProvider;
  setTimingParameters(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewpropertyanimator/1648372-interruptible
  interruptible(): cocoascript.BOOL;
  setInterruptible(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewpropertyanimator/1648365-userinteractionenabled
  userInteractionEnabled(): cocoascript.BOOL;
  setUserInteractionEnabled(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewpropertyanimator/2097548-manualhittestingenabled
  manualHitTestingEnabled(): cocoascript.BOOL;
  setManualHitTestingEnabled(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewpropertyanimator/2873966-scrubslinearly
  scrubsLinearly(): cocoascript.BOOL;
  setScrubsLinearly(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewpropertyanimator/2909004-pausesoncompletion
  pausesOnCompletion(): cocoascript.BOOL;
  setPausesOnCompletion(): void;
  // 
  alloc():cocoascript.UIViewPropertyAnimator;
  // 
  init():cocoascript.UIViewPropertyAnimator;
}
}
declare const UIViewPropertyAnimator: cocoascript.UIViewPropertyAnimator;

