declare namespace cocoascript {
  /**
   * A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to data and upload tasks.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessiondatadelegate
   */
  interface NSURLSessionDataDelegate extends NSURLSessionTaskDelegate {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondatadelegate/1410027-urlsession
    URLSession_dataTask_didReceiveResponse_completionHandler(session: cocoascript.NSURLSession, dataTask: cocoascript.NSURLSessionDataTask, response: cocoascript.NSURLResponse, completionHandler: cocoascript.NSURLSessionResponseDisposition):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondatadelegate/1409936-urlsession
    URLSession_dataTask_didBecomeDownloadTask(session: cocoascript.NSURLSession, dataTask: cocoascript.NSURLSessionDataTask, downloadTask: cocoascript.NSURLSessionDownloadTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondatadelegate/1411648-urlsession
    URLSession_dataTask_didBecomeStreamTask(session: cocoascript.NSURLSession, dataTask: cocoascript.NSURLSessionDataTask, streamTask: cocoascript.NSURLSessionStreamTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondatadelegate/1411528-urlsession
    URLSession_dataTask_didReceiveData(session: cocoascript.NSURLSession, dataTask: cocoascript.NSURLSessionDataTask, data: cocoascript.NSData):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondatadelegate/1411612-urlsession
    URLSession_dataTask_willCacheResponse_completionHandler(session: cocoascript.NSURLSession, dataTask: cocoascript.NSURLSessionDataTask, proposedResponse: cocoascript.NSCachedURLResponse, completionHandler: cocoascript.NSCachedURLResponse):void;
  }
}
