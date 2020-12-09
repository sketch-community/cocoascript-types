declare namespace cocoascript {
/**
 * Criteria used to retrieve data from or save data to a persistent store.
 * doc://com.apple.documentation/documentation/coredata/nspersistentstorerequest
 */
interface NSPersistentStoreRequest extends NSObject {
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorerequest/1506844-affectedstores
  affectedStores(): cocoascript.NSPersistentStore;
  setAffectedStores(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorerequest/1506892-requesttype
  requestType(): cocoascript.NSPersistentStoreRequestType;
  setRequestType(): void;
  // 
  alloc():cocoascript.NSPersistentStoreRequest;
  // 
  init():cocoascript.NSPersistentStoreRequest;
}
}
declare const NSPersistentStoreRequest: cocoascript.NSPersistentStoreRequest;

