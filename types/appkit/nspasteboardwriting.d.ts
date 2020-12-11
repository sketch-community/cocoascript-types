declare namespace cocoascript {
  /**
   * A set of methods that defines the interface for retrieving a representation of an object that can be written to a pasteboard.
   * doc://com.apple.documentation/documentation/appkit/nspasteboardwriting
   */
  interface NSPasteboardWriting extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nspasteboardwriting/1533578-writabletypesforpasteboard
    writableTypesForPasteboard(pasteboard: cocoascript.NSPasteboard):cocoascript.NSPasteboardType;
    // doc://com.apple.documentation/documentation/appkit/nspasteboardwriting/1525372-writingoptionsfortype
    writingOptionsForType_pasteboard(type: cocoascript.NSPasteboardType, pasteboard: cocoascript.NSPasteboard):cocoascript.NSPasteboardWritingOptions;
    // doc://com.apple.documentation/documentation/appkit/nspasteboardwriting/1529482-pasteboardpropertylistfortype
    pasteboardPropertyListForType(type: cocoascript.NSPasteboardType):cocoascript.NSPasteboardWriting;
  }
}
