declare namespace cocoascript {
  /**
   * A container view controller that manages navigation between pages of content, where a child view controller manages each page.
   * doc://com.apple.documentation/documentation/uikit/uipageviewcontroller
   */
  interface UIPageViewController extends UIViewController {
    // doc://com.apple.documentation/documentation/uikit/uipageviewcontroller/1614105-initwithtransitionstyle
    initWithTransitionStyle_navigationOrientation_options(style: cocoascript.UIPageViewControllerTransitionStyle, navigationOrientation: cocoascript.UIPageViewControllerNavigationOrientation, options: cocoascript.UIPageViewController):cocoascript.UIPageViewController;
    // doc://com.apple.documentation/documentation/uikit/uipageviewcontroller/1614108-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIPageViewController;
    // doc://com.apple.documentation/documentation/uikit/uipageviewcontroller/1614117-datasource
    dataSource(): cocoascript.UIPageViewControllerDataSource;
    setDataSource(): void;
    // doc://com.apple.documentation/documentation/uikit/uipageviewcontroller/1614089-delegate
    delegate(): cocoascript.UIPageViewControllerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uipageviewcontroller/1614087-setviewcontrollers
    setViewControllers_direction_animated_completion(viewControllers: cocoascript.UIViewController, direction: cocoascript.UIPageViewControllerNavigationDirection, animated: cocoascript.BOOL, completion: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uipageviewcontroller/1614106-viewcontrollers
    viewControllers(): cocoascript.UIViewController;
    setViewControllers(): void;
    // doc://com.apple.documentation/documentation/uikit/uipageviewcontroller/1614107-gesturerecognizers
    gestureRecognizers(): cocoascript.UIGestureRecognizer;
    setGestureRecognizers(): void;
    // doc://com.apple.documentation/documentation/uikit/uipageviewcontroller/1614097-navigationorientation
    navigationOrientation(): cocoascript.UIPageViewControllerNavigationOrientation;
    setNavigationOrientation(): void;
    // doc://com.apple.documentation/documentation/uikit/uipageviewcontroller/1614085-spinelocation
    spineLocation(): cocoascript.UIPageViewControllerSpineLocation;
    setSpineLocation(): void;
    // doc://com.apple.documentation/documentation/uikit/uipageviewcontroller/1614092-transitionstyle
    transitionStyle(): cocoascript.UIPageViewControllerTransitionStyle;
    setTransitionStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uipageviewcontroller/1614098-doublesided
    doubleSided(): cocoascript.BOOL;
    setDoubleSided(): void;
    //
    alloc():cocoascript.UIPageViewController;
    //
    init():cocoascript.UIPageViewController;
  }
}

declare const UIPageViewController: cocoascript.UIPageViewController;
