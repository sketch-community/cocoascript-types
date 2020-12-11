declare namespace cocoascript {
  /**
   * An abstract superclass defining an API for objects that act as stand-ins for other objects or for objects that don’t exist yet.
   * doc://com.apple.documentation/documentation/foundation/nsproxy
   */
  interface NSProxy {
    // doc://com.apple.documentation/documentation/foundation/nsproxy/1589830-dealloc
    dealloc():void;
    // doc://com.apple.documentation/documentation/foundation/nsproxy/1416087-finalize
    finalize():void;
    // doc://com.apple.documentation/documentation/foundation/nsproxy/1416417-forwardinvocation
    forwardInvocation(invocation: cocoascript.NSInvocation):void;
    // doc://com.apple.documentation/documentation/foundation/nsproxy/1589828-methodsignatureforselector
    methodSignatureForSelector(sel: cocoascript.SEL):cocoascript.NSMethodSignature;
    // doc://com.apple.documentation/documentation/foundation/nsproxy/1416346-description
    description(): cocoascript.NSString;
    setDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsproxy/1416366-debugdescription
    debugDescription(): cocoascript.NSString;
    setDebugDescription(): void;
    //
    alloc():cocoascript.NSProxy;
    //
    init():cocoascript.NSProxy;
  }
}

declare const NSProxy: cocoascript.NSProxy;
