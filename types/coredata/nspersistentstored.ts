declare namespace cocoascript {
/**
 * The abstract base class for all Core Data persistent stores.
 * doc://com.apple.documentation/documentation/coredata/nspersistentstore
 */
interface NSPersistentStore extends NSObject {
  // doc://com.apple.documentation/documentation/coredata/nspersistentstore/1506232-initwithpersistentstorecoordinat
  initWithPersistentStoreCoordinator_configurationName_URL_options(root: cocoascript.NSPersistentStoreCoordinator, name: cocoascript.NSString, url: cocoascript.NSURL, options: cocoascript.NSDictionary):cocoascript.NSPersistentStore;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstore/1506250-type
  type(): cocoascript.NSString;
  setType(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstore/1506226-persistentstorecoordinator
  persistentStoreCoordinator(): cocoascript.NSPersistentStoreCoordinator;
  setPersistentStoreCoordinator(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstore/1506620-configurationname
  configurationName(): cocoascript.NSString;
  setConfigurationName(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstore/1506821-options
  options(): cocoascript.NSDictionary;
  setOptions(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstore/1506700-url
  URL(): cocoascript.NSURL;
  setURL(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstore/1506215-identifier
  identifier(): cocoascript.NSString;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstore/1506183-readonly
  readOnly(): cocoascript.BOOL;
  setReadOnly(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstore/1506564-metadata
  metadata(): cocoascript.id;
  setMetadata(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstore/1506273-loadmetadata
  loadMetadata(error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstore/1506873-didaddtopersistentstorecoordinat
  didAddToPersistentStoreCoordinator(coordinator: cocoascript.NSPersistentStoreCoordinator):void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstore/1506731-willremovefrompersistentstorecoo
  willRemoveFromPersistentStoreCoordinator(coordinator: cocoascript.NSPersistentStoreCoordinator):void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstore/2897191-corespotlightexporter
  coreSpotlightExporter(): cocoascript.NSCoreDataCoreSpotlightDelegate;
  setCoreSpotlightExporter(): void;
  // 
  alloc():cocoascript.NSPersistentStore;
  // 
  init():cocoascript.NSPersistentStore;
}
}
declare const NSPersistentStore: cocoascript.NSPersistentStore;

