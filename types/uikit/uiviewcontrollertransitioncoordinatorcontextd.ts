declare namespace cocoascript {
/**
 * A set of methods that provides information about an in-progress view controller transition. 
 * doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext
 */
interface UIViewControllerTransitionCoordinatorContext extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/1619293-viewcontrollerforkey
  viewControllerForKey(key: cocoascript.UITransitionContextViewControllerKey):cocoascript.UIViewController;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/1619302-viewforkey
  viewForKey(key: cocoascript.UITransitionContextViewKey):cocoascript.UIView;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/1619280-containerview
  containerView(): cocoascript.UIView;
  setContainerView(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/1619287-presentationstyle
  presentationStyle(): cocoascript.UIModalPresentationStyle;
  setPresentationStyle(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/1619286-transitionduration
  transitionDuration(): cocoascript.NSTimeInterval;
  setTransitionDuration(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/1619299-completioncurve
  completionCurve(): cocoascript.UIViewAnimationCurve;
  setCompletionCurve(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/1619282-completionvelocity
  completionVelocity(): cocoascript.CGFloat;
  setCompletionVelocity(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/1619290-percentcomplete
  percentComplete(): cocoascript.CGFloat;
  setPercentComplete(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/1619285-initiallyinteractive
  initiallyInteractive(): cocoascript.BOOL;
  setInitiallyInteractive(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/2097567-interactive
  interactive(): cocoascript.BOOL;
  setInteractive(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/2097566-animated
  animated(): cocoascript.BOOL;
  setAnimated(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/2097568-cancelled
  cancelled(): cocoascript.BOOL;
  setCancelled(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/1829390-isinterruptible
  isInterruptible(): cocoascript.BOOL;
  setIsInterruptible(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioncoordinatorcontext/1619289-targettransform
  targetTransform(): cocoascript.CGAffineTransform;
  setTargetTransform(): void;
}
}

