declare namespace cocoascript {
  /**
   * The interface for providing custom animation alongside the system's lift, drop, and cancellation animations.
   * doc://com.apple.documentation/documentation/uikit/uidraganimating
   */
  interface UIDragAnimating extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uidraganimating/2890977-addanimations
    addAnimations(animations: void):void;
    // doc://com.apple.documentation/documentation/uikit/uidraganimating/2891061-addcompletion
    addCompletion(completion: cocoascript.UIViewAnimatingPosition):void;
  }
}
