declare namespace cocoascript {
  /**
   * The elementary methods adopted by classes that define lock objects.
   * doc://com.apple.documentation/documentation/foundation/nslocking
   */
  interface NSLocking {
    // doc://com.apple.documentation/documentation/foundation/nslocking/1416318-lock
    lock():void;
    // doc://com.apple.documentation/documentation/foundation/nslocking/1418241-unlock
    unlock():void;
  }
}
