declare namespace cocoascript {
  /**
   * A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to WebSocket tasks.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsocketdelegate
   */
  interface NSURLSessionWebSocketDelegate extends NSURLSessionTaskDelegate {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsocketdelegate/3181189-urlsession
    URLSession_webSocketTask_didOpenWithProtocol(session: cocoascript.NSURLSession, webSocketTask: cocoascript.NSURLSessionWebSocketTask, protocol: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionwebsocketdelegate/3181188-urlsession
    URLSession_webSocketTask_didCloseWithCode_reason(session: cocoascript.NSURLSession, webSocketTask: cocoascript.NSURLSessionWebSocketTask, closeCode: cocoascript.NSURLSessionWebSocketCloseCode, reason: cocoascript.NSData):void;
  }
}
