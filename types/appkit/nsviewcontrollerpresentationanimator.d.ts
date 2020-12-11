declare namespace cocoascript {
  /**
   * A set of methods that let you define animations to play when transitioning between two view controllers.
   * doc://com.apple.documentation/documentation/appkit/nsviewcontrollerpresentationanimator
   */
  interface NSViewControllerPresentationAnimator extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsviewcontrollerpresentationanimator/1434396-animatepresentationofviewcontrol
    animatePresentationOfViewController_fromViewController(viewController: cocoascript.NSViewController, fromViewController: cocoascript.NSViewController):void;
    // doc://com.apple.documentation/documentation/appkit/nsviewcontrollerpresentationanimator/1434458-animatedismissalofviewcontroller
    animateDismissalOfViewController_fromViewController(viewController: cocoascript.NSViewController, fromViewController: cocoascript.NSViewController):void;
  }
}
