declare namespace cocoascript {
  /**
   * The delegate of a page view controller must adopt the
   * doc://com.apple.documentation/documentation/uikit/uipageviewcontrollerdelegate
   */
  interface UIPageViewControllerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uipageviewcontrollerdelegate/1614091-pageviewcontroller
    pageViewController_willTransitionToViewControllers(pageViewController: cocoascript.UIPageViewController, pendingViewControllers: cocoascript.UIViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uipageviewcontrollerdelegate/1614090-pageviewcontroller
    pageViewController_didFinishAnimating_previousViewControllers_transitionCompleted(pageViewController: cocoascript.UIPageViewController, finished: cocoascript.BOOL, previousViewControllers: cocoascript.UIViewController, completed: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uipageviewcontrollerdelegate/1614083-pageviewcontroller
    pageViewController_spineLocationForInterfaceOrientation(pageViewController: cocoascript.UIPageViewController, orientation: cocoascript.UIInterfaceOrientation):cocoascript.UIPageViewControllerSpineLocation;
    // doc://com.apple.documentation/documentation/uikit/uipageviewcontrollerdelegate/1614100-pageviewcontrollersupportedinter
    pageViewControllerSupportedInterfaceOrientations(pageViewController: cocoascript.UIPageViewController):cocoascript.UIInterfaceOrientationMask;
    // doc://com.apple.documentation/documentation/uikit/uipageviewcontrollerdelegate/1614119-pageviewcontrollerpreferredinter
    pageViewControllerPreferredInterfaceOrientationForPresentation(pageViewController: cocoascript.UIPageViewController):cocoascript.UIInterfaceOrientation;
  }
}
