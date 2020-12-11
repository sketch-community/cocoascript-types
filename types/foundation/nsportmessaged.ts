declare namespace cocoascript {
  /**
   * A low-level, operating system-independent type for inter-application (and inter-thread) messages.
   * doc://com.apple.documentation/documentation/foundation/nsportmessage
   */
  interface NSPortMessage extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsportmessage/1417387-initwithsendport
    initWithSendPort_receivePort_components(sendPort: cocoascript.NSPort, replyPort: cocoascript.NSPort, components: cocoascript.NSArray):cocoascript.NSPortMessage;
    // doc://com.apple.documentation/documentation/foundation/nsportmessage/1407464-sendbeforedate
    sendBeforeDate(date: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsportmessage/1407377-components
    components(): cocoascript.NSArray;
    setComponents(): void;
    // doc://com.apple.documentation/documentation/foundation/nsportmessage/1413908-receiveport
    receivePort(): cocoascript.NSPort;
    setReceivePort(): void;
    // doc://com.apple.documentation/documentation/foundation/nsportmessage/1417234-sendport
    sendPort(): cocoascript.NSPort;
    setSendPort(): void;
    // doc://com.apple.documentation/documentation/foundation/nsportmessage/1407880-msgid
    msgid(): number;
    setMsgid(): void;
    //
    alloc():cocoascript.NSPortMessage;
    //
    init():cocoascript.NSPortMessage;
  }
}

declare const NSPortMessage: cocoascript.NSPortMessage;
