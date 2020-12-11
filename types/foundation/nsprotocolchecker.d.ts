declare namespace cocoascript {
  /**
   * An object that restricts the messages that can be sent to another object (referred to as the checker’s delegate).
   * doc://com.apple.documentation/documentation/foundation/nsprotocolchecker
   */
  interface NSProtocolChecker extends NSProxy {
    // doc://com.apple.documentation/documentation/foundation/nsprotocolchecker/1417509-initwithtarget
    initWithTarget_protocol(anObject: cocoascript.NSObject, aProtocol: cocoascript.Protocol):cocoascript.NSProtocolChecker;
    // doc://com.apple.documentation/documentation/foundation/nsprotocolchecker/1413544-protocol
    protocol(): cocoascript.Protocol;
    setProtocol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsprotocolchecker/1416619-target
    target(): cocoascript.NSObject;
    setTarget(): void;
    //
    alloc():cocoascript.NSProtocolChecker;
    //
    init():cocoascript.NSProtocolChecker;
  }
}

declare const NSProtocolChecker: cocoascript.NSProtocolChecker;
