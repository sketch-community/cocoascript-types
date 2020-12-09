declare namespace cocoascript {
/**
 * A set of methods that, in conjunction with a presentation controller, determine how to respond to trait changes in your app. 
 * doc://com.apple.documentation/documentation/uikit/uiadaptivepresentationcontrollerdelegate
 */
interface UIAdaptivePresentationControllerDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiadaptivepresentationcontrollerdelegate/1618334-adaptivepresentationstyleforpres
  adaptivePresentationStyleForPresentationController_traitCollection(controller: cocoascript.UIPresentationController, traitCollection: cocoascript.UITraitCollection):cocoascript.UIModalPresentationStyle;
  // doc://com.apple.documentation/documentation/uikit/uiadaptivepresentationcontrollerdelegate/1618343-adaptivepresentationstyleforpres
  adaptivePresentationStyleForPresentationController(controller: cocoascript.UIPresentationController):cocoascript.UIModalPresentationStyle;
  // doc://com.apple.documentation/documentation/uikit/uiadaptivepresentationcontrollerdelegate/1618326-presentationcontroller
  presentationController_viewControllerForAdaptivePresentationStyle(controller: cocoascript.UIPresentationController, style: cocoascript.UIModalPresentationStyle):cocoascript.UIViewController;
  // doc://com.apple.documentation/documentation/uikit/uiadaptivepresentationcontrollerdelegate/1618324-presentationcontroller
  presentationController_willPresentWithAdaptiveStyle_transitionCoordinator(presentationController: cocoascript.UIPresentationController, style: cocoascript.UIModalPresentationStyle, transitionCoordinator: cocoascript.UIViewControllerTransitionCoordinator):void;
  // doc://com.apple.documentation/documentation/uikit/uiadaptivepresentationcontrollerdelegate/3229888-presentationcontrollerdidattempt
  presentationControllerDidAttemptToDismiss(presentationController: cocoascript.UIPresentationController):void;
  // doc://com.apple.documentation/documentation/uikit/uiadaptivepresentationcontrollerdelegate/3229890-presentationcontrollershoulddism
  presentationControllerShouldDismiss(presentationController: cocoascript.UIPresentationController):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uiadaptivepresentationcontrollerdelegate/3229889-presentationcontrollerdiddismiss
  presentationControllerDidDismiss(presentationController: cocoascript.UIPresentationController):void;
  // doc://com.apple.documentation/documentation/uikit/uiadaptivepresentationcontrollerdelegate/3229891-presentationcontrollerwilldismis
  presentationControllerWillDismiss(presentationController: cocoascript.UIPresentationController):void;
}
}

