declare namespace cocoascript {
  /**
   * A URL session task that returns downloaded data directly to the app in memory.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessiondatatask
   */
  interface NSURLSessionDataTask extends NSURLSessionTask {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondatatask/3240618-init
    init():cocoascript.NSURLSessionDataTask;
    //
    alloc():cocoascript.NSURLSessionDataTask;
    //
    init():cocoascript.NSURLSessionDataTask;
  }
}

declare const NSURLSessionDataTask: cocoascript.NSURLSessionDataTask;
