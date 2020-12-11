declare namespace cocoascript {
  /**
   * A thread of execution.
   * doc://com.apple.documentation/documentation/foundation/nsthread
   */
  interface NSThread extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsthread/1416464-init
    init():cocoascript.NSThread;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1414773-initwithtarget
    initWithTarget_selector_object(target: cocoascript.NSThread, selector: cocoascript.SEL, argument: cocoascript.NSThread):cocoascript.NSThread;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1418166-start
    start():void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1418421-main
    main():void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1411303-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1411240-executing
    executing(): cocoascript.BOOL;
    setExecuting(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1409297-finished
    finished(): cocoascript.BOOL;
    setFinished(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1417366-cancelled
    cancelled(): cocoascript.BOOL;
    setCancelled(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1412704-ismainthread
    isMainThread(): cocoascript.BOOL;
    setIsMainThread(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1408455-ismainthread
    isMainThread(): cocoascript.BOOL;
    setIsMainThread(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1414782-mainthread
    mainThread(): cocoascript.NSThread;
    setMainThread(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1410679-currentthread
    currentThread(): cocoascript.NSThread;
    setCurrentThread(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1409565-callstackreturnaddresses
    callStackReturnAddresses(): cocoascript.NSNumber;
    setCallStackReturnAddresses(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1414836-callstacksymbols
    callStackSymbols(): cocoascript.NSString;
    setCallStackSymbols(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1411433-threaddictionary
    threadDictionary(): cocoascript.NSMutableDictionary;
    setThreadDictionary(): void;
    // doc://com.apple.documentation/documentation/foundation/nsassertionhandlerkey
    NSAssertionHandlerKey(): cocoascript.const;
    setNSAssertionHandlerKey(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1414122-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1415190-stacksize
    stackSize(): cocoascript.NSUInteger;
    setStackSize(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1409426-qualityofservice
    qualityOfService(): cocoascript.NSQualityOfService;
    setQualityOfService(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/1411927-threadpriority
    threadPriority(): number;
    setThreadPriority(): void;
    // doc://com.apple.documentation/documentation/foundation/nsthread/2088561-initwithblock
    initWithBlock(block: void):cocoascript.NSThread;
    //
    alloc():cocoascript.NSThread;
    //
    init():cocoascript.NSThread;
  }
}

declare const NSThread: cocoascript.NSThread;
