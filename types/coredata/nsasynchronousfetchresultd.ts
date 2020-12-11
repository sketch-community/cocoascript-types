declare namespace cocoascript {
  /**
   * A fetch result object that encompasses the response from an executed asynchronous fetch request.
   * doc://com.apple.documentation/documentation/coredata/nsasynchronousfetchresult
   */
  interface NSAsynchronousFetchResult extends NSPersistentStoreAsynchronousResult {
    // doc://com.apple.documentation/documentation/coredata/nsasynchronousfetchresult/1404906-fetchrequest
    fetchRequest(): cocoascript.ResultType;
    setFetchRequest(): void;
    // doc://com.apple.documentation/documentation/coredata/nsasynchronousfetchresult/1404930-finalresult
    finalResult(): cocoascript.ResultType;
    setFinalResult(): void;
    //
    alloc():cocoascript.NSAsynchronousFetchResult;
    //
    init():cocoascript.NSAsynchronousFetchResult;
  }
}

declare const NSAsynchronousFetchResult: cocoascript.NSAsynchronousFetchResult;
