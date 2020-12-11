declare namespace cocoascript {
  /**
   * A condition variable whose semantics follow those used for POSIX-style conditions.
   * doc://com.apple.documentation/documentation/foundation/nscondition
   */
  interface NSCondition extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nscondition/1407950-wait
    wait():void;
    // doc://com.apple.documentation/documentation/foundation/nscondition/1418307-waituntildate
    waitUntilDate(limit: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nscondition/1415724-signal
    signal():void;
    // doc://com.apple.documentation/documentation/foundation/nscondition/1415094-broadcast
    broadcast():void;
    // doc://com.apple.documentation/documentation/foundation/nscondition/1408091-name
    name(): cocoascript.NSString;
    setName(): void;
    //
    alloc():cocoascript.NSCondition;
    //
    init():cocoascript.NSCondition;
  }
}

declare const NSCondition: cocoascript.NSCondition;
