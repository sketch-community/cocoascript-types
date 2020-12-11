declare namespace cocoascript {
  /**
   * A request to insert a batch of data in a persistent store.
   * doc://com.apple.documentation/documentation/coredata/nsbatchinsertrequest
   */
  interface NSBatchInsertRequest extends NSPersistentStoreRequest {
    // doc://com.apple.documentation/documentation/coredata/nsbatchinsertrequest/3618790-initwithentity
    initWithEntity_dictionaryHandler(entity: cocoascript.NSEntityDescription, handler: cocoascript.NSBatchInsertRequest):cocoascript.NSBatchInsertRequest;
    // doc://com.apple.documentation/documentation/coredata/nsbatchinsertrequest/3618791-initwithentity
    initWithEntity_managedObjectHandler(entity: cocoascript.NSEntityDescription, handler: cocoascript.NSManagedObject):cocoascript.NSBatchInsertRequest;
    // doc://com.apple.documentation/documentation/coredata/nsbatchinsertrequest/3333235-initwithentity
    initWithEntity_objects(entity: cocoascript.NSEntityDescription, dictionaries: cocoascript.NSBatchInsertRequest):cocoascript.NSBatchInsertRequest;
    // doc://com.apple.documentation/documentation/coredata/nsbatchinsertrequest/3333237-initwithentityname
    initWithEntityName_objects(entityName: cocoascript.NSString, dictionaries: cocoascript.NSBatchInsertRequest):cocoascript.NSBatchInsertRequest;
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
