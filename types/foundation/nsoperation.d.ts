declare namespace cocoascript {
  /**
   * An abstract class that represents the code and data associated with a single task.
   * doc://com.apple.documentation/documentation/foundation/nsoperation
   */
  interface NSOperation extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1416837-start
    start():void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1407732-main
    main():void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1408085-completionblock
    completionBlock(): void;
    setCompletionBlock(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1411672-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1408418-cancelled
    cancelled(): cocoascript.BOOL;
    setCancelled(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1415621-executing
    executing(): cocoascript.BOOL;
    setExecuting(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1413540-finished
    finished(): cocoascript.BOOL;
    setFinished(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1411089-concurrent
    concurrent(): cocoascript.BOOL;
    setConcurrent(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1408275-asynchronous
    asynchronous(): cocoascript.BOOL;
    setAsynchronous(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1412992-ready
    ready(): cocoascript.BOOL;
    setReady(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1416089-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1412859-adddependency
    addDependency(op: cocoascript.NSOperation):void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1414945-removedependency
    removeDependency(op: cocoascript.NSOperation):void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1416668-dependencies
    dependencies(): cocoascript.NSOperation;
    setDependencies(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1413553-qualityofservice
    qualityOfService(): cocoascript.NSQualityOfService;
    setQualityOfService(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1409020-threadpriority
    threadPriority(): number;
    setThreadPriority(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1411204-queuepriority
    queuePriority(): cocoascript.NSOperationQueuePriority;
    setQueuePriority(): void;
    // doc://com.apple.documentation/documentation/foundation/nsoperation/1409256-waituntilfinished
    waitUntilFinished():void;
    //
    alloc():cocoascript.NSOperation;
    //
    init():cocoascript.NSOperation;
  }
}

declare const NSOperation: cocoascript.NSOperation;
