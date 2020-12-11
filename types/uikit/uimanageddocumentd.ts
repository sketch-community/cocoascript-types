declare namespace cocoascript {
  /**
   * A managed document object that integrates with Core Data.
   * doc://com.apple.documentation/documentation/uikit/uimanageddocument
   */
  interface UIManagedDocument extends UIDocument {
    // doc://com.apple.documentation/documentation/uikit/uimanageddocument/1622674-configurepersistentstorecoordina
    configurePersistentStoreCoordinatorForURL_ofType_modelConfiguration_storeOptions_error(storeURL: cocoascript.NSURL, fileType: cocoascript.NSString, configuration: cocoascript.NSString, storeOptions: cocoascript.NSDictionary, error: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uimanageddocument/1622667-managedobjectcontext
    managedObjectContext(): cocoascript.NSManagedObjectContext;
    setManagedObjectContext(): void;
    // doc://com.apple.documentation/documentation/uikit/uimanageddocument/1622669-managedobjectmodel
    managedObjectModel(): cocoascript.NSManagedObjectModel;
    setManagedObjectModel(): void;
    // doc://com.apple.documentation/documentation/uikit/uimanageddocument/1622666-persistentstoreoptions
    persistentStoreOptions(): cocoascript.NSDictionary;
    setPersistentStoreOptions(): void;
    // doc://com.apple.documentation/documentation/uikit/uimanageddocument/1622671-modelconfiguration
    modelConfiguration(): cocoascript.NSString;
    setModelConfiguration(): void;
    // doc://com.apple.documentation/documentation/uikit/uimanageddocument/1622673-persistentstoretypeforfiletype
    persistentStoreTypeForFileType(fileType: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/uikit/uimanageddocument/1622670-readadditionalcontentfromurl
    readAdditionalContentFromURL_error(absoluteURL: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uimanageddocument/1622665-additionalcontentforurl
    additionalContentForURL_error(absoluteURL: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.UIManagedDocument;
    // doc://com.apple.documentation/documentation/uikit/uimanageddocument/1622668-writeadditionalcontent
    writeAdditionalContent_toURL_originalContentsURL_error(content: cocoascript.UIManagedDocument, absoluteURL: cocoascript.NSURL, absoluteOriginalContentsURL: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uimanageddocument/1622672-persistentstorename
    persistentStoreName(): cocoascript.NSString;
    setPersistentStoreName(): void;
    //
    alloc():cocoascript.UIManagedDocument;
    //
    init():cocoascript.UIManagedDocument;
  }
}

declare const UIManagedDocument: cocoascript.UIManagedDocument;
