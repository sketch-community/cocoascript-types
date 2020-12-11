declare namespace cocoascript {
  /**
   * A URL session task that stores downloaded data to a file.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessiondownloadtask
   */
  interface NSURLSessionDownloadTask extends NSURLSessionTask {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondownloadtask/1411634-cancelbyproducingresumedata
    cancelByProducingResumeData(completionHandler: cocoascript.NSData):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondownloadtask/3240620-init
    init():cocoascript.NSURLSessionDownloadTask;
    //
    alloc():cocoascript.NSURLSessionDownloadTask;
    //
    init():cocoascript.NSURLSessionDownloadTask;
  }
}

declare const NSURLSessionDownloadTask: cocoascript.NSURLSessionDownloadTask;
