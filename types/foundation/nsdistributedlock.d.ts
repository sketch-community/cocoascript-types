declare namespace cocoascript {
  /**
   * A lock that multiple applications on multiple hosts can use to restrict access to some shared resource, such as a file.
   * doc://com.apple.documentation/documentation/foundation/nsdistributedlock
   */
  interface NSDistributedLock extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsdistributedlock/1410387-initwithpath
    initWithPath(path: cocoascript.NSString):cocoascript.NSDistributedLock;
    // doc://com.apple.documentation/documentation/foundation/nsdistributedlock/1412293-trylock
    tryLock():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsdistributedlock/1413425-breaklock
    breakLock():void;
    // doc://com.apple.documentation/documentation/foundation/nsdistributedlock/1417238-unlock
    unlock():void;
    // doc://com.apple.documentation/documentation/foundation/nsdistributedlock/1413773-lockdate
    lockDate(): cocoascript.NSDate;
    setLockDate(): void;
    //
    alloc():cocoascript.NSDistributedLock;
    //
    init():cocoascript.NSDistributedLock;
  }
}

declare const NSDistributedLock: cocoascript.NSDistributedLock;
