declare namespace cocoascript {
/**
 * A compact, universal identifier for a managed object.
 * doc://com.apple.documentation/documentation/coredata/nsmanagedobjectid
 */
interface NSManagedObjectID extends NSObject {
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectid/1391684-entity
  entity(): cocoascript.NSEntityDescription;
  setEntity(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectid/1391691-temporaryid
  temporaryID(): cocoascript.BOOL;
  setTemporaryID(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectid/1391693-persistentstore
  persistentStore(): cocoascript.NSPersistentStore;
  setPersistentStore(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectid/1391689-urirepresentation
  URIRepresentation():cocoascript.NSURL;
  // 
  alloc():cocoascript.NSManagedObjectID;
  // 
  init():cocoascript.NSManagedObjectID;
}
}
declare const NSManagedObjectID: cocoascript.NSManagedObjectID;

