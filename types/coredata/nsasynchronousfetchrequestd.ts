declare namespace cocoascript {
  /**
   * A fetch request that retrieves results asynchronously and supports progress notification.
   * doc://com.apple.documentation/documentation/coredata/nsasynchronousfetchrequest
   */
  interface NSAsynchronousFetchRequest extends NSPersistentStoreRequest {
    // doc://com.apple.documentation/documentation/coredata/nsasynchronousfetchrequest/1506218-initwithfetchrequest
    initWithFetchRequest_completionBlock(request: cocoascript.NSFetchRequest, blk: cocoascript.NSAsynchronousFetchResult):cocoascript.NSAsynchronousFetchRequest;
    // doc://com.apple.documentation/documentation/coredata/nsasynchronousfetchrequest/1506815-completionblock
    completionBlock(): cocoascript.NSPersistentStoreAsynchronousFetchResultCompletionBlock;
    setCompletionBlock(): void;
    // doc://com.apple.documentation/documentation/coredata/nsasynchronousfetchrequest/1506474-estimatedresultcount
    estimatedResultCount(): cocoascript.NSInteger;
    setEstimatedResultCount(): void;
    // doc://com.apple.documentation/documentation/coredata/nsasynchronousfetchrequest/1506719-fetchrequest
    fetchRequest(): cocoascript.ResultType;
    setFetchRequest(): void;
    //
    alloc():cocoascript.NSAsynchronousFetchRequest;
    //
    init():cocoascript.NSAsynchronousFetchRequest;
  }
}

declare const NSAsynchronousFetchRequest: cocoascript.NSAsynchronousFetchRequest;
