declare namespace cocoascript {
  /**
   * An animation context, which contains information about environment and state.
   * doc://com.apple.documentation/documentation/appkit/nsanimationcontext
   */
  interface NSAnimationContext extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsanimationcontext/1535845-currentcontext
    currentContext(): cocoascript.NSAnimationContext;
    setCurrentContext(): void;
    // doc://com.apple.documentation/documentation/appkit/nsanimationcontext/1531132-completionhandler
    completionHandler(): void;
    setCompletionHandler(): void;
    // doc://com.apple.documentation/documentation/appkit/nsanimationcontext/1526780-duration
    duration(): cocoascript.NSTimeInterval;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/appkit/nsanimationcontext/1524985-timingfunction
    timingFunction(): cocoascript.CAMediaTimingFunction;
    setTimingFunction(): void;
    // doc://com.apple.documentation/documentation/appkit/nsanimationcontext/1525870-allowsimplicitanimation
    allowsImplicitAnimation(): cocoascript.BOOL;
    setAllowsImplicitAnimation(): void;
    //
    alloc():cocoascript.NSAnimationContext;
    //
    init():cocoascript.NSAnimationContext;
  }
}

declare const NSAnimationContext: cocoascript.NSAnimationContext;
