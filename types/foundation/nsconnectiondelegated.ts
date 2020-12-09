declare namespace cocoascript {
/**
 * An interface for interacting with low-level, interprocess connections.
 * doc://com.apple.documentation/documentation/foundation/nsconnectiondelegate
 */
interface NSConnectionDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsconnectiondelegate/1478108-authenticatecomponents
  authenticateComponents_withData(components: cocoascript.NSArray, signature: cocoascript.NSData):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsconnectiondelegate/1478039-authenticationdataforcomponents
  authenticationDataForComponents(components: cocoascript.NSArray):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/foundation/nsconnectiondelegate/1478045-connection
  connection_shouldMakeNewConnection(ancestor: cocoascript.NSConnection, conn: cocoascript.NSConnection):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsconnectiondelegate/1478016-connection
  connection_handleRequest(connection: cocoascript.NSConnection, doreq: cocoascript.NSDistantObjectRequest):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsconnectiondelegate/1478106-createconversationforconnection
  createConversationForConnection(conn: cocoascript.NSConnection):cocoascript.NSConnectionDelegate;
  // doc://com.apple.documentation/documentation/foundation/nsconnectiondelegate/1478057-makenewconnection
  makeNewConnection_sender(conn: cocoascript.NSConnection, ancestor: cocoascript.NSConnection):cocoascript.BOOL;
}
}

