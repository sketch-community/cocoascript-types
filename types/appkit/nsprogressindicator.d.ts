declare namespace cocoascript {
  /**
   * An interface that provides visual feedback to the user about the status of an ongoing task.
   * doc://com.apple.documentation/documentation/appkit/nsprogressindicator
   */
  interface NSProgressIndicator extends NSView {
    // doc://com.apple.documentation/documentation/appkit/nsprogressindicator/1501167-startanimation
    startAnimation(sender: cocoascript.NSProgressIndicator):void;
    // doc://com.apple.documentation/documentation/appkit/nsprogressindicator/1501141-stopanimation
    stopAnimation(sender: cocoascript.NSProgressIndicator):void;
    // doc://com.apple.documentation/documentation/appkit/nsprogressindicator/1501160-usesthreadedanimation
    usesThreadedAnimation(): cocoascript.BOOL;
    setUsesThreadedAnimation(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprogressindicator/1501139-animate
    animate(sender: cocoascript.NSProgressIndicator):void;
    // doc://com.apple.documentation/documentation/appkit/nsprogressindicator/1501178-animationdelay
    animationDelay():cocoascript.NSTimeInterval;
    // doc://com.apple.documentation/documentation/appkit/nsprogressindicator/1501151-setanimationdelay
    setAnimationDelay(delay: cocoascript.NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/appkit/nsprogressindicator/1501155-incrementby
    incrementBy(delta: number):void;
    // doc://com.apple.documentation/documentation/appkit/nsprogressindicator/1501173-doublevalue
    doubleValue(): number;
    setDoubleValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprogressindicator/1501169-minvalue
    minValue(): number;
    setMinValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprogressindicator/1501165-maxvalue
    maxValue(): number;
    setMaxValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprogressindicator/1501157-controlsize
    controlSize(): cocoascript.NSControlSize;
    setControlSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprogressindicator/1501153-controltint
    controlTint(): cocoascript.NSControlTint;
    setControlTint(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprogressindicator/1501161-bezeled
    bezeled(): cocoascript.BOOL;
    setBezeled(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprogressindicator/1501146-indeterminate
    indeterminate(): cocoascript.BOOL;
    setIndeterminate(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprogressindicator/1501158-style
    style(): cocoascript.NSProgressIndicatorStyle;
    setStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprogressindicator/1501144-sizetofit
    sizeToFit():void;
    // doc://com.apple.documentation/documentation/appkit/nsprogressindicator/1501171-displayedwhenstopped
    displayedWhenStopped(): cocoascript.BOOL;
    setDisplayedWhenStopped(): void;
    //
    alloc():cocoascript.NSProgressIndicator;
    //
    init():cocoascript.NSProgressIndicator;
  }
}

declare const NSProgressIndicator: cocoascript.NSProgressIndicator;
