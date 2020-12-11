declare namespace cocoascript {
  /**
   * An object that names a specific XPC listener.
   * doc://com.apple.documentation/documentation/foundation/nsxpclistenerendpoint
   */
  interface NSXPCListenerEndpoint extends NSObject {
    //
    alloc():cocoascript.NSXPCListenerEndpoint;
    //
    init():cocoascript.NSXPCListenerEndpoint;
  }
}

declare const NSXPCListenerEndpoint: cocoascript.NSXPCListenerEndpoint;
