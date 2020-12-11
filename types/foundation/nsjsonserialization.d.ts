declare namespace cocoascript {
  /**
   * An object that converts between JSON and the equivalent Foundation objects.
   * doc://com.apple.documentation/documentation/foundation/nsjsonserialization
   */
  interface NSJSONSerialization extends NSObject {
    //
    alloc():cocoascript.NSJSONSerialization;
    //
    init():cocoascript.NSJSONSerialization;
  }
}

declare const NSJSONSerialization: cocoascript.NSJSONSerialization;
