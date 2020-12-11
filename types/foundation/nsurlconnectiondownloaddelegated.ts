declare namespace cocoascript {
  /**
   * A protocol that delegates of a URL connection created with Newsstand Kit implement to receive data associated with a download.
   * doc://com.apple.documentation/documentation/foundation/nsurlconnectiondownloaddelegate
   */
  interface NSURLConnectionDownloadDelegate extends NSURLConnectionDelegate {
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondownloaddelegate/1418304-connection
    connection_didWriteData_totalBytesWritten_expectedTotalBytes(connection: cocoascript.NSURLConnection, bytesWritten: number, totalBytesWritten: number, expectedTotalBytes: number):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondownloaddelegate/1418157-connectiondidresumedownloading
    connectionDidResumeDownloading_totalBytesWritten_expectedTotalBytes(connection: cocoascript.NSURLConnection, totalBytesWritten: number, expectedTotalBytes: number):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondownloaddelegate/1412126-connectiondidfinishdownloading
    connectionDidFinishDownloading_destinationURL(connection: cocoascript.NSURLConnection, destinationURL: cocoascript.NSURL):void;
  }
}
