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
