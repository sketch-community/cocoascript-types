declare namespace cocoascript {
  /**
   * A singleton object used to represent null values in collection objects that don’t allow
   * doc://com.apple.documentation/documentation/foundation/nsnull
   */
  interface NSNull extends NSObject {
    //
    alloc():cocoascript.NSNull;
    //
    init():cocoascript.NSNull;
  }
}

declare const NSNull: cocoascript.NSNull;
