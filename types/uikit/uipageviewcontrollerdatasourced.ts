declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/uikit/uipageviewcontrollerdatasource
 */
interface UIPageViewControllerDataSource extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uipageviewcontrollerdatasource/1614086-pageviewcontroller
  pageViewController_viewControllerBeforeViewController(pageViewController: cocoascript.UIPageViewController, viewController: cocoascript.UIViewController):cocoascript.UIViewController;
  // doc://com.apple.documentation/documentation/uikit/uipageviewcontrollerdatasource/1614118-pageviewcontroller
  pageViewController_viewControllerAfterViewController(pageViewController: cocoascript.UIPageViewController, viewController: cocoascript.UIViewController):cocoascript.UIViewController;
  // doc://com.apple.documentation/documentation/uikit/uipageviewcontrollerdatasource/1614095-presentationcountforpageviewcont
  presentationCountForPageViewController(pageViewController: cocoascript.UIPageViewController):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/uikit/uipageviewcontrollerdatasource/1614116-presentationindexforpageviewcont
  presentationIndexForPageViewController(pageViewController: cocoascript.UIPageViewController):cocoascript.NSInteger;
}
}

