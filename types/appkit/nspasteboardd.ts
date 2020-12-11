declare namespace cocoascript {
  /**
   * An object that transfers data to and from the pasteboard server.
   * doc://com.apple.documentation/documentation/appkit/nspasteboard
   */
  interface NSPasteboard extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1530091-generalpasteboard
    generalPasteboard(): cocoascript.NSPasteboard;
    setGeneralPasteboard(): void;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1527044-releaseglobally
    releaseGlobally():void;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1533599-clearcontents
    clearContents():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1525945-writeobjects
    writeObjects(objects: cocoascript.NSPasteboardWriting):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1531214-setdata
    setData_forType(data: cocoascript.NSData, dataType: cocoascript.NSPasteboardType):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1530774-setpropertylist
    setPropertyList_forType(plist: cocoascript.NSPasteboard, dataType: cocoascript.NSPasteboardType):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1528225-setstring
    setString_forType(string: cocoascript.NSString, dataType: cocoascript.NSPasteboardType):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1524454-readobjectsforclasses
    readObjectsForClasses_options(classArray: cocoascript.Class, options: cocoascript.NSPasteboard):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1529995-pasteboarditems
    pasteboardItems(): cocoascript.NSPasteboardItem;
    setPasteboardItems(): void;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1525176-indexofpasteboarditem
    indexOfPasteboardItem(pasteboardItem: cocoascript.NSPasteboardItem):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1531810-datafortype
    dataForType(dataType: cocoascript.NSPasteboardType):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1528588-propertylistfortype
    propertyListForType(dataType: cocoascript.NSPasteboardType):cocoascript.NSPasteboard;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1533566-stringfortype
    stringForType(dataType: cocoascript.NSPasteboardType):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1526078-availabletypefromarray
    availableTypeFromArray(types: cocoascript.NSPasteboardType):cocoascript.NSPasteboardType;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1533576-canreaditemwithdataconformingtot
    canReadItemWithDataConformingToTypes(types: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1533360-canreadobjectforclasses
    canReadObjectForClasses_options(classArray: cocoascript.Class, options: cocoascript.NSPasteboard):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1529599-types
    types(): cocoascript.NSPasteboardType;
    setTypes(): void;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/2344960-preparefornewcontentswithoptions
    prepareForNewContentsWithOptions(options: cocoascript.NSPasteboardContentsOptions):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1529388-name
    name(): cocoascript.NSPasteboardName;
    setName(): void;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1533544-changecount
    changeCount(): cocoascript.NSInteger;
    setChangeCount(): void;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1533561-declaretypes
    declareTypes_owner(newTypes: cocoascript.NSPasteboardType, newOwner: cocoascript.NSPasteboard):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1533580-addtypes
    addTypes_owner(newTypes: cocoascript.NSPasteboardType, newOwner: cocoascript.NSPasteboard):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1531224-writefilecontents
    writeFileContents(filename: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1527279-writefilewrapper
    writeFileWrapper(wrapper: cocoascript.NSFileWrapper):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1533575-readfilecontentstype
    readFileContentsType_toFile(type: cocoascript.NSPasteboardType, filename: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nspasteboard/1524779-readfilewrapper
    readFileWrapper():cocoascript.NSFileWrapper;
    //
    alloc():cocoascript.NSPasteboard;
    //
    init():cocoascript.NSPasteboard;
  }
}

declare const NSPasteboard: cocoascript.NSPasteboard;
