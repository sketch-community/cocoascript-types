declare namespace cocoascript {
/**
 * An object that coordinates the operation of multiple threads of execution within the same application.
 * doc://com.apple.documentation/documentation/foundation/nslock
 */
interface NSLock extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nslock/1411133-lockbeforedate
  lockBeforeDate(limit: cocoascript.NSDate):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nslock/1418105-trylock
  tryLock():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nslock/1412568-name
  name(): cocoascript.NSString;
  setName(): void;
  // 
  alloc():cocoascript.NSLock;
  // 
  init():cocoascript.NSLock;
}
}
declare const NSLock: cocoascript.NSLock;

