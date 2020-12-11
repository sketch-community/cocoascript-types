declare namespace cocoascript {
  /**
   * A set of methods for implementing the animations for a custom view controller transition.
   * doc://com.apple.documentation/documentation/uikit/uiviewcontrolleranimatedtransitioning
   */
  interface UIViewControllerAnimatedTransitioning extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiviewcontrolleranimatedtransitioning/1622061-animatetransition
    animateTransition(transitionContext: cocoascript.UIViewControllerContextTransitioning):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontrolleranimatedtransitioning/1622059-animationended
    animationEnded(transitionCompleted: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontrolleranimatedtransitioning/1622032-transitionduration
    transitionDuration(transitionContext: cocoascript.UIViewControllerContextTransitioning):cocoascript.NSTimeInterval;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontrolleranimatedtransitioning/1829434-interruptibleanimatorfortransiti
    interruptibleAnimatorForTransition(transitionContext: cocoascript.UIViewControllerContextTransitioning):cocoascript.UIViewImplicitlyAnimating;
  }
}
