declare namespace cocoascript {
  /**
   * A timer object that allows your application to synchronize its drawing to the refresh rate of the display.
   * doc://com.apple.documentation/documentation/quartzcore/cadisplaylink
   */
  interface CADisplayLink extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621323-addtorunloop
    addToRunLoop_forMode(runloop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621325-removefromrunloop
    removeFromRunLoop_forMode(runloop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621293-invalidate
    invalidate():void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621292-duration
    duration(): cocoascript.CFTimeInterval;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1648421-preferredframespersecond
    preferredFramesPerSecond(): cocoascript.NSInteger;
    setPreferredFramesPerSecond(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621231-frameinterval
    frameInterval(): cocoascript.NSInteger;
    setFrameInterval(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621229-paused
    paused(): cocoascript.BOOL;
    setPaused(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621257-timestamp
    timestamp(): cocoascript.CFTimeInterval;
    setTimestamp(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1648422-targettimestamp
    targetTimestamp(): cocoascript.CFTimeInterval;
    setTargetTimestamp(): void;
    //
    alloc():cocoascript.CADisplayLink;
    //
    init():cocoascript.CADisplayLink;
  }
}

declare const CADisplayLink: cocoascript.CADisplayLink;
