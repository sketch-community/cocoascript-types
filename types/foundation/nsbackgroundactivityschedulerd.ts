declare namespace cocoascript {
  /**
   * A task scheduler suitable for low priority operations that can run in the background.
   * doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityscheduler
   */
  interface NSBackgroundActivityScheduler extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityscheduler/1412285-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityscheduler/1409853-repeats
    repeats(): cocoascript.BOOL;
    setRepeats(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityscheduler/1408819-interval
    interval(): cocoascript.NSTimeInterval;
    setInterval(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityscheduler/1412688-qualityofservice
    qualityOfService(): cocoascript.NSQualityOfService;
    setQualityOfService(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityscheduler/1412167-shoulddefer
    shouldDefer(): cocoascript.BOOL;
    setShouldDefer(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityscheduler/1408138-tolerance
    tolerance(): cocoascript.NSTimeInterval;
    setTolerance(): void;
    // doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityscheduler/1407482-initwithidentifier
    initWithIdentifier(identifier: cocoascript.NSString):cocoascript.NSBackgroundActivityScheduler;
    // doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityscheduler/1412813-schedulewithblock
    scheduleWithBlock(block: cocoascript.NSBackgroundActivityCompletionHandler):void;
    // doc://com.apple.documentation/documentation/foundation/nsbackgroundactivityscheduler/1408878-invalidate
    invalidate():void;
    //
    alloc():cocoascript.NSBackgroundActivityScheduler;
    //
    init():cocoascript.NSBackgroundActivityScheduler;
  }
}

declare const NSBackgroundActivityScheduler: cocoascript.NSBackgroundActivityScheduler;
