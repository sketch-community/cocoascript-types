declare namespace cocoascript {
  /**
   * A protocol that most delegates of a URL connection implement to receive data associated with the connection.
   * doc://com.apple.documentation/documentation/foundation/nsurlconnectiondatadelegate
   */
  interface NSURLConnectionDataDelegate extends NSURLConnectionDelegate {
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondatadelegate/1407728-connection
    connection_didReceiveResponse(connection: cocoascript.NSURLConnection, response: cocoascript.NSURLResponse):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondatadelegate/1414090-connection
    connection_didReceiveData(connection: cocoascript.NSURLConnection, data: cocoascript.NSData):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondatadelegate/1418264-connection
    connection_didSendBodyData_totalBytesWritten_totalBytesExpectedToWrite(connection: cocoascript.NSURLConnection, bytesWritten: cocoascript.NSInteger, totalBytesWritten: cocoascript.NSInteger, totalBytesExpectedToWrite: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondatadelegate/1416409-connectiondidfinishloading
    connectionDidFinishLoading(connection: cocoascript.NSURLConnection):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondatadelegate/1415830-connection
    connection_willSendRequest_redirectResponse(connection: cocoascript.NSURLConnection, request: cocoascript.NSURLRequest, response: cocoascript.NSURLResponse):cocoascript.NSURLRequest;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondatadelegate/1412892-connection
    connection_needNewBodyStream(connection: cocoascript.NSURLConnection, request: cocoascript.NSURLRequest):cocoascript.NSInputStream;
    // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondatadelegate/1414834-connection
    connection_willCacheResponse(connection: cocoascript.NSURLConnection, cachedResponse: cocoascript.NSCachedURLResponse):cocoascript.NSCachedURLResponse;
  }
}
