declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/exceptionhandling/nsexceptionhandler
   */
  interface NSExceptionHandler extends NSObject {
    // https://developer.apple.com/documentation/exceptionhandling/nsexceptionhandler/1489834-defaultexceptionhandler
    defaultExceptionHandler():NSExceptionHandler;
    // https://developer.apple.com/documentation/exceptionhandling/nsexceptionhandler/1489836-exceptionhandlingmask
    exceptionHandlingMask():NSUInteger;
    // https://developer.apple.com/documentation/exceptionhandling/nsexceptionhandler/1489837-exceptionhangingmask
    exceptionHangingMask():NSUInteger;
    // https://developer.apple.com/documentation/exceptionhandling/nsexceptionhandler/1489839-setexceptionhandlingmask
    setExceptionHandlingMask(aMask: NSUInteger):void;
    // https://developer.apple.com/documentation/exceptionhandling/nsexceptionhandler/1489844-setexceptionhangingmask
    setExceptionHangingMask(aMask: NSUInteger):void;
    // https://developer.apple.com/documentation/exceptionhandling/nsexceptionhandler/1489860-delegate
    delegate():NSExceptionHandler;
    // https://developer.apple.com/documentation/exceptionhandling/nsexceptionhandler/1489842-setdelegate
    setDelegate(anObject: NSExceptionHandler):void;
    //
    alloc():NSExceptionHandler;
    //
    init():NSExceptionHandler;
  }
}

declare const NSExceptionHandler: cocoascript.NSExceptionHandler;
