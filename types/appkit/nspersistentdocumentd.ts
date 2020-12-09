declare namespace cocoascript {
/**
 * A document object that can integrate with Core Data.
 * doc://com.apple.documentation/documentation/appkit/nspersistentdocument
 */
interface NSPersistentDocument extends NSDocument {
  // doc://com.apple.documentation/documentation/appkit/nspersistentdocument/1396162-managedobjectcontext
  managedObjectContext(): cocoascript.NSManagedObjectContext;
  setManagedObjectContext(): void;
  // doc://com.apple.documentation/documentation/appkit/nspersistentdocument/1396152-managedobjectmodel
  managedObjectModel(): cocoascript.NSManagedObjectModel;
  setManagedObjectModel(): void;
  // doc://com.apple.documentation/documentation/appkit/nspersistentdocument/1396160-configurepersistentstorecoordina
  configurePersistentStoreCoordinatorForURL_ofType_modelConfiguration_storeOptions_error(url: cocoascript.NSURL, fileType: cocoascript.NSString, configuration: cocoascript.NSString, storeOptions: cocoascript.NSPersistentDocument, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nspersistentdocument/1396168-persistentstoretypeforfiletype
  persistentStoreTypeForFileType(fileType: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nspersistentdocument/1396166-readfromurl
  readFromURL_ofType_error(absoluteURL: cocoascript.NSURL, typeName: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nspersistentdocument/1396154-reverttocontentsofurl
  revertToContentsOfURL_ofType_error(inAbsoluteURL: cocoascript.NSURL, inTypeName: cocoascript.NSString, outError: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nspersistentdocument/1396156-writetourl
  writeToURL_ofType_forSaveOperation_originalContentsURL_error(absoluteURL: cocoascript.NSURL, typeName: cocoascript.NSString, saveOperation: cocoascript.NSSaveOperationType, absoluteOriginalContentsURL: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nspersistentdocument/1396158-configurepersistentstorecoordina
  configurePersistentStoreCoordinatorForURL_ofType_error(url: cocoascript.NSURL, fileType: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.BOOL;
  // 
  alloc():cocoascript.NSPersistentDocument;
  // 
  init():cocoascript.NSPersistentDocument;
}
}
declare const NSPersistentDocument: cocoascript.NSPersistentDocument;

