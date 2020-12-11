declare namespace cocoascript {
  /**
   * A container view controller that defines a stack-based scheme for navigating hierarchical content.
   * doc://com.apple.documentation/documentation/uikit/uinavigationcontroller
   */
  interface UINavigationController extends UIViewController {
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621858-initwithrootviewcontroller
    initWithRootViewController(rootViewController: cocoascript.UIViewController):cocoascript.UINavigationController;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621866-initwithnavigationbarclass
    initWithNavigationBarClass_toolbarClass(navigationBarClass: cocoascript.Class, toolbarClass: cocoascript.Class):cocoascript.UINavigationController;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/3043561-initwithnibname
    initWithNibName_bundle(nibNameOrNil: cocoascript.NSString, nibBundleOrNil: cocoascript.NSBundle):cocoascript.UINavigationController;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/3043560-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.UINavigationController;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621876-delegate
    delegate(): cocoascript.UINavigationControllerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621849-topviewcontroller
    topViewController(): cocoascript.UIViewController;
    setTopViewController(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621862-visibleviewcontroller
    visibleViewController(): cocoascript.UIViewController;
    setVisibleViewController(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621873-viewcontrollers
    viewControllers(): cocoascript.UIViewController;
    setViewControllers(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621861-setviewcontrollers
    setViewControllers_animated(viewControllers: cocoascript.UIViewController, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621887-pushviewcontroller
    pushViewController_animated(viewController: cocoascript.UIViewController, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621886-popviewcontrolleranimated
    popViewControllerAnimated(animated: cocoascript.BOOL):cocoascript.UIViewController;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621855-poptorootviewcontrolleranimated
    popToRootViewControllerAnimated(animated: cocoascript.BOOL):cocoascript.UIViewController;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621871-poptoviewcontroller
    popToViewController_animated(viewController: cocoascript.UIViewController, animated: cocoascript.BOOL):cocoascript.UIViewController;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621847-interactivepopgesturerecognizer
    interactivePopGestureRecognizer(): cocoascript.UIGestureRecognizer;
    setInteractivePopGestureRecognizer(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621877-navigationbar
    navigationBar(): cocoascript.UINavigationBar;
    setNavigationBar(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621885-setnavigationbarhidden
    setNavigationBarHidden_animated(hidden: cocoascript.BOOL, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621882-toolbar
    toolbar(): cocoascript.UIToolbar;
    setToolbar(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621888-settoolbarhidden
    setToolbarHidden_animated(hidden: cocoascript.BOOL, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621875-toolbarhidden
    toolbarHidden(): cocoascript.BOOL;
    setToolbarHidden(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621879-hidesbarsontap
    hidesBarsOnTap(): cocoascript.BOOL;
    setHidesBarsOnTap(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621883-hidesbarsonswipe
    hidesBarsOnSwipe(): cocoascript.BOOL;
    setHidesBarsOnSwipe(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621869-hidesbarswhenverticallycompact
    hidesBarsWhenVerticallyCompact(): cocoascript.BOOL;
    setHidesBarsWhenVerticallyCompact(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621881-hidesbarswhenkeyboardappears
    hidesBarsWhenKeyboardAppears(): cocoascript.BOOL;
    setHidesBarsWhenKeyboardAppears(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621850-navigationbarhidden
    navigationBarHidden(): cocoascript.BOOL;
    setNavigationBarHidden(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621852-barhideontapgesturerecognizer
    barHideOnTapGestureRecognizer(): cocoascript.UITapGestureRecognizer;
    setBarHideOnTapGestureRecognizer(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621854-barhideonswipegesturerecognizer
    barHideOnSwipeGestureRecognizer(): cocoascript.UIPanGestureRecognizer;
    setBarHideOnSwipeGestureRecognizer(): void;
    // doc://com.apple.documentation/documentation/uikit/uinavigationcontroller/1621872-showviewcontroller
    showViewController_sender(vc: cocoascript.UIViewController, sender: cocoascript.UINavigationController):void;
    //
    alloc():cocoascript.UINavigationController;
    //
    init():cocoascript.UINavigationController;
  }
}

declare const UINavigationController: cocoascript.UINavigationController;
