declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/exceptionhandling/nsexceptionhandler
 */
interface NSExceptionHandler extends NSObject {
  // doc://com.apple.documentation/documentation/exceptionhandling/nsexceptionhandler/1489836-exceptionhandlingmask
  exceptionHandlingMask():cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/exceptionhandling/nsexceptionhandler/1489837-exceptionhangingmask
  exceptionHangingMask():cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/exceptionhandling/nsexceptionhandler/1489839-setexceptionhandlingmask
  setExceptionHandlingMask(aMask: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/exceptionhandling/nsexceptionhandler/1489844-setexceptionhangingmask
  setExceptionHangingMask(aMask: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/exceptionhandling/nsexceptionhandler/1489860-delegate
  delegate():cocoascript.NSExceptionHandler;
  // doc://com.apple.documentation/documentation/exceptionhandling/nsexceptionhandler/1489842-setdelegate
  setDelegate(anObject: cocoascript.NSExceptionHandler):void;
  // 
  alloc():cocoascript.NSExceptionHandler;
  // 
  init():cocoascript.NSExceptionHandler;
}
}
declare const NSExceptionHandler: cocoascript.NSExceptionHandler;

