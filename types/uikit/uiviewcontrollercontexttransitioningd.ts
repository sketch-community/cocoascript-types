declare namespace cocoascript {
/**
 * A set of methods that provide contextual information for transition animations between view controllers. 
 * doc://com.apple.documentation/documentation/uikit/uiviewcontrollercontexttransitioning
 */
interface UIViewControllerContextTransitioning extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollercontexttransitioning/1622045-containerview
  containerView(): cocoascript.UIView;
  setContainerView(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollercontexttransitioning/1622043-viewcontrollerforkey
  viewControllerForKey(key: cocoascript.UITransitionContextViewControllerKey):cocoascript.UIViewController;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollercontexttransitioning/1622055-viewforkey
  viewForKey(key: cocoascript.UITransitionContextViewKey):cocoascript.UIView;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollercontexttransitioning/1622033-initialframeforviewcontroller
  initialFrameForViewController(vc: cocoascript.UIViewController):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollercontexttransitioning/1622024-finalframeforviewcontroller
  finalFrameForViewController(vc: cocoascript.UIViewController):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollercontexttransitioning/2097569-animated
  animated(): cocoascript.BOOL;
  setAnimated(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollercontexttransitioning/2097570-interactive
  interactive(): cocoascript.BOOL;
  setInteractive(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollercontexttransitioning/1622049-presentationstyle
  presentationStyle(): cocoascript.UIModalPresentationStyle;
  setPresentationStyle(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollercontexttransitioning/1622042-completetransition
  completeTransition(didComplete: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollercontexttransitioning/1622025-updateinteractivetransition
  updateInteractiveTransition(percentComplete: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollercontexttransitioning/1829437-pauseinteractivetransition
  pauseInteractiveTransition():void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollercontexttransitioning/1622056-finishinteractivetransition
  finishInteractiveTransition():void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollercontexttransitioning/1622038-cancelinteractivetransition
  cancelInteractiveTransition():void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollercontexttransitioning/1622039-transitionwascancelled
  transitionWasCancelled(): cocoascript.BOOL;
  setTransitionWasCancelled(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollercontexttransitioning/1622036-targettransform
  targetTransform(): cocoascript.CGAffineTransform;
  setTargetTransform(): void;
}
}

