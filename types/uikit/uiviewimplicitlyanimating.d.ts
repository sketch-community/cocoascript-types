declare namespace cocoascript {
  /**
   * An interface for modifying an animation while it is running.
   * doc://com.apple.documentation/documentation/uikit/uiviewimplicitlyanimating
   */
  interface UIViewImplicitlyAnimating extends UIViewAnimating {
    // doc://com.apple.documentation/documentation/uikit/uiviewimplicitlyanimating/1829436-addanimations
    addAnimations(animation: void):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewimplicitlyanimating/1829428-addanimations
    addAnimations_delayFactor(animation: void, delayFactor: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewimplicitlyanimating/1829432-addcompletion
    addCompletion(completion: cocoascript.UIViewAnimatingPosition):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewimplicitlyanimating/1829444-continueanimationwithtimingparam
    continueAnimationWithTimingParameters_durationFactor(parameters: cocoascript.UITimingCurveProvider, durationFactor: cocoascript.CGFloat):void;
  }
}
