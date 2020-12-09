declare namespace cocoascript {
/**
 * An object space that you use to manipulate and track changes to managed objects.
 * doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext
 */
interface NSManagedObjectContext extends NSObject {
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506709-initwithconcurrencytype
  initWithConcurrencyType(ct: cocoascript.NSManagedObjectContextConcurrencyType):cocoascript.NSManagedObjectContext;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506618-persistentstorecoordinator
  persistentStoreCoordinator(): cocoascript.NSPersistentStoreCoordinator;
  setPersistentStoreCoordinator(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506529-parentcontext
  parentContext(): cocoascript.NSManagedObjectContext;
  setParentContext(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506231-name
  name(): cocoascript.NSString;
  setName(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506740-userinfo
  userInfo(): cocoascript.NSMutableDictionary;
  setUserInfo(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506673-init
  init():cocoascript.NSManagedObjectContext;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506672-executefetchrequest
  executeFetchRequest_error(request: cocoascript.NSFetchRequest, error: cocoascript._Nullable):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506868-countforfetchrequest
  countForFetchRequest_error(request: cocoascript.NSFetchRequest, error: cocoascript._Nullable):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506789-objectregisteredforid
  objectRegisteredForID(objectID: cocoascript.NSManagedObjectID):cocoascript.NSManagedObject;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506197-objectwithid
  objectWithID(objectID: cocoascript.NSManagedObjectID):cocoascript.NSManagedObject;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506686-existingobjectwithid
  existingObjectWithID_error(objectID: cocoascript.NSManagedObjectID, error: cocoascript._Nullable):cocoascript.NSManagedObject;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506493-registeredobjects
  registeredObjects(): cocoascript.NSManagedObject;
  setRegisteredObjects(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506834-executerequest
  executeRequest_error(request: cocoascript.NSPersistentStoreRequest, error: cocoascript._Nullable):cocoascript.NSPersistentStoreResult;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506217-refreshallobjects
  refreshAllObjects():void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506290-retainsregisteredobjects
  retainsRegisteredObjects(): cocoascript.BOOL;
  setRetainsRegisteredObjects(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506221-shoulddeleteinaccessiblefaults
  shouldDeleteInaccessibleFaults(): cocoascript.BOOL;
  setShouldDeleteInaccessibleFaults(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506192-insertedobjects
  insertedObjects(): cocoascript.NSManagedObject;
  setInsertedObjects(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506985-updatedobjects
  updatedObjects(): cocoascript.NSManagedObject;
  setUpdatedObjects(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506699-deletedobjects
  deletedObjects(): cocoascript.NSManagedObject;
  setDeletedObjects(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506810-shouldhandleinaccessiblefault
  shouldHandleInaccessibleFault_forObjectID_triggeredByProperty(fault: cocoascript.NSManagedObject, oid: cocoascript.NSManagedObjectID, property: cocoascript.NSPropertyDescription):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506794-insertobject
  insertObject(object: cocoascript.NSManagedObject):void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506847-deleteobject
  deleteObject(object: cocoascript.NSManagedObject):void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506436-assignobject
  assignObject_toPersistentStore(object: cocoascript.NSManagedObjectContext, store: cocoascript.NSPersistentStore):void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506793-obtainpermanentidsforobjects
  obtainPermanentIDsForObjects_error(objects: cocoascript.NSManagedObject, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506843-detectconflictsforobject
  detectConflictsForObject(object: cocoascript.NSManagedObject):void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506224-refreshobject
  refreshObject_mergeChanges(object: cocoascript.NSManagedObject, flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506661-processpendingchanges
  processPendingChanges():void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506849-observevalueforkeypath
  observeValueForKeyPath_ofObject_change_context(keyPath: cocoascript.NSString, object: cocoascript.NSManagedObjectContext, change: cocoascript.NSManagedObjectContext, context: void):void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1845237-automaticallymergeschangesfrompa
  automaticallyMergesChangesFromParent(): cocoascript.BOOL;
  setAutomaticallyMergesChangesFromParent(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506792-concurrencytype
  concurrencyType(): cocoascript.NSManagedObjectContextConcurrencyType;
  setConcurrencyType(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1640477-querygenerationtoken
  queryGenerationToken(): cocoascript.NSQueryGenerationToken;
  setQueryGenerationToken(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506490-mergepolicy
  mergePolicy(): cocoascript.id;
  setMergePolicy(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/2892348-transactionauthor
  transactionAuthor(): cocoascript.NSString;
  setTransactionAuthor(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506606-mergechangesfromcontextdidsaveno
  mergeChangesFromContextDidSaveNotification(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1640469-setquerygenerationfromtoken
  setQueryGenerationFromToken_error(generation: cocoascript.NSQueryGenerationToken, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontextquerygenerationkey
  NSManagedObjectContextQueryGenerationKey(): cocoascript.const;
  setNSManagedObjectContextQueryGenerationKey(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontextobjectsdidchangenotification
  NSManagedObjectContextObjectsDidChangeNotification(): cocoascript.const;
  setNSManagedObjectContextObjectsDidChangeNotification(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontextdidsavenotification
  NSManagedObjectContextDidSaveNotification(): cocoascript.const;
  setNSManagedObjectContextDidSaveNotification(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontextwillsavenotification
  NSManagedObjectContextWillSaveNotification(): cocoascript.const;
  setNSManagedObjectContextWillSaveNotification(): void;
  // doc://com.apple.documentation/documentation/coredata/nsinsertedobjectskey
  NSInsertedObjectsKey(): cocoascript.const;
  setNSInsertedObjectsKey(): void;
  // doc://com.apple.documentation/documentation/coredata/nsupdatedobjectskey
  NSUpdatedObjectsKey(): cocoascript.const;
  setNSUpdatedObjectsKey(): void;
  // doc://com.apple.documentation/documentation/coredata/nsdeletedobjectskey
  NSDeletedObjectsKey(): cocoascript.const;
  setNSDeletedObjectsKey(): void;
  // doc://com.apple.documentation/documentation/coredata/nsrefreshedobjectskey
  NSRefreshedObjectsKey(): cocoascript.const;
  setNSRefreshedObjectsKey(): void;
  // doc://com.apple.documentation/documentation/coredata/nsinvalidatedobjectskey
  NSInvalidatedObjectsKey(): cocoascript.const;
  setNSInvalidatedObjectsKey(): void;
  // doc://com.apple.documentation/documentation/coredata/nsinvalidatedallobjectskey
  NSInvalidatedAllObjectsKey(): cocoascript.const;
  setNSInvalidatedAllObjectsKey(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506866-save
  save(error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506954-haschanges
  hasChanges(): cocoascript.BOOL;
  setHasChanges(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506663-undomanager
  undoManager(): cocoascript.NSUndoManager;
  setUndoManager(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506969-undo
  undo():void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506688-redo
  redo():void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506807-reset
  reset():void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506942-rollback
  rollback():void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506228-propagatesdeletesatendofevent
  propagatesDeletesAtEndOfEvent(): cocoascript.BOOL;
  setPropagatesDeletesAtEndOfEvent(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506875-stalenessinterval
  stalenessInterval(): cocoascript.NSTimeInterval;
  setStalenessInterval(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506578-performblock
  performBlock(block: void):void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506364-performblockandwait
  performBlockAndWait(block: void):void;
  // doc://com.apple.documentation/documentation/coredata/nsaffectedobjectserrorkey
  NSAffectedObjectsErrorKey(): cocoascript.const;
  setNSAffectedObjectsErrorKey(): void;
  // doc://com.apple.documentation/documentation/coredata/nsaffectedstoreserrorkey
  NSAffectedStoresErrorKey(): cocoascript.const;
  setNSAffectedStoresErrorKey(): void;
  // doc://com.apple.documentation/documentation/coredata/nsdetailederrorskey
  NSDetailedErrorsKey(): cocoascript.const;
  setNSDetailedErrorsKey(): void;
  // doc://com.apple.documentation/documentation/coredata/nssqliteerrordomain
  NSSQLiteErrorDomain(): cocoascript.const;
  setNSSQLiteErrorDomain(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506853-lock
  lock():void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506839-unlock
  unlock():void;
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506497-trylock
  tryLock():cocoascript.BOOL;
  // 
  alloc():cocoascript.NSManagedObjectContext;
  // 
  init():cocoascript.NSManagedObjectContext;
}
}
declare const NSManagedObjectContext: cocoascript.NSManagedObjectContext;

