declare namespace cocoascript {
  /**
   * An interface for handling incoming messages.
   * doc://com.apple.documentation/documentation/foundation/nsportdelegate
   */
  interface NSPortDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsportdelegate/1399513-handleportmessage
    handlePortMessage(message: cocoascript.NSPortMessage):void;
  }
}
