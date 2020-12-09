declare namespace cocoascript {
/**
 * To respond to the pausing or resumption of UIKit dynamic animation, configure a custom class to adopt the 
 * doc://com.apple.documentation/documentation/uikit/uidynamicanimatordelegate
 */
interface UIDynamicAnimatorDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uidynamicanimatordelegate/1621193-dynamicanimatordidpause
  dynamicAnimatorDidPause(animator: cocoascript.UIDynamicAnimator):void;
  // doc://com.apple.documentation/documentation/uikit/uidynamicanimatordelegate/1621188-dynamicanimatorwillresume
  dynamicAnimatorWillResume(animator: cocoascript.UIDynamicAnimator):void;
}
}

