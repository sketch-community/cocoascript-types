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
    validateValue_forKey_error(value: cocoascript._Nullable, key: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506195-validatefordelete
    validateForDelete(error: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506683-validateforinsert
    validateForInsert(error: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobject/1506998-validateforupdate
    validateForUpdate(error: cocoascript._Nullable):cocoascript.BOOL;
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
