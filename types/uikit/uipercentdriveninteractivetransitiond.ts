declare namespace cocoascript {
/**
 * An object that drives an interactive animation between one view controller and another.
 * doc://com.apple.documentation/documentation/uikit/uipercentdriveninteractivetransition
 */
interface UIPercentDrivenInteractiveTransition extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uipercentdriveninteractivetransition/1829439-timingcurve
  timingCurve(): cocoascript.UITimingCurveProvider;
  setTimingCurve(): void;
  // doc://com.apple.documentation/documentation/uikit/uipercentdriveninteractivetransition/1622048-completioncurve
  completionCurve(): cocoascript.UIViewAnimationCurve;
  setCompletionCurve(): void;
  // doc://com.apple.documentation/documentation/uikit/uipercentdriveninteractivetransition/1622029-duration
  duration(): cocoascript.CGFloat;
  setDuration(): void;
  // doc://com.apple.documentation/documentation/uikit/uipercentdriveninteractivetransition/1622053-percentcomplete
  percentComplete(): cocoascript.CGFloat;
  setPercentComplete(): void;
  // doc://com.apple.documentation/documentation/uikit/uipercentdriveninteractivetransition/1622052-completionspeed
  completionSpeed(): cocoascript.CGFloat;
  setCompletionSpeed(): void;
  // doc://com.apple.documentation/documentation/uikit/uipercentdriveninteractivetransition/1829427-wantsinteractivestart
  wantsInteractiveStart(): cocoascript.BOOL;
  setWantsInteractiveStart(): void;
  // doc://com.apple.documentation/documentation/uikit/uipercentdriveninteractivetransition/1622051-updateinteractivetransition
  updateInteractiveTransition(percentComplete: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/uikit/uipercentdriveninteractivetransition/1829435-pauseinteractivetransition
  pauseInteractiveTransition():void;
  // doc://com.apple.documentation/documentation/uikit/uipercentdriveninteractivetransition/1622026-cancelinteractivetransition
  cancelInteractiveTransition():void;
  // doc://com.apple.documentation/documentation/uikit/uipercentdriveninteractivetransition/1622035-finishinteractivetransition
  finishInteractiveTransition():void;
  // 
  alloc():cocoascript.UIPercentDrivenInteractiveTransition;
  // 
  init():cocoascript.UIPercentDrivenInteractiveTransition;
}
}
declare const UIPercentDrivenInteractiveTransition: cocoascript.UIPercentDrivenInteractiveTransition;

