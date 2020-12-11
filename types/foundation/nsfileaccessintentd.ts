declare namespace cocoascript {
  /**
   * The details of a coordinated-read or coordinated-write operation.
   * doc://com.apple.documentation/documentation/foundation/nsfileaccessintent
   */
  interface NSFileAccessIntent extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsfileaccessintent/1411459-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    //
    alloc():cocoascript.NSFileAccessIntent;
    //
    init():cocoascript.NSFileAccessIntent;
  }
}

declare const NSFileAccessIntent: cocoascript.NSFileAccessIntent;
