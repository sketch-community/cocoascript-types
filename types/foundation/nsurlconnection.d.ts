declare namespace cocoascript {
  /**
   * An object that enables you to start and stop URL requests.
   * doc://com.apple.documentation/documentation/foundation/nsurlconnection
   */
  interface NSURLConnection extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlconnection/1411340-originalrequest
    originalRequest(): cocoascript.NSURLRequest;
    setOriginalRequest(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnection/1409060-currentrequest
    currentRequest(): cocoascript.NSURLRequest;
    setCurrentRequest(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnection/1414520-initwithrequest
    initWithRequest_delegate(request: cocoascript.NSURLRequest, delegate: cocoascript.NSURLConnection):cocoascript.NSURLConnection;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnection/1418425-initwithrequest
    initWithRequest_delegate_startImmediately(request: cocoascript.NSURLRequest, delegate: cocoascript.NSURLConnection, startImmediately: cocoascript.BOOL):cocoascript.NSURLConnection;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnection/1417345-start
    start():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnection/1407797-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnection/1417485-scheduleinrunloop
    scheduleInRunLoop_forMode(aRunLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnection/1411849-setdelegatequeue
    setDelegateQueue(queue: cocoascript.NSOperationQueue):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnection/1409722-unschedulefromrunloop
    unscheduleFromRunLoop_forMode(aRunLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnection/1615799-newsstandassetdownload
    newsstandAssetDownload(): cocoascript.NKAssetDownload;
    setNewsstandAssetDownload(): void;
    //
    alloc():cocoascript.NSURLConnection;
    //
    init():cocoascript.NSURLConnection;
  }
}

declare const NSURLConnection: cocoascript.NSURLConnection;
