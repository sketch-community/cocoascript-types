declare namespace cocoascript {
  /**
   * Methods for creating new proxy objects.
   * doc://com.apple.documentation/documentation/foundation/nsxpcproxycreating
   */
  interface NSXPCProxyCreating {
    // doc://com.apple.documentation/documentation/foundation/nsxpcproxycreating/1418403-remoteobjectproxy
    remoteObjectProxy():cocoascript.NSXPCProxyCreating;
    // doc://com.apple.documentation/documentation/foundation/nsxpcproxycreating/1415611-remoteobjectproxywitherrorhandle
    remoteObjectProxyWithErrorHandler(handler: cocoascript.NSError):cocoascript.NSXPCProxyCreating;
    // doc://com.apple.documentation/documentation/foundation/nsxpcproxycreating/2879411-synchronousremoteobjectproxywith
    synchronousRemoteObjectProxyWithErrorHandler(handler: cocoascript.NSError):cocoascript.NSXPCProxyCreating;
  }
}
