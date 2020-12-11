declare namespace cocoascript {
  /**
   * A protocol that defines methods that URL session instances call on their delegates to handle task-level events specific to stream tasks.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamdelegate
   */
  interface NSURLSessionStreamDelegate extends NSURLSessionTaskDelegate {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamdelegate/1407527-urlsession
    URLSession_betterRouteDiscoveredForStreamTask(session: cocoascript.NSURLSession, streamTask: cocoascript.NSURLSessionStreamTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamdelegate/1411625-urlsession
    URLSession_streamTask_didBecomeInputStream_outputStream(session: cocoascript.NSURLSession, streamTask: cocoascript.NSURLSessionStreamTask, inputStream: cocoascript.NSInputStream, outputStream: cocoascript.NSOutputStream):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamdelegate/1411501-urlsession
    URLSession_readClosedForStreamTask(session: cocoascript.NSURLSession, streamTask: cocoascript.NSURLSessionStreamTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessionstreamdelegate/1411507-urlsession
    URLSession_writeClosedForStreamTask(session: cocoascript.NSURLSession, streamTask: cocoascript.NSURLSessionStreamTask):void;
  }
}
