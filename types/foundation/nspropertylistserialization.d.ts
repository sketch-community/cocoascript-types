declare namespace cocoascript {
  /**
   * An object that converts between a property list and one of several serialized representations.
   * doc://com.apple.documentation/documentation/foundation/nspropertylistserialization
   */
  interface NSPropertyListSerialization extends NSObject {
    //
    alloc():cocoascript.NSPropertyListSerialization;
    //
    init():cocoascript.NSPropertyListSerialization;
  }
}

declare const NSPropertyListSerialization: cocoascript.NSPropertyListSerialization;
