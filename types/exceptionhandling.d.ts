declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/exceptionhandling/nsexceptionhandler
   */
  interface NSExceptionHandler extends NSObject {
    // doc://com.apple.documentation/documentation/exceptionhandling/nsexceptionhandler/1489834-defaultexceptionhandler
    defaultExceptionHandler():NSExceptionHandler;
    // doc://com.apple.documentation/documentation/exceptionhandling/nsexceptionhandler/1489836-exceptionhandlingmask
    exceptionHandlingMask():NSUInteger;
    // doc://com.apple.documentation/documentation/exceptionhandling/nsexceptionhandler/1489837-exceptionhangingmask
    exceptionHangingMask():NSUInteger;
    // doc://com.apple.documentation/documentation/exceptionhandling/nsexceptionhandler/1489839-setexceptionhandlingmask
    setExceptionHandlingMask(aMask: NSUInteger):void;
    // doc://com.apple.documentation/documentation/exceptionhandling/nsexceptionhandler/1489844-setexceptionhangingmask
    setExceptionHangingMask(aMask: NSUInteger):void;
    // doc://com.apple.documentation/documentation/exceptionhandling/nsexceptionhandler/1489860-delegate
    delegate():NSExceptionHandler;
    // doc://com.apple.documentation/documentation/exceptionhandling/nsexceptionhandler/1489842-setdelegate
    setDelegate(anObject: NSExceptionHandler):void;
    //
    alloc():NSExceptionHandler;
    //
    init():NSExceptionHandler;
  }
}

declare const NSExceptionHandler: cocoascript.NSExceptionHandler;
