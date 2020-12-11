declare namespace cocoascript {
  /**
   * A protocol that defines methods that URL session instances call on their delegates to handle session-level events, like session life cycle changes.
   * doc://com.apple.documentation/documentation/foundation/nsurlsessiondelegate
   */
  interface NSURLSessionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondelegate/1407776-urlsession
    URLSession_didBecomeInvalidWithError(session: cocoascript.NSURLSession, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondelegate/1617185-urlsessiondidfinisheventsforback
    URLSessionDidFinishEventsForBackgroundURLSession(session: cocoascript.NSURLSession):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlsessiondelegate/1409308-urlsession
    URLSession_didReceiveChallenge_completionHandler(session: cocoascript.NSURLSession, challenge: cocoascript.NSURLAuthenticationChallenge, completionHandler: cocoascript.NSURLCredential):void;
  }
}
