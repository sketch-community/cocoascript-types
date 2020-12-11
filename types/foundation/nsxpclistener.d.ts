declare namespace cocoascript {
  /**
   * A listener that waits for new incoming connections, configures them, and accepts or rejects them.
   * doc://com.apple.documentation/documentation/foundation/nsxpclistener
   */
  interface NSXPCListener extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsxpclistener/1414106-initwithmachservicename
    initWithMachServiceName(name: cocoascript.NSString):cocoascript.NSXPCListener;
    // doc://com.apple.documentation/documentation/foundation/nsxpclistener/1408939-delegate
    delegate(): cocoascript.NSXPCListenerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxpclistener/1408519-endpoint
    endpoint(): cocoascript.NSXPCListenerEndpoint;
    setEndpoint(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxpclistener/1418427-invalidate
    invalidate():void;
    // doc://com.apple.documentation/documentation/foundation/nsxpclistener/1409652-resume
    resume():void;
    // doc://com.apple.documentation/documentation/foundation/nsxpclistener/1411596-suspend
    suspend():void;
    //
    alloc():cocoascript.NSXPCListener;
    //
    init():cocoascript.NSXPCListener;
  }
}

declare const NSXPCListener: cocoascript.NSXPCListener;
