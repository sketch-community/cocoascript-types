declare namespace cocoascript {
  /**
   * A URL session task that is stream-based.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamtask
   */
  interface NSURLSessionStreamTask extends NSURLSessionTask {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamtask/1411604-readdataofminlength
    readDataOfMinLength_maxLength_timeout_completionHandler(minBytes: cocoascript.NSUInteger, maxBytes: cocoascript.NSUInteger, timeout: cocoascript.NSTimeInterval, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamtask/1411602-writedata
    writeData_timeout_completionHandler(data: cocoascript.NSData, timeout: cocoascript.NSTimeInterval, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamtask/1410132-capturestreams
    captureStreams():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamtask/1411558-closeread
    closeRead():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamtask/1411347-closewrite
    closeWrite():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamtask/1411567-startsecureconnection
    startSecureConnection():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamtask/1407337-stopsecureconnection
    stopSecureConnection():void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamtask/3240622-init
    init():cocoascript.NSURLSessionStreamTask;
    //
    alloc():cocoascript.NSURLSessionStreamTask;
    //
    init():cocoascript.NSURLSessionStreamTask;
  }
}

declare const NSURLSessionStreamTask: cocoascript.NSURLSessionStreamTask;
