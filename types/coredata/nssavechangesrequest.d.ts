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
