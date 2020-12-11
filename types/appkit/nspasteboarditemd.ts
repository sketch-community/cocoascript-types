declare namespace cocoascript {
  /**
   * An item on a pasteboard.
   * doc://com.apple.documentation/documentation/appkit/nspasteboarditem
   */
  interface NSPasteboardItem extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nspasteboarditem/1508499-types
    types(): cocoascript.NSPasteboardType;
    setTypes(): void;
    // doc://com.apple.documentation/documentation/appkit/nspasteboarditem/1508488-availabletypefromarray
    availableTypeFromArray(types: cocoascript.NSPasteboardType):cocoascript.NSPasteboardType;
    // doc://com.apple.documentation/documentation/appkit/nspasteboarditem/1508502-setdataprovider
    setDataProvider_forTypes(dataProvider: cocoascript.NSPasteboardItemDataProvider, types: cocoascript.NSPasteboardType):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nspasteboarditem/1508501-setdata
    setData_forType(data: cocoascript.NSData, type: cocoascript.NSPasteboardType):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nspasteboarditem/1508498-setstring
    setString_forType(string: cocoascript.NSString, type: cocoascript.NSPasteboardType):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nspasteboarditem/1508494-setpropertylist
    setPropertyList_forType(propertyList: cocoascript.NSPasteboardItem, type: cocoascript.NSPasteboardType):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nspasteboarditem/1508496-datafortype
    dataForType(type: cocoascript.NSPasteboardType):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/appkit/nspasteboarditem/1508490-stringfortype
    stringForType(type: cocoascript.NSPasteboardType):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nspasteboarditem/1508489-propertylistfortype
    propertyListForType(type: cocoascript.NSPasteboardType):cocoascript.NSPasteboardItem;
    //
    alloc():cocoascript.NSPasteboardItem;
    //
    init():cocoascript.NSPasteboardItem;
  }
}

declare const NSPasteboardItem: cocoascript.NSPasteboardItem;
