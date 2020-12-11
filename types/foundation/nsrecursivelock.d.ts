declare namespace cocoascript {
  /**
   * A lock that may be acquired multiple times by the same thread without causing a deadlock.
   * doc://com.apple.documentation/documentation/foundation/nsrecursivelock
   */
  interface NSRecursiveLock extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsrecursivelock/1417151-lockbeforedate
    lockBeforeDate(limit: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsrecursivelock/1411547-trylock
    tryLock():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsrecursivelock/1416232-name
    name(): cocoascript.NSString;
    setName(): void;
    //
    alloc():cocoascript.NSRecursiveLock;
    //
    init():cocoascript.NSRecursiveLock;
  }
}

declare const NSRecursiveLock: cocoascript.NSRecursiveLock;
