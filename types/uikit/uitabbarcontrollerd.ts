declare namespace cocoascript {
/**
 * A container view controller that manages a multiselection interface, where the selection determines which child view controller to display. 
 * doc://com.apple.documentation/documentation/uikit/uitabbarcontroller
 */
interface UITabBarController extends UIViewController {
  // doc://com.apple.documentation/documentation/uikit/uitabbarcontroller/1621164-delegate
  delegate(): cocoascript.UITabBarControllerDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uitabbarcontroller/1621174-tabbar
  tabBar(): cocoascript.UITabBar;
  setTabBar(): void;
  // doc://com.apple.documentation/documentation/uikit/uitabbarcontroller/1621185-viewcontrollers
  viewControllers(): cocoascript.UIViewController;
  setViewControllers(): void;
  // doc://com.apple.documentation/documentation/uikit/uitabbarcontroller/1621177-setviewcontrollers
  setViewControllers_animated(viewControllers: cocoascript.UIViewController, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uitabbarcontroller/1621184-customizableviewcontrollers
  customizableViewControllers(): cocoascript.UIViewController;
  setCustomizableViewControllers(): void;
  // doc://com.apple.documentation/documentation/uikit/uitabbarcontroller/1621183-morenavigationcontroller
  moreNavigationController(): cocoascript.UINavigationController;
  setMoreNavigationController(): void;
  // doc://com.apple.documentation/documentation/uikit/uitabbarcontroller/1621172-selectedviewcontroller
  selectedViewController(): cocoascript.UIViewController;
  setSelectedViewController(): void;
  // doc://com.apple.documentation/documentation/uikit/uitabbarcontroller/1621171-selectedindex
  selectedIndex(): cocoascript.NSUInteger;
  setSelectedIndex(): void;
  // 
  alloc():cocoascript.UITabBarController;
  // 
  init():cocoascript.UITabBarController;
}
}
declare const UITabBarController: cocoascript.UITabBarController;

