declare namespace cocoascript {
  /**
   * A set of methods implemented by the data provider of a pasteboard item to provide the data for a particular UTI type.
   * doc://com.apple.documentation/documentation/appkit/nspasteboarditemdataprovider
   */
  interface NSPasteboardItemDataProvider extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nspasteboarditemdataprovider/1508503-pasteboard
    pasteboard_item_provideDataForType(pasteboard: cocoascript.NSPasteboard, item: cocoascript.NSPasteboardItem, type: cocoascript.NSPasteboardType):void;
    // doc://com.apple.documentation/documentation/appkit/nspasteboarditemdataprovider/1508506-pasteboardfinishedwithdataprovid
    pasteboardFinishedWithDataProvider(pasteboard: cocoascript.NSPasteboard):void;
  }
}
