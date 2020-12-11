declare namespace cocoascript {
  /**
   * A queue that regulates the execution of operations.
   * doc://com.apple.documentation/documentation/foundation/nsoperationqueue
   */
  interface NSOperationQueue extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1409193-mainqueue
    mainQueue(): cocoascript.NSOperationQueue;
    setMainQueue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1413097-currentqueue
    currentQueue(): cocoascript.NSOperationQueue;
    setCurrentQueue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1410704-addoperation
    addOperation(op: cocoascript.NSOperation):void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1408358-addoperations
    addOperations_waitUntilFinished(ops: cocoascript.NSOperation, wait: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1412949-addoperationwithblock
    addOperationWithBlock(block: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1415168-operations
    operations(): cocoascript.NSOperation;
    setOperations(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1415115-operationcount
    operationCount(): cocoascript.NSUInteger;
    setOperationCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1417849-cancelalloperations
    cancelAllOperations():void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1407971-waituntilalloperationsarefinishe
    waitUntilAllOperationsAreFinished():void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1417919-qualityofservice
    qualityOfService(): cocoascript.NSQualityOfService;
    setQualityOfService(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1414982-maxconcurrentoperationcount
    maxConcurrentOperationCount(): cocoascript.NSInteger;
    setMaxConcurrentOperationCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1415909-suspended
    suspended(): cocoascript.BOOL;
    setSuspended(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1418063-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/1415344-underlyingqueue
    underlyingQueue(): cocoascript.dispatch_queue_t;
    setUnderlyingQueue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/3172535-progress
    progress(): cocoascript.NSProgress;
    setProgress(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperationqueue/3172534-addbarrierblock
    addBarrierBlock(barrier: void):void;
    //
    alloc():cocoascript.NSOperationQueue;
    //
    init():cocoascript.NSOperationQueue;
  }
}

declare const NSOperationQueue: cocoascript.NSOperationQueue;
