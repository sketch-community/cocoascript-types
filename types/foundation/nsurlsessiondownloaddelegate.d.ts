declare namespace cocoascript {
  /**
   * A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to download tasks.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessiondownloaddelegate
   */
  interface NSURLSessionDownloadDelegate extends NSURLSessionTaskDelegate {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondownloaddelegate/1411575-urlsession
    URLSession_downloadTask_didFinishDownloadingToURL(session: cocoascript.NSURLSession, downloadTask: cocoascript.NSURLSessionDownloadTask, location: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondownloaddelegate/1408142-urlsession
    URLSession_downloadTask_didResumeAtOffset_expectedTotalBytes(session: cocoascript.NSURLSession, downloadTask: cocoascript.NSURLSessionDownloadTask, fileOffset: number, expectedTotalBytes: number):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondownloaddelegate/1409408-urlsession
    URLSession_downloadTask_didWriteData_totalBytesWritten_totalBytesExpectedToWrite(session: cocoascript.NSURLSession, downloadTask: cocoascript.NSURLSessionDownloadTask, bytesWritten: number, totalBytesWritten: number, totalBytesExpectedToWrite: number):void;
  }
}
