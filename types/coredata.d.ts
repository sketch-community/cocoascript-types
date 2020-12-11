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
    executeFetchRequest_error(request: cocoascript.NSFetchRequest, error: cocoascript.NSError):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506868-countforfetchrequest
    countForFetchRequest_error(request: cocoascript.NSFetchRequest, error: cocoascript.NSError):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506789-objectregisteredforid
    objectRegisteredForID(objectID: cocoascript.NSManagedObjectID):cocoascript.NSManagedObject;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506197-objectwithid
    objectWithID(objectID: cocoascript.NSManagedObjectID):cocoascript.NSManagedObject;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506686-existingobjectwithid
    existingObjectWithID_error(objectID: cocoascript.NSManagedObjectID, error: cocoascript.NSError):cocoascript.NSManagedObject;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506493-registeredobjects
    registeredObjects(): cocoascript.NSManagedObject;
    setRegisteredObjects(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506834-executerequest
    executeRequest_error(request: cocoascript.NSPersistentStoreRequest, error: cocoascript.NSError):cocoascript.NSPersistentStoreResult;
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
    obtainPermanentIDsForObjects_error(objects: cocoascript.NSManagedObject, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506843-detectconflictsforobject
    detectConflictsForObject(object: cocoascript.NSManagedObject):void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506224-refreshobject
    refreshObject_mergeChanges(object: cocoascript.NSManagedObject, flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506661-processpendingchanges
    processPendingChanges():void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontext/1506849-observevalueforkeypath
    observeValueForKeyPath_ofObject_change_context(keyPath: cocoascript.NSString, object: cocoascript.NSManagedObjectContext, change: cocoascript.NSString, context: void):void;
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
    setQueryGenerationFromToken_error(generation: cocoascript.NSQueryGenerationToken, error: cocoascript.NSError):cocoascript.BOOL;
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
    save(error: cocoascript.NSError):cocoascript.BOOL;
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
declare namespace cocoascript {
  /**
   * A base class that implements the behavior required of a Core Data model object.
   * doc://com.apple.documentation/documentation/coredata/nsmanagedobject
   */
  interface NSManagedObject extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506357-initwithentity
    initWithEntity_insertIntoManagedObjectContext(entity: cocoascript.NSEntityDescription, context: cocoascript.NSManagedObjectContext):cocoascript.NSManagedObject;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1640602-initwithcontext
    initWithContext(moc: cocoascript.NSManagedObjectContext):cocoascript.NSManagedObject;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506562-entity
    entity(): cocoascript.NSEntityDescription;
    setEntity(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506848-objectid
    objectID(): cocoascript.NSManagedObjectID;
    setObjectID(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506677-managedobjectcontext
    managedObjectContext(): cocoascript.NSManagedObjectContext;
    setManagedObjectContext(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506654-haschanges
    hasChanges(): cocoascript.BOOL;
    setHasChanges(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506281-inserted
    inserted(): cocoascript.BOOL;
    setInserted(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506867-updated
    updated(): cocoascript.BOOL;
    setUpdated(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506681-deleted
    deleted(): cocoascript.BOOL;
    setDeleted(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506837-fault
    fault(): cocoascript.BOOL;
    setFault(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506720-faultingstate
    faultingState(): cocoascript.NSUInteger;
    setFaultingState(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506973-hasfaultforrelationshipnamed
    hasFaultForRelationshipNamed(key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506240-haspersistentchangedvalues
    hasPersistentChangedValues(): cocoascript.BOOL;
    setHasPersistentChangedValues(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506727-contextshouldignoreunmodeledprop
    contextShouldIgnoreUnmodeledPropertyChanges(): cocoascript.BOOL;
    setContextShouldIgnoreUnmodeledPropertyChanges(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506424-awakefromfetch
    awakeFromFetch():void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506548-awakefrominsert
    awakeFromInsert():void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506861-awakefromsnapshotevents
    awakeFromSnapshotEvents(flags: cocoascript.NSSnapshotEventType):void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506775-changedvalues
    changedValues():cocoascript.NSManagedObject;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506472-changedvaluesforcurrentevent
    changedValuesForCurrentEvent():cocoascript.NSManagedObject;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506771-committedvaluesforkeys
    committedValuesForKeys(keys: cocoascript.NSString):cocoascript.NSManagedObject;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506674-preparefordeletion
    prepareForDeletion():void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506209-willsave
    willSave():void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506585-didsave
    didSave():void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506537-willturnintofault
    willTurnIntoFault():void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506470-didturnintofault
    didTurnIntoFault():void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506613-valueforkey
    valueForKey(key: cocoascript.NSString):cocoascript.NSManagedObject;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506397-setvalue
    setValue_forKey(value: cocoascript.NSManagedObject, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506728-primitivevalueforkey
    primitiveValueForKey(key: cocoascript.NSString):cocoascript.NSManagedObject;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506960-setprimitivevalue
    setPrimitiveValue_forKey(value: cocoascript.NSManagedObject, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506201-objectidsforrelationshipnamed
    objectIDsForRelationshipNamed(key: cocoascript.NSString):cocoascript.NSManagedObjectID;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506776-validatevalue
    validateValue_forKey_error(value: cocoascript.NSManagedObject, key: cocoascript.NSString, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506195-validatefordelete
    validateForDelete(error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506683-validateforinsert
    validateForInsert(error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506998-validateforupdate
    validateForUpdate(error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsvalidationkeyerrorkey
    NSValidationKeyErrorKey(): cocoascript.const;
    setNSValidationKeyErrorKey(): void;
    // doc://com.apple.documentation/documentation/coredata/nsvalidationobjecterrorkey
    NSValidationObjectErrorKey(): cocoascript.const;
    setNSValidationObjectErrorKey(): void;
    // doc://com.apple.documentation/documentation/coredata/nsvalidationpredicateerrorkey
    NSValidationPredicateErrorKey(): cocoascript.const;
    setNSValidationPredicateErrorKey(): void;
    // doc://com.apple.documentation/documentation/coredata/nsvalidationvalueerrorkey
    NSValidationValueErrorKey(): cocoascript.const;
    setNSValidationValueErrorKey(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506865-didaccessvalueforkey
    didAccessValueForKey(key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506210-observationinfo
    observationInfo():void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506535-setobservationinfo
    setObservationInfo(inObservationInfo: void):void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1507001-willaccessvalueforkey
    willAccessValueForKey(key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506976-didchangevalueforkey
    didChangeValueForKey(key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506936-didchangevalueforkey
    didChangeValueForKey_withSetMutation_usingObjects(inKey: cocoascript.NSString, inMutationKind: cocoascript.NSKeyValueSetMutationKind, inObjects: cocoascript.NSSet):void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506229-willchangevalueforkey
    willChangeValueForKey(key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506801-willchangevalueforkey
    willChangeValueForKey_withSetMutation_usingObjects(inKey: cocoascript.NSString, inMutationKind: cocoascript.NSKeyValueSetMutationKind, inObjects: cocoascript.NSSet):void;
    //
    alloc():cocoascript.NSManagedObject;
    //
    init():cocoascript.NSManagedObject;
  }
}

declare const NSManagedObject: cocoascript.NSManagedObject;
declare namespace cocoascript {
  /**
   * A description of an entity in Core Data.
   * doc://com.apple.documentation/documentation/coredata/nsentitydescription
   */
  interface NSEntityDescription extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425101-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425121-managedobjectmodel
    managedObjectModel(): cocoascript.NSManagedObjectModel;
    setManagedObjectModel(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425131-managedobjectclassname
    managedObjectClassName(): cocoascript.NSString;
    setManagedObjectClassName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425135-renamingidentifier
    renamingIdentifier(): cocoascript.NSString;
    setRenamingIdentifier(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425097-abstract
    abstract(): cocoascript.BOOL;
    setAbstract(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425117-userinfo
    userInfo(): cocoascript.NSDictionary;
    setUserInfo(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/2892364-corespotlightdisplaynameexpressi
    coreSpotlightDisplayNameExpression(): cocoascript.NSExpression;
    setCoreSpotlightDisplayNameExpression(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425123-subentitiesbyname
    subentitiesByName(): cocoascript.NSEntityDescription;
    setSubentitiesByName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425104-subentities
    subentities(): cocoascript.NSEntityDescription;
    setSubentities(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425129-superentity
    superentity(): cocoascript.NSEntityDescription;
    setSuperentity(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425113-iskindofentity
    isKindOfEntity(entity: cocoascript.NSEntityDescription):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425137-propertiesbyname
    propertiesByName(): cocoascript.NSPropertyDescription;
    setPropertiesByName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425125-properties
    properties(): cocoascript.NSPropertyDescription;
    setProperties(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425099-attributesbyname
    attributesByName(): cocoascript.NSAttributeDescription;
    setAttributesByName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425106-relationshipsbyname
    relationshipsByName(): cocoascript.NSRelationshipDescription;
    setRelationshipsByName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425127-relationshipswithdestinationenti
    relationshipsWithDestinationEntity(entity: cocoascript.NSEntityDescription):cocoascript.NSRelationshipDescription;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425133-versionhash
    versionHash(): cocoascript.NSData;
    setVersionHash(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425119-versionhashmodifier
    versionHashModifier(): cocoascript.NSString;
    setVersionHashModifier(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/2887059-indexes
    indexes(): cocoascript.NSFetchIndexDescription;
    setIndexes(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425115-compoundindexes
    compoundIndexes(): cocoascript.id;
    setCompoundIndexes(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitydescription/1425095-uniquenessconstraints
    uniquenessConstraints(): cocoascript.id;
    setUniquenessConstraints(): void;
    //
    alloc():cocoascript.NSEntityDescription;
    //
    init():cocoascript.NSEntityDescription;
  }
}

declare const NSEntityDescription: cocoascript.NSEntityDescription;
declare namespace cocoascript {
  /**
   * A description of search criteria used to retrieve data from a persistent store.
   * doc://com.apple.documentation/documentation/coredata/nsfetchrequest
   */
  interface NSFetchRequest extends NSPersistentStoreRequest {
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506679-init
    init():cocoascript.NSFetchRequest;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506802-initwithentityname
    initWithEntityName(entityName: cocoascript.NSString):cocoascript.NSFetchRequest;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506233-entityname
    entityName(): cocoascript.NSString;
    setEntityName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506979-entity
    entity(): cocoascript.NSEntityDescription;
    setEntity(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506366-includessubentities
    includesSubentities(): cocoascript.BOOL;
    setIncludesSubentities(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506638-predicate
    predicate(): cocoascript.NSPredicate;
    setPredicate(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506622-fetchlimit
    fetchLimit(): cocoascript.NSUInteger;
    setFetchLimit(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506770-fetchoffset
    fetchOffset(): cocoascript.NSUInteger;
    setFetchOffset(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506558-fetchbatchsize
    fetchBatchSize(): cocoascript.NSUInteger;
    setFetchBatchSize(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506518-affectedstores
    affectedStores(): cocoascript.NSPersistentStore;
    setAffectedStores(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506262-sortdescriptors
    sortDescriptors(): cocoascript.NSSortDescriptor;
    setSortDescriptors(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506813-relationshipkeypathsforprefetchi
    relationshipKeyPathsForPrefetching(): cocoascript.NSString;
    setRelationshipKeyPathsForPrefetching(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506189-resulttype
    resultType(): cocoascript.NSFetchRequestResultType;
    setResultType(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506724-includespendingchanges
    includesPendingChanges(): cocoascript.BOOL;
    setIncludesPendingChanges(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506851-propertiestofetch
    propertiesToFetch(): cocoascript.NSArray;
    setPropertiesToFetch(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506344-returnsdistinctresults
    returnsDistinctResults(): cocoascript.BOOL;
    setReturnsDistinctResults(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506387-includespropertyvalues
    includesPropertyValues(): cocoascript.BOOL;
    setIncludesPropertyValues(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506440-shouldrefreshrefetchedobjects
    shouldRefreshRefetchedObjects(): cocoascript.BOOL;
    setShouldRefreshRefetchedObjects(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506756-returnsobjectsasfaults
    returnsObjectsAsFaults(): cocoascript.BOOL;
    setReturnsObjectsAsFaults(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506191-propertiestogroupby
    propertiesToGroupBy(): cocoascript.NSArray;
    setPropertiesToGroupBy(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1506429-havingpredicate
    havingPredicate(): cocoascript.NSPredicate;
    setHavingPredicate(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequest/1640594-execute
    execute(error: cocoascript.NSError):cocoascript.NSArray;
    //
    alloc():cocoascript.NSFetchRequest;
    //
    init():cocoascript.NSFetchRequest;
  }
}

declare const NSFetchRequest: cocoascript.NSFetchRequest;
declare namespace cocoascript {
  /**
   * A programmatic representation of the
   * doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel
   */
  interface NSManagedObjectModel extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506225-initwithcontentsofurl
    initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.NSManagedObjectModel;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506410-init
    init():cocoascript.NSManagedObjectModel;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506318-entities
    entities(): cocoascript.NSEntityDescription;
    setEntities(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506203-entitiesbyname
    entitiesByName(): cocoascript.NSEntityDescription;
    setEntitiesByName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506804-configurations
    configurations(): cocoascript.NSString;
    setConfigurations(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506693-entitiesforconfiguration
    entitiesForConfiguration(configuration: cocoascript.NSString):cocoascript.NSEntityDescription;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506287-setentities
    setEntities_forConfiguration(entities: cocoascript.NSEntityDescription, configuration: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506580-fetchrequesttemplatesbyname
    fetchRequestTemplatesByName(): cocoascript.NSFetchRequest;
    setFetchRequestTemplatesByName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506369-fetchrequesttemplateforname
    fetchRequestTemplateForName(name: cocoascript.NSString):cocoascript.NSFetchRequest;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506422-fetchrequestfromtemplatewithname
    fetchRequestFromTemplateWithName_substitutionVariables(name: cocoascript.NSString, variables: cocoascript.NSString):cocoascript.NSFetchRequest;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506695-setfetchrequesttemplate
    setFetchRequestTemplate_forName(fetchRequestTemplate: cocoascript.NSFetchRequest, name: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506846-localizationdictionary
    localizationDictionary(): cocoascript.NSString;
    setLocalizationDictionary(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506940-isconfiguration
    isConfiguration_compatibleWithStoreMetadata(configuration: cocoascript.NSString, metadata: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506992-entityversionhashesbyname
    entityVersionHashesByName(): cocoascript.NSData;
    setEntityVersionHashesByName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506268-versionidentifiers
    versionIdentifiers(): cocoascript.NSSet;
    setVersionIdentifiers(): void;
    //
    alloc():cocoascript.NSManagedObjectModel;
    //
    init():cocoascript.NSManagedObjectModel;
  }
}

declare const NSManagedObjectModel: cocoascript.NSManagedObjectModel;
declare namespace cocoascript {
  /**
   * A description of a property of a Core Data entity.
   * doc://com.apple.documentation/documentation/coredata/nspropertydescription
   */
  interface NSPropertyDescription extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506745-entity
    entity(): cocoascript.NSEntityDescription;
    setEntity(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506669-indexed
    indexed(): cocoascript.BOOL;
    setIndexed(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506735-optional
    optional(): cocoascript.BOOL;
    setOptional(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506766-transient
    transient(): cocoascript.BOOL;
    setTransient(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506759-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506833-userinfo
    userInfo(): cocoascript.NSDictionary;
    setUserInfo(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506842-validationpredicates
    validationPredicates(): cocoascript.NSPredicate;
    setValidationPredicates(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506886-validationwarnings
    validationWarnings(): cocoascript.NSArray;
    setValidationWarnings(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506852-setvalidationpredicates
    setValidationPredicates_withValidationWarnings(validationPredicates: cocoascript.NSPredicate, validationWarnings: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506198-versionhash
    versionHash(): cocoascript.NSData;
    setVersionHash(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506214-versionhashmodifier
    versionHashModifier(): cocoascript.NSString;
    setVersionHashModifier(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506641-renamingidentifier
    renamingIdentifier(): cocoascript.NSString;
    setRenamingIdentifier(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506784-indexedbyspotlight
    indexedBySpotlight(): cocoascript.BOOL;
    setIndexedBySpotlight(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertydescription/1506260-storedinexternalrecord
    storedInExternalRecord(): cocoascript.BOOL;
    setStoredInExternalRecord(): void;
    //
    alloc():cocoascript.NSPropertyDescription;
    //
    init():cocoascript.NSPropertyDescription;
  }
}

declare const NSPropertyDescription: cocoascript.NSPropertyDescription;
declare namespace cocoascript {
  /**
   * Description of an Index Element
   * doc://com.apple.documentation/documentation/coredata/nsfetchindexelementdescription
   */
  interface NSFetchIndexElementDescription extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsfetchindexelementdescription/2887043-initwithproperty
    initWithProperty_collationType(property: cocoascript.NSPropertyDescription, collationType: cocoascript.NSFetchIndexElementType):cocoascript.NSFetchIndexElementDescription;
    // doc://com.apple.documentation/documentation/coredata/nsfetchindexelementdescription/2887048-collationtype
    collationType(): cocoascript.NSFetchIndexElementType;
    setCollationType(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchindexelementdescription/2887047-indexdescription
    indexDescription(): cocoascript.NSFetchIndexDescription;
    setIndexDescription(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchindexelementdescription/2887051-ascending
    ascending(): cocoascript.BOOL;
    setAscending(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchindexelementdescription/2887049-property
    property(): cocoascript.NSPropertyDescription;
    setProperty(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchindexelementdescription/2887045-propertyname
    propertyName(): cocoascript.NSString;
    setPropertyName(): void;
    //
    alloc():cocoascript.NSFetchIndexElementDescription;
    //
    init():cocoascript.NSFetchIndexElementDescription;
  }
}

declare const NSFetchIndexElementDescription: cocoascript.NSFetchIndexElementDescription;
declare namespace cocoascript {
  /**
   * The description of the index.
   * doc://com.apple.documentation/documentation/coredata/nsfetchindexdescription
   */
  interface NSFetchIndexDescription extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsfetchindexdescription/2887053-initwithname
    initWithName_elements(name: cocoascript.NSString, elements: cocoascript.NSFetchIndexElementDescription):cocoascript.NSFetchIndexDescription;
    // doc://com.apple.documentation/documentation/coredata/nsfetchindexdescription/2887054-elements
    elements(): cocoascript.NSFetchIndexElementDescription;
    setElements(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchindexdescription/2887055-entity
    entity(): cocoascript.NSEntityDescription;
    setEntity(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchindexdescription/2887056-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchindexdescription/2887058-partialindexpredicate
    partialIndexPredicate(): cocoascript.NSPredicate;
    setPartialIndexPredicate(): void;
    //
    alloc():cocoascript.NSFetchIndexDescription;
    //
    init():cocoascript.NSFetchIndexDescription;
  }
}

declare const NSFetchIndexDescription: cocoascript.NSFetchIndexDescription;
declare namespace cocoascript {
  /**
   * An abstract protocol used with parameterized fetch requests.
   * doc://com.apple.documentation/documentation/coredata/nsfetchrequestresult
   */
  interface NSFetchRequestResult extends NSObject {
  }
}
declare namespace cocoascript {
  /**
   * A delegate protocol that describes the methods that will be called by the associated fetched results controller when the fetch results have changed.
   * doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontrollerdelegate
   */
  interface NSFetchedResultsControllerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontrollerdelegate/3235742-controller
    controller_didChangeContentWithSnapshot(controller: cocoascript.NSFetchedResultsController, snapshot: cocoascript.NSManagedObjectID):void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontrollerdelegate/3235741-controller
    controller_didChangeContentWithDifference(controller: cocoascript.NSFetchedResultsController, diff: cocoascript.NSManagedObjectID):void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontrollerdelegate/1622295-controllerwillchangecontent
    controllerWillChangeContent(controller: cocoascript.NSFetchedResultsController):void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontrollerdelegate/1622296-controller
    controller_didChangeObject_atIndexPath_forChangeType_newIndexPath(controller: cocoascript.NSFetchedResultsController, anObject: cocoascript.NSFetchedResultsControllerDelegate, indexPath: cocoascript.NSIndexPath, type: cocoascript.NSFetchedResultsChangeType, newIndexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontrollerdelegate/1622298-controller
    controller_didChangeSection_atIndex_forChangeType(controller: cocoascript.NSFetchedResultsController, sectionInfo: cocoascript.NSFetchedResultsSectionInfo, sectionIndex: cocoascript.NSUInteger, type: cocoascript.NSFetchedResultsChangeType):void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontrollerdelegate/1622290-controllerdidchangecontent
    controllerDidChangeContent(controller: cocoascript.NSFetchedResultsController):void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontrollerdelegate/1622286-controller
    controller_sectionIndexTitleForSectionName(controller: cocoascript.NSFetchedResultsController, sectionName: cocoascript.NSString):cocoascript.NSString;
  }
}
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
declare namespace cocoascript {
  /**
   * A token that indicates which generation of the persistent store is being accessed.
   * doc://com.apple.documentation/documentation/coredata/nsquerygenerationtoken
   */
  interface NSQueryGenerationToken extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsquerygenerationtoken/1640578-currentquerygenerationtoken
    currentQueryGenerationToken(): cocoascript.NSQueryGenerationToken;
    setCurrentQueryGenerationToken(): void;
    //
    alloc():cocoascript.NSQueryGenerationToken;
    //
    init():cocoascript.NSQueryGenerationToken;
  }
}

declare const NSQueryGenerationToken: cocoascript.NSQueryGenerationToken;
declare namespace cocoascript {
  /**
   * A description object used to create and load a persistent store.
   * doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription
   */
  interface NSPersistentStoreDescription extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640563-initwithurl
    initWithURL(url: cocoascript.NSURL):cocoascript.NSPersistentStoreDescription;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640616-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640634-configuration
    configuration(): cocoascript.NSString;
    setConfiguration(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640587-timeout
    timeout(): cocoascript.NSTimeInterval;
    setTimeout(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640609-type
    type(): cocoascript.NSString;
    setType(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640626-readonly
    readOnly(): cocoascript.BOOL;
    setReadOnly(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640599-shouldaddstoreasynchronously
    shouldAddStoreAsynchronously(): cocoascript.BOOL;
    setShouldAddStoreAsynchronously(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640623-shouldinfermappingmodelautomatic
    shouldInferMappingModelAutomatically(): cocoascript.BOOL;
    setShouldInferMappingModelAutomatically(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640566-shouldmigratestoreautomatically
    shouldMigrateStoreAutomatically(): cocoascript.BOOL;
    setShouldMigrateStoreAutomatically(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640574-setoption
    setOption_forKey(option: cocoascript.NSObject, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640598-setvalue
    setValue_forPragmaNamed(value: cocoascript.NSObject, name: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640571-options
    options(): cocoascript.NSObject;
    setOptions(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/1640614-sqlitepragmas
    sqlitePragmas(): cocoascript.NSObject;
    setSqlitePragmas(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoredescription/3141672-cloudkitcontaineroptions
    cloudKitContainerOptions(): cocoascript.NSPersistentCloudKitContainerOptions;
    setCloudKitContainerOptions(): void;
    //
    alloc():cocoascript.NSPersistentStoreDescription;
    //
    init():cocoascript.NSPersistentStoreDescription;
  }
}

declare const NSPersistentStoreDescription: cocoascript.NSPersistentStoreDescription;
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
declare namespace cocoascript {
  /**
   * A bookmark for keeping track the most recent history that you’ve processed.
   * doc://com.apple.documentation/documentation/coredata/nspersistenthistorytoken
   */
  interface NSPersistentHistoryToken extends NSObject {
    //
    alloc():cocoascript.NSPersistentHistoryToken;
    //
    init():cocoascript.NSPersistentHistoryToken;
  }
}

declare const NSPersistentHistoryToken: cocoascript.NSPersistentHistoryToken;
declare namespace cocoascript {
  /**
   * A set of changes in the persistent history based on a context save or batch operation.
   * doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction
   */
  interface NSPersistentHistoryTransaction extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/2894946-objectidnotification
    objectIDNotification():cocoascript.NSNotification;
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/3240596-fetchrequest
    fetchRequest(): cocoascript.NSFetchRequest;
    setFetchRequest(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/3240594-entitydescription
    entityDescription(): cocoascript.NSEntityDescription;
    setEntityDescription(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/2894947-author
    author(): cocoascript.NSString;
    setAuthor(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/2894943-bundleid
    bundleID(): cocoascript.NSString;
    setBundleID(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/2894948-changes
    changes(): cocoascript.NSPersistentHistoryChange;
    setChanges(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/2894944-contextname
    contextName(): cocoascript.NSString;
    setContextName(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/2894939-processid
    processID(): cocoascript.NSString;
    setProcessID(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/2894941-storeid
    storeID(): cocoascript.NSString;
    setStoreID(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/2894940-timestamp
    timestamp(): cocoascript.NSDate;
    setTimestamp(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/2894938-token
    token(): cocoascript.NSPersistentHistoryToken;
    setToken(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistorytransaction/2894945-transactionnumber
    transactionNumber(): number;
    setTransactionNumber(): void;
    //
    alloc():cocoascript.NSPersistentHistoryTransaction;
    //
    init():cocoascript.NSPersistentHistoryTransaction;
  }
}

declare const NSPersistentHistoryTransaction: cocoascript.NSPersistentHistoryTransaction;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainerevent
   */
  interface NSPersistentCloudKitContainerEvent extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainerevent/3618801-enddate
    endDate(): cocoascript.NSDate;
    setEndDate(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainerevent/3618802-error
    error(): cocoascript.NSError;
    setError(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainerevent/3618803-identifier
    identifier(): cocoascript.NSUUID;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainerevent/3618804-startdate
    startDate(): cocoascript.NSDate;
    setStartDate(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainerevent/3618805-storeidentifier
    storeIdentifier(): cocoascript.NSString;
    setStoreIdentifier(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainerevent/3618806-succeeded
    succeeded(): cocoascript.BOOL;
    setSucceeded(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainerevent/3618807-type
    type(): cocoascript.NSPersistentCloudKitContainerEventType;
    setType(): void;
    //
    alloc():cocoascript.NSPersistentCloudKitContainerEvent;
    //
    init():cocoascript.NSPersistentCloudKitContainerEvent;
  }
}

declare const NSPersistentCloudKitContainerEvent: cocoascript.NSPersistentCloudKitContainerEvent;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectcontextconcurrencytype
  type NSManagedObjectContextConcurrencyType = cocoascript.NSUInteger;
}
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
    addPersistentStoreWithType_configuration_URL_options_error(storeType: cocoascript.NSString, configuration: cocoascript.NSString, storeURL: cocoascript.NSURL, options: cocoascript.NSDictionary, error: cocoascript.NSError):cocoascript.NSPersistentStore;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1640556-addpersistentstorewithdescriptio
    addPersistentStoreWithDescription_completionHandler(storeDescription: cocoascript.NSPersistentStoreDescription, block: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468858-seturl
    setURL_forPersistentStore(url: cocoascript.NSURL, store: cocoascript.NSPersistentStore):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468907-removepersistentstore
    removePersistentStore_error(store: cocoascript.NSPersistentStore, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468888-destroypersistentstoreaturl
    destroyPersistentStoreAtURL_withType_options_error(url: cocoascript.NSURL, storeType: cocoascript.NSString, options: cocoascript.NSDictionary, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468927-migratepersistentstore
    migratePersistentStore_toURL_options_withType_error(store: cocoascript.NSPersistentStore, URL: cocoascript.NSURL, options: cocoascript.NSDictionary, storeType: cocoascript.NSString, error: cocoascript.NSError):cocoascript.NSPersistentStore;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468790-persistentstores
    persistentStores(): cocoascript.NSPersistentStore;
    setPersistentStores(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468824-persistentstoreforurl
    persistentStoreForURL(URL: cocoascript.NSURL):cocoascript.NSPersistentStore;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468865-urlforpersistentstore
    URLForPersistentStore(store: cocoascript.NSPersistentStore):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468917-replacepersistentstoreaturl
    replacePersistentStoreAtURL_destinationOptions_withPersistentStoreFromURL_sourceOptions_storeType_error(destinationURL: cocoascript.NSURL, destinationOptions: cocoascript.NSDictionary, sourceURL: cocoascript.NSURL, sourceOptions: cocoascript.NSDictionary, storeType: cocoascript.NSString, error: cocoascript.NSError):cocoascript.BOOL;
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
    executeRequest_withContext_error(request: cocoascript.NSPersistentStoreRequest, context: cocoascript.NSManagedObjectContext, error: cocoascript.NSError):cocoascript.NSPersistentStoreCoordinator;
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
    setMetadata_forPersistentStore(metadata: cocoascript.NSString, store: cocoascript.NSPersistentStore):void;
    // doc://com.apple.documentation/documentation/coredata/nscoredatacorespotlightexporter
    NSCoreDataCoreSpotlightExporter(): cocoascript.const;
    setNSCoreDataCoreSpotlightExporter(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstorecoordinator/1468788-importstorewithidentifier
    importStoreWithIdentifier_fromExternalRecordsDirectory_toURL_options_withType_error(storeIdentifier: cocoascript.NSString, externalRecordsURL: cocoascript.NSURL, destinationURL: cocoascript.NSURL, options: cocoascript.NSDictionary, storeType: cocoascript.NSString, error: cocoascript.NSError):cocoascript.NSPersistentStore;
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
declare namespace cocoascript {
  /**
   * A description of an attribute of a Core Data entity.
   * doc://com.apple.documentation/documentation/coredata/nsattributedescription
   */
  interface NSAttributeDescription extends NSPropertyDescription {
    // doc://com.apple.documentation/documentation/coredata/nsattributedescription/1498291-attributetype
    attributeType(): cocoascript.NSAttributeType;
    setAttributeType(): void;
    // doc://com.apple.documentation/documentation/coredata/nsattributedescription/1498309-attributevalueclassname
    attributeValueClassName(): cocoascript.NSString;
    setAttributeValueClassName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsattributedescription/1498302-defaultvalue
    defaultValue(): cocoascript.id;
    setDefaultValue(): void;
    // doc://com.apple.documentation/documentation/coredata/nsattributedescription/1498310-versionhash
    versionHash(): cocoascript.NSData;
    setVersionHash(): void;
    // doc://com.apple.documentation/documentation/coredata/nsattributedescription/1498305-valuetransformername
    valueTransformerName(): cocoascript.NSString;
    setValueTransformerName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsattributedescription/1498295-allowsexternalbinarydatastorage
    allowsExternalBinaryDataStorage(): cocoascript.BOOL;
    setAllowsExternalBinaryDataStorage(): void;
    // doc://com.apple.documentation/documentation/coredata/nsattributedescription/3180042-preservesvalueinhistoryondeletio
    preservesValueInHistoryOnDeletion(): cocoascript.BOOL;
    setPreservesValueInHistoryOnDeletion(): void;
    //
    alloc():cocoascript.NSAttributeDescription;
    //
    init():cocoascript.NSAttributeDescription;
  }
}

declare const NSAttributeDescription: cocoascript.NSAttributeDescription;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coredata/nssnapshoteventtype
  type NSSnapshotEventType = cocoascript.NSUInteger;
}
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
    loadMetadata(error: cocoascript.NSError):cocoascript.BOOL;
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
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coredata/nsfetchrequestresulttype
  type NSFetchRequestResultType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * An expression that evaluates the result of a fetch request on a managed object context.
   * doc://com.apple.documentation/documentation/coredata/nsfetchrequestexpression
   */
  interface NSFetchRequestExpression extends NSExpression {
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequestexpression/1391672-requestexpression
    requestExpression(): cocoascript.NSExpression;
    setRequestExpression(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequestexpression/1391665-contextexpression
    contextExpression(): cocoascript.NSExpression;
    setContextExpression(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchrequestexpression/1391670-countonlyrequest
    countOnlyRequest(): cocoascript.BOOL;
    setCountOnlyRequest(): void;
    //
    alloc():cocoascript.NSFetchRequestExpression;
    //
    init():cocoascript.NSFetchRequestExpression;
  }
}

declare const NSFetchRequestExpression: cocoascript.NSFetchRequestExpression;
declare namespace cocoascript {
  /**
   * A special property description type intended for use with a fetch request.
   * doc://com.apple.documentation/documentation/coredata/nsexpressiondescription
   */
  interface NSExpressionDescription extends NSPropertyDescription {
    // doc://com.apple.documentation/documentation/coredata/nsexpressiondescription/1506817-expression
    expression(): cocoascript.NSExpression;
    setExpression(): void;
    // doc://com.apple.documentation/documentation/coredata/nsexpressiondescription/1506706-expressionresulttype
    expressionResultType(): cocoascript.NSAttributeType;
    setExpressionResultType(): void;
    //
    alloc():cocoascript.NSExpressionDescription;
    //
    init():cocoascript.NSExpressionDescription;
  }
}

declare const NSExpressionDescription: cocoascript.NSExpressionDescription;
declare namespace cocoascript {
  /**
   * A description object used to define which properties are fetched from Core Data.
   * doc://com.apple.documentation/documentation/coredata/nsfetchedpropertydescription
   */
  interface NSFetchedPropertyDescription extends NSPropertyDescription {
    // doc://com.apple.documentation/documentation/coredata/nsfetchedpropertydescription/1494679-fetchrequest
    fetchRequest(): cocoascript.NSFetchRequest;
    setFetchRequest(): void;
    //
    alloc():cocoascript.NSFetchedPropertyDescription;
    //
    init():cocoascript.NSFetchedPropertyDescription;
  }
}

declare const NSFetchedPropertyDescription: cocoascript.NSFetchedPropertyDescription;
declare namespace cocoascript {
  /**
   * A fetch request that retrieves results asynchronously and supports progress notification.
   * doc://com.apple.documentation/documentation/coredata/nsasynchronousfetchrequest
   */
  interface NSAsynchronousFetchRequest extends NSPersistentStoreRequest {
    // doc://com.apple.documentation/documentation/coredata/nsasynchronousfetchrequest/1506218-initwithfetchrequest
    initWithFetchRequest_completionBlock(request: cocoascript.NSFetchRequest, blk: cocoascript.NSAsynchronousFetchResult):cocoascript.NSAsynchronousFetchRequest;
    // doc://com.apple.documentation/documentation/coredata/nsasynchronousfetchrequest/1506815-completionblock
    completionBlock(): cocoascript.NSPersistentStoreAsynchronousFetchResultCompletionBlock;
    setCompletionBlock(): void;
    // doc://com.apple.documentation/documentation/coredata/nsasynchronousfetchrequest/1506474-estimatedresultcount
    estimatedResultCount(): cocoascript.NSInteger;
    setEstimatedResultCount(): void;
    // doc://com.apple.documentation/documentation/coredata/nsasynchronousfetchrequest/1506719-fetchrequest
    fetchRequest(): cocoascript.ResultType;
    setFetchRequest(): void;
    //
    alloc():cocoascript.NSAsynchronousFetchRequest;
    //
    init():cocoascript.NSAsynchronousFetchRequest;
  }
}

declare const NSAsynchronousFetchRequest: cocoascript.NSAsynchronousFetchRequest;
declare namespace cocoascript {
  /**
   * A fetch result object that encompasses the response from an executed asynchronous fetch request.
   * doc://com.apple.documentation/documentation/coredata/nsasynchronousfetchresult
   */
  interface NSAsynchronousFetchResult extends NSPersistentStoreAsynchronousResult {
    // doc://com.apple.documentation/documentation/coredata/nsasynchronousfetchresult/1404906-fetchrequest
    fetchRequest(): cocoascript.ResultType;
    setFetchRequest(): void;
    // doc://com.apple.documentation/documentation/coredata/nsasynchronousfetchresult/1404930-finalresult
    finalResult(): cocoascript.ResultType;
    setFinalResult(): void;
    //
    alloc():cocoascript.NSAsynchronousFetchResult;
    //
    init():cocoascript.NSAsynchronousFetchResult;
  }
}

declare const NSAsynchronousFetchResult: cocoascript.NSAsynchronousFetchResult;
declare namespace cocoascript {
  /**
   * A controller that you use to  manage the results of a Core Data fetch request and to display data to the user.
   * doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller
   */
  interface NSFetchedResultsController extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622282-initwithfetchrequest
    initWithFetchRequest_managedObjectContext_sectionNameKeyPath_cacheName(fetchRequest: cocoascript.NSFetchRequest, context: cocoascript.NSManagedObjectContext, sectionNameKeyPath: cocoascript.NSString, name: cocoascript.NSString):cocoascript.NSFetchedResultsController;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622305-performfetch
    performFetch(error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622287-fetchrequest
    fetchRequest(): cocoascript.ResultType;
    setFetchRequest(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622304-managedobjectcontext
    managedObjectContext(): cocoascript.NSManagedObjectContext;
    setManagedObjectContext(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622285-sectionnamekeypath
    sectionNameKeyPath(): cocoascript.NSString;
    setSectionNameKeyPath(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622280-cachename
    cacheName(): cocoascript.NSString;
    setCacheName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622291-delegate
    delegate(): cocoascript.NSFetchedResultsControllerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622278-fetchedobjects
    fetchedObjects(): cocoascript.ResultType;
    setFetchedObjects(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622281-objectatindexpath
    objectAtIndexPath(indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622306-indexpathforobject
    indexPathForObject(object: cocoascript.):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622303-sections
    sections(): cocoascript.NSFetchedResultsSectionInfo;
    setSections(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622284-sectionforsectionindextitle
    sectionForSectionIndexTitle_atIndex(title: cocoascript.NSString, sectionIndex: cocoascript.NSInteger):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622308-sectionindextitleforsectionname
    sectionIndexTitleForSectionName(sectionName: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622299-sectionindextitles
    sectionIndexTitles(): cocoascript.NSString;
    setSectionIndexTitles(): void;
    //
    alloc():cocoascript.NSFetchedResultsController;
    //
    init():cocoascript.NSFetchedResultsController;
  }
}

declare const NSFetchedResultsController: cocoascript.NSFetchedResultsController;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coredata/nsfetchindexelementtype
  type NSFetchIndexElementType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A description of an attribute of a Core Data entity that derives its value from one or more other properties.
   * doc://com.apple.documentation/documentation/coredata/nsderivedattributedescription
   */
  interface NSDerivedAttributeDescription extends NSAttributeDescription {
    // doc://com.apple.documentation/documentation/coredata/nsderivedattributedescription/3174854-derivationexpression
    derivationExpression(): cocoascript.NSExpression;
    setDerivationExpression(): void;
    //
    alloc():cocoascript.NSDerivedAttributeDescription;
    //
    init():cocoascript.NSDerivedAttributeDescription;
  }
}

declare const NSDerivedAttributeDescription: cocoascript.NSDerivedAttributeDescription;
declare namespace cocoascript {
  /**
   * A description of a relationship of a Core Data entity.
   * doc://com.apple.documentation/documentation/coredata/nsrelationshipdescription
   */
  interface NSRelationshipDescription extends NSPropertyDescription {
    // doc://com.apple.documentation/documentation/coredata/nsrelationshipdescription/1506652-destinationentity
    destinationEntity(): cocoascript.NSEntityDescription;
    setDestinationEntity(): void;
    // doc://com.apple.documentation/documentation/coredata/nsrelationshipdescription/1506596-inverserelationship
    inverseRelationship(): cocoascript.NSRelationshipDescription;
    setInverseRelationship(): void;
    // doc://com.apple.documentation/documentation/coredata/nsrelationshipdescription/1506870-deleterule
    deleteRule(): cocoascript.NSDeleteRule;
    setDeleteRule(): void;
    // doc://com.apple.documentation/documentation/coredata/nsrelationshipdescription/1506780-maxcount
    maxCount(): cocoascript.NSUInteger;
    setMaxCount(): void;
    // doc://com.apple.documentation/documentation/coredata/nsrelationshipdescription/1506599-mincount
    minCount(): cocoascript.NSUInteger;
    setMinCount(): void;
    // doc://com.apple.documentation/documentation/coredata/nsrelationshipdescription/1506560-tomany
    toMany(): cocoascript.BOOL;
    setToMany(): void;
    // doc://com.apple.documentation/documentation/coredata/nsrelationshipdescription/1506382-ordered
    ordered(): cocoascript.BOOL;
    setOrdered(): void;
    // doc://com.apple.documentation/documentation/coredata/nsrelationshipdescription/1506791-versionhash
    versionHash(): cocoascript.NSData;
    setVersionHash(): void;
    //
    alloc():cocoascript.NSRelationshipDescription;
    //
    init():cocoascript.NSRelationshipDescription;
  }
}

declare const NSRelationshipDescription: cocoascript.NSRelationshipDescription;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coredata/nsattributetype
  type NSAttributeType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coredata/nsfetchedresultschangetype
  type NSFetchedResultsChangeType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A protocol that defines the interface for section objects vended by a fetched results controller.
   * doc://com.apple.documentation/documentation/coredata/nsfetchedresultssectioninfo
   */
  interface NSFetchedResultsSectionInfo {
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultssectioninfo/1622289-numberofobjects
    numberOfObjects(): cocoascript.NSUInteger;
    setNumberOfObjects(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultssectioninfo/1622293-objects
    objects(): cocoascript.NSArray;
    setObjects(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultssectioninfo/1622302-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultssectioninfo/1622300-indextitle
    indexTitle(): cocoascript.NSString;
    setIndexTitle(): void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coredata/nspersistentstorerequesttype
  type NSPersistentStoreRequestType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * The abstract base class for results returned from a persistent store coordinator.
   * doc://com.apple.documentation/documentation/coredata/nspersistentstoreresult
   */
  interface NSPersistentStoreResult extends NSObject {
    //
    alloc():cocoascript.NSPersistentStoreResult;
    //
    init():cocoascript.NSPersistentStoreResult;
  }
}

declare const NSPersistentStoreResult: cocoascript.NSPersistentStoreResult;
declare namespace cocoascript {
  /**
   * A concrete class used to represent the results of an asynchronous request.
   * doc://com.apple.documentation/documentation/coredata/nspersistentstoreasynchronousresult
   */
  interface NSPersistentStoreAsynchronousResult extends NSPersistentStoreResult {
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoreasynchronousresult/1404916-managedobjectcontext
    managedObjectContext(): cocoascript.NSManagedObjectContext;
    setManagedObjectContext(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoreasynchronousresult/1404904-operationerror
    operationError(): cocoascript.NSError;
    setOperationError(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoreasynchronousresult/1404920-progress
    progress(): cocoascript.NSProgress;
    setProgress(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentstoreasynchronousresult/1404924-cancel
    cancel():void;
    //
    alloc():cocoascript.NSPersistentStoreAsynchronousResult;
    //
    init():cocoascript.NSPersistentStoreAsynchronousResult;
  }
}

declare const NSPersistentStoreAsynchronousResult: cocoascript.NSPersistentStoreAsynchronousResult;
declare namespace cocoascript {
  /**
   * An encapsulation of a collection of changes to be made by an object store in response to a save operation on a managed object context.
   * doc://com.apple.documentation/documentation/coredata/nssavechangesrequest
   */
  interface NSSaveChangesRequest extends NSPersistentStoreRequest {
    // doc://com.apple.documentation/documentation/coredata/nssavechangesrequest/1500418-initwithinsertedobjects
    initWithInsertedObjects_updatedObjects_deletedObjects_lockedObjects(insertedObjects: cocoascript.NSManagedObject, updatedObjects: cocoascript.NSManagedObject, deletedObjects: cocoascript.NSManagedObject, lockedObjects: cocoascript.NSManagedObject):cocoascript.NSSaveChangesRequest;
    // doc://com.apple.documentation/documentation/coredata/nssavechangesrequest/1500416-insertedobjects
    insertedObjects(): cocoascript.NSManagedObject;
    setInsertedObjects(): void;
    // doc://com.apple.documentation/documentation/coredata/nssavechangesrequest/1500424-updatedobjects
    updatedObjects(): cocoascript.NSManagedObject;
    setUpdatedObjects(): void;
    // doc://com.apple.documentation/documentation/coredata/nssavechangesrequest/1500420-deletedobjects
    deletedObjects(): cocoascript.NSManagedObject;
    setDeletedObjects(): void;
    // doc://com.apple.documentation/documentation/coredata/nssavechangesrequest/1500426-lockedobjects
    lockedObjects(): cocoascript.NSManagedObject;
    setLockedObjects(): void;
    //
    alloc():cocoascript.NSSaveChangesRequest;
    //
    init():cocoascript.NSSaveChangesRequest;
  }
}

declare const NSSaveChangesRequest: cocoascript.NSSaveChangesRequest;
declare namespace cocoascript {
  /**
   * An abstract superclass that you subclass to create a Core Data atomic store.
   * doc://com.apple.documentation/documentation/coredata/nsatomicstore
   */
  interface NSAtomicStore extends NSPersistentStore {
    // doc://com.apple.documentation/documentation/coredata/nsatomicstore/1388054-initwithpersistentstorecoordinat
    initWithPersistentStoreCoordinator_configurationName_URL_options(coordinator: cocoascript.NSPersistentStoreCoordinator, configurationName: cocoascript.NSString, url: cocoascript.NSURL, options: cocoascript.NSDictionary):cocoascript.NSAtomicStore;
    // doc://com.apple.documentation/documentation/coredata/nsatomicstore/1388060-load
    load(error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsatomicstore/1388058-objectidforentity
    objectIDForEntity_referenceObject(entity: cocoascript.NSEntityDescription, data: cocoascript.NSAtomicStore):cocoascript.NSManagedObjectID;
    // doc://com.apple.documentation/documentation/coredata/nsatomicstore/1388062-addcachenodes
    addCacheNodes(cacheNodes: cocoascript.NSAtomicStoreCacheNode):void;
    // doc://com.apple.documentation/documentation/coredata/nsatomicstore/1388052-newcachenodeformanagedobject
    newCacheNodeForManagedObject(managedObject: cocoascript.NSManagedObject):cocoascript.NSAtomicStoreCacheNode;
    // doc://com.apple.documentation/documentation/coredata/nsatomicstore/1388050-newreferenceobjectformanagedobje
    newReferenceObjectForManagedObject(managedObject: cocoascript.NSManagedObject):cocoascript.NSAtomicStore;
    // doc://com.apple.documentation/documentation/coredata/nsatomicstore/1388044-updatecachenode
    updateCacheNode_fromManagedObject(node: cocoascript.NSAtomicStoreCacheNode, managedObject: cocoascript.NSManagedObject):void;
    // doc://com.apple.documentation/documentation/coredata/nsatomicstore/1388064-willremovecachenodes
    willRemoveCacheNodes(cacheNodes: cocoascript.NSAtomicStoreCacheNode):void;
    // doc://com.apple.documentation/documentation/coredata/nsatomicstore/1388056-save
    save(error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsatomicstore/1388042-cachenodes
    cacheNodes():cocoascript.NSAtomicStoreCacheNode;
    // doc://com.apple.documentation/documentation/coredata/nsatomicstore/1388040-cachenodeforobjectid
    cacheNodeForObjectID(objectID: cocoascript.NSManagedObjectID):cocoascript.NSAtomicStoreCacheNode;
    // doc://com.apple.documentation/documentation/coredata/nsatomicstore/1388046-referenceobjectforobjectid
    referenceObjectForObjectID(objectID: cocoascript.NSManagedObjectID):cocoascript.NSAtomicStore;
    //
    alloc():cocoascript.NSAtomicStore;
    //
    init():cocoascript.NSAtomicStore;
  }
}

declare const NSAtomicStore: cocoascript.NSAtomicStore;
declare namespace cocoascript {
  /**
   * A concrete class that you use to represent basic nodes in a Core Data atomic store.
   * doc://com.apple.documentation/documentation/coredata/nsatomicstorecachenode
   */
  interface NSAtomicStoreCacheNode extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsatomicstorecachenode/1506754-initwithobjectid
    initWithObjectID(moid: cocoascript.NSManagedObjectID):cocoascript.NSAtomicStoreCacheNode;
    // doc://com.apple.documentation/documentation/coredata/nsatomicstorecachenode/1506627-objectid
    objectID(): cocoascript.NSManagedObjectID;
    setObjectID(): void;
    // doc://com.apple.documentation/documentation/coredata/nsatomicstorecachenode/1506283-propertycache
    propertyCache(): cocoascript.id;
    setPropertyCache(): void;
    // doc://com.apple.documentation/documentation/coredata/nsatomicstorecachenode/1506550-valueforkey
    valueForKey(key: cocoascript.NSString):cocoascript.NSAtomicStoreCacheNode;
    // doc://com.apple.documentation/documentation/coredata/nsatomicstorecachenode/1506456-setvalue
    setValue_forKey(value: cocoascript.NSAtomicStoreCacheNode, key: cocoascript.NSString):void;
    //
    alloc():cocoascript.NSAtomicStoreCacheNode;
    //
    init():cocoascript.NSAtomicStoreCacheNode;
  }
}

declare const NSAtomicStoreCacheNode: cocoascript.NSAtomicStoreCacheNode;
declare namespace cocoascript {
  /**
   * An abstract superclass defining the API through which Core Data communicates with a store.
   * doc://com.apple.documentation/documentation/coredata/nsincrementalstore
   */
  interface NSIncrementalStore extends NSPersistentStore {
    // doc://com.apple.documentation/documentation/coredata/nsincrementalstore/1506653-executerequest
    executeRequest_withContext_error(request: cocoascript.NSPersistentStoreRequest, context: cocoascript.NSManagedObjectContext, error: cocoascript.NSError):cocoascript.NSIncrementalStore;
    // doc://com.apple.documentation/documentation/coredata/nsincrementalstore/1506729-newvaluesforobjectwithid
    newValuesForObjectWithID_withContext_error(objectID: cocoascript.NSManagedObjectID, context: cocoascript.NSManagedObjectContext, error: cocoascript.NSError):cocoascript.NSIncrementalStoreNode;
    // doc://com.apple.documentation/documentation/coredata/nsincrementalstore/1506438-newvalueforrelationship
    newValueForRelationship_forObjectWithID_withContext_error(relationship: cocoascript.NSRelationshipDescription, objectID: cocoascript.NSManagedObjectID, context: cocoascript.NSManagedObjectContext, error: cocoascript.NSError):cocoascript.NSIncrementalStore;
    // doc://com.apple.documentation/documentation/coredata/nsincrementalstore/1506348-obtainpermanentidsforobjects
    obtainPermanentIDsForObjects_error(array: cocoascript.NSManagedObject, error: cocoascript.NSError):cocoascript.NSManagedObjectID;
    // doc://com.apple.documentation/documentation/coredata/nsincrementalstore/1506666-newobjectidforentity
    newObjectIDForEntity_referenceObject(entity: cocoascript.NSEntityDescription, data: cocoascript.NSIncrementalStore):cocoascript.NSManagedObjectID;
    // doc://com.apple.documentation/documentation/coredata/nsincrementalstore/1506828-referenceobjectforobjectid
    referenceObjectForObjectID(objectID: cocoascript.NSManagedObjectID):cocoascript.NSIncrementalStore;
    // doc://com.apple.documentation/documentation/coredata/nsincrementalstore/1506199-managedobjectcontextdidregistero
    managedObjectContextDidRegisterObjectsWithIDs(objectIDs: cocoascript.NSManagedObjectID):void;
    // doc://com.apple.documentation/documentation/coredata/nsincrementalstore/1506878-managedobjectcontextdidunregiste
    managedObjectContextDidUnregisterObjectsWithIDs(objectIDs: cocoascript.NSManagedObjectID):void;
    // doc://com.apple.documentation/documentation/coredata/nsincrementalstore/1506708-loadmetadata
    loadMetadata(error: cocoascript.NSError):cocoascript.BOOL;
    //
    alloc():cocoascript.NSIncrementalStore;
    //
    init():cocoascript.NSIncrementalStore;
  }
}

declare const NSIncrementalStore: cocoascript.NSIncrementalStore;
declare namespace cocoascript {
  /**
   * A concrete class used to represent basic nodes in a Core Data incremental store.
   * doc://com.apple.documentation/documentation/coredata/nsincrementalstorenode
   */
  interface NSIncrementalStoreNode extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsincrementalstorenode/1506321-initwithobjectid
    initWithObjectID_withValues_version(objectID: cocoascript.NSManagedObjectID, values: cocoascript.NSString, version: cocoascript.uint64_t):cocoascript.NSIncrementalStoreNode;
    // doc://com.apple.documentation/documentation/coredata/nsincrementalstorenode/1506827-objectid
    objectID(): cocoascript.NSManagedObjectID;
    setObjectID(): void;
    // doc://com.apple.documentation/documentation/coredata/nsincrementalstorenode/1506721-updatewithvalues
    updateWithValues_version(values: cocoascript.NSString, version: cocoascript.uint64_t):void;
    // doc://com.apple.documentation/documentation/coredata/nsincrementalstorenode/1506442-valueforpropertydescription
    valueForPropertyDescription(prop: cocoascript.NSPropertyDescription):cocoascript.NSIncrementalStoreNode;
    // doc://com.apple.documentation/documentation/coredata/nsincrementalstorenode/1506769-version
    version(): cocoascript.uint64_t;
    setVersion(): void;
    //
    alloc():cocoascript.NSIncrementalStoreNode;
    //
    init():cocoascript.NSIncrementalStoreNode;
  }
}

declare const NSIncrementalStoreNode: cocoascript.NSIncrementalStoreNode;
declare namespace cocoascript {
  /**
   * An encapsulation of conflicts that occur during an attempt to save a managed object.
   * doc://com.apple.documentation/documentation/coredata/nsconstraintconflict
   */
  interface NSConstraintConflict extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsconstraintconflict/1506668-initwithconstraint
    initWithConstraint_databaseObject_databaseSnapshot_conflictingObjects_conflictingSnapshots(contraint: cocoascript.NSString, databaseObject: cocoascript.NSManagedObject, databaseSnapshot: cocoascript.NSDictionary, conflictingObjects: cocoascript.NSManagedObject, conflictingSnapshots: cocoascript.NSArray):cocoascript.NSConstraintConflict;
    // doc://com.apple.documentation/documentation/coredata/nsconstraintconflict/1506707-conflictingobjects
    conflictingObjects(): cocoascript.NSManagedObject;
    setConflictingObjects(): void;
    // doc://com.apple.documentation/documentation/coredata/nsconstraintconflict/1506774-conflictingsnapshots
    conflictingSnapshots(): cocoascript.NSDictionary;
    setConflictingSnapshots(): void;
    // doc://com.apple.documentation/documentation/coredata/nsconstraintconflict/1506902-constraint
    constraint(): cocoascript.NSString;
    setConstraint(): void;
    // doc://com.apple.documentation/documentation/coredata/nsconstraintconflict/1506399-constraintvalues
    constraintValues(): cocoascript.id;
    setConstraintValues(): void;
    // doc://com.apple.documentation/documentation/coredata/nsconstraintconflict/1506665-databaseobject
    databaseObject(): cocoascript.NSManagedObject;
    setDatabaseObject(): void;
    // doc://com.apple.documentation/documentation/coredata/nsconstraintconflict/1506687-databasesnapshot
    databaseSnapshot(): cocoascript.id;
    setDatabaseSnapshot(): void;
    //
    alloc():cocoascript.NSConstraintConflict;
    //
    init():cocoascript.NSConstraintConflict;
  }
}

declare const NSConstraintConflict: cocoascript.NSConstraintConflict;
declare namespace cocoascript {
  /**
   * An encapsulation of conflicts that occur during an attempt to save changes in a managed object context.
   * doc://com.apple.documentation/documentation/coredata/nsmergeconflict
   */
  interface NSMergeConflict extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsmergeconflict/1506216-initwithsource
    initWithSource_newVersion_oldVersion_cachedSnapshot_persistedSnapshot(srcObject: cocoascript.NSManagedObject, newvers: cocoascript.NSUInteger, oldvers: cocoascript.NSUInteger, cachesnap: cocoascript.NSString, persnap: cocoascript.NSString):cocoascript.NSMergeConflict;
    // doc://com.apple.documentation/documentation/coredata/nsmergeconflict/1506809-sourceobject
    sourceObject(): cocoascript.NSManagedObject;
    setSourceObject(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmergeconflict/1506454-objectsnapshot
    objectSnapshot(): cocoascript.id;
    setObjectSnapshot(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmergeconflict/1506685-cachedsnapshot
    cachedSnapshot(): cocoascript.id;
    setCachedSnapshot(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmergeconflict/1506412-persistedsnapshot
    persistedSnapshot(): cocoascript.id;
    setPersistedSnapshot(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmergeconflict/1506190-newversionnumber
    newVersionNumber(): cocoascript.NSUInteger;
    setNewVersionNumber(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmergeconflict/1506271-oldversionnumber
    oldVersionNumber(): cocoascript.NSUInteger;
    setOldVersionNumber(): void;
    //
    alloc():cocoascript.NSMergeConflict;
    //
    init():cocoascript.NSMergeConflict;
  }
}

declare const NSMergeConflict: cocoascript.NSMergeConflict;
declare namespace cocoascript {
  /**
   * A policy object that you use to resolve conflicts between the persistent store and in-memory versions of managed objects.
   * doc://com.apple.documentation/documentation/coredata/nsmergepolicy
   */
  interface NSMergePolicy extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsmergepolicy/1506763-initwithmergetype
    initWithMergeType(ty: cocoascript.NSMergePolicyType):cocoascript.NSMergePolicy;
    // doc://com.apple.documentation/documentation/coredata/nsmergepolicy/1506675-mergetype
    mergeType(): cocoascript.NSMergePolicyType;
    setMergeType(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmergepolicy/1506253-resolveconflicts
    resolveConflicts_error(list: cocoascript.NSArray, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsmergepolicy/1506678-resolveconstraintconflicts
    resolveConstraintConflicts_error(list: cocoascript.NSConstraintConflict, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsmergepolicy/1506787-resolveoptimisticlockingversionc
    resolveOptimisticLockingVersionConflicts_error(list: cocoascript.NSMergeConflict, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsmergepolicy/1690612-errormergepolicy
    errorMergePolicy(): cocoascript.NSMergePolicy;
    setErrorMergePolicy(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmergepolicy/1690607-mergebypropertyobjecttrumpmergep
    mergeByPropertyObjectTrumpMergePolicy(): cocoascript.NSMergePolicy;
    setMergeByPropertyObjectTrumpMergePolicy(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmergepolicy/1690609-mergebypropertystoretrumpmergepo
    mergeByPropertyStoreTrumpMergePolicy(): cocoascript.NSMergePolicy;
    setMergeByPropertyStoreTrumpMergePolicy(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmergepolicy/1690610-overwritemergepolicy
    overwriteMergePolicy(): cocoascript.NSMergePolicy;
    setOverwriteMergePolicy(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmergepolicy/1690613-rollbackmergepolicy
    rollbackMergePolicy(): cocoascript.NSMergePolicy;
    setRollbackMergePolicy(): void;
    //
    alloc():cocoascript.NSMergePolicy;
    //
    init():cocoascript.NSMergePolicy;
  }
}

declare const NSMergePolicy: cocoascript.NSMergePolicy;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistorychangetype
  type NSPersistentHistoryChangeType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A container that encapsulates the Core Data stack in your app and mirrors select persistent stores to a CloudKit private database.
   * doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainer
   */
  interface NSPersistentCloudKitContainer extends NSPersistentContainer {
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainer/3141668-recordformanagedobjectid
    recordForManagedObjectID(managedObjectID: cocoascript.NSManagedObjectID):cocoascript.CKRecord;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainer/3141671-recordsformanagedobjectids
    recordsForManagedObjectIDs(managedObjectIDs: cocoascript.NSManagedObjectID):cocoascript.CKRecord;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainer/3141669-recordidformanagedobjectid
    recordIDForManagedObjectID(managedObjectID: cocoascript.NSManagedObjectID):cocoascript.CKRecordID;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainer/3141670-recordidsformanagedobjectids
    recordIDsForManagedObjectIDs(managedObjectIDs: cocoascript.NSManagedObjectID):cocoascript.CKRecordID;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainer/3649646-candeleterecordformanagedobjectw
    canDeleteRecordForManagedObjectWithID(objectID: cocoascript.NSManagedObjectID):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainer/3649647-canmodifymanagedobjectsinstore
    canModifyManagedObjectsInStore(store: cocoascript.NSPersistentStore):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainer/3649648-canupdaterecordformanagedobjectw
    canUpdateRecordForManagedObjectWithID(objectID: cocoascript.NSManagedObjectID):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainer/3343548-initializecloudkitschemawithopti
    initializeCloudKitSchemaWithOptions_error(options: cocoascript.NSPersistentCloudKitContainerSchemaInitializationOptions, error: cocoascript.NSError):cocoascript.BOOL;
    //
    alloc():cocoascript.NSPersistentCloudKitContainer;
    //
    init():cocoascript.NSPersistentCloudKitContainer;
  }
}

declare const NSPersistentCloudKitContainer: cocoascript.NSPersistentCloudKitContainer;
declare namespace cocoascript {
  /**
   * An object that customizes how a store description aligns with a CloudKit database.
   * doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontaineroptions
   */
  interface NSPersistentCloudKitContainerOptions extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontaineroptions/3141675-initwithcontaineridentifier
    initWithContainerIdentifier(containerIdentifier: cocoascript.NSString):cocoascript.NSPersistentCloudKitContainerOptions;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontaineroptions/3141674-containeridentifier
    containerIdentifier(): cocoascript.NSString;
    setContainerIdentifier(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontaineroptions/3580372-databasescope
    databaseScope(): cocoascript.CKDatabaseScope;
    setDatabaseScope(): void;
    //
    alloc():cocoascript.NSPersistentCloudKitContainerOptions;
    //
    init():cocoascript.NSPersistentCloudKitContainerOptions;
  }
}

declare const NSPersistentCloudKitContainerOptions: cocoascript.NSPersistentCloudKitContainerOptions;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainereventrequest
   */
  interface NSPersistentCloudKitContainerEventRequest extends NSPersistentStoreRequest {
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainereventrequest/3618819-resulttype
    resultType(): cocoascript.NSPersistentCloudKitContainerEventResultType;
    setResultType(): void;
    //
    alloc():cocoascript.NSPersistentCloudKitContainerEventRequest;
    //
    init():cocoascript.NSPersistentCloudKitContainerEventRequest;
  }
}

declare const NSPersistentCloudKitContainerEventRequest: cocoascript.NSPersistentCloudKitContainerEventRequest;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainereventresult
   */
  interface NSPersistentCloudKitContainerEventResult extends NSPersistentStoreResult {
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainereventresult/3618821-result
    result(): cocoascript.id;
    setResult(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainereventresult/3618822-resulttype
    resultType(): cocoascript.NSPersistentCloudKitContainerEventResultType;
    setResultType(): void;
    //
    alloc():cocoascript.NSPersistentCloudKitContainerEventResult;
    //
    init():cocoascript.NSPersistentCloudKitContainerEventResult;
  }
}

declare const NSPersistentCloudKitContainerEventResult: cocoascript.NSPersistentCloudKitContainerEventResult;
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
declare namespace cocoascript {
  /**
   * A delegate that supports Core Spotlight integration.
   * doc://com.apple.documentation/documentation/coredata/nscoredatacorespotlightdelegate
   */
  interface NSCoreDataCoreSpotlightDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nscoredatacorespotlightdelegate/2897196-initforstorewithdescription
    initForStoreWithDescription_model(description: cocoascript.NSPersistentStoreDescription, model: cocoascript.NSManagedObjectModel):cocoascript.NSCoreDataCoreSpotlightDelegate;
    // doc://com.apple.documentation/documentation/coredata/nscoredatacorespotlightdelegate/2897202-domainidentifier
    domainIdentifier():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/coredata/nscoredatacorespotlightdelegate/2897199-indexname
    indexName():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/coredata/nscoredatacorespotlightdelegate/2897197-attributesetforobject
    attributeSetForObject(object: cocoascript.NSManagedObject):cocoascript.CSSearchableItemAttributeSet;
    // doc://com.apple.documentation/documentation/coredata/nscoredatacorespotlightdelegate/2897201-searchableindex
    searchableIndex_reindexAllSearchableItemsWithAcknowledgementHandler(searchableIndex: cocoascript.CSSearchableIndex, acknowledgementHandler: void):void;
    // doc://com.apple.documentation/documentation/coredata/nscoredatacorespotlightdelegate/2897198-searchableindex
    searchableIndex_reindexSearchableItemsWithIdentifiers_acknowledgementHandler(searchableIndex: cocoascript.CSSearchableIndex, identifiers: cocoascript.NSString, acknowledgementHandler: void):void;
    //
    alloc():cocoascript.NSCoreDataCoreSpotlightDelegate;
    //
    init():cocoascript.NSCoreDataCoreSpotlightDelegate;
  }
}

declare const NSCoreDataCoreSpotlightDelegate: cocoascript.NSCoreDataCoreSpotlightDelegate;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coredata/nspersistentstoreubiquitoustransitiontype
  type NSPersistentStoreUbiquitousTransitionType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A mapping instance that specifies how to map an entity from a source to a destination managed object model.
   * doc://com.apple.documentation/documentation/coredata/nsentitymapping
   */
  interface NSEntityMapping extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443187-sourceentityname
    sourceEntityName(): cocoascript.NSString;
    setSourceEntityName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443182-sourceentityversionhash
    sourceEntityVersionHash(): cocoascript.NSData;
    setSourceEntityVersionHash(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443180-sourceexpression
    sourceExpression(): cocoascript.NSExpression;
    setSourceExpression(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443176-destinationentityname
    destinationEntityName(): cocoascript.NSString;
    setDestinationEntityName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443169-destinationentityversionhash
    destinationEntityVersionHash(): cocoascript.NSData;
    setDestinationEntityVersionHash(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443167-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443194-mappingtype
    mappingType(): cocoascript.NSEntityMappingType;
    setMappingType(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443171-entitymigrationpolicyclassname
    entityMigrationPolicyClassName(): cocoascript.NSString;
    setEntityMigrationPolicyClassName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443193-attributemappings
    attributeMappings(): cocoascript.NSPropertyMapping;
    setAttributeMappings(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443163-relationshipmappings
    relationshipMappings(): cocoascript.NSPropertyMapping;
    setRelationshipMappings(): void;
    // doc://com.apple.documentation/documentation/coredata/nsentitymapping/1443184-userinfo
    userInfo(): cocoascript.NSDictionary;
    setUserInfo(): void;
    //
    alloc():cocoascript.NSEntityMapping;
    //
    init():cocoascript.NSEntityMapping;
  }
}

declare const NSEntityMapping: cocoascript.NSEntityMapping;
declare const NSFetchRequestExpressionType: cocoascript.NSExpressionType;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coredata/nsdeleterule
  type NSDeleteRule = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coredata/nspersistentstoreasynchronousfetchresultcompletionblock
  type NSPersistentStoreAsynchronousFetchResultCompletionBlock = cocoascript.NSAsynchronousFetchResult;
}
declare namespace cocoascript {
  /**
   * A request to fetch or purge persistent history.
   * doc://com.apple.documentation/documentation/coredata/nspersistenthistorychangerequest
   */
  interface NSPersistentHistoryChangeRequest extends NSPersistentStoreRequest {
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistorychangerequest/2892342-token
    token(): cocoascript.NSPersistentHistoryToken;
    setToken(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistorychangerequest/3240593-fetchrequest
    fetchRequest(): cocoascript.NSFetchRequest;
    setFetchRequest(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistorychangerequest/2892341-resulttype
    resultType(): cocoascript.NSPersistentHistoryResultType;
    setResultType(): void;
    //
    alloc():cocoascript.NSPersistentHistoryChangeRequest;
    //
    init():cocoascript.NSPersistentHistoryChangeRequest;
  }
}

declare const NSPersistentHistoryChangeRequest: cocoascript.NSPersistentHistoryChangeRequest;
declare namespace cocoascript {
  /**
   * The result of a request to fetch persistent history.
   * doc://com.apple.documentation/documentation/coredata/nspersistenthistoryresult
   */
  interface NSPersistentHistoryResult extends NSPersistentStoreResult {
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistoryresult/2892350-result
    result(): cocoascript.id;
    setResult(): void;
    // doc://com.apple.documentation/documentation/coredata/nspersistenthistoryresult/2892356-resulttype
    resultType(): cocoascript.NSPersistentHistoryResultType;
    setResultType(): void;
    //
    alloc():cocoascript.NSPersistentHistoryResult;
    //
    init():cocoascript.NSPersistentHistoryResult;
  }
}

declare const NSPersistentHistoryResult: cocoascript.NSPersistentHistoryResult;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainereventtype
  type NSPersistentCloudKitContainerEventType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A request to insert a batch of data in a persistent store.
   * doc://com.apple.documentation/documentation/coredata/nsbatchinsertrequest
   */
  interface NSBatchInsertRequest extends NSPersistentStoreRequest {
    // doc://com.apple.documentation/documentation/coredata/nsbatchinsertrequest/3618790-initwithentity
    initWithEntity_dictionaryHandler(entity: cocoascript.NSEntityDescription, handler: cocoascript.NSString):cocoascript.NSBatchInsertRequest;
    // doc://com.apple.documentation/documentation/coredata/nsbatchinsertrequest/3618791-initwithentity
    initWithEntity_managedObjectHandler(entity: cocoascript.NSEntityDescription, handler: cocoascript.NSManagedObject):cocoascript.NSBatchInsertRequest;
    // doc://com.apple.documentation/documentation/coredata/nsbatchinsertrequest/3333235-initwithentity
    initWithEntity_objects(entity: cocoascript.NSEntityDescription, dictionaries: cocoascript.NSString):cocoascript.NSBatchInsertRequest;
    // doc://com.apple.documentation/documentation/coredata/nsbatchinsertrequest/3333237-initwithentityname
    initWithEntityName_objects(entityName: cocoascript.NSString, dictionaries: cocoascript.NSString):cocoascript.NSBatchInsertRequest;
    // doc://com.apple.documentation/documentation/coredata/nsbatchinsertrequest/3333233-init
    init():cocoascript.NSBatchInsertRequest;
    // doc://com.apple.documentation/documentation/coredata/nsbatchinsertrequest/3618789-dictionaryhandler
    dictionaryHandler(): cocoascript.id;
    setDictionaryHandler(): void;
    // doc://com.apple.documentation/documentation/coredata/nsbatchinsertrequest/3333231-entity
    entity(): cocoascript.NSEntityDescription;
    setEntity(): void;
    // doc://com.apple.documentation/documentation/coredata/nsbatchinsertrequest/3333232-entityname
    entityName(): cocoascript.NSString;
    setEntityName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsbatchinsertrequest/3618792-managedobjecthandler
    managedObjectHandler(): cocoascript.NSManagedObject;
    setManagedObjectHandler(): void;
    // doc://com.apple.documentation/documentation/coredata/nsbatchinsertrequest/3333238-objectstoinsert
    objectsToInsert(): cocoascript.id;
    setObjectsToInsert(): void;
    // doc://com.apple.documentation/documentation/coredata/nsbatchinsertrequest/3333239-resulttype
    resultType(): cocoascript.NSBatchInsertRequestResultType;
    setResultType(): void;
    //
    alloc():cocoascript.NSBatchInsertRequest;
    //
    init():cocoascript.NSBatchInsertRequest;
  }
}

declare const NSBatchInsertRequest: cocoascript.NSBatchInsertRequest;
declare namespace cocoascript {
  /**
   * The result that Core Data returns when executing a batch-insertion request.
   * doc://com.apple.documentation/documentation/coredata/nsbatchinsertresult
   */
  interface NSBatchInsertResult extends NSPersistentStoreResult {
    // doc://com.apple.documentation/documentation/coredata/nsbatchinsertresult/3333246-result
    result(): cocoascript.id;
    setResult(): void;
    // doc://com.apple.documentation/documentation/coredata/nsbatchinsertresult/3333247-resulttype
    resultType(): cocoascript.NSBatchInsertRequestResultType;
    setResultType(): void;
    //
    alloc():cocoascript.NSBatchInsertResult;
    //
    init():cocoascript.NSBatchInsertResult;
  }
}

declare const NSBatchInsertResult: cocoascript.NSBatchInsertResult;
declare namespace cocoascript {
  /**
   * A request to Core Data to do a batch update of data in a persistent store without loading any data into memory.
   * doc://com.apple.documentation/documentation/coredata/nsbatchupdaterequest
   */
  interface NSBatchUpdateRequest extends NSPersistentStoreRequest {
    // doc://com.apple.documentation/documentation/coredata/nsbatchupdaterequest/1506374-initwithentity
    initWithEntity(entity: cocoascript.NSEntityDescription):cocoascript.NSBatchUpdateRequest;
    // doc://com.apple.documentation/documentation/coredata/nsbatchupdaterequest/1506702-initwithentityname
    initWithEntityName(entityName: cocoascript.NSString):cocoascript.NSBatchUpdateRequest;
    // doc://com.apple.documentation/documentation/coredata/nsbatchupdaterequest/1506664-entity
    entity(): cocoascript.NSEntityDescription;
    setEntity(): void;
    // doc://com.apple.documentation/documentation/coredata/nsbatchupdaterequest/1506796-entityname
    entityName(): cocoascript.NSString;
    setEntityName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsbatchupdaterequest/1506477-includessubentities
    includesSubentities(): cocoascript.BOOL;
    setIncludesSubentities(): void;
    // doc://com.apple.documentation/documentation/coredata/nsbatchupdaterequest/1506659-predicate
    predicate(): cocoascript.NSPredicate;
    setPredicate(): void;
    // doc://com.apple.documentation/documentation/coredata/nsbatchupdaterequest/1506582-propertiestoupdate
    propertiesToUpdate(): cocoascript.NSDictionary;
    setPropertiesToUpdate(): void;
    // doc://com.apple.documentation/documentation/coredata/nsbatchupdaterequest/1506350-resulttype
    resultType(): cocoascript.NSBatchUpdateRequestResultType;
    setResultType(): void;
    //
    alloc():cocoascript.NSBatchUpdateRequest;
    //
    init():cocoascript.NSBatchUpdateRequest;
  }
}

declare const NSBatchUpdateRequest: cocoascript.NSBatchUpdateRequest;
declare namespace cocoascript {
  /**
   * The result returned when executing a batch update request.
   * doc://com.apple.documentation/documentation/coredata/nsbatchupdateresult
   */
  interface NSBatchUpdateResult extends NSPersistentStoreResult {
    // doc://com.apple.documentation/documentation/coredata/nsbatchupdateresult/1404946-result
    result(): cocoascript.id;
    setResult(): void;
    // doc://com.apple.documentation/documentation/coredata/nsbatchupdateresult/1404900-resulttype
    resultType(): cocoascript.NSBatchUpdateRequestResultType;
    setResultType(): void;
    //
    alloc():cocoascript.NSBatchUpdateResult;
    //
    init():cocoascript.NSBatchUpdateResult;
  }
}

declare const NSBatchUpdateResult: cocoascript.NSBatchUpdateResult;
declare namespace cocoascript {
  /**
   * A request to Core Data to do a batch delete of data in a persistent store without loading any data into memory.
   * doc://com.apple.documentation/documentation/coredata/nsbatchdeleterequest
   */
  interface NSBatchDeleteRequest extends NSPersistentStoreRequest {
    // doc://com.apple.documentation/documentation/coredata/nsbatchdeleterequest/1506302-initwithfetchrequest
    initWithFetchRequest(fetch: cocoascript.NSFetchRequest):cocoascript.NSBatchDeleteRequest;
    // doc://com.apple.documentation/documentation/coredata/nsbatchdeleterequest/1506746-initwithobjectids
    initWithObjectIDs(objects: cocoascript.NSManagedObjectID):cocoascript.NSBatchDeleteRequest;
    // doc://com.apple.documentation/documentation/coredata/nsbatchdeleterequest/1506206-fetchrequest
    fetchRequest(): cocoascript.NSFetchRequest;
    setFetchRequest(): void;
    // doc://com.apple.documentation/documentation/coredata/nsbatchdeleterequest/1506389-resulttype
    resultType(): cocoascript.NSBatchDeleteRequestResultType;
    setResultType(): void;
    //
    alloc():cocoascript.NSBatchDeleteRequest;
    //
    init():cocoascript.NSBatchDeleteRequest;
  }
}

declare const NSBatchDeleteRequest: cocoascript.NSBatchDeleteRequest;
declare namespace cocoascript {
  /**
   * The result returned when executing a batch delete request.
   * doc://com.apple.documentation/documentation/coredata/nsbatchdeleteresult
   */
  interface NSBatchDeleteResult extends NSPersistentStoreResult {
    // doc://com.apple.documentation/documentation/coredata/nsbatchdeleteresult/1404922-result
    result(): cocoascript.id;
    setResult(): void;
    // doc://com.apple.documentation/documentation/coredata/nsbatchdeleteresult/1404941-resulttype
    resultType(): cocoascript.NSBatchDeleteRequestResultType;
    setResultType(): void;
    //
    alloc():cocoascript.NSBatchDeleteResult;
    //
    init():cocoascript.NSBatchDeleteResult;
  }
}

declare const NSBatchDeleteResult: cocoascript.NSBatchDeleteResult;
declare namespace cocoascript {
  /**
   * A model instance that specifies how to map a model from a source to a destination managed object model.
   * doc://com.apple.documentation/documentation/coredata/nsmappingmodel
   */
  interface NSMappingModel extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsmappingmodel/1506304-initwithcontentsofurl
    initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.NSMappingModel;
    // doc://com.apple.documentation/documentation/coredata/nsmappingmodel/1506196-entitymappings
    entityMappings(): cocoascript.NSEntityMapping;
    setEntityMappings(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmappingmodel/1506179-entitymappingsbyname
    entityMappingsByName(): cocoascript.NSEntityMapping;
    setEntityMappingsByName(): void;
    //
    alloc():cocoascript.NSMappingModel;
    //
    init():cocoascript.NSMappingModel;
  }
}

declare const NSMappingModel: cocoascript.NSMappingModel;
declare namespace cocoascript {
  /**
   * A migration manager instance that performs a migration of data from one persistent store to another using a given mapping model.
   * doc://com.apple.documentation/documentation/coredata/nsmigrationmanager
   */
  interface NSMigrationManager extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417583-initwithsourcemodel
    initWithSourceModel_destinationModel(sourceModel: cocoascript.NSManagedObjectModel, destinationModel: cocoascript.NSManagedObjectModel):cocoascript.NSMigrationManager;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417584-migratestorefromurl
    migrateStoreFromURL_type_options_withMappingModel_toDestinationURL_destinationType_destinationOptions_error(sourceURL: cocoascript.NSURL, sStoreType: cocoascript.NSString, sOptions: cocoascript.NSDictionary, mappings: cocoascript.NSMappingModel, dURL: cocoascript.NSURL, dStoreType: cocoascript.NSString, dOptions: cocoascript.NSDictionary, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417590-reset
    reset():void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417608-cancelmigrationwitherror
    cancelMigrationWithError(error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417602-migrationprogress
    migrationProgress(): number;
    setMigrationProgress(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417582-currententitymapping
    currentEntityMapping(): cocoascript.NSEntityMapping;
    setCurrentEntityMapping(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417604-associatesourceinstance
    associateSourceInstance_withDestinationInstance_forEntityMapping(sourceInstance: cocoascript.NSManagedObject, destinationInstance: cocoascript.NSManagedObject, entityMapping: cocoascript.NSEntityMapping):void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417594-destinationinstancesforentitymap
    destinationInstancesForEntityMappingNamed_sourceInstances(mappingName: cocoascript.NSString, sourceInstances: cocoascript.NSManagedObject):cocoascript.NSManagedObject;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417580-sourceinstancesforentitymappingn
    sourceInstancesForEntityMappingNamed_destinationInstances(mappingName: cocoascript.NSString, destinationInstances: cocoascript.NSManagedObject):cocoascript.NSManagedObject;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417600-mappingmodel
    mappingModel(): cocoascript.NSMappingModel;
    setMappingModel(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417592-sourcemodel
    sourceModel(): cocoascript.NSManagedObjectModel;
    setSourceModel(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417610-destinationmodel
    destinationModel(): cocoascript.NSManagedObjectModel;
    setDestinationModel(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417596-sourceentityforentitymapping
    sourceEntityForEntityMapping(mEntity: cocoascript.NSEntityMapping):cocoascript.NSEntityDescription;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417598-destinationentityforentitymappin
    destinationEntityForEntityMapping(mEntity: cocoascript.NSEntityMapping):cocoascript.NSEntityDescription;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417576-sourcecontext
    sourceContext(): cocoascript.NSManagedObjectContext;
    setSourceContext(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417578-destinationcontext
    destinationContext(): cocoascript.NSManagedObjectContext;
    setDestinationContext(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417588-userinfo
    userInfo(): cocoascript.NSDictionary;
    setUserInfo(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanager/1417606-usesstorespecificmigrationmanage
    usesStoreSpecificMigrationManager(): cocoascript.BOOL;
    setUsesStoreSpecificMigrationManager(): void;
    //
    alloc():cocoascript.NSMigrationManager;
    //
    init():cocoascript.NSMigrationManager;
  }
}

declare const NSMigrationManager: cocoascript.NSMigrationManager;
declare namespace cocoascript {
  /**
   * A policy instance that customizes the migration process for an entity mapping.
   * doc://com.apple.documentation/documentation/coredata/nsentitymigrationpolicy
   */
  interface NSEntityMigrationPolicy extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsentitymigrationpolicy/1423785-beginentitymapping
    beginEntityMapping_manager_error(mapping: cocoascript.NSEntityMapping, manager: cocoascript.NSMigrationManager, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsentitymigrationpolicy/1423801-createdestinationinstancesforsou
    createDestinationInstancesForSourceInstance_entityMapping_manager_error(sInstance: cocoascript.NSManagedObject, mapping: cocoascript.NSEntityMapping, manager: cocoascript.NSMigrationManager, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsentitymigrationpolicy/1423805-endinstancecreationforentitymapp
    endInstanceCreationForEntityMapping_manager_error(mapping: cocoascript.NSEntityMapping, manager: cocoascript.NSMigrationManager, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsentitymigrationpolicy/1423783-createrelationshipsfordestinatio
    createRelationshipsForDestinationInstance_entityMapping_manager_error(dInstance: cocoascript.NSManagedObject, mapping: cocoascript.NSEntityMapping, manager: cocoascript.NSMigrationManager, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsentitymigrationpolicy/1423793-endrelationshipcreationforentity
    endRelationshipCreationForEntityMapping_manager_error(mapping: cocoascript.NSEntityMapping, manager: cocoascript.NSMigrationManager, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsentitymigrationpolicy/1423791-performcustomvalidationforentity
    performCustomValidationForEntityMapping_manager_error(mapping: cocoascript.NSEntityMapping, manager: cocoascript.NSMigrationManager, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsentitymigrationpolicy/1423787-endentitymapping
    endEntityMapping_manager_error(mapping: cocoascript.NSEntityMapping, manager: cocoascript.NSMigrationManager, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationmanagerkey
    NSMigrationManagerKey(): cocoascript.const;
    setNSMigrationManagerKey(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationsourceobjectkey
    NSMigrationSourceObjectKey(): cocoascript.const;
    setNSMigrationSourceObjectKey(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationdestinationobjectkey
    NSMigrationDestinationObjectKey(): cocoascript.const;
    setNSMigrationDestinationObjectKey(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationentitymappingkey
    NSMigrationEntityMappingKey(): cocoascript.const;
    setNSMigrationEntityMappingKey(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationpropertymappingkey
    NSMigrationPropertyMappingKey(): cocoascript.const;
    setNSMigrationPropertyMappingKey(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmigrationentitypolicykey
    NSMigrationEntityPolicyKey(): cocoascript.const;
    setNSMigrationEntityPolicyKey(): void;
    //
    alloc():cocoascript.NSEntityMigrationPolicy;
    //
    init():cocoascript.NSEntityMigrationPolicy;
  }
}

declare const NSEntityMigrationPolicy: cocoascript.NSEntityMigrationPolicy;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coredata/nsentitymappingtype
  type NSEntityMappingType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A mapping instance that specifies in a model how to map from a property in a source entity to a property in a destination entity.
   * doc://com.apple.documentation/documentation/coredata/nspropertymapping
   */
  interface NSPropertyMapping extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nspropertymapping/1506748-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertymapping/1506819-valueexpression
    valueExpression(): cocoascript.NSExpression;
    setValueExpression(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertymapping/1506516-userinfo
    userInfo(): cocoascript.NSDictionary;
    setUserInfo(): void;
    //
    alloc():cocoascript.NSPropertyMapping;
    //
    init():cocoascript.NSPropertyMapping;
  }
}

declare const NSPropertyMapping: cocoascript.NSPropertyMapping;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainereventresulttype
  type NSPersistentCloudKitContainerEventResultType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainerschemainitializationoptions
  type NSPersistentCloudKitContainerSchemaInitializationOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coredata/nsmergepolicytype
  type NSMergePolicyType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coredata/nspersistenthistoryresulttype
  type NSPersistentHistoryResultType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coredata/nsbatchinsertrequestresulttype
  type NSBatchInsertRequestResultType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coredata/nsbatchupdaterequestresulttype
  type NSBatchUpdateRequestResultType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coredata/nsbatchdeleterequestresulttype
  type NSBatchDeleteRequestResultType = cocoascript.NSUInteger;
}
