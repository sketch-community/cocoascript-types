declare namespace cocoascript {
/**
 * A set of methods that enable an object (such as a navigation controller) to drive a view controller transition. 
 * doc://com.apple.documentation/documentation/uikit/uiviewcontrollerinteractivetransitioning
 */
interface UIViewControllerInteractiveTransitioning extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollerinteractivetransitioning/1622028-startinteractivetransition
  startInteractiveTransition(transitionContext: cocoascript.UIViewControllerContextTransitioning):void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollerinteractivetransitioning/1829433-wantsinteractivestart
  wantsInteractiveStart(): cocoascript.BOOL;
  setWantsInteractiveStart(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollerinteractivetransitioning/1622027-completioncurve
  completionCurve(): cocoascript.UIViewAnimationCurve;
  setCompletionCurve(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollerinteractivetransitioning/1622031-completionspeed
  completionSpeed(): cocoascript.CGFloat;
  setCompletionSpeed(): void;
}
}

