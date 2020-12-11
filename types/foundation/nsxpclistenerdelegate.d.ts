declare namespace cocoascript {
  /**
   * The protocol that delegates to the XPC listener use to accept or reject new connections.
   * doc://com.apple.documentation/documentation/foundation/nsxpclistenerdelegate
   */
  interface NSXPCListenerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsxpclistenerdelegate/1410381-listener
    listener_shouldAcceptNewConnection(listener: cocoascript.NSXPCListener, newConnection: cocoascript.NSXPCConnection):cocoascript.BOOL;
  }
}
