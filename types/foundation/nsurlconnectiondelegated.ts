declare namespace cocoascript {
/**
 * A protocol that delegates of a URL connection implement to receive status about and provide feedback to the connection object.
 * doc://com.apple.documentation/documentation/foundation/nsurlconnectiondelegate
 */
interface NSURLConnectionDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondelegate/1414078-connection
  connection_willSendRequestForAuthenticationChallenge(connection: cocoascript.NSURLConnection, challenge: cocoascript.NSURLAuthenticationChallenge):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondelegate/1415706-connection
  connection_canAuthenticateAgainstProtectionSpace(connection: cocoascript.NSURLConnection, protectionSpace: cocoascript.NSURLProtectionSpace):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondelegate/1407177-connection
  connection_didCancelAuthenticationChallenge(connection: cocoascript.NSURLConnection, challenge: cocoascript.NSURLAuthenticationChallenge):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondelegate/1417135-connection
  connection_didReceiveAuthenticationChallenge(connection: cocoascript.NSURLConnection, challenge: cocoascript.NSURLAuthenticationChallenge):void;
  // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondelegate/1414890-connectionshouldusecredentialsto
  connectionShouldUseCredentialStorage(connection: cocoascript.NSURLConnection):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsurlconnectiondelegate/1418443-connection
  connection_didFailWithError(connection: cocoascript.NSURLConnection, error: cocoascript.NSError):void;
}
}

