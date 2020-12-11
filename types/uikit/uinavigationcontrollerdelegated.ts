declare namespace cocoascript {
  /**
   * Use a navigation controller delegate (a custom object that implements this protocol) to modify behavior when a view controller is pushed or popped from the navigation stack of a
   * doc://com.apple.documentation/documentation/uikit/uinavigationcontrollerdelegate
   */
  interface UINavigationControllerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontrollerdelegate/1621878-navigationcontroller
    navigationController_willShowViewController_animated(navigationController: cocoascript.UINavigationController, viewController: cocoascript.UIViewController, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontrollerdelegate/1621848-navigationcontroller
    navigationController_didShowViewController_animated(navigationController: cocoascript.UINavigationController, viewController: cocoascript.UIViewController, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontrollerdelegate/1621846-navigationcontroller
    navigationController_animationControllerForOperation_fromViewController_toViewController(navigationController: cocoascript.UINavigationController, operation: cocoascript.UINavigationControllerOperation, fromVC: cocoascript.UIViewController, toVC: cocoascript.UIViewController):cocoascript.UIViewControllerAnimatedTransitioning;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontrollerdelegate/1621880-navigationcontroller
    navigationController_interactionControllerForAnimationController(navigationController: cocoascript.UINavigationController, animationController: cocoascript.UIViewControllerAnimatedTransitioning):cocoascript.UIViewControllerInteractiveTransitioning;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontrollerdelegate/1621864-navigationcontrollerpreferredint
    navigationControllerPreferredInterfaceOrientationForPresentation(navigationController: cocoascript.UINavigationController):cocoascript.UIInterfaceOrientation;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontrollerdelegate/1621884-navigationcontrollersupportedint
    navigationControllerSupportedInterfaceOrientations(navigationController: cocoascript.UINavigationController):cocoascript.UIInterfaceOrientationMask;
  }
}
