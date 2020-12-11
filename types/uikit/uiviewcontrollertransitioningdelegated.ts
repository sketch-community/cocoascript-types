declare namespace cocoascript {
  /**
   * A set of methods that vend objects used to manage a fixed-length or interactive transition between view controllers.
   * doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioningdelegate
   */
  interface UIViewControllerTransitioningDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioningdelegate/1622037-animationcontrollerforpresentedc
    animationControllerForPresentedController_presentingController_sourceController(presented: cocoascript.UIViewController, presenting: cocoascript.UIViewController, source: cocoascript.UIViewController):cocoascript.UIViewControllerAnimatedTransitioning;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioningdelegate/1622047-animationcontrollerfordismissedc
    animationControllerForDismissedController(dismissed: cocoascript.UIViewController):cocoascript.UIViewControllerAnimatedTransitioning;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioningdelegate/1622050-interactioncontrollerforpresenta
    interactionControllerForPresentation(animator: cocoascript.UIViewControllerAnimatedTransitioning):cocoascript.UIViewControllerInteractiveTransitioning;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioningdelegate/1622030-interactioncontrollerfordismissa
    interactionControllerForDismissal(animator: cocoascript.UIViewControllerAnimatedTransitioning):cocoascript.UIViewControllerInteractiveTransitioning;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioningdelegate/1622057-presentationcontrollerforpresent
    presentationControllerForPresentedViewController_presentingViewController_sourceViewController(presented: cocoascript.UIViewController, presenting: cocoascript.UIViewController, source: cocoascript.UIViewController):cocoascript.UIPresentationController;
  }
}
