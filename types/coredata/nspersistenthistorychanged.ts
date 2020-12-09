declare namespace cocoascript {
/**
 * A change representing the insertion, update, or deletion of a managed object in the persistent store.
 * doc://com.apple.documentation/documentation/coredata/nspersistenthistorychange
 */
interface NSPersistentHistoryChange extends NSObject {
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorychange/3240591-fetchrequest
  fetchRequest(): cocoascript.NSFetchRequest;
  setFetchRequest(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorychange/3240589-entitydescription
  entityDescription(): cocoascript.NSEntityDescription;
  setEntityDescription(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorychange/2892569-changeid
  changeID(): number;
  setChangeID(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorychange/2892563-changetype
  changeType(): cocoascript.NSPersistentHistoryChangeType;
  setChangeType(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorychange/2892570-changedobjectid
  changedObjectID(): cocoascript.NSManagedObjectID;
  setChangedObjectID(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorychange/2892564-tombstone
  tombstone(): cocoascript.NSDictionary;
  setTombstone(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorychange/2892567-transaction
  transaction(): cocoascript.NSPersistentHistoryTransaction;
  setTransaction(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorychange/2892568-updatedproperties
  updatedProperties(): cocoascript.NSPropertyDescription;
  setUpdatedProperties(): void;
  // 
  alloc():cocoascript.NSPersistentHistoryChange;
  // 
  init():cocoascript.NSPersistentHistoryChange;
}
}
declare const NSPersistentHistoryChange: cocoascript.NSPersistentHistoryChange;

