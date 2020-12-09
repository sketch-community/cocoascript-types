declare namespace cocoascript {
/**
 * A set of methods you implement to customize the behavior of a tab bar.
 * doc://com.apple.documentation/documentation/uikit/uitabbarcontrollerdelegate
 */
interface UITabBarControllerDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitabbarcontrollerdelegate/1621166-tabbarcontroller
  tabBarController_shouldSelectViewController(tabBarController: cocoascript.UITabBarController, viewController: cocoascript.UIViewController):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uitabbarcontrollerdelegate/1621173-tabbarcontroller
  tabBarController_didSelectViewController(tabBarController: cocoascript.UITabBarController, viewController: cocoascript.UIViewController):void;
  // doc://com.apple.documentation/documentation/uikit/uitabbarcontrollerdelegate/1621179-tabbarcontroller
  tabBarController_willBeginCustomizingViewControllers(tabBarController: cocoascript.UITabBarController, viewControllers: cocoascript.UIViewController):void;
  // doc://com.apple.documentation/documentation/uikit/uitabbarcontrollerdelegate/1621178-tabbarcontroller
  tabBarController_willEndCustomizingViewControllers_changed(tabBarController: cocoascript.UITabBarController, viewControllers: cocoascript.UIViewController, changed: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uitabbarcontrollerdelegate/1621168-tabbarcontroller
  tabBarController_didEndCustomizingViewControllers_changed(tabBarController: cocoascript.UITabBarController, viewControllers: cocoascript.UIViewController, changed: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uitabbarcontrollerdelegate/1621180-tabbarcontrollersupportedinterfa
  tabBarControllerSupportedInterfaceOrientations(tabBarController: cocoascript.UITabBarController):cocoascript.UIInterfaceOrientationMask;
  // doc://com.apple.documentation/documentation/uikit/uitabbarcontrollerdelegate/1621176-tabbarcontrollerpreferredinterfa
  tabBarControllerPreferredInterfaceOrientationForPresentation(tabBarController: cocoascript.UITabBarController):cocoascript.UIInterfaceOrientation;
  // doc://com.apple.documentation/documentation/uikit/uitabbarcontrollerdelegate/1621167-tabbarcontroller
  tabBarController_animationControllerForTransitionFromViewController_toViewController(tabBarController: cocoascript.UITabBarController, fromVC: cocoascript.UIViewController, toVC: cocoascript.UIViewController):cocoascript.UIViewControllerAnimatedTransitioning;
  // doc://com.apple.documentation/documentation/uikit/uitabbarcontrollerdelegate/1621170-tabbarcontroller
  tabBarController_interactionControllerForAnimationController(tabBarController: cocoascript.UITabBarController, animationController: cocoascript.UIViewControllerAnimatedTransitioning):cocoascript.UIViewControllerInteractiveTransitioning;
}
}

