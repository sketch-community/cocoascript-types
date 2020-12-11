declare namespace cocoascript {
  /**
   * An interface that may be sent to an exported object or remote object proxy.
   * doc://com.apple.documentation/documentation/foundation/nsxpcinterface
   */
  interface NSXPCInterface extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsxpcinterface/1416353-protocol
    protocol(): cocoascript.Protocol;
    setProtocol(): void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcinterface/1418323-classesforselector
    classesForSelector_argumentIndex_ofReply(sel: cocoascript.SEL, arg: cocoascript.NSUInteger, ofReply: cocoascript.BOOL):cocoascript.Class;
    // doc://com.apple.documentation/documentation/foundation/nsxpcinterface/1409127-interfaceforselector
    interfaceForSelector_argumentIndex_ofReply(sel: cocoascript.SEL, arg: cocoascript.NSUInteger, ofReply: cocoascript.BOOL):cocoascript.NSXPCInterface;
    // doc://com.apple.documentation/documentation/foundation/nsxpcinterface/1415555-setclasses
    setClasses_forSelector_argumentIndex_ofReply(classes: cocoascript.Class, sel: cocoascript.SEL, arg: cocoascript.NSUInteger, ofReply: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcinterface/1414293-setinterface
    setInterface_forSelector_argumentIndex_ofReply(ifc: cocoascript.NSXPCInterface, sel: cocoascript.SEL, arg: cocoascript.NSUInteger, ofReply: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcinterface/3174972-setxpctype
    setXPCType_forSelector_argumentIndex_ofReply(type: cocoascript.xpc_type_t, sel: cocoascript.SEL, arg: cocoascript.NSUInteger, ofReply: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/foundation/nsxpcinterface/3174971-xpctypeforselector
    XPCTypeForSelector_argumentIndex_ofReply(sel: cocoascript.SEL, arg: cocoascript.NSUInteger, ofReply: cocoascript.BOOL):cocoascript.xpc_type_t;
    //
    alloc():cocoascript.NSXPCInterface;
    //
    init():cocoascript.NSXPCInterface;
  }
}

declare const NSXPCInterface: cocoascript.NSXPCInterface;
