declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/appkit/nspagecontrollerdelegate
   */
  interface NSPageControllerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nspagecontrollerdelegate/1435009-pagecontrollerwillstartlivetrans
    pageControllerWillStartLiveTransition(pageController: cocoascript.NSPageController):void;
    // doc://com.apple.documentation/documentation/appkit/nspagecontrollerdelegate/1434985-pagecontrollerdidendlivetransiti
    pageControllerDidEndLiveTransition(pageController: cocoascript.NSPageController):void;
    // doc://com.apple.documentation/documentation/appkit/nspagecontrollerdelegate/1435021-pagecontroller
    pageController_didTransitionToObject(pageController: cocoascript.NSPageController, object: cocoascript.NSPageControllerDelegate):void;
    // doc://com.apple.documentation/documentation/appkit/nspagecontrollerdelegate/1435007-pagecontroller
    pageController_identifierForObject(pageController: cocoascript.NSPageController, object: cocoascript.NSPageControllerDelegate):cocoascript.NSPageControllerObjectIdentifier;
    // doc://com.apple.documentation/documentation/appkit/nspagecontrollerdelegate/1435015-pagecontroller
    pageController_viewControllerForIdentifier(pageController: cocoascript.NSPageController, identifier: cocoascript.NSPageControllerObjectIdentifier):cocoascript.NSViewController;
    // doc://com.apple.documentation/documentation/appkit/nspagecontrollerdelegate/1434983-pagecontroller
    pageController_prepareViewController_withObject(pageController: cocoascript.NSPageController, viewController: cocoascript.NSViewController, object: cocoascript.NSPageControllerDelegate):void;
    // doc://com.apple.documentation/documentation/appkit/nspagecontrollerdelegate/1434992-pagecontroller
    pageController_frameForObject(pageController: cocoascript.NSPageController, object: cocoascript.NSPageControllerDelegate):cocoascript.NSRect;
  }
}
