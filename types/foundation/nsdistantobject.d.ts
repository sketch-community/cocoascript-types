declare namespace cocoascript {
  /**
   * A proxy for objects in other applications or threads.
   * doc://com.apple.documentation/documentation/foundation/nsdistantobject
   */
  interface NSDistantObject extends NSProxy {
    // doc://com.apple.documentation/documentation/foundation/nsdistantobject/1442603-initwithlocal
    initWithLocal_connection(target: cocoascript.NSDistantObject, connection: cocoascript.NSConnection):cocoascript.NSDistantObject;
    // doc://com.apple.documentation/documentation/foundation/nsdistantobject/1442597-initwithtarget
    initWithTarget_connection(target: cocoascript.NSDistantObject, connection: cocoascript.NSConnection):cocoascript.NSDistantObject;
    // doc://com.apple.documentation/documentation/foundation/nsdistantobject/1442593-setprotocolforproxy
    setProtocolForProxy(proto: cocoascript.Protocol):void;
    // doc://com.apple.documentation/documentation/foundation/nsdistantobject/1442598-connectionforproxy
    connectionForProxy(): cocoascript.NSConnection;
    setConnectionForProxy(): void;
    // doc://com.apple.documentation/documentation/foundation/nsdistantobject/1442605-initwithcoder
    initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSDistantObject;
    //
    alloc():cocoascript.NSDistantObject;
    //
    init():cocoascript.NSDistantObject;
  }
}

declare const NSDistantObject: cocoascript.NSDistantObject;
