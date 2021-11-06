declare namespace cocoascript {
  /**
   * An object space to manipulate and track changes to managed objects.
   * https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext
   */
  interface NSManagedObjectContext extends NSObject {
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506709-initwithconcurrencytype
    initWithConcurrencyType(ct: NSManagedObjectContextConcurrencyType):NSManagedObjectContext;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506618-persistentstorecoordinator
    persistentStoreCoordinator(): NSPersistentStoreCoordinator;
    setPersistentStoreCoordinator(value: NSPersistentStoreCoordinator): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506529-parentcontext
    parentContext(): NSManagedObjectContext;
    setParentContext(value: NSManagedObjectContext): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506231-name
    name(): string | cocoascript.NSString;
    setName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506740-userinfo
    userInfo(): NSMutableDictionary;
    setUserInfo(value: NSMutableDictionary): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506672-executefetchrequest
    executeFetchRequest_error(request: NSFetchRequest, error: NSError):NSArray;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506868-countforfetchrequest
    countForFetchRequest_error(request: NSFetchRequest, error: NSError):NSUInteger;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506789-objectregisteredforid
    objectRegisteredForID(objectID: NSManagedObjectID):NSManagedObject;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506197-objectwithid
    objectWithID(objectID: NSManagedObjectID):NSManagedObject;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506686-existingobjectwithid
    existingObjectWithID_error(objectID: NSManagedObjectID, error: NSError):NSManagedObject;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506493-registeredobjects
    registeredObjects(): NSManagedObject;
    setRegisteredObjects(value: NSManagedObject): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506834-executerequest
    executeRequest_error(request: NSPersistentStoreRequest, error: NSError):NSPersistentStoreResult;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506217-refreshallobjects
    refreshAllObjects():void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506290-retainsregisteredobjects
    retainsRegisteredObjects(): boolean;
    setRetainsRegisteredObjects(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506221-shoulddeleteinaccessiblefaults
    shouldDeleteInaccessibleFaults(): boolean;
    setShouldDeleteInaccessibleFaults(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506192-insertedobjects
    insertedObjects(): NSManagedObject;
    setInsertedObjects(value: NSManagedObject): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506985-updatedobjects
    updatedObjects(): NSManagedObject;
    setUpdatedObjects(value: NSManagedObject): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506699-deletedobjects
    deletedObjects(): NSManagedObject;
    setDeletedObjects(value: NSManagedObject): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506810-shouldhandleinaccessiblefault
    shouldHandleInaccessibleFault_forObjectID_triggeredByProperty(fault: NSManagedObject, oid: NSManagedObjectID, property: NSPropertyDescription):boolean;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506794-insertobject
    insertObject(object: NSManagedObject):void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506847-deleteobject
    deleteObject(object: NSManagedObject):void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506436-assignobject
    assignObject_toPersistentStore(object: NSManagedObjectContext, store: NSPersistentStore):void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506793-obtainpermanentidsforobjects
    obtainPermanentIDsForObjects_error(objects: NSManagedObject, error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506843-detectconflictsforobject
    detectConflictsForObject(object: NSManagedObject):void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506224-refreshobject
    refreshObject_mergeChanges(object: NSManagedObject, flag: boolean):void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506661-processpendingchanges
    processPendingChanges():void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506849-observevalueforkeypath
    observeValueForKeyPath_ofObject_change_context(keyPath: string | cocoascript.NSString, object: NSManagedObjectContext, change: NSManagedObjectContext, context: void):void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506546-mergechangesfromremotecontextsav
    mergeChangesFromRemoteContextSave_intoContexts(changeNotificationData: NSDictionary, contexts: NSManagedObjectContext):void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1845237-automaticallymergeschangesfrompa
    automaticallyMergesChangesFromParent(): boolean;
    setAutomaticallyMergesChangesFromParent(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506792-concurrencytype
    concurrencyType(): NSManagedObjectContextConcurrencyType;
    setConcurrencyType(value: NSManagedObjectContextConcurrencyType): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506490-mergepolicy
    mergePolicy(): id;
    setMergePolicy(value: id): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1640477-querygenerationtoken
    queryGenerationToken(): NSQueryGenerationToken;
    setQueryGenerationToken(value: NSQueryGenerationToken): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/2892348-transactionauthor
    transactionAuthor(): string | cocoascript.NSString;
    setTransactionAuthor(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506606-mergechangesfromcontextdidsaveno
    mergeChangesFromContextDidSaveNotification(notification: NSNotification):void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1640469-setquerygenerationfromtoken
    setQueryGenerationFromToken_error(generation: NSQueryGenerationToken, error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506866-save
    save(error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506954-haschanges
    hasChanges(): boolean;
    setHasChanges(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506663-undomanager
    undoManager(): NSUndoManager;
    setUndoManager(value: NSUndoManager): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506969-undo
    undo():void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506688-redo
    redo():void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506807-reset
    reset():void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506942-rollback
    rollback():void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506228-propagatesdeletesatendofevent
    propagatesDeletesAtEndOfEvent(): boolean;
    setPropagatesDeletesAtEndOfEvent(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506875-stalenessinterval
    stalenessInterval(): NSTimeInterval;
    setStalenessInterval(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506578-performblock
    performBlock(block: void):void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/1506364-performblockandwait
    performBlockAndWait(block: void):void;
    //
    alloc():NSManagedObjectContext;
    //
    init():NSManagedObjectContext;
  }
}

declare const NSManagedObjectContext: cocoascript.NSManagedObjectContext;
// https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextquerygenerationkey
declare const NSManagedObjectContextQueryGenerationKey: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextobjectsdidchangenotification
declare const NSManagedObjectContextObjectsDidChangeNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextdidsavenotification
declare const NSManagedObjectContextDidSaveNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextwillsavenotification
declare const NSManagedObjectContextWillSaveNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nsinsertedobjectskey
declare const NSInsertedObjectsKey: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nsupdatedobjectskey
declare const NSUpdatedObjectsKey: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nsdeletedobjectskey
declare const NSDeletedObjectsKey: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nsrefreshedobjectskey
declare const NSRefreshedObjectsKey: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nsinvalidatedobjectskey
declare const NSInvalidatedObjectsKey: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nsinvalidatedallobjectskey
declare const NSInvalidatedAllObjectsKey: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A base class that implements the behavior for a Core Data model object.
   * https://developer.apple.com/documentation/coredata/nsmanagedobject
   */
  interface NSManagedObject extends NSObject {
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506357-initwithentity
    initWithEntity_insertIntoManagedObjectContext(entity: NSEntityDescription, context: NSManagedObjectContext):NSManagedObject;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1640602-initwithcontext
    initWithContext(moc: NSManagedObjectContext):NSManagedObject;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506562-entity
    entity(): NSEntityDescription;
    setEntity(value: NSEntityDescription): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506848-objectid
    objectID(): NSManagedObjectID;
    setObjectID(value: NSManagedObjectID): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1640588-entity
    entity():NSEntityDescription;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506677-managedobjectcontext
    managedObjectContext(): NSManagedObjectContext;
    setManagedObjectContext(value: NSManagedObjectContext): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506654-haschanges
    hasChanges(): boolean;
    setHasChanges(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506281-inserted
    inserted(): boolean;
    setInserted(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506867-updated
    updated(): boolean;
    setUpdated(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506681-deleted
    deleted(): boolean;
    setDeleted(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506837-fault
    fault(): boolean;
    setFault(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506720-faultingstate
    faultingState(): NSUInteger;
    setFaultingState(value: NSUInteger): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506973-hasfaultforrelationshipnamed
    hasFaultForRelationshipNamed(key: string | cocoascript.NSString):boolean;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506240-haspersistentchangedvalues
    hasPersistentChangedValues(): boolean;
    setHasPersistentChangedValues(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506727-contextshouldignoreunmodeledprop
    contextShouldIgnoreUnmodeledPropertyChanges(): boolean;
    setContextShouldIgnoreUnmodeledPropertyChanges(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506424-awakefromfetch
    awakeFromFetch():void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506548-awakefrominsert
    awakeFromInsert():void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506861-awakefromsnapshotevents
    awakeFromSnapshotEvents(flags: NSSnapshotEventType):void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506775-changedvalues
    changedValues():NSManagedObject;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506472-changedvaluesforcurrentevent
    changedValuesForCurrentEvent():NSManagedObject;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506771-committedvaluesforkeys
    committedValuesForKeys(keys: string | cocoascript.NSString):NSManagedObject;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506674-preparefordeletion
    prepareForDeletion():void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506209-willsave
    willSave():void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506585-didsave
    didSave():void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506537-willturnintofault
    willTurnIntoFault():void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506470-didturnintofault
    didTurnIntoFault():void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1640605-fetchrequest
    fetchRequest():NSFetchRequest;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506613-valueforkey
    valueForKey(key: string | cocoascript.NSString):NSManagedObject;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506397-setvalue
    setValue_forKey(value: NSManagedObject, key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1807259-mutablesetvalueforkey
    ():void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506728-primitivevalueforkey
    primitiveValueForKey(key: string | cocoascript.NSString):NSManagedObject;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506960-setprimitivevalue
    setPrimitiveValue_forKey(value: NSManagedObject, key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506201-objectidsforrelationshipnamed
    objectIDsForRelationshipNamed(key: string | cocoascript.NSString):NSManagedObjectID;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506776-validatevalue
    validateValue_forKey_error(value: NSManagedObject, key: string | cocoascript.NSString, error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506195-validatefordelete
    validateForDelete(error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506683-validateforinsert
    validateForInsert(error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506998-validateforupdate
    validateForUpdate(error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506865-didaccessvalueforkey
    didAccessValueForKey(key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506210-observationinfo
    observationInfo():void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506535-setobservationinfo
    setObservationInfo(inObservationInfo: void):void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1507001-willaccessvalueforkey
    willAccessValueForKey(key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506976-didchangevalueforkey
    didChangeValueForKey(key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506936-didchangevalueforkey
    didChangeValueForKey_withSetMutation_usingObjects(inKey: string | cocoascript.NSString, inMutationKind: NSKeyValueSetMutationKind, inObjects: NSSet):void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506229-willchangevalueforkey
    willChangeValueForKey(key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobject/1506801-willchangevalueforkey
    willChangeValueForKey_withSetMutation_usingObjects(inKey: string | cocoascript.NSString, inMutationKind: NSKeyValueSetMutationKind, inObjects: NSSet):void;
    //
    alloc():NSManagedObject;
    //
    init():NSManagedObject;
  }
}

declare const NSManagedObject: cocoascript.NSManagedObject;
// https://developer.apple.com/documentation/coredata/nsvalidationkeyerrorkey
declare const NSValidationKeyErrorKey: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nsvalidationobjecterrorkey
declare const NSValidationObjectErrorKey: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nsvalidationpredicateerrorkey
declare const NSValidationPredicateErrorKey: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nsvalidationvalueerrorkey
declare const NSValidationValueErrorKey: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A description of an entity in Core Data.
   * https://developer.apple.com/documentation/coredata/nsentitydescription
   */
  interface NSEntityDescription extends NSObject {
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425101-name
    name(): string | cocoascript.NSString;
    setName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425121-managedobjectmodel
    managedObjectModel(): NSManagedObjectModel;
    setManagedObjectModel(value: NSManagedObjectModel): void;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425131-managedobjectclassname
    managedObjectClassName(): string | cocoascript.NSString;
    setManagedObjectClassName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425135-renamingidentifier
    renamingIdentifier(): string | cocoascript.NSString;
    setRenamingIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425097-abstract
    abstract(): boolean;
    setAbstract(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425117-userinfo
    userInfo(): NSDictionary;
    setUserInfo(value: NSDictionary): void;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/2892364-corespotlightdisplaynameexpressi
    coreSpotlightDisplayNameExpression(): NSExpression;
    setCoreSpotlightDisplayNameExpression(value: NSExpression): void;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425123-subentitiesbyname
    subentitiesByName(): NSEntityDescription;
    setSubentitiesByName(value: NSEntityDescription): void;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425104-subentities
    subentities(): NSEntityDescription;
    setSubentities(value: NSEntityDescription): void;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425129-superentity
    superentity(): NSEntityDescription;
    setSuperentity(value: NSEntityDescription): void;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425113-iskindofentity
    isKindOfEntity(entity: NSEntityDescription):boolean;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425137-propertiesbyname
    propertiesByName(): NSPropertyDescription;
    setPropertiesByName(value: NSPropertyDescription): void;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425125-properties
    properties(): NSPropertyDescription;
    setProperties(value: NSPropertyDescription): void;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425099-attributesbyname
    attributesByName(): NSAttributeDescription;
    setAttributesByName(value: NSAttributeDescription): void;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425106-relationshipsbyname
    relationshipsByName(): NSRelationshipDescription;
    setRelationshipsByName(value: NSRelationshipDescription): void;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425127-relationshipswithdestinationenti
    relationshipsWithDestinationEntity(entity: NSEntityDescription):NSRelationshipDescription;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425111-entityforname
    entityForName_inManagedObjectContext(entityName: string | cocoascript.NSString, context: NSManagedObjectContext):NSEntityDescription;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425093-insertnewobjectforentityforname
    insertNewObjectForEntityForName_inManagedObjectContext(entityName: string | cocoascript.NSString, context: NSManagedObjectContext):NSManagedObject;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425133-versionhash
    versionHash(): NSData;
    setVersionHash(value: NSData): void;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425119-versionhashmodifier
    versionHashModifier(): string | cocoascript.NSString;
    setVersionHashModifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1806841-copy
    ():void;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/2887059-indexes
    indexes(): NSFetchIndexDescription;
    setIndexes(value: NSFetchIndexDescription): void;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425115-compoundindexes
    compoundIndexes(): id;
    setCompoundIndexes(value: id): void;
    // https://developer.apple.com/documentation/coredata/nsentitydescription/1425095-uniquenessconstraints
    uniquenessConstraints(): id;
    setUniquenessConstraints(value: id): void;
    //
    alloc():NSEntityDescription;
    //
    init():NSEntityDescription;
  }
}

declare const NSEntityDescription: cocoascript.NSEntityDescription;
declare namespace cocoascript {
  /**
   * A description of search criteria used to retrieve data from a persistent store.
   * https://developer.apple.com/documentation/coredata/nsfetchrequest
   */
  interface NSFetchRequest extends NSPersistentStoreRequest {
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1563437-fetchrequestwithentityname
    fetchRequestWithEntityName(entityName: string | cocoascript.NSString):NSFetchRequest;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506679-init
    init():NSFetchRequest;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506802-initwithentityname
    initWithEntityName(entityName: string | cocoascript.NSString):NSFetchRequest;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506233-entityname
    entityName(): string | cocoascript.NSString;
    setEntityName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506979-entity
    entity(): NSEntityDescription;
    setEntity(value: NSEntityDescription): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506366-includessubentities
    includesSubentities(): boolean;
    setIncludesSubentities(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506638-predicate
    predicate(): NSPredicate;
    setPredicate(value: NSPredicate): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506622-fetchlimit
    fetchLimit(): NSUInteger;
    setFetchLimit(value: NSUInteger): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506770-fetchoffset
    fetchOffset(): NSUInteger;
    setFetchOffset(value: NSUInteger): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506558-fetchbatchsize
    fetchBatchSize(): NSUInteger;
    setFetchBatchSize(value: NSUInteger): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506518-affectedstores
    affectedStores(): NSPersistentStore;
    setAffectedStores(value: NSPersistentStore): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506262-sortdescriptors
    sortDescriptors(): NSSortDescriptor;
    setSortDescriptors(value: NSSortDescriptor): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506813-relationshipkeypathsforprefetchi
    relationshipKeyPathsForPrefetching(): string | cocoascript.NSString;
    setRelationshipKeyPathsForPrefetching(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506189-resulttype
    resultType(): NSFetchRequestResultType;
    setResultType(value: NSFetchRequestResultType): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506724-includespendingchanges
    includesPendingChanges(): boolean;
    setIncludesPendingChanges(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506851-propertiestofetch
    propertiesToFetch(): NSArray;
    setPropertiesToFetch(value: NSArray): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506344-returnsdistinctresults
    returnsDistinctResults(): boolean;
    setReturnsDistinctResults(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506387-includespropertyvalues
    includesPropertyValues(): boolean;
    setIncludesPropertyValues(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506440-shouldrefreshrefetchedobjects
    shouldRefreshRefetchedObjects(): boolean;
    setShouldRefreshRefetchedObjects(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506756-returnsobjectsasfaults
    returnsObjectsAsFaults(): boolean;
    setReturnsObjectsAsFaults(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506191-propertiestogroupby
    propertiesToGroupBy(): NSArray;
    setPropertiesToGroupBy(value: NSArray): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1506429-havingpredicate
    havingPredicate(): NSPredicate;
    setHavingPredicate(value: NSPredicate): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequest/1640594-execute
    execute(error: NSError):NSArray;
    //
    alloc():NSFetchRequest;
    //
    init():NSFetchRequest;
  }
}

declare const NSFetchRequest: cocoascript.NSFetchRequest;
declare namespace cocoascript {
  /**
   * A programmatic representation of the
   * https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel
   */
  interface NSManagedObjectModel extends NSObject {
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/1506225-initwithcontentsofurl
    initWithContentsOfURL(url: NSURL):NSManagedObjectModel;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/1506410-init
    init():NSManagedObjectModel;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/1506704-mergedmodelfrombundles
    mergedModelFromBundles(bundles: NSBundle):NSManagedObjectModel;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/1506788-mergedmodelfrombundles
    mergedModelFromBundles_forStoreMetadata(bundles: NSBundle, metadata: NSManagedObjectModel):NSManagedObjectModel;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/1506450-modelbymergingmodels
    modelByMergingModels(models: NSManagedObjectModel):NSManagedObjectModel;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/1506856-modelbymergingmodels
    modelByMergingModels_forStoreMetadata(models: NSManagedObjectModel, metadata: NSManagedObjectModel):NSManagedObjectModel;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/1506318-entities
    entities(): NSEntityDescription;
    setEntities(value: NSEntityDescription): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/1506203-entitiesbyname
    entitiesByName(): NSEntityDescription;
    setEntitiesByName(value: NSEntityDescription): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/1506804-configurations
    configurations(): string | cocoascript.NSString;
    setConfigurations(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/1506693-entitiesforconfiguration
    entitiesForConfiguration(configuration: string | cocoascript.NSString):NSEntityDescription;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/1506287-setentities
    setEntities_forConfiguration(entities: NSEntityDescription, configuration: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/1506580-fetchrequesttemplatesbyname
    fetchRequestTemplatesByName(): NSFetchRequest;
    setFetchRequestTemplatesByName(value: NSFetchRequest): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/1506369-fetchrequesttemplateforname
    fetchRequestTemplateForName(name: string | cocoascript.NSString):NSFetchRequest;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/1506422-fetchrequestfromtemplatewithname
    fetchRequestFromTemplateWithName_substitutionVariables(name: string | cocoascript.NSString, variables: NSManagedObjectModel):NSFetchRequest;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/1506695-setfetchrequesttemplate
    setFetchRequestTemplate_forName(fetchRequestTemplate: NSFetchRequest, name: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/1506846-localizationdictionary
    localizationDictionary(): string | cocoascript.NSString;
    setLocalizationDictionary(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/1506940-isconfiguration
    isConfiguration_compatibleWithStoreMetadata(configuration: string | cocoascript.NSString, metadata: NSManagedObjectModel):boolean;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/1506992-entityversionhashesbyname
    entityVersionHashesByName(): NSData;
    setEntityVersionHashesByName(value: NSData): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/1506268-versionidentifiers
    versionIdentifiers(): NSSet;
    setVersionIdentifiers(value: NSSet): void;
    //
    alloc():NSManagedObjectModel;
    //
    init():NSManagedObjectModel;
  }
}

declare const NSManagedObjectModel: cocoascript.NSManagedObjectModel;
declare namespace cocoascript {
  /**
   * A description of a property of a Core Data entity.
   * https://developer.apple.com/documentation/coredata/nspropertydescription
   */
  interface NSPropertyDescription extends NSObject {
    // https://developer.apple.com/documentation/coredata/nspropertydescription/1506745-entity
    entity(): NSEntityDescription;
    setEntity(value: NSEntityDescription): void;
    // https://developer.apple.com/documentation/coredata/nspropertydescription/1506669-indexed
    indexed(): boolean;
    setIndexed(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nspropertydescription/1506735-optional
    optional(): boolean;
    setOptional(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nspropertydescription/1506766-transient
    transient(): boolean;
    setTransient(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nspropertydescription/1506759-name
    name(): string | cocoascript.NSString;
    setName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nspropertydescription/1506833-userinfo
    userInfo(): NSDictionary;
    setUserInfo(value: NSDictionary): void;
    // https://developer.apple.com/documentation/coredata/nspropertydescription/1506842-validationpredicates
    validationPredicates(): NSPredicate;
    setValidationPredicates(value: NSPredicate): void;
    // https://developer.apple.com/documentation/coredata/nspropertydescription/1506886-validationwarnings
    validationWarnings(): NSArray;
    setValidationWarnings(value: NSArray): void;
    // https://developer.apple.com/documentation/coredata/nspropertydescription/1506852-setvalidationpredicates
    setValidationPredicates_withValidationWarnings(validationPredicates: NSPredicate, validationWarnings: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/coredata/nspropertydescription/1506198-versionhash
    versionHash(): NSData;
    setVersionHash(value: NSData): void;
    // https://developer.apple.com/documentation/coredata/nspropertydescription/1506214-versionhashmodifier
    versionHashModifier(): string | cocoascript.NSString;
    setVersionHashModifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nspropertydescription/1506641-renamingidentifier
    renamingIdentifier(): string | cocoascript.NSString;
    setRenamingIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nspropertydescription/1506784-indexedbyspotlight
    indexedBySpotlight(): boolean;
    setIndexedBySpotlight(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nspropertydescription/1506260-storedinexternalrecord
    storedInExternalRecord(): boolean;
    setStoredInExternalRecord(value: boolean): void;
    //
    alloc():NSPropertyDescription;
    //
    init():NSPropertyDescription;
  }
}

declare const NSPropertyDescription: cocoascript.NSPropertyDescription;
declare namespace cocoascript {
  /**
   * Description of an Index Element
   * https://developer.apple.com/documentation/coredata/nsfetchindexelementdescription
   */
  interface NSFetchIndexElementDescription extends NSObject {
    // https://developer.apple.com/documentation/coredata/nsfetchindexelementdescription/2887043-initwithproperty
    initWithProperty_collationType(property: NSPropertyDescription, collationType: NSFetchIndexElementType):NSFetchIndexElementDescription;
    // https://developer.apple.com/documentation/coredata/nsfetchindexelementdescription/2887048-collationtype
    collationType(): NSFetchIndexElementType;
    setCollationType(value: NSFetchIndexElementType): void;
    // https://developer.apple.com/documentation/coredata/nsfetchindexelementdescription/2887047-indexdescription
    indexDescription(): NSFetchIndexDescription;
    setIndexDescription(value: NSFetchIndexDescription): void;
    // https://developer.apple.com/documentation/coredata/nsfetchindexelementdescription/2887051-ascending
    ascending(): boolean;
    setAscending(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsfetchindexelementdescription/2887049-property
    property(): NSPropertyDescription;
    setProperty(value: NSPropertyDescription): void;
    // https://developer.apple.com/documentation/coredata/nsfetchindexelementdescription/2887045-propertyname
    propertyName(): string | cocoascript.NSString;
    setPropertyName(value: string | cocoascript.NSString): void;
    //
    alloc():NSFetchIndexElementDescription;
    //
    init():NSFetchIndexElementDescription;
  }
}

declare const NSFetchIndexElementDescription: cocoascript.NSFetchIndexElementDescription;
declare namespace cocoascript {
  /**
   * The description of the index.
   * https://developer.apple.com/documentation/coredata/nsfetchindexdescription
   */
  interface NSFetchIndexDescription extends NSObject {
    // https://developer.apple.com/documentation/coredata/nsfetchindexdescription/2887053-initwithname
    initWithName_elements(name: string | cocoascript.NSString, elements: NSFetchIndexElementDescription):NSFetchIndexDescription;
    // https://developer.apple.com/documentation/coredata/nsfetchindexdescription/2887054-elements
    elements(): NSFetchIndexElementDescription;
    setElements(value: NSFetchIndexElementDescription): void;
    // https://developer.apple.com/documentation/coredata/nsfetchindexdescription/2887055-entity
    entity(): NSEntityDescription;
    setEntity(value: NSEntityDescription): void;
    // https://developer.apple.com/documentation/coredata/nsfetchindexdescription/2887056-name
    name(): string | cocoascript.NSString;
    setName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsfetchindexdescription/2887058-partialindexpredicate
    partialIndexPredicate(): NSPredicate;
    setPartialIndexPredicate(value: NSPredicate): void;
    //
    alloc():NSFetchIndexDescription;
    //
    init():NSFetchIndexDescription;
  }
}

declare const NSFetchIndexDescription: cocoascript.NSFetchIndexDescription;
declare namespace cocoascript {
  /**
   * An abstract protocol used with parameterized fetch requests.
   * https://developer.apple.com/documentation/coredata/nsfetchrequestresult
   */
  interface NSFetchRequestResult extends NSObject {
  }
}
declare namespace cocoascript {
  /**
   * A delegate protocol that describes the methods that will be called by the associated fetched results controller when the fetch results have changed.
   * https://developer.apple.com/documentation/coredata/nsfetchedresultscontrollerdelegate
   */
  interface NSFetchedResultsControllerDelegate extends NSObject {
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontrollerdelegate/3235742-controller
    controller_didChangeContentWithSnapshot(controller: NSFetchedResultsController, snapshot: NSManagedObjectID):void;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontrollerdelegate/3235741-controller
    controller_didChangeContentWithDifference(controller: NSFetchedResultsController, diff: NSManagedObjectID):void;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontrollerdelegate/1622295-controllerwillchangecontent
    controllerWillChangeContent(controller: NSFetchedResultsController):void;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontrollerdelegate/1622296-controller
    controller_didChangeObject_atIndexPath_forChangeType_newIndexPath(controller: NSFetchedResultsController, anObject: NSFetchedResultsControllerDelegate, indexPath: NSIndexPath, type: NSFetchedResultsChangeType, newIndexPath: NSIndexPath):void;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontrollerdelegate/1622298-controller
    controller_didChangeSection_atIndex_forChangeType(controller: NSFetchedResultsController, sectionInfo: NSFetchedResultsSectionInfo, sectionIndex: NSUInteger, type: NSFetchedResultsChangeType):void;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontrollerdelegate/1622290-controllerdidchangecontent
    controllerDidChangeContent(controller: NSFetchedResultsController):void;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontrollerdelegate/1622286-controller
    controller_sectionIndexTitleForSectionName(controller: NSFetchedResultsController, sectionName: string | cocoascript.NSString):NSString;
  }
}
declare namespace cocoascript {
  /**
   * A compact, universal identifier for a managed object.
   * https://developer.apple.com/documentation/coredata/nsmanagedobjectid
   */
  interface NSManagedObjectID extends NSObject {
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectid/1391684-entity
    entity(): NSEntityDescription;
    setEntity(value: NSEntityDescription): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectid/1391691-temporaryid
    temporaryID(): boolean;
    setTemporaryID(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectid/1391693-persistentstore
    persistentStore(): NSPersistentStore;
    setPersistentStore(value: NSPersistentStore): void;
    // https://developer.apple.com/documentation/coredata/nsmanagedobjectid/1391689-urirepresentation
    URIRepresentation():NSURL;
    //
    alloc():NSManagedObjectID;
    //
    init():NSManagedObjectID;
  }
}

declare const NSManagedObjectID: cocoascript.NSManagedObjectID;
declare namespace cocoascript {
  /**
   * Criteria used to retrieve data from or save data to a persistent store.
   * https://developer.apple.com/documentation/coredata/nspersistentstorerequest
   */
  interface NSPersistentStoreRequest extends NSObject {
    // https://developer.apple.com/documentation/coredata/nspersistentstorerequest/1506844-affectedstores
    affectedStores(): NSPersistentStore;
    setAffectedStores(value: NSPersistentStore): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstorerequest/1506892-requesttype
    requestType(): NSPersistentStoreRequestType;
    setRequestType(value: NSPersistentStoreRequestType): void;
    //
    alloc():NSPersistentStoreRequest;
    //
    init():NSPersistentStoreRequest;
  }
}

declare const NSPersistentStoreRequest: cocoascript.NSPersistentStoreRequest;
declare namespace cocoascript {
  /**
   * A token that indicates which generation of the persistent store is being accessed.
   * https://developer.apple.com/documentation/coredata/nsquerygenerationtoken
   */
  interface NSQueryGenerationToken extends NSObject {
    // https://developer.apple.com/documentation/coredata/nsquerygenerationtoken/1640578-currentquerygenerationtoken
    currentQueryGenerationToken(): NSQueryGenerationToken;
    setCurrentQueryGenerationToken(value: NSQueryGenerationToken): void;
    //
    alloc():NSQueryGenerationToken;
    //
    init():NSQueryGenerationToken;
  }
}

declare const NSQueryGenerationToken: cocoascript.NSQueryGenerationToken;
declare namespace cocoascript {
  /**
   * A description object used to create and load a persistent store.
   * https://developer.apple.com/documentation/coredata/nspersistentstoredescription
   */
  interface NSPersistentStoreDescription extends NSObject {
    // https://developer.apple.com/documentation/coredata/nspersistentstoredescription/1640563-initwithurl
    initWithURL(url: NSURL):NSPersistentStoreDescription;
    // https://developer.apple.com/documentation/coredata/nspersistentstoredescription/1646473-persistentstoredescriptionwithur
    persistentStoreDescriptionWithURL(URL: NSURL):NSPersistentStoreDescription;
    // https://developer.apple.com/documentation/coredata/nspersistentstoredescription/1640616-url
    URL(): NSURL;
    setURL(value: NSURL): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstoredescription/1640634-configuration
    configuration(): string | cocoascript.NSString;
    setConfiguration(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstoredescription/1640587-timeout
    timeout(): NSTimeInterval;
    setTimeout(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstoredescription/1640609-type
    type(): string | cocoascript.NSString;
    setType(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstoredescription/1640626-readonly
    readOnly(): boolean;
    setReadOnly(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstoredescription/1640599-shouldaddstoreasynchronously
    shouldAddStoreAsynchronously(): boolean;
    setShouldAddStoreAsynchronously(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstoredescription/1640623-shouldinfermappingmodelautomatic
    shouldInferMappingModelAutomatically(): boolean;
    setShouldInferMappingModelAutomatically(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstoredescription/1640566-shouldmigratestoreautomatically
    shouldMigrateStoreAutomatically(): boolean;
    setShouldMigrateStoreAutomatically(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstoredescription/1640574-setoption
    setOption_forKey(option: NSObject, key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/coredata/nspersistentstoredescription/1640598-setvalue
    setValue_forPragmaNamed(value: NSObject, name: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/coredata/nspersistentstoredescription/1640571-options
    options(): NSObject;
    setOptions(value: NSObject): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstoredescription/1640614-sqlitepragmas
    sqlitePragmas(): NSObject;
    setSqlitePragmas(value: NSObject): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstoredescription/3141672-cloudkitcontaineroptions
    cloudKitContainerOptions(): NSPersistentCloudKitContainerOptions;
    setCloudKitContainerOptions(value: NSPersistentCloudKitContainerOptions): void;
    //
    alloc():NSPersistentStoreDescription;
    //
    init():NSPersistentStoreDescription;
  }
}

declare const NSPersistentStoreDescription: cocoascript.NSPersistentStoreDescription;
declare namespace cocoascript {
  /**
   * A change representing the insertion, update, or deletion of a managed object in the persistent store.
   * https://developer.apple.com/documentation/coredata/nspersistenthistorychange
   */
  interface NSPersistentHistoryChange extends NSObject {
    // https://developer.apple.com/documentation/coredata/nspersistenthistorychange/3240591-fetchrequest
    fetchRequest(): NSFetchRequest;
    setFetchRequest(value: NSFetchRequest): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorychange/3240589-entitydescription
    entityDescription(): NSEntityDescription;
    setEntityDescription(value: NSEntityDescription): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorychange/3240590-entitydescriptionwithcontext
    entityDescriptionWithContext(context: NSManagedObjectContext):NSEntityDescription;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorychange/2892569-changeid
    changeID(): number;
    setChangeID(value: number): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorychange/2892563-changetype
    changeType(): NSPersistentHistoryChangeType;
    setChangeType(value: NSPersistentHistoryChangeType): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorychange/2892570-changedobjectid
    changedObjectID(): NSManagedObjectID;
    setChangedObjectID(value: NSManagedObjectID): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorychange/2892564-tombstone
    tombstone(): NSDictionary;
    setTombstone(value: NSDictionary): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorychange/2892567-transaction
    transaction(): NSPersistentHistoryTransaction;
    setTransaction(value: NSPersistentHistoryTransaction): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorychange/2892568-updatedproperties
    updatedProperties(): NSPropertyDescription;
    setUpdatedProperties(value: NSPropertyDescription): void;
    //
    alloc():NSPersistentHistoryChange;
    //
    init():NSPersistentHistoryChange;
  }
}

declare const NSPersistentHistoryChange: cocoascript.NSPersistentHistoryChange;
declare namespace cocoascript {
  /**
   * A bookmark for keeping track the most recent history that you’ve processed.
   * https://developer.apple.com/documentation/coredata/nspersistenthistorytoken
   */
  interface NSPersistentHistoryToken extends NSObject {
    //
    alloc():NSPersistentHistoryToken;
    //
    init():NSPersistentHistoryToken;
  }
}

declare const NSPersistentHistoryToken: cocoascript.NSPersistentHistoryToken;
declare namespace cocoascript {
  /**
   * A set of changes in the persistent history based on a context save or batch operation.
   * https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction
   */
  interface NSPersistentHistoryTransaction extends NSObject {
    // https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction/2894946-objectidnotification
    objectIDNotification():NSNotification;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction/3240596-fetchrequest
    fetchRequest(): NSFetchRequest;
    setFetchRequest(value: NSFetchRequest): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction/3240594-entitydescription
    entityDescription(): NSEntityDescription;
    setEntityDescription(value: NSEntityDescription): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction/3240595-entitydescriptionwithcontext
    entityDescriptionWithContext(context: NSManagedObjectContext):NSEntityDescription;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction/2894947-author
    author(): string | cocoascript.NSString;
    setAuthor(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction/2894943-bundleid
    bundleID(): string | cocoascript.NSString;
    setBundleID(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction/2894948-changes
    changes(): NSPersistentHistoryChange;
    setChanges(value: NSPersistentHistoryChange): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction/2894944-contextname
    contextName(): string | cocoascript.NSString;
    setContextName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction/2894939-processid
    processID(): string | cocoascript.NSString;
    setProcessID(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction/2894941-storeid
    storeID(): string | cocoascript.NSString;
    setStoreID(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction/2894940-timestamp
    timestamp(): NSDate;
    setTimestamp(value: NSDate): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction/2894938-token
    token(): NSPersistentHistoryToken;
    setToken(value: NSPersistentHistoryToken): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorytransaction/2894945-transactionnumber
    transactionNumber(): number;
    setTransactionNumber(value: number): void;
    //
    alloc():NSPersistentHistoryTransaction;
    //
    init():NSPersistentHistoryTransaction;
  }
}

declare const NSPersistentHistoryTransaction: cocoascript.NSPersistentHistoryTransaction;
declare namespace cocoascript {
  /**
   * An object that represents activity in a persistent CloudKit container.
   * https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainerevent
   */
  interface NSPersistentCloudKitContainerEvent extends NSObject {
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainerevent/3618807-type
    type(): NSPersistentCloudKitContainerEventType;
    setType(value: NSPersistentCloudKitContainerEventType): void;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainerevent/3618803-identifier
    identifier(): NSUUID;
    setIdentifier(value: NSUUID): void;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainerevent/3618805-storeidentifier
    storeIdentifier(): string | cocoascript.NSString;
    setStoreIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainerevent/3618806-succeeded
    succeeded(): boolean;
    setSucceeded(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainerevent/3618804-startdate
    startDate(): NSDate;
    setStartDate(value: NSDate): void;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainerevent/3618801-enddate
    endDate(): NSDate;
    setEndDate(value: NSDate): void;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainerevent/3618802-error
    error(): NSError;
    setError(value: NSError): void;
    //
    alloc():NSPersistentCloudKitContainerEvent;
    //
    init():NSPersistentCloudKitContainerEvent;
  }
}

declare const NSPersistentCloudKitContainerEvent: cocoascript.NSPersistentCloudKitContainerEvent;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coredata/nsmanagedobjectcontextconcurrencytype
  type NSManagedObjectContextConcurrencyType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A coordinator that uses the model to help contexts and persistent stores communicate.
   * https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator
   */
  interface NSPersistentStoreCoordinator extends NSObject {
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468895-initwithmanagedobjectmodel
    initWithManagedObjectModel(model: NSManagedObjectModel):NSPersistentStoreCoordinator;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468834-managedobjectmodel
    managedObjectModel(): NSManagedObjectModel;
    setManagedObjectModel(value: NSManagedObjectModel): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468929-name
    name(): string | cocoascript.NSString;
    setName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468790-persistentstores
    persistentStores(): NSPersistentStore;
    setPersistentStores(value: NSPersistentStore): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468786-registerstoreclass
    registerStoreClass_forStoreType(storeClass: Class, storeType: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468870-registeredstoretypes
    registeredStoreTypes(): NSValue;
    setRegisteredStoreTypes(value: NSValue): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468824-persistentstoreforurl
    persistentStoreForURL(URL: NSURL):NSPersistentStore;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468858-seturl
    setURL_forPersistentStore(url: NSURL, store: NSPersistentStore):boolean;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468865-urlforpersistentstore
    URLForPersistentStore(store: NSPersistentStore):NSURL;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468778-metadataforpersistentstoreoftype
    metadataForPersistentStoreOfType_URL_options_error(storeType: string | cocoascript.NSString, url: NSURL, options: NSDictionary, error: NSError):NSPersistentStoreCoordinator;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468893-setmetadata
    setMetadata_forPersistentStoreOfType_URL_options_error(metadata: NSPersistentStoreCoordinator, storeType: string | cocoascript.NSString, url: NSURL, options: NSDictionary, error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468911-metadataforpersistentstore
    metadataForPersistentStore(store: NSPersistentStore):NSPersistentStoreCoordinator;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468899-setmetadata
    setMetadata_forPersistentStore(metadata: NSPersistentStoreCoordinator, store: NSPersistentStore):void;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468860-addpersistentstorewithtype
    addPersistentStoreWithType_configuration_URL_options_error(storeType: string | cocoascript.NSString, configuration: string | cocoascript.NSString, storeURL: NSURL, options: NSDictionary, error: NSError):NSPersistentStore;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1640556-addpersistentstorewithdescriptio
    addPersistentStoreWithDescription_completionHandler(storeDescription: NSPersistentStoreDescription, block: NSError):void;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468888-destroypersistentstoreaturl
    destroyPersistentStoreAtURL_withType_options_error(url: NSURL, storeType: string | cocoascript.NSString, options: NSDictionary, error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468927-migratepersistentstore
    migratePersistentStore_toURL_options_withType_error(store: NSPersistentStore, URL: NSURL, options: NSDictionary, storeType: string | cocoascript.NSString, error: NSError):NSPersistentStore;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468907-removepersistentstore
    removePersistentStore_error(store: NSPersistentStore, error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468917-replacepersistentstoreaturl
    replacePersistentStoreAtURL_destinationOptions_withPersistentStoreFromURL_sourceOptions_storeType_error(destinationURL: NSURL, destinationOptions: NSDictionary, sourceURL: NSURL, sourceOptions: NSDictionary, storeType: string | cocoascript.NSString, error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468872-executerequest
    executeRequest_withContext_error(request: NSPersistentStoreRequest, context: NSManagedObjectContext, error: NSError):NSPersistentStoreCoordinator;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468794-performblock
    performBlock(block: void):void;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468862-performblockandwait
    performBlockAndWait(block: void):void;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/3325497-currentpersistenthistorytokenfro
    currentPersistentHistoryTokenFromStores(stores: NSArray):NSPersistentHistoryToken;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468919-elementsderivedfromexternalrecor
    elementsDerivedFromExternalRecordURL(fileURL: NSURL):NSDictionary;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468788-importstorewithidentifier
    importStoreWithIdentifier_fromExternalRecordsDirectory_toURL_options_withType_error(storeIdentifier: string | cocoascript.NSString, externalRecordsURL: NSURL, destinationURL: NSURL, options: NSDictionary, storeType: string | cocoascript.NSString, error: NSError):NSPersistentStore;
    // https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/1468882-managedobjectidforurirepresentat
    managedObjectIDForURIRepresentation(url: NSURL):NSManagedObjectID;
    //
    alloc():NSPersistentStoreCoordinator;
    //
    init():NSPersistentStoreCoordinator;
  }
}

declare const NSPersistentStoreCoordinator: cocoascript.NSPersistentStoreCoordinator;
// https://developer.apple.com/documentation/coredata/nsstoretypekey
declare const NSStoreTypeKey: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nsstoreuuidkey
declare const NSStoreUUIDKey: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nspersistentstorecoordinatorstoresdidchangenotification
declare const NSPersistentStoreCoordinatorStoresDidChangeNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nspersistentstorecoordinatorstoreswillchangenotification
declare const NSPersistentStoreCoordinatorStoresWillChangeNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nspersistentstorecoordinatorwillremovestorenotification
declare const NSPersistentStoreCoordinatorWillRemoveStoreNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nspersistenthistorytrackingkey
declare const NSPersistentHistoryTrackingKey: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nscoredatacorespotlightexporter
declare const NSCoreDataCoreSpotlightExporter: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A description of an attribute of a Core Data entity.
   * https://developer.apple.com/documentation/coredata/nsattributedescription
   */
  interface NSAttributeDescription extends NSPropertyDescription {
    // https://developer.apple.com/documentation/coredata/nsattributedescription/1498309-attributevalueclassname
    attributeValueClassName(): string | cocoascript.NSString;
    setAttributeValueClassName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsattributedescription/1498291-attributetype
    attributeType(): NSAttributeType;
    setAttributeType(value: NSAttributeType): void;
    // https://developer.apple.com/documentation/coredata/nsattributedescription/3746827-allowscloudencryption
    allowsCloudEncryption(): boolean;
    setAllowsCloudEncryption(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsattributedescription/1498295-allowsexternalbinarydatastorage
    allowsExternalBinaryDataStorage(): boolean;
    setAllowsExternalBinaryDataStorage(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsattributedescription/1498302-defaultvalue
    defaultValue(): id;
    setDefaultValue(value: id): void;
    // https://developer.apple.com/documentation/coredata/nsattributedescription/3180042-preservesvalueinhistoryondeletio
    preservesValueInHistoryOnDeletion(): boolean;
    setPreservesValueInHistoryOnDeletion(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsattributedescription/1498305-valuetransformername
    valueTransformerName(): string | cocoascript.NSString;
    setValueTransformerName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsattributedescription/1498310-versionhash
    versionHash(): NSData;
    setVersionHash(value: NSData): void;
    //
    alloc():NSAttributeDescription;
    //
    init():NSAttributeDescription;
  }
}

declare const NSAttributeDescription: cocoascript.NSAttributeDescription;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coredata/nssnapshoteventtype
  type NSSnapshotEventType = cocoascript.NSUInteger;
}
// https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegateindexdidupdatenotification
declare const NSCoreDataCoreSpotlightDelegateIndexDidUpdateNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  /**
   * The abstract base class for all Core Data persistent stores.
   * https://developer.apple.com/documentation/coredata/nspersistentstore
   */
  interface NSPersistentStore extends NSObject {
    // https://developer.apple.com/documentation/coredata/nspersistentstore/1506232-initwithpersistentstorecoordinat
    initWithPersistentStoreCoordinator_configurationName_URL_options(root: NSPersistentStoreCoordinator, name: string | cocoascript.NSString, url: NSURL, options: NSDictionary):NSPersistentStore;
    // https://developer.apple.com/documentation/coredata/nspersistentstore/1506620-configurationname
    configurationName(): string | cocoascript.NSString;
    setConfigurationName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstore/1506821-options
    options(): NSDictionary;
    setOptions(value: NSDictionary): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstore/1506226-persistentstorecoordinator
    persistentStoreCoordinator(): NSPersistentStoreCoordinator;
    setPersistentStoreCoordinator(value: NSPersistentStoreCoordinator): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstore/1506250-type
    type(): string | cocoascript.NSString;
    setType(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstore/1506215-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstore/1506183-readonly
    readOnly(): boolean;
    setReadOnly(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstore/1506700-url
    URL(): NSURL;
    setURL(value: NSURL): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstore/1506741-metadataforpersistentstorewithur
    metadataForPersistentStoreWithURL_error(url: NSURL, error: NSError):NSPersistentStore;
    // https://developer.apple.com/documentation/coredata/nspersistentstore/1506824-setmetadata
    setMetadata_forPersistentStoreWithURL_error(metadata: NSPersistentStore, url: NSURL, error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nspersistentstore/1506273-loadmetadata
    loadMetadata(error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nspersistentstore/1506564-metadata
    metadata(): id;
    setMetadata(value: id): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstore/1506873-didaddtopersistentstorecoordinat
    didAddToPersistentStoreCoordinator(coordinator: NSPersistentStoreCoordinator):void;
    // https://developer.apple.com/documentation/coredata/nspersistentstore/1506731-willremovefrompersistentstorecoo
    willRemoveFromPersistentStoreCoordinator(coordinator: NSPersistentStoreCoordinator):void;
    // https://developer.apple.com/documentation/coredata/nspersistentstore/2897191-corespotlightexporter
    coreSpotlightExporter(): NSCoreDataCoreSpotlightDelegate;
    setCoreSpotlightExporter(value: NSCoreDataCoreSpotlightDelegate): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstore/1506361-migrationmanagerclass
    migrationManagerClass():Class;
    //
    alloc():NSPersistentStore;
    //
    init():NSPersistentStore;
  }
}

declare const NSPersistentStore: cocoascript.NSPersistentStore;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coredata/nsfetchrequestresulttype
  type NSFetchRequestResultType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * An expression that evaluates the result of a fetch request on a managed object context.
   * https://developer.apple.com/documentation/coredata/nsfetchrequestexpression
   */
  interface NSFetchRequestExpression extends NSExpression {
    // https://developer.apple.com/documentation/coredata/nsfetchrequestexpression/1391661-expressionforfetch
    expressionForFetch_context_countOnly(fetch: NSExpression, context: NSExpression, countFlag: boolean):NSExpression;
    // https://developer.apple.com/documentation/coredata/nsfetchrequestexpression/1391672-requestexpression
    requestExpression(): NSExpression;
    setRequestExpression(value: NSExpression): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequestexpression/1391665-contextexpression
    contextExpression(): NSExpression;
    setContextExpression(value: NSExpression): void;
    // https://developer.apple.com/documentation/coredata/nsfetchrequestexpression/1391670-countonlyrequest
    countOnlyRequest(): boolean;
    setCountOnlyRequest(value: boolean): void;
    //
    alloc():NSFetchRequestExpression;
    //
    init():NSFetchRequestExpression;
  }
}

declare const NSFetchRequestExpression: cocoascript.NSFetchRequestExpression;
declare namespace cocoascript {
  /**
   * An object that describes an expression to include with a fetch request.
   * https://developer.apple.com/documentation/coredata/nsexpressiondescription
   */
  interface NSExpressionDescription extends NSPropertyDescription {
    // https://developer.apple.com/documentation/coredata/nsexpressiondescription/1506817-expression
    expression(): NSExpression;
    setExpression(value: NSExpression): void;
    // https://developer.apple.com/documentation/coredata/nsexpressiondescription/1506706-expressionresulttype
    expressionResultType(): NSAttributeType;
    setExpressionResultType(value: NSAttributeType): void;
    //
    alloc():NSExpressionDescription;
    //
    init():NSExpressionDescription;
  }
}

declare const NSExpressionDescription: cocoascript.NSExpressionDescription;
declare namespace cocoascript {
  /**
   * A description object used to define which properties are fetched from Core Data.
   * https://developer.apple.com/documentation/coredata/nsfetchedpropertydescription
   */
  interface NSFetchedPropertyDescription extends NSPropertyDescription {
    // https://developer.apple.com/documentation/coredata/nsfetchedpropertydescription/1494679-fetchrequest
    fetchRequest(): NSFetchRequest;
    setFetchRequest(value: NSFetchRequest): void;
    //
    alloc():NSFetchedPropertyDescription;
    //
    init():NSFetchedPropertyDescription;
  }
}

declare const NSFetchedPropertyDescription: cocoascript.NSFetchedPropertyDescription;
declare namespace cocoascript {
  /**
   * A fetch request that retrieves results asynchronously and supports progress notification.
   * https://developer.apple.com/documentation/coredata/nsasynchronousfetchrequest
   */
  interface NSAsynchronousFetchRequest extends NSPersistentStoreRequest {
    // https://developer.apple.com/documentation/coredata/nsasynchronousfetchrequest/1506218-initwithfetchrequest
    initWithFetchRequest_completionBlock(request: any, blk: any):NSAsynchronousFetchRequest;
    // https://developer.apple.com/documentation/coredata/nsasynchronousfetchrequest/1506815-completionblock
    completionBlock(): NSPersistentStoreAsynchronousFetchResultCompletionBlock;
    setCompletionBlock(value: NSPersistentStoreAsynchronousFetchResultCompletionBlock): void;
    // https://developer.apple.com/documentation/coredata/nsasynchronousfetchrequest/1506474-estimatedresultcount
    estimatedResultCount(): NSInteger;
    setEstimatedResultCount(value: NSInteger): void;
    // https://developer.apple.com/documentation/coredata/nsasynchronousfetchrequest/1506719-fetchrequest
    fetchRequest(): any;
    setFetchRequest(value: any): void;
    //
    alloc():NSAsynchronousFetchRequest;
    //
    init():NSAsynchronousFetchRequest;
  }
}

declare const NSAsynchronousFetchRequest: cocoascript.NSAsynchronousFetchRequest;
declare namespace cocoascript {
  /**
   * A fetch result object that encompasses the response from an executed asynchronous fetch request.
   * https://developer.apple.com/documentation/coredata/nsasynchronousfetchresult
   */
  interface NSAsynchronousFetchResult extends NSPersistentStoreAsynchronousResult {
    // https://developer.apple.com/documentation/coredata/nsasynchronousfetchresult/1404906-fetchrequest
    fetchRequest(): any;
    setFetchRequest(value: any): void;
    // https://developer.apple.com/documentation/coredata/nsasynchronousfetchresult/1404930-finalresult
    finalResult(): any;
    setFinalResult(value: any): void;
    //
    alloc():NSAsynchronousFetchResult;
    //
    init():NSAsynchronousFetchResult;
  }
}

declare const NSAsynchronousFetchResult: cocoascript.NSAsynchronousFetchResult;
declare namespace cocoascript {
  /**
   * A controller that you use to  manage the results of a Core Data fetch request and to display data to the user.
   * https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller
   */
  interface NSFetchedResultsController extends NSObject {
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/1622282-initwithfetchrequest
    initWithFetchRequest_managedObjectContext_sectionNameKeyPath_cacheName(fetchRequest: any, context: NSManagedObjectContext, sectionNameKeyPath: string | cocoascript.NSString, name: string | cocoascript.NSString):NSFetchedResultsController;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/1622305-performfetch
    performFetch(error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/1622287-fetchrequest
    fetchRequest(): any;
    setFetchRequest(value: any): void;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/1622304-managedobjectcontext
    managedObjectContext(): NSManagedObjectContext;
    setManagedObjectContext(value: NSManagedObjectContext): void;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/1622285-sectionnamekeypath
    sectionNameKeyPath(): string | cocoascript.NSString;
    setSectionNameKeyPath(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/1622280-cachename
    cacheName(): string | cocoascript.NSString;
    setCacheName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/1622291-delegate
    delegate(): NSFetchedResultsControllerDelegate;
    setDelegate(value: NSFetchedResultsControllerDelegate): void;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/1622283-deletecachewithname
    deleteCacheWithName(name: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/1622278-fetchedobjects
    fetchedObjects(): any;
    setFetchedObjects(value: any): void;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/1622281-objectatindexpath
    objectAtIndexPath(indexPath: NSIndexPath):void;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/1622306-indexpathforobject
    indexPathForObject(object: any):NSIndexPath;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/1622303-sections
    sections(): NSFetchedResultsSectionInfo;
    setSections(value: NSFetchedResultsSectionInfo): void;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/1622284-sectionforsectionindextitle
    sectionForSectionIndexTitle_atIndex(title: string | cocoascript.NSString, sectionIndex: NSInteger):NSInteger;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/1622308-sectionindextitleforsectionname
    sectionIndexTitleForSectionName(sectionName: string | cocoascript.NSString):NSString;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/1622299-sectionindextitles
    sectionIndexTitles(): string | cocoascript.NSString;
    setSectionIndexTitles(value: string | cocoascript.NSString): void;
    //
    alloc():NSFetchedResultsController;
    //
    init():NSFetchedResultsController;
  }
}

declare const NSFetchedResultsController: cocoascript.NSFetchedResultsController;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coredata/nsfetchindexelementtype
  type NSFetchIndexElementType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A description of an attribute of a Core Data entity that derives its value from one or more other properties.
   * https://developer.apple.com/documentation/coredata/nsderivedattributedescription
   */
  interface NSDerivedAttributeDescription extends NSAttributeDescription {
    // https://developer.apple.com/documentation/coredata/nsderivedattributedescription/3174854-derivationexpression
    derivationExpression(): NSExpression;
    setDerivationExpression(value: NSExpression): void;
    //
    alloc():NSDerivedAttributeDescription;
    //
    init():NSDerivedAttributeDescription;
  }
}

declare const NSDerivedAttributeDescription: cocoascript.NSDerivedAttributeDescription;
declare namespace cocoascript {
  /**
   * A description of a relationship of a Core Data entity.
   * https://developer.apple.com/documentation/coredata/nsrelationshipdescription
   */
  interface NSRelationshipDescription extends NSPropertyDescription {
    // https://developer.apple.com/documentation/coredata/nsrelationshipdescription/1506652-destinationentity
    destinationEntity(): NSEntityDescription;
    setDestinationEntity(value: NSEntityDescription): void;
    // https://developer.apple.com/documentation/coredata/nsrelationshipdescription/1506596-inverserelationship
    inverseRelationship(): NSRelationshipDescription;
    setInverseRelationship(value: NSRelationshipDescription): void;
    // https://developer.apple.com/documentation/coredata/nsrelationshipdescription/1506870-deleterule
    deleteRule(): NSDeleteRule;
    setDeleteRule(value: NSDeleteRule): void;
    // https://developer.apple.com/documentation/coredata/nsrelationshipdescription/1506780-maxcount
    maxCount(): NSUInteger;
    setMaxCount(value: NSUInteger): void;
    // https://developer.apple.com/documentation/coredata/nsrelationshipdescription/1506599-mincount
    minCount(): NSUInteger;
    setMinCount(value: NSUInteger): void;
    // https://developer.apple.com/documentation/coredata/nsrelationshipdescription/1506560-tomany
    toMany(): boolean;
    setToMany(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsrelationshipdescription/1506382-ordered
    ordered(): boolean;
    setOrdered(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsrelationshipdescription/1506791-versionhash
    versionHash(): NSData;
    setVersionHash(value: NSData): void;
    //
    alloc():NSRelationshipDescription;
    //
    init():NSRelationshipDescription;
  }
}

declare const NSRelationshipDescription: cocoascript.NSRelationshipDescription;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coredata/nsattributetype
  type NSAttributeType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coredata/nsfetchedresultschangetype
  type NSFetchedResultsChangeType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A protocol that defines the interface for section objects vended by a fetched results controller.
   * https://developer.apple.com/documentation/coredata/nsfetchedresultssectioninfo
   */
  interface NSFetchedResultsSectionInfo {
    // https://developer.apple.com/documentation/coredata/nsfetchedresultssectioninfo/1622289-numberofobjects
    numberOfObjects(): NSUInteger;
    setNumberOfObjects(value: NSUInteger): void;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultssectioninfo/1622293-objects
    objects(): NSArray;
    setObjects(value: NSArray): void;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultssectioninfo/1622302-name
    name(): string | cocoascript.NSString;
    setName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsfetchedresultssectioninfo/1622300-indextitle
    indexTitle(): string | cocoascript.NSString;
    setIndexTitle(value: string | cocoascript.NSString): void;
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coredata/nspersistentstorerequesttype
  type NSPersistentStoreRequestType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * The abstract base class for results returned from a persistent store coordinator.
   * https://developer.apple.com/documentation/coredata/nspersistentstoreresult
   */
  interface NSPersistentStoreResult extends NSObject {
    //
    alloc():NSPersistentStoreResult;
    //
    init():NSPersistentStoreResult;
  }
}

declare const NSPersistentStoreResult: cocoascript.NSPersistentStoreResult;
declare namespace cocoascript {
  /**
   * A concrete class used to represent the results of an asynchronous request.
   * https://developer.apple.com/documentation/coredata/nspersistentstoreasynchronousresult
   */
  interface NSPersistentStoreAsynchronousResult extends NSPersistentStoreResult {
    // https://developer.apple.com/documentation/coredata/nspersistentstoreasynchronousresult/1404916-managedobjectcontext
    managedObjectContext(): NSManagedObjectContext;
    setManagedObjectContext(value: NSManagedObjectContext): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstoreasynchronousresult/1404904-operationerror
    operationError(): NSError;
    setOperationError(value: NSError): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstoreasynchronousresult/1404920-progress
    progress(): NSProgress;
    setProgress(value: NSProgress): void;
    // https://developer.apple.com/documentation/coredata/nspersistentstoreasynchronousresult/1404924-cancel
    cancel():void;
    //
    alloc():NSPersistentStoreAsynchronousResult;
    //
    init():NSPersistentStoreAsynchronousResult;
  }
}

declare const NSPersistentStoreAsynchronousResult: cocoascript.NSPersistentStoreAsynchronousResult;
declare namespace cocoascript {
  /**
   * An encapsulation of a collection of changes to be made by an object store in response to a save operation on a managed object context.
   * https://developer.apple.com/documentation/coredata/nssavechangesrequest
   */
  interface NSSaveChangesRequest extends NSPersistentStoreRequest {
    // https://developer.apple.com/documentation/coredata/nssavechangesrequest/1500418-initwithinsertedobjects
    initWithInsertedObjects_updatedObjects_deletedObjects_lockedObjects(insertedObjects: NSManagedObject, updatedObjects: NSManagedObject, deletedObjects: NSManagedObject, lockedObjects: NSManagedObject):NSSaveChangesRequest;
    // https://developer.apple.com/documentation/coredata/nssavechangesrequest/1500416-insertedobjects
    insertedObjects(): NSManagedObject;
    setInsertedObjects(value: NSManagedObject): void;
    // https://developer.apple.com/documentation/coredata/nssavechangesrequest/1500424-updatedobjects
    updatedObjects(): NSManagedObject;
    setUpdatedObjects(value: NSManagedObject): void;
    // https://developer.apple.com/documentation/coredata/nssavechangesrequest/1500420-deletedobjects
    deletedObjects(): NSManagedObject;
    setDeletedObjects(value: NSManagedObject): void;
    // https://developer.apple.com/documentation/coredata/nssavechangesrequest/1500426-lockedobjects
    lockedObjects(): NSManagedObject;
    setLockedObjects(value: NSManagedObject): void;
    //
    alloc():NSSaveChangesRequest;
    //
    init():NSSaveChangesRequest;
  }
}

declare const NSSaveChangesRequest: cocoascript.NSSaveChangesRequest;
declare namespace cocoascript {
  /**
   * An abstract superclass that you subclass to create a Core Data atomic store.
   * https://developer.apple.com/documentation/coredata/nsatomicstore
   */
  interface NSAtomicStore extends NSPersistentStore {
    // https://developer.apple.com/documentation/coredata/nsatomicstore/1388054-initwithpersistentstorecoordinat
    initWithPersistentStoreCoordinator_configurationName_URL_options(coordinator: NSPersistentStoreCoordinator, configurationName: string | cocoascript.NSString, url: NSURL, options: NSDictionary):NSAtomicStore;
    // https://developer.apple.com/documentation/coredata/nsatomicstore/1388060-load
    load(error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nsatomicstore/1388058-objectidforentity
    objectIDForEntity_referenceObject(entity: NSEntityDescription, data: NSAtomicStore):NSManagedObjectID;
    // https://developer.apple.com/documentation/coredata/nsatomicstore/1388062-addcachenodes
    addCacheNodes(cacheNodes: NSAtomicStoreCacheNode):void;
    // https://developer.apple.com/documentation/coredata/nsatomicstore/1388052-newcachenodeformanagedobject
    newCacheNodeForManagedObject(managedObject: NSManagedObject):NSAtomicStoreCacheNode;
    // https://developer.apple.com/documentation/coredata/nsatomicstore/1388050-newreferenceobjectformanagedobje
    newReferenceObjectForManagedObject(managedObject: NSManagedObject):NSAtomicStore;
    // https://developer.apple.com/documentation/coredata/nsatomicstore/1388044-updatecachenode
    updateCacheNode_fromManagedObject(node: NSAtomicStoreCacheNode, managedObject: NSManagedObject):void;
    // https://developer.apple.com/documentation/coredata/nsatomicstore/1388064-willremovecachenodes
    willRemoveCacheNodes(cacheNodes: NSAtomicStoreCacheNode):void;
    // https://developer.apple.com/documentation/coredata/nsatomicstore/1388056-save
    save(error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nsatomicstore/1388042-cachenodes
    cacheNodes():NSAtomicStoreCacheNode;
    // https://developer.apple.com/documentation/coredata/nsatomicstore/1388040-cachenodeforobjectid
    cacheNodeForObjectID(objectID: NSManagedObjectID):NSAtomicStoreCacheNode;
    // https://developer.apple.com/documentation/coredata/nsatomicstore/1388046-referenceobjectforobjectid
    referenceObjectForObjectID(objectID: NSManagedObjectID):NSAtomicStore;
    //
    alloc():NSAtomicStore;
    //
    init():NSAtomicStore;
  }
}

declare const NSAtomicStore: cocoascript.NSAtomicStore;
declare namespace cocoascript {
  /**
   * A concrete class that you use to represent basic nodes in a Core Data atomic store.
   * https://developer.apple.com/documentation/coredata/nsatomicstorecachenode
   */
  interface NSAtomicStoreCacheNode extends NSObject {
    // https://developer.apple.com/documentation/coredata/nsatomicstorecachenode/1506754-initwithobjectid
    initWithObjectID(moid: NSManagedObjectID):NSAtomicStoreCacheNode;
    // https://developer.apple.com/documentation/coredata/nsatomicstorecachenode/1506627-objectid
    objectID(): NSManagedObjectID;
    setObjectID(value: NSManagedObjectID): void;
    // https://developer.apple.com/documentation/coredata/nsatomicstorecachenode/1506283-propertycache
    propertyCache(): id;
    setPropertyCache(value: id): void;
    // https://developer.apple.com/documentation/coredata/nsatomicstorecachenode/1506550-valueforkey
    valueForKey(key: string | cocoascript.NSString):NSAtomicStoreCacheNode;
    // https://developer.apple.com/documentation/coredata/nsatomicstorecachenode/1506456-setvalue
    setValue_forKey(value: NSAtomicStoreCacheNode, key: string | cocoascript.NSString):void;
    //
    alloc():NSAtomicStoreCacheNode;
    //
    init():NSAtomicStoreCacheNode;
  }
}

declare const NSAtomicStoreCacheNode: cocoascript.NSAtomicStoreCacheNode;
declare namespace cocoascript {
  /**
   * An abstract superclass defining the API through which Core Data communicates with a store.
   * https://developer.apple.com/documentation/coredata/nsincrementalstore
   */
  interface NSIncrementalStore extends NSPersistentStore {
    // https://developer.apple.com/documentation/coredata/nsincrementalstore/1506653-executerequest
    executeRequest_withContext_error(request: NSPersistentStoreRequest, context: NSManagedObjectContext, error: NSError):NSIncrementalStore;
    // https://developer.apple.com/documentation/coredata/nsincrementalstore/1506729-newvaluesforobjectwithid
    newValuesForObjectWithID_withContext_error(objectID: NSManagedObjectID, context: NSManagedObjectContext, error: NSError):NSIncrementalStoreNode;
    // https://developer.apple.com/documentation/coredata/nsincrementalstore/1506438-newvalueforrelationship
    newValueForRelationship_forObjectWithID_withContext_error(relationship: NSRelationshipDescription, objectID: NSManagedObjectID, context: NSManagedObjectContext, error: NSError):NSIncrementalStore;
    // https://developer.apple.com/documentation/coredata/nsincrementalstore/1506348-obtainpermanentidsforobjects
    obtainPermanentIDsForObjects_error(array: NSManagedObject, error: NSError):NSManagedObjectID;
    // https://developer.apple.com/documentation/coredata/nsincrementalstore/1506666-newobjectidforentity
    newObjectIDForEntity_referenceObject(entity: NSEntityDescription, data: NSIncrementalStore):NSManagedObjectID;
    // https://developer.apple.com/documentation/coredata/nsincrementalstore/1506828-referenceobjectforobjectid
    referenceObjectForObjectID(objectID: NSManagedObjectID):NSIncrementalStore;
    // https://developer.apple.com/documentation/coredata/nsincrementalstore/1506199-managedobjectcontextdidregistero
    managedObjectContextDidRegisterObjectsWithIDs(objectIDs: NSManagedObjectID):void;
    // https://developer.apple.com/documentation/coredata/nsincrementalstore/1506878-managedobjectcontextdidunregiste
    managedObjectContextDidUnregisterObjectsWithIDs(objectIDs: NSManagedObjectID):void;
    // https://developer.apple.com/documentation/coredata/nsincrementalstore/1506781-identifierfornewstoreaturl
    identifierForNewStoreAtURL(storeURL: NSURL):NSIncrementalStore;
    // https://developer.apple.com/documentation/coredata/nsincrementalstore/1506708-loadmetadata
    loadMetadata(error: NSError):boolean;
    //
    alloc():NSIncrementalStore;
    //
    init():NSIncrementalStore;
  }
}

declare const NSIncrementalStore: cocoascript.NSIncrementalStore;
declare namespace cocoascript {
  /**
   * A concrete class used to represent basic nodes in a Core Data incremental store.
   * https://developer.apple.com/documentation/coredata/nsincrementalstorenode
   */
  interface NSIncrementalStoreNode extends NSObject {
    // https://developer.apple.com/documentation/coredata/nsincrementalstorenode/1506321-initwithobjectid
    initWithObjectID_withValues_version(objectID: NSManagedObjectID, values: NSIncrementalStoreNode, version: number):NSIncrementalStoreNode;
    // https://developer.apple.com/documentation/coredata/nsincrementalstorenode/1506827-objectid
    objectID(): NSManagedObjectID;
    setObjectID(value: NSManagedObjectID): void;
    // https://developer.apple.com/documentation/coredata/nsincrementalstorenode/1506721-updatewithvalues
    updateWithValues_version(values: NSIncrementalStoreNode, version: number):void;
    // https://developer.apple.com/documentation/coredata/nsincrementalstorenode/1506442-valueforpropertydescription
    valueForPropertyDescription(prop: NSPropertyDescription):NSIncrementalStoreNode;
    // https://developer.apple.com/documentation/coredata/nsincrementalstorenode/1506769-version
    version(): number;
    setVersion(value: number): void;
    //
    alloc():NSIncrementalStoreNode;
    //
    init():NSIncrementalStoreNode;
  }
}

declare const NSIncrementalStoreNode: cocoascript.NSIncrementalStoreNode;
declare namespace cocoascript {
  /**
   * An encapsulation of conflicts that occur during an attempt to save a managed object.
   * https://developer.apple.com/documentation/coredata/nsconstraintconflict
   */
  interface NSConstraintConflict extends NSObject {
    // https://developer.apple.com/documentation/coredata/nsconstraintconflict/1506668-initwithconstraint
    initWithConstraint_databaseObject_databaseSnapshot_conflictingObjects_conflictingSnapshots(contraint: string | cocoascript.NSString, databaseObject: NSManagedObject, databaseSnapshot: NSDictionary, conflictingObjects: NSManagedObject, conflictingSnapshots: NSArray):NSConstraintConflict;
    // https://developer.apple.com/documentation/coredata/nsconstraintconflict/1506707-conflictingobjects
    conflictingObjects(): NSManagedObject;
    setConflictingObjects(value: NSManagedObject): void;
    // https://developer.apple.com/documentation/coredata/nsconstraintconflict/1506774-conflictingsnapshots
    conflictingSnapshots(): NSDictionary;
    setConflictingSnapshots(value: NSDictionary): void;
    // https://developer.apple.com/documentation/coredata/nsconstraintconflict/1506902-constraint
    constraint(): string | cocoascript.NSString;
    setConstraint(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsconstraintconflict/1506399-constraintvalues
    constraintValues(): id;
    setConstraintValues(value: id): void;
    // https://developer.apple.com/documentation/coredata/nsconstraintconflict/1506665-databaseobject
    databaseObject(): NSManagedObject;
    setDatabaseObject(value: NSManagedObject): void;
    // https://developer.apple.com/documentation/coredata/nsconstraintconflict/1506687-databasesnapshot
    databaseSnapshot(): id;
    setDatabaseSnapshot(value: id): void;
    //
    alloc():NSConstraintConflict;
    //
    init():NSConstraintConflict;
  }
}

declare const NSConstraintConflict: cocoascript.NSConstraintConflict;
declare namespace cocoascript {
  /**
   * An encapsulation of conflicts that occur during an attempt to save changes in a managed object context.
   * https://developer.apple.com/documentation/coredata/nsmergeconflict
   */
  interface NSMergeConflict extends NSObject {
    // https://developer.apple.com/documentation/coredata/nsmergeconflict/1506216-initwithsource
    initWithSource_newVersion_oldVersion_cachedSnapshot_persistedSnapshot(srcObject: NSManagedObject, newvers: NSUInteger, oldvers: NSUInteger, cachesnap: NSMergeConflict, persnap: NSMergeConflict):NSMergeConflict;
    // https://developer.apple.com/documentation/coredata/nsmergeconflict/1506809-sourceobject
    sourceObject(): NSManagedObject;
    setSourceObject(value: NSManagedObject): void;
    // https://developer.apple.com/documentation/coredata/nsmergeconflict/1506454-objectsnapshot
    objectSnapshot(): id;
    setObjectSnapshot(value: id): void;
    // https://developer.apple.com/documentation/coredata/nsmergeconflict/1506685-cachedsnapshot
    cachedSnapshot(): id;
    setCachedSnapshot(value: id): void;
    // https://developer.apple.com/documentation/coredata/nsmergeconflict/1506412-persistedsnapshot
    persistedSnapshot(): id;
    setPersistedSnapshot(value: id): void;
    // https://developer.apple.com/documentation/coredata/nsmergeconflict/1506190-newversionnumber
    newVersionNumber(): NSUInteger;
    setNewVersionNumber(value: NSUInteger): void;
    // https://developer.apple.com/documentation/coredata/nsmergeconflict/1506271-oldversionnumber
    oldVersionNumber(): NSUInteger;
    setOldVersionNumber(value: NSUInteger): void;
    //
    alloc():NSMergeConflict;
    //
    init():NSMergeConflict;
  }
}

declare const NSMergeConflict: cocoascript.NSMergeConflict;
declare namespace cocoascript {
  /**
   * A policy object that you use to resolve conflicts between the persistent store and in-memory versions of managed objects.
   * https://developer.apple.com/documentation/coredata/nsmergepolicy
   */
  interface NSMergePolicy extends NSObject {
    // https://developer.apple.com/documentation/coredata/nsmergepolicy/1506763-initwithmergetype
    initWithMergeType(ty: NSMergePolicyType):NSMergePolicy;
    // https://developer.apple.com/documentation/coredata/nsmergepolicy/1506675-mergetype
    mergeType(): NSMergePolicyType;
    setMergeType(value: NSMergePolicyType): void;
    // https://developer.apple.com/documentation/coredata/nsmergepolicy/1506253-resolveconflicts
    resolveConflicts_error(list: NSArray, error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nsmergepolicy/1506678-resolveconstraintconflicts
    resolveConstraintConflicts_error(list: NSConstraintConflict, error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nsmergepolicy/1506787-resolveoptimisticlockingversionc
    resolveOptimisticLockingVersionConflicts_error(list: NSMergeConflict, error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nsmergepolicy/1690612-errormergepolicy
    errorMergePolicy(): NSMergePolicy;
    setErrorMergePolicy(value: NSMergePolicy): void;
    // https://developer.apple.com/documentation/coredata/nsmergepolicy/1690609-mergebypropertystoretrumpmergepo
    mergeByPropertyStoreTrumpMergePolicy(): NSMergePolicy;
    setMergeByPropertyStoreTrumpMergePolicy(value: NSMergePolicy): void;
    // https://developer.apple.com/documentation/coredata/nsmergepolicy/1690607-mergebypropertyobjecttrumpmergep
    mergeByPropertyObjectTrumpMergePolicy(): NSMergePolicy;
    setMergeByPropertyObjectTrumpMergePolicy(value: NSMergePolicy): void;
    // https://developer.apple.com/documentation/coredata/nsmergepolicy/1690610-overwritemergepolicy
    overwriteMergePolicy(): NSMergePolicy;
    setOverwriteMergePolicy(value: NSMergePolicy): void;
    // https://developer.apple.com/documentation/coredata/nsmergepolicy/1690613-rollbackmergepolicy
    rollbackMergePolicy(): NSMergePolicy;
    setRollbackMergePolicy(value: NSMergePolicy): void;
    //
    alloc():NSMergePolicy;
    //
    init():NSMergePolicy;
  }
}

declare const NSMergePolicy: cocoascript.NSMergePolicy;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coredata/nspersistenthistorychangetype
  type NSPersistentHistoryChangeType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A container that encapsulates the Core Data stack in your app, and mirrors select persistent stores to a CloudKit private database.
   * https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer
   */
  interface NSPersistentCloudKitContainer extends NSPersistentContainer {
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/3141668-recordformanagedobjectid
    recordForManagedObjectID(managedObjectID: NSManagedObjectID):CKRecord;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/3141671-recordsformanagedobjectids
    recordsForManagedObjectIDs(managedObjectIDs: NSManagedObjectID):CKRecord;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/3141669-recordidformanagedobjectid
    recordIDForManagedObjectID(managedObjectID: NSManagedObjectID):CKRecordID;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/3141670-recordidsformanagedobjectids
    recordIDsForManagedObjectIDs(managedObjectIDs: NSManagedObjectID):CKRecordID;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/3649648-canupdaterecordformanagedobjectw
    canUpdateRecordForManagedObjectWithID(objectID: NSManagedObjectID):boolean;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/3649646-candeleterecordformanagedobjectw
    canDeleteRecordForManagedObjectWithID(objectID: NSManagedObjectID):boolean;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/3649647-canmodifymanagedobjectsinstore
    canModifyManagedObjectsInStore(store: NSPersistentStore):boolean;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/3746828-acceptshareinvitationsfrommetada
    acceptShareInvitationsFromMetadata_intoPersistentStore_completion(metadata: CKShareMetadata, persistentStore: NSPersistentStore, completion: NSError):void;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/3746829-fetchparticipantsmatchinglookupi
    fetchParticipantsMatchingLookupInfos_intoPersistentStore_completion(lookupInfos: CKUserIdentityLookupInfo, persistentStore: NSPersistentStore, completion: NSError):void;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/3746830-fetchsharesinpersistentstore
    fetchSharesInPersistentStore_error(persistentStore: NSPersistentStore, error: NSError):CKShare;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/3746831-fetchsharesmatchingobjectids
    fetchSharesMatchingObjectIDs_error(objectIDs: NSManagedObjectID, error: NSError):CKShare;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/3746832-persistupdatedshare
    persistUpdatedShare_inPersistentStore_completion(share: CKShare, persistentStore: NSPersistentStore, completion: NSError):void;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/3746834-sharemanagedobjects
    shareManagedObjects_toShare_completion(managedObjects: NSManagedObject, share: CKShare, completion: NSError):void;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/3746833-purgeobjectsandrecordsinzonewith
    purgeObjectsAndRecordsInZoneWithID_inPersistentStore_completion(zoneID: CKRecordZoneID, persistentStore: NSPersistentStore, completion: NSError):void;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/3343548-initializecloudkitschemawithopti
    initializeCloudKitSchemaWithOptions_error(options: NSPersistentCloudKitContainerSchemaInitializationOptions, error: NSError):boolean;
    //
    alloc():NSPersistentCloudKitContainer;
    //
    init():NSPersistentCloudKitContainer;
  }
}

declare const NSPersistentCloudKitContainer: cocoascript.NSPersistentCloudKitContainer;
// https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainereventuserinfokey
declare const NSPersistentCloudKitContainerEventUserInfoKey: cocoascript.NSString;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainereventtype
  type NSPersistentCloudKitContainerEventType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A request to fetch setup, import, or export events in a persistent CloudKit container.
   * https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainereventrequest
   */
  interface NSPersistentCloudKitContainerEventRequest extends NSPersistentStoreRequest {
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainereventrequest/3618815-fetcheventsafterdate
    fetchEventsAfterDate(date: NSDate):NSPersistentCloudKitContainerEventRequest;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainereventrequest/3618816-fetcheventsafterevent
    fetchEventsAfterEvent(event: NSPersistentCloudKitContainerEvent):NSPersistentCloudKitContainerEventRequest;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainereventrequest/3618817-fetcheventsmatchingfetchrequest
    fetchEventsMatchingFetchRequest(fetchRequest: NSFetchRequest):NSPersistentCloudKitContainerEventRequest;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainereventrequest/3618818-fetchrequestforevents
    fetchRequestForEvents():NSFetchRequest;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainereventrequest/3618819-resulttype
    resultType(): NSPersistentCloudKitContainerEventResultType;
    setResultType(value: NSPersistentCloudKitContainerEventResultType): void;
    //
    alloc():NSPersistentCloudKitContainerEventRequest;
    //
    init():NSPersistentCloudKitContainerEventRequest;
  }
}

declare const NSPersistentCloudKitContainerEventRequest: cocoascript.NSPersistentCloudKitContainerEventRequest;
declare namespace cocoascript {
  /**
   * The result of a request to fetch persistent CloudKit container events.
   * https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainereventresult
   */
  interface NSPersistentCloudKitContainerEventResult extends NSPersistentStoreResult {
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainereventresult/3618821-result
    result(): id;
    setResult(value: id): void;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainereventresult/3618822-resulttype
    resultType(): NSPersistentCloudKitContainerEventResultType;
    setResultType(value: NSPersistentCloudKitContainerEventResultType): void;
    //
    alloc():NSPersistentCloudKitContainerEventResult;
    //
    init():NSPersistentCloudKitContainerEventResult;
  }
}

declare const NSPersistentCloudKitContainerEventResult: cocoascript.NSPersistentCloudKitContainerEventResult;
// https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainereventchangednotification
declare const NSPersistentCloudKitContainerEventChangedNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  /**
   * An object that customizes how a store description aligns with a CloudKit database.
   * https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontaineroptions
   */
  interface NSPersistentCloudKitContainerOptions extends NSObject {
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontaineroptions/3141675-initwithcontaineridentifier
    initWithContainerIdentifier(containerIdentifier: string | cocoascript.NSString):NSPersistentCloudKitContainerOptions;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontaineroptions/3141674-containeridentifier
    containerIdentifier(): string | cocoascript.NSString;
    setContainerIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontaineroptions/3580372-databasescope
    databaseScope(): CKDatabaseScope;
    setDatabaseScope(value: CKDatabaseScope): void;
    //
    alloc():NSPersistentCloudKitContainerOptions;
    //
    init():NSPersistentCloudKitContainerOptions;
  }
}

declare const NSPersistentCloudKitContainerOptions: cocoascript.NSPersistentCloudKitContainerOptions;
declare namespace cocoascript {
  /**
   * A container that encapsulates the Core Data stack in your app.
   * https://developer.apple.com/documentation/coredata/nspersistentcontainer
   */
  interface NSPersistentContainer extends NSObject {
    // https://developer.apple.com/documentation/coredata/nspersistentcontainer/1640557-initwithname
    initWithName(name: string | cocoascript.NSString):NSPersistentContainer;
    // https://developer.apple.com/documentation/coredata/nspersistentcontainer/1640584-initwithname
    initWithName_managedObjectModel(name: string | cocoascript.NSString, model: NSManagedObjectModel):NSPersistentContainer;
    // https://developer.apple.com/documentation/coredata/nspersistentcontainer/1646295-persistentcontainerwithname
    persistentContainerWithName(name: string | cocoascript.NSString):NSPersistentContainer;
    // https://developer.apple.com/documentation/coredata/nspersistentcontainer/1646296-persistentcontainerwithname
    persistentContainerWithName_managedObjectModel(name: string | cocoascript.NSString, model: NSManagedObjectModel):NSPersistentContainer;
    // https://developer.apple.com/documentation/coredata/nspersistentcontainer/1640561-managedobjectmodel
    managedObjectModel(): NSManagedObjectModel;
    setManagedObjectModel(value: NSManagedObjectModel): void;
    // https://developer.apple.com/documentation/coredata/nspersistentcontainer/1640579-name
    name(): string | cocoascript.NSString;
    setName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nspersistentcontainer/1640567-persistentstorecoordinator
    persistentStoreCoordinator(): NSPersistentStoreCoordinator;
    setPersistentStoreCoordinator(value: NSPersistentStoreCoordinator): void;
    // https://developer.apple.com/documentation/coredata/nspersistentcontainer/1640597-defaultdirectoryurl
    defaultDirectoryURL():NSURL;
    // https://developer.apple.com/documentation/coredata/nspersistentcontainer/1640577-persistentstoredescriptions
    persistentStoreDescriptions(): NSPersistentStoreDescription;
    setPersistentStoreDescriptions(value: NSPersistentStoreDescription): void;
    // https://developer.apple.com/documentation/coredata/nspersistentcontainer/1640568-loadpersistentstoreswithcompleti
    loadPersistentStoresWithCompletionHandler(block: NSError):void;
    // https://developer.apple.com/documentation/coredata/nspersistentcontainer/1640581-newbackgroundcontext
    newBackgroundContext():NSManagedObjectContext;
    // https://developer.apple.com/documentation/coredata/nspersistentcontainer/1640622-viewcontext
    viewContext(): NSManagedObjectContext;
    setViewContext(value: NSManagedObjectContext): void;
    // https://developer.apple.com/documentation/coredata/nspersistentcontainer/1640564-performbackgroundtask
    performBackgroundTask(block: NSManagedObjectContext):void;
    //
    alloc():NSPersistentContainer;
    //
    init():NSPersistentContainer;
  }
}

declare const NSPersistentContainer: cocoascript.NSPersistentContainer;
declare namespace cocoascript {
  /**
   * A set of methods that enable integration with Core Spotlight.
   * https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate
   */
  interface NSCoreDataCoreSpotlightDelegate extends NSObject {
    // https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/3751984-initforstorewithdescription
    initForStoreWithDescription_coordinator(description: NSPersistentStoreDescription, psc: NSPersistentStoreCoordinator):NSCoreDataCoreSpotlightDelegate;
    // https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/2897196-initforstorewithdescription
    initForStoreWithDescription_model(description: NSPersistentStoreDescription, model: NSManagedObjectModel):NSCoreDataCoreSpotlightDelegate;
    // https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/3751983-indexingenabled
    indexingEnabled(): boolean;
    setIndexingEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/2897202-domainidentifier
    domainIdentifier():NSString;
    // https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/2897199-indexname
    indexName():NSString;
    // https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/2897197-attributesetforobject
    attributeSetForObject(object: NSManagedObject):CSSearchableItemAttributeSet;
    // https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/3751982-deletespotlightindexwithcompleti
    deleteSpotlightIndexWithCompletionHandler(completionHandler: NSError):void;
    // https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/3751985-startspotlightindexing
    startSpotlightIndexing():void;
    // https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/3751986-stopspotlightindexing
    stopSpotlightIndexing():void;
    // https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/2897201-searchableindex
    searchableIndex_reindexAllSearchableItemsWithAcknowledgementHandler(searchableIndex: CSSearchableIndex, acknowledgementHandler: void):void;
    // https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/2897198-searchableindex
    searchableIndex_reindexSearchableItemsWithIdentifiers_acknowledgementHandler(searchableIndex: CSSearchableIndex, identifiers: string | cocoascript.NSString, acknowledgementHandler: void):void;
    //
    alloc():NSCoreDataCoreSpotlightDelegate;
    //
    init():NSCoreDataCoreSpotlightDelegate;
  }
}

declare const NSCoreDataCoreSpotlightDelegate: cocoascript.NSCoreDataCoreSpotlightDelegate;
declare namespace cocoascript {
  /**
   * A mapping instance that specifies how to map an entity from a source to a destination managed object model.
   * https://developer.apple.com/documentation/coredata/nsentitymapping
   */
  interface NSEntityMapping extends NSObject {
    // https://developer.apple.com/documentation/coredata/nsentitymapping/1443187-sourceentityname
    sourceEntityName(): string | cocoascript.NSString;
    setSourceEntityName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsentitymapping/1443182-sourceentityversionhash
    sourceEntityVersionHash(): NSData;
    setSourceEntityVersionHash(value: NSData): void;
    // https://developer.apple.com/documentation/coredata/nsentitymapping/1443180-sourceexpression
    sourceExpression(): NSExpression;
    setSourceExpression(value: NSExpression): void;
    // https://developer.apple.com/documentation/coredata/nsentitymapping/1443176-destinationentityname
    destinationEntityName(): string | cocoascript.NSString;
    setDestinationEntityName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsentitymapping/1443169-destinationentityversionhash
    destinationEntityVersionHash(): NSData;
    setDestinationEntityVersionHash(value: NSData): void;
    // https://developer.apple.com/documentation/coredata/nsentitymapping/1443167-name
    name(): string | cocoascript.NSString;
    setName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsentitymapping/1443194-mappingtype
    mappingType(): NSEntityMappingType;
    setMappingType(value: NSEntityMappingType): void;
    // https://developer.apple.com/documentation/coredata/nsentitymapping/1443171-entitymigrationpolicyclassname
    entityMigrationPolicyClassName(): string | cocoascript.NSString;
    setEntityMigrationPolicyClassName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsentitymapping/1443193-attributemappings
    attributeMappings(): NSPropertyMapping;
    setAttributeMappings(value: NSPropertyMapping): void;
    // https://developer.apple.com/documentation/coredata/nsentitymapping/1443163-relationshipmappings
    relationshipMappings(): NSPropertyMapping;
    setRelationshipMappings(value: NSPropertyMapping): void;
    // https://developer.apple.com/documentation/coredata/nsentitymapping/1443184-userinfo
    userInfo(): NSDictionary;
    setUserInfo(value: NSDictionary): void;
    //
    alloc():NSEntityMapping;
    //
    init():NSEntityMapping;
  }
}

declare const NSEntityMapping: cocoascript.NSEntityMapping;
// https://developer.apple.com/documentation/coredata/nsfetchrequestexpressiontype
declare const NSFetchRequestExpressionType: cocoascript.NSExpressionType;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coredata/nsdeleterule
  type NSDeleteRule = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coredata/nspersistentstoreasynchronousfetchresultcompletionblock
  type NSPersistentStoreAsynchronousFetchResultCompletionBlock = cocoascript.NSAsynchronousFetchResult;
}
declare namespace cocoascript {
  /**
   * A request to fetch or purge persistent history.
   * https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest
   */
  interface NSPersistentHistoryChangeRequest extends NSPersistentStoreRequest {
    // https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest/3240593-fetchrequest
    fetchRequest(): NSFetchRequest;
    setFetchRequest(value: NSFetchRequest): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest/2892341-resulttype
    resultType(): NSPersistentHistoryResultType;
    setResultType(value: NSPersistentHistoryResultType): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest/2892342-token
    token(): NSPersistentHistoryToken;
    setToken(value: NSPersistentHistoryToken): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest/2892339-fetchhistoryafterdate
    fetchHistoryAfterDate(date: NSDate):NSPersistentHistoryChangeRequest;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest/2892337-fetchhistoryaftertoken
    fetchHistoryAfterToken(token: NSPersistentHistoryToken):NSPersistentHistoryChangeRequest;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest/2892344-fetchhistoryaftertransaction
    fetchHistoryAfterTransaction(transaction: NSPersistentHistoryTransaction):NSPersistentHistoryChangeRequest;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest/3240592-fetchhistorywithfetchrequest
    fetchHistoryWithFetchRequest(fetchRequest: NSFetchRequest):NSPersistentHistoryChangeRequest;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest/2892338-deletehistorybeforedate
    deleteHistoryBeforeDate(date: NSDate):NSPersistentHistoryChangeRequest;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest/2892340-deletehistorybeforetoken
    deleteHistoryBeforeToken(token: NSPersistentHistoryToken):NSPersistentHistoryChangeRequest;
    // https://developer.apple.com/documentation/coredata/nspersistenthistorychangerequest/2892345-deletehistorybeforetransaction
    deleteHistoryBeforeTransaction(transaction: NSPersistentHistoryTransaction):NSPersistentHistoryChangeRequest;
    //
    alloc():NSPersistentHistoryChangeRequest;
    //
    init():NSPersistentHistoryChangeRequest;
  }
}

declare const NSPersistentHistoryChangeRequest: cocoascript.NSPersistentHistoryChangeRequest;
declare namespace cocoascript {
  /**
   * The result of a request to fetch persistent history.
   * https://developer.apple.com/documentation/coredata/nspersistenthistoryresult
   */
  interface NSPersistentHistoryResult extends NSPersistentStoreResult {
    // https://developer.apple.com/documentation/coredata/nspersistenthistoryresult/2892350-result
    result(): id;
    setResult(value: id): void;
    // https://developer.apple.com/documentation/coredata/nspersistenthistoryresult/2892356-resulttype
    resultType(): NSPersistentHistoryResultType;
    setResultType(value: NSPersistentHistoryResultType): void;
    //
    alloc():NSPersistentHistoryResult;
    //
    init():NSPersistentHistoryResult;
  }
}

declare const NSPersistentHistoryResult: cocoascript.NSPersistentHistoryResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainerschemainitializationoptions
  type NSPersistentCloudKitContainerSchemaInitializationOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainereventresulttype
  type NSPersistentCloudKitContainerEventResultType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A request to insert a batch of data in a persistent store.
   * https://developer.apple.com/documentation/coredata/nsbatchinsertrequest
   */
  interface NSBatchInsertRequest extends NSPersistentStoreRequest {
    // https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/3618790-initwithentity
    initWithEntity_dictionaryHandler(entity: NSEntityDescription, handler: NSBatchInsertRequest):NSBatchInsertRequest;
    // https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/3618791-initwithentity
    initWithEntity_managedObjectHandler(entity: NSEntityDescription, handler: NSManagedObject):NSBatchInsertRequest;
    // https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/3618787-initwithentityname
    batchInsertRequestWithEntityName_dictionaryHandler(entityName: string | cocoascript.NSString, handler: NSBatchInsertRequest):NSBatchInsertRequest;
    // https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/3618788-initwithentityname
    batchInsertRequestWithEntityName_managedObjectHandler(entityName: string | cocoascript.NSString, handler: NSManagedObject):NSBatchInsertRequest;
    // https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/3333235-initwithentity
    initWithEntity_objects(entity: NSEntityDescription, dictionaries: NSBatchInsertRequest):NSBatchInsertRequest;
    // https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/3333237-initwithentityname
    initWithEntityName_objects(entityName: string | cocoascript.NSString, dictionaries: NSBatchInsertRequest):NSBatchInsertRequest;
    // https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/3333230-batchinsertrequestwithentityname
    batchInsertRequestWithEntityName_objects(entityName: string | cocoascript.NSString, dictionaries: NSBatchInsertRequest):NSBatchInsertRequest;
    // https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/3333233-init
    init():NSBatchInsertRequest;
    // https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/3618789-dictionaryhandler
    dictionaryHandler(): id;
    setDictionaryHandler(value: id): void;
    // https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/3333231-entity
    entity(): NSEntityDescription;
    setEntity(value: NSEntityDescription): void;
    // https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/3333232-entityname
    entityName(): string | cocoascript.NSString;
    setEntityName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/3618792-managedobjecthandler
    managedObjectHandler(): NSManagedObject;
    setManagedObjectHandler(value: NSManagedObject): void;
    // https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/3333238-objectstoinsert
    objectsToInsert(): id;
    setObjectsToInsert(value: id): void;
    // https://developer.apple.com/documentation/coredata/nsbatchinsertrequest/3333239-resulttype
    resultType(): NSBatchInsertRequestResultType;
    setResultType(value: NSBatchInsertRequestResultType): void;
    //
    alloc():NSBatchInsertRequest;
    //
    init():NSBatchInsertRequest;
  }
}

declare const NSBatchInsertRequest: cocoascript.NSBatchInsertRequest;
declare namespace cocoascript {
  /**
   * The result that Core Data returns when executing a batch-insertion request.
   * https://developer.apple.com/documentation/coredata/nsbatchinsertresult
   */
  interface NSBatchInsertResult extends NSPersistentStoreResult {
    // https://developer.apple.com/documentation/coredata/nsbatchinsertresult/3333246-result
    result(): id;
    setResult(value: id): void;
    // https://developer.apple.com/documentation/coredata/nsbatchinsertresult/3333247-resulttype
    resultType(): NSBatchInsertRequestResultType;
    setResultType(value: NSBatchInsertRequestResultType): void;
    //
    alloc():NSBatchInsertResult;
    //
    init():NSBatchInsertResult;
  }
}

declare const NSBatchInsertResult: cocoascript.NSBatchInsertResult;
declare namespace cocoascript {
  /**
   * A request to Core Data to do a batch update of data in a persistent store without loading any data into memory.
   * https://developer.apple.com/documentation/coredata/nsbatchupdaterequest
   */
  interface NSBatchUpdateRequest extends NSPersistentStoreRequest {
    // https://developer.apple.com/documentation/coredata/nsbatchupdaterequest/1506374-initwithentity
    initWithEntity(entity: NSEntityDescription):NSBatchUpdateRequest;
    // https://developer.apple.com/documentation/coredata/nsbatchupdaterequest/1506702-initwithentityname
    initWithEntityName(entityName: string | cocoascript.NSString):NSBatchUpdateRequest;
    // https://developer.apple.com/documentation/coredata/nsbatchupdaterequest/1526273-batchupdaterequestwithentityname
    batchUpdateRequestWithEntityName(entityName: string | cocoascript.NSString):NSBatchUpdateRequest;
    // https://developer.apple.com/documentation/coredata/nsbatchupdaterequest/1506664-entity
    entity(): NSEntityDescription;
    setEntity(value: NSEntityDescription): void;
    // https://developer.apple.com/documentation/coredata/nsbatchupdaterequest/1506796-entityname
    entityName(): string | cocoascript.NSString;
    setEntityName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nsbatchupdaterequest/1506477-includessubentities
    includesSubentities(): boolean;
    setIncludesSubentities(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsbatchupdaterequest/1506659-predicate
    predicate(): NSPredicate;
    setPredicate(value: NSPredicate): void;
    // https://developer.apple.com/documentation/coredata/nsbatchupdaterequest/1506582-propertiestoupdate
    propertiesToUpdate(): NSDictionary;
    setPropertiesToUpdate(value: NSDictionary): void;
    // https://developer.apple.com/documentation/coredata/nsbatchupdaterequest/1506350-resulttype
    resultType(): NSBatchUpdateRequestResultType;
    setResultType(value: NSBatchUpdateRequestResultType): void;
    //
    alloc():NSBatchUpdateRequest;
    //
    init():NSBatchUpdateRequest;
  }
}

declare const NSBatchUpdateRequest: cocoascript.NSBatchUpdateRequest;
declare namespace cocoascript {
  /**
   * The result returned when executing a batch update request.
   * https://developer.apple.com/documentation/coredata/nsbatchupdateresult
   */
  interface NSBatchUpdateResult extends NSPersistentStoreResult {
    // https://developer.apple.com/documentation/coredata/nsbatchupdateresult/1404946-result
    result(): id;
    setResult(value: id): void;
    // https://developer.apple.com/documentation/coredata/nsbatchupdateresult/1404900-resulttype
    resultType(): NSBatchUpdateRequestResultType;
    setResultType(value: NSBatchUpdateRequestResultType): void;
    //
    alloc():NSBatchUpdateResult;
    //
    init():NSBatchUpdateResult;
  }
}

declare const NSBatchUpdateResult: cocoascript.NSBatchUpdateResult;
declare namespace cocoascript {
  /**
   * A request that deletes objects in the SQLite persistent store without loading them into memory.
   * https://developer.apple.com/documentation/coredata/nsbatchdeleterequest
   */
  interface NSBatchDeleteRequest extends NSPersistentStoreRequest {
    // https://developer.apple.com/documentation/coredata/nsbatchdeleterequest/1506302-initwithfetchrequest
    initWithFetchRequest(fetch: NSFetchRequest):NSBatchDeleteRequest;
    // https://developer.apple.com/documentation/coredata/nsbatchdeleterequest/1506746-initwithobjectids
    initWithObjectIDs(objects: NSManagedObjectID):NSBatchDeleteRequest;
    // https://developer.apple.com/documentation/coredata/nsbatchdeleterequest/1506206-fetchrequest
    fetchRequest(): NSFetchRequest;
    setFetchRequest(value: NSFetchRequest): void;
    // https://developer.apple.com/documentation/coredata/nsbatchdeleterequest/1506389-resulttype
    resultType(): NSBatchDeleteRequestResultType;
    setResultType(value: NSBatchDeleteRequestResultType): void;
    //
    alloc():NSBatchDeleteRequest;
    //
    init():NSBatchDeleteRequest;
  }
}

declare const NSBatchDeleteRequest: cocoascript.NSBatchDeleteRequest;
declare namespace cocoascript {
  /**
   * An object that describes the result of a batch delete request.
   * https://developer.apple.com/documentation/coredata/nsbatchdeleteresult
   */
  interface NSBatchDeleteResult extends NSPersistentStoreResult {
    // https://developer.apple.com/documentation/coredata/nsbatchdeleteresult/1404922-result
    result(): id;
    setResult(value: id): void;
    // https://developer.apple.com/documentation/coredata/nsbatchdeleteresult/1404941-resulttype
    resultType(): NSBatchDeleteRequestResultType;
    setResultType(value: NSBatchDeleteRequestResultType): void;
    //
    alloc():NSBatchDeleteResult;
    //
    init():NSBatchDeleteResult;
  }
}

declare const NSBatchDeleteResult: cocoascript.NSBatchDeleteResult;
declare namespace cocoascript {
  /**
   * A model instance that specifies how to map a model from a source to a destination managed object model.
   * https://developer.apple.com/documentation/coredata/nsmappingmodel
   */
  interface NSMappingModel extends NSObject {
    // https://developer.apple.com/documentation/coredata/nsmappingmodel/1506930-mappingmodelfrombundles
    mappingModelFromBundles_forSourceModel_destinationModel(bundles: NSBundle, sourceModel: NSManagedObjectModel, destinationModel: NSManagedObjectModel):NSMappingModel;
    // https://developer.apple.com/documentation/coredata/nsmappingmodel/1506468-inferredmappingmodelforsourcemod
    inferredMappingModelForSourceModel_destinationModel_error(sourceModel: NSManagedObjectModel, destinationModel: NSManagedObjectModel, error: NSError):NSMappingModel;
    // https://developer.apple.com/documentation/coredata/nsmappingmodel/1506304-initwithcontentsofurl
    initWithContentsOfURL(url: NSURL):NSMappingModel;
    // https://developer.apple.com/documentation/coredata/nsmappingmodel/1506196-entitymappings
    entityMappings(): NSEntityMapping;
    setEntityMappings(value: NSEntityMapping): void;
    // https://developer.apple.com/documentation/coredata/nsmappingmodel/1506179-entitymappingsbyname
    entityMappingsByName(): NSEntityMapping;
    setEntityMappingsByName(value: NSEntityMapping): void;
    //
    alloc():NSMappingModel;
    //
    init():NSMappingModel;
  }
}

declare const NSMappingModel: cocoascript.NSMappingModel;
declare namespace cocoascript {
  /**
   * A migration manager instance that performs a migration of data from one persistent store to another using a given mapping model.
   * https://developer.apple.com/documentation/coredata/nsmigrationmanager
   */
  interface NSMigrationManager extends NSObject {
    // https://developer.apple.com/documentation/coredata/nsmigrationmanager/1417583-initwithsourcemodel
    initWithSourceModel_destinationModel(sourceModel: NSManagedObjectModel, destinationModel: NSManagedObjectModel):NSMigrationManager;
    // https://developer.apple.com/documentation/coredata/nsmigrationmanager/1417578-destinationcontext
    destinationContext(): NSManagedObjectContext;
    setDestinationContext(value: NSManagedObjectContext): void;
    // https://developer.apple.com/documentation/coredata/nsmigrationmanager/1417610-destinationmodel
    destinationModel(): NSManagedObjectModel;
    setDestinationModel(value: NSManagedObjectModel): void;
    // https://developer.apple.com/documentation/coredata/nsmigrationmanager/1417600-mappingmodel
    mappingModel(): NSMappingModel;
    setMappingModel(value: NSMappingModel): void;
    // https://developer.apple.com/documentation/coredata/nsmigrationmanager/1417576-sourcecontext
    sourceContext(): NSManagedObjectContext;
    setSourceContext(value: NSManagedObjectContext): void;
    // https://developer.apple.com/documentation/coredata/nsmigrationmanager/1417592-sourcemodel
    sourceModel(): NSManagedObjectModel;
    setSourceModel(value: NSManagedObjectModel): void;
    // https://developer.apple.com/documentation/coredata/nsmigrationmanager/1417598-destinationentityforentitymappin
    destinationEntityForEntityMapping(mEntity: NSEntityMapping):NSEntityDescription;
    // https://developer.apple.com/documentation/coredata/nsmigrationmanager/1417596-sourceentityforentitymapping
    sourceEntityForEntityMapping(mEntity: NSEntityMapping):NSEntityDescription;
    // https://developer.apple.com/documentation/coredata/nsmigrationmanager/1417588-userinfo
    userInfo(): NSDictionary;
    setUserInfo(value: NSDictionary): void;
    // https://developer.apple.com/documentation/coredata/nsmigrationmanager/1417606-usesstorespecificmigrationmanage
    usesStoreSpecificMigrationManager(): boolean;
    setUsesStoreSpecificMigrationManager(value: boolean): void;
    // https://developer.apple.com/documentation/coredata/nsmigrationmanager/1417604-associatesourceinstance
    associateSourceInstance_withDestinationInstance_forEntityMapping(sourceInstance: NSManagedObject, destinationInstance: NSManagedObject, entityMapping: NSEntityMapping):void;
    // https://developer.apple.com/documentation/coredata/nsmigrationmanager/1417594-destinationinstancesforentitymap
    destinationInstancesForEntityMappingNamed_sourceInstances(mappingName: string | cocoascript.NSString, sourceInstances: NSManagedObject):NSManagedObject;
    // https://developer.apple.com/documentation/coredata/nsmigrationmanager/1417580-sourceinstancesforentitymappingn
    sourceInstancesForEntityMappingNamed_destinationInstances(mappingName: string | cocoascript.NSString, destinationInstances: NSManagedObject):NSManagedObject;
    // https://developer.apple.com/documentation/coredata/nsmigrationmanager/1417584-migratestorefromurl
    migrateStoreFromURL_type_options_withMappingModel_toDestinationURL_destinationType_destinationOptions_error(sourceURL: NSURL, sStoreType: string | cocoascript.NSString, sOptions: NSDictionary, mappings: NSMappingModel, dURL: NSURL, dStoreType: string | cocoascript.NSString, dOptions: NSDictionary, error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nsmigrationmanager/1417602-migrationprogress
    migrationProgress(): number;
    setMigrationProgress(value: number): void;
    // https://developer.apple.com/documentation/coredata/nsmigrationmanager/1417582-currententitymapping
    currentEntityMapping(): NSEntityMapping;
    setCurrentEntityMapping(value: NSEntityMapping): void;
    // https://developer.apple.com/documentation/coredata/nsmigrationmanager/1417608-cancelmigrationwitherror
    cancelMigrationWithError(error: NSError):void;
    // https://developer.apple.com/documentation/coredata/nsmigrationmanager/1417590-reset
    reset():void;
    //
    alloc():NSMigrationManager;
    //
    init():NSMigrationManager;
  }
}

declare const NSMigrationManager: cocoascript.NSMigrationManager;
declare namespace cocoascript {
  /**
   * A policy instance that customizes the migration process for an entity mapping.
   * https://developer.apple.com/documentation/coredata/nsentitymigrationpolicy
   */
  interface NSEntityMigrationPolicy extends NSObject {
    // https://developer.apple.com/documentation/coredata/nsentitymigrationpolicy/1423785-beginentitymapping
    beginEntityMapping_manager_error(mapping: NSEntityMapping, manager: NSMigrationManager, error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nsentitymigrationpolicy/1423801-createdestinationinstancesforsou
    createDestinationInstancesForSourceInstance_entityMapping_manager_error(sInstance: NSManagedObject, mapping: NSEntityMapping, manager: NSMigrationManager, error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nsentitymigrationpolicy/1423805-endinstancecreationforentitymapp
    endInstanceCreationForEntityMapping_manager_error(mapping: NSEntityMapping, manager: NSMigrationManager, error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nsentitymigrationpolicy/1423783-createrelationshipsfordestinatio
    createRelationshipsForDestinationInstance_entityMapping_manager_error(dInstance: NSManagedObject, mapping: NSEntityMapping, manager: NSMigrationManager, error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nsentitymigrationpolicy/1423793-endrelationshipcreationforentity
    endRelationshipCreationForEntityMapping_manager_error(mapping: NSEntityMapping, manager: NSMigrationManager, error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nsentitymigrationpolicy/1423791-performcustomvalidationforentity
    performCustomValidationForEntityMapping_manager_error(mapping: NSEntityMapping, manager: NSMigrationManager, error: NSError):boolean;
    // https://developer.apple.com/documentation/coredata/nsentitymigrationpolicy/1423787-endentitymapping
    endEntityMapping_manager_error(mapping: NSEntityMapping, manager: NSMigrationManager, error: NSError):boolean;
    //
    alloc():NSEntityMigrationPolicy;
    //
    init():NSEntityMigrationPolicy;
  }
}

declare const NSEntityMigrationPolicy: cocoascript.NSEntityMigrationPolicy;
// https://developer.apple.com/documentation/coredata/nsmigrationmanagerkey
declare const NSMigrationManagerKey: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nsmigrationsourceobjectkey
declare const NSMigrationSourceObjectKey: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nsmigrationdestinationobjectkey
declare const NSMigrationDestinationObjectKey: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nsmigrationentitymappingkey
declare const NSMigrationEntityMappingKey: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nsmigrationpropertymappingkey
declare const NSMigrationPropertyMappingKey: cocoascript.NSString;
// https://developer.apple.com/documentation/coredata/nsmigrationentitypolicykey
declare const NSMigrationEntityPolicyKey: cocoascript.NSString;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coredata/nsentitymappingtype
  type NSEntityMappingType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A mapping instance that specifies in a model how to map from a property in a source entity to a property in a destination entity.
   * https://developer.apple.com/documentation/coredata/nspropertymapping
   */
  interface NSPropertyMapping extends NSObject {
    // https://developer.apple.com/documentation/coredata/nspropertymapping/1506748-name
    name(): string | cocoascript.NSString;
    setName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/coredata/nspropertymapping/1506819-valueexpression
    valueExpression(): NSExpression;
    setValueExpression(value: NSExpression): void;
    // https://developer.apple.com/documentation/coredata/nspropertymapping/1506516-userinfo
    userInfo(): NSDictionary;
    setUserInfo(value: NSDictionary): void;
    //
    alloc():NSPropertyMapping;
    //
    init():NSPropertyMapping;
  }
}

declare const NSPropertyMapping: cocoascript.NSPropertyMapping;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coredata/nsmergepolicytype
  type NSMergePolicyType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coredata/nspersistentstoreubiquitoustransitiontype
  type NSPersistentStoreUbiquitousTransitionType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coredata/nspersistenthistoryresulttype
  type NSPersistentHistoryResultType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coredata/nsbatchinsertrequestresulttype
  type NSBatchInsertRequestResultType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coredata/nsbatchupdaterequestresulttype
  type NSBatchUpdateRequestResultType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coredata/nsbatchdeleterequestresulttype
  type NSBatchDeleteRequestResultType = cocoascript.NSUInteger;
}
