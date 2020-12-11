declare namespace cocoascript {
  /**
   * An object that supports Cocoa’s reference-counted memory management system.
   * doc://com.apple.documentation/documentation/foundation/nsautoreleasepool
   */
  interface NSAutoreleasePool extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsautoreleasepool/1520553-drain
    drain():void;
    // doc://com.apple.documentation/documentation/foundation/nsautoreleasepool/1520555-addobject
    addObject(anObject: cocoascript.NSAutoreleasePool):void;
    //
    alloc():cocoascript.NSAutoreleasePool;
    //
    init():cocoascript.NSAutoreleasePool;
  }
}

declare const NSAutoreleasePool: cocoascript.NSAutoreleasePool;
