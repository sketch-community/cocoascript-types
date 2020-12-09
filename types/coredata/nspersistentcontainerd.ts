declare namespace cocoascript {
/**
 * A container that encapsulates the Core Data stack in your app.
 * doc://com.apple.documentation/documentation/coredata/nspersistentcontainer
 */
interface NSPersistentContainer extends NSObject {
  // doc://com.apple.documentation/documentation/coredata/nspersistentcontainer/1640557-initwithname
  initWithName(name: cocoascript.NSString):cocoascript.NSPersistentContainer;
  // doc://com.apple.documentation/documentation/coredata/nspersistentcontainer/1640584-initwithname
  initWithName_managedObjectModel(name: cocoascript.NSString, model: cocoascript.NSManagedObjectModel):cocoascript.NSPersistentContainer;
  // doc://com.apple.documentation/documentation/coredata/nspersistentcontainer/1640577-persistentstoredescriptions
  persistentStoreDescriptions(): cocoascript.NSPersistentStoreDescription;
  setPersistentStoreDescriptions(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentcontainer/1640568-loadpersistentstoreswithcompleti
  loadPersistentStoresWithCompletionHandler(block: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentcontainer/1640561-managedobjectmodel
  managedObjectModel(): cocoascript.NSManagedObjectModel;
  setManagedObjectModel(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentcontainer/1640579-name
  name(): cocoascript.NSString;
  setName(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentcontainer/1640567-persistentstorecoordinator
  persistentStoreCoordinator(): cocoascript.NSPersistentStoreCoordinator;
  setPersistentStoreCoordinator(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentcontainer/1640581-newbackgroundcontext
  newBackgroundContext():cocoascript.NSManagedObjectContext;
  // doc://com.apple.documentation/documentation/coredata/nspersistentcontainer/1640564-performbackgroundtask
  performBackgroundTask(block: cocoascript.NSManagedObjectContext):void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentcontainer/1640622-viewcontext
  viewContext(): cocoascript.NSManagedObjectContext;
  setViewContext(): void;
  // 
  alloc():cocoascript.NSPersistentContainer;
  // 
  init():cocoascript.NSPersistentContainer;
}
}
declare const NSPersistentContainer: cocoascript.NSPersistentContainer;

