declare namespace cocoascript {
/**
 * A coordinator that uses the model to help contexts and persistent stores communicate.
 * doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator
 */
interface NSPersistentStoreCoordinator extends NSObject {
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468895-initwithmanagedobjectmodel
  initWithManagedObjectModel(model: cocoascript.NSManagedObjectModel):cocoascript.NSPersistentStoreCoordinator;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468834-managedobjectmodel
  managedObjectModel(): cocoascript.NSManagedObjectModel;
  setManagedObjectModel(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468870-registeredstoretypes
  registeredStoreTypes(): cocoascript.NSValue;
  setRegisteredStoreTypes(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468860-addpersistentstorewithtype
  addPersistentStoreWithType_configuration_URL_options_error(storeType: cocoascript.NSString, configuration: cocoascript.NSString, storeURL: cocoascript.NSURL, options: cocoascript.NSDictionary, error: cocoascript._Nullable):cocoascript.NSPersistentStore;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1640556-addpersistentstorewithdescriptio
  addPersistentStoreWithDescription_completionHandler(storeDescription: cocoascript.NSPersistentStoreDescription, block: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468858-seturl
  setURL_forPersistentStore(url: cocoascript.NSURL, store: cocoascript.NSPersistentStore):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468907-removepersistentstore
  removePersistentStore_error(store: cocoascript.NSPersistentStore, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468888-destroypersistentstoreaturl
  destroyPersistentStoreAtURL_withType_options_error(url: cocoascript.NSURL, storeType: cocoascript.NSString, options: cocoascript.NSDictionary, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468927-migratepersistentstore
  migratePersistentStore_toURL_options_withType_error(store: cocoascript.NSPersistentStore, URL: cocoascript.NSURL, options: cocoascript.NSDictionary, storeType: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.NSPersistentStore;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468790-persistentstores
  persistentStores(): cocoascript.NSPersistentStore;
  setPersistentStores(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468824-persistentstoreforurl
  persistentStoreForURL(URL: cocoascript.NSURL):cocoascript.NSPersistentStore;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468865-urlforpersistentstore
  URLForPersistentStore(store: cocoascript.NSPersistentStore):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468917-replacepersistentstoreaturl
  replacePersistentStoreAtURL_destinationOptions_withPersistentStoreFromURL_sourceOptions_storeType_error(destinationURL: cocoascript.NSURL, destinationOptions: cocoascript.NSDictionary, sourceURL: cocoascript.NSURL, sourceOptions: cocoascript.NSDictionary, storeType: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468929-name
  name(): cocoascript.NSString;
  setName(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinatorstoresdidchangenotification
  NSPersistentStoreCoordinatorStoresDidChangeNotification(): cocoascript.const;
  setNSPersistentStoreCoordinatorStoresDidChangeNotification(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinatorstoreswillchangenotification
  NSPersistentStoreCoordinatorStoresWillChangeNotification(): cocoascript.const;
  setNSPersistentStoreCoordinatorStoresWillChangeNotification(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinatorwillremovestorenotification
  NSPersistentStoreCoordinatorWillRemoveStoreNotification(): cocoascript.const;
  setNSPersistentStoreCoordinatorWillRemoveStoreNotification(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468872-executerequest
  executeRequest_withContext_error(request: cocoascript.NSPersistentStoreRequest, context: cocoascript.NSManagedObjectContext, error: cocoascript._Nullable):cocoascript.NSPersistentStoreCoordinator;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468794-performblock
  performBlock(block: void):void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468862-performblockandwait
  performBlockAndWait(block: void):void;
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytrackingkey
  NSPersistentHistoryTrackingKey(): cocoascript.const;
  setNSPersistentHistoryTrackingKey(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/3325497-currentpersistenthistorytokenfro
  currentPersistentHistoryTokenFromStores(stores: cocoascript.NSArray):cocoascript.NSPersistentHistoryToken;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468911-metadataforpersistentstore
  metadataForPersistentStore(store: cocoascript.NSPersistentStore):cocoascript.NSPersistentStoreCoordinator;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468899-setmetadata
  setMetadata_forPersistentStore(metadata: cocoascript.NSPersistentStoreCoordinator, store: cocoascript.NSPersistentStore):void;
  // doc://com.apple.documentation/documentation/coredata/nscoredatacorespotlightexporter
  NSCoreDataCoreSpotlightExporter(): cocoascript.const;
  setNSCoreDataCoreSpotlightExporter(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468788-importstorewithidentifier
  importStoreWithIdentifier_fromExternalRecordsDirectory_toURL_options_withType_error(storeIdentifier: cocoascript.NSString, externalRecordsURL: cocoascript.NSURL, destinationURL: cocoascript.NSURL, options: cocoascript.NSDictionary, storeType: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.NSPersistentStore;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468882-managedobjectidforurirepresentat
  managedObjectIDForURIRepresentation(url: cocoascript.NSURL):cocoascript.NSManagedObjectID;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstoredidimportubiquitouscontentchangesnotification
  NSPersistentStoreDidImportUbiquitousContentChangesNotification(): cocoascript.const;
  setNSPersistentStoreDidImportUbiquitousContentChangesNotification(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468890-unlock
  unlock():void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468775-lock
  lock():void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468852-trylock
  tryLock():cocoascript.BOOL;
  // 
  alloc():cocoascript.NSPersistentStoreCoordinator;
  // 
  init():cocoascript.NSPersistentStoreCoordinator;
}
}
declare const NSPersistentStoreCoordinator: cocoascript.NSPersistentStoreCoordinator;

