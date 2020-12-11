declare namespace cocoascript {
  /**
   * An interface for implementing custom animator objects.
   * doc://com.apple.documentation/documentation/uikit/uiviewanimating
   */
  interface UIViewAnimating extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiviewanimating/1649786-startanimation
    startAnimation():void;
    // doc://com.apple.documentation/documentation/uikit/uiviewanimating/2097540-startanimationafterdelay
    startAnimationAfterDelay(delay: cocoascript.NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewanimating/1649843-pauseanimation
    pauseAnimation():void;
    // doc://com.apple.documentation/documentation/uikit/uiviewanimating/1649750-stopanimation
    stopAnimation(withoutFinishing: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewanimating/1649796-finishanimationatposition
    finishAnimationAtPosition(finalPosition: cocoascript.UIViewAnimatingPosition):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewanimating/1649787-fractioncomplete
    fractionComplete(): cocoascript.CGFloat;
    setFractionComplete(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewanimating/1649804-reversed
    reversed(): cocoascript.BOOL;
    setReversed(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewanimating/1649743-state
    state(): cocoascript.UIViewAnimatingState;
    setState(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewanimating/1649785-running
    running(): cocoascript.BOOL;
    setRunning(): void;
  }
}
