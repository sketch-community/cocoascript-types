declare namespace cocoascript {
  /**
   * A set of methods that defines the interface for initializing an object from a pasteboard.
   * doc://com.apple.documentation/documentation/appkit/nspasteboardreading
   */
  interface NSPasteboardReading extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nspasteboardreading/1528252-initwithpasteboardpropertylist
    initWithPasteboardPropertyList_ofType(propertyList: cocoascript.NSPasteboardReading, type: cocoascript.NSPasteboardType):cocoascript.NSPasteboardReading;
  }
}
