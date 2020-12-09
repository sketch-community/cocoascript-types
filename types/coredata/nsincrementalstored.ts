declare namespace cocoascript {
/**
 * An abstract superclass defining the API through which Core Data communicates with a store.
 * doc://com.apple.documentation/documentation/coredata/nsincrementalstore
 */
interface NSIncrementalStore extends NSPersistentStore {
  // doc://com.apple.documentation/documentation/coredata/nsincrementalstore/1506653-executerequest
  executeRequest_withContext_error(request: cocoascript.NSPersistentStoreRequest, context: cocoascript.NSManagedObjectContext, error: cocoascript._Nullable):cocoascript.NSIncrementalStore;
  // doc://com.apple.documentation/documentation/coredata/nsincrementalstore/1506729-newvaluesforobjectwithid
  newValuesForObjectWithID_withContext_error(objectID: cocoascript.NSManagedObjectID, context: cocoascript.NSManagedObjectContext, error: cocoascript._Nullable):cocoascript.NSIncrementalStoreNode;
  // doc://com.apple.documentation/documentation/coredata/nsincrementalstore/1506438-newvalueforrelationship
  newValueForRelationship_forObjectWithID_withContext_error(relationship: cocoascript.NSRelationshipDescription, objectID: cocoascript.NSManagedObjectID, context: cocoascript.NSManagedObjectContext, error: cocoascript._Nullable):cocoascript.NSIncrementalStore;
  // doc://com.apple.documentation/documentation/coredata/nsincrementalstore/1506348-obtainpermanentidsforobjects
  obtainPermanentIDsForObjects_error(array: cocoascript.NSManagedObject, error: cocoascript._Nullable):cocoascript.NSManagedObjectID;
  // doc://com.apple.documentation/documentation/coredata/nsincrementalstore/1506666-newobjectidforentity
  newObjectIDForEntity_referenceObject(entity: cocoascript.NSEntityDescription, data: cocoascript.NSIncrementalStore):cocoascript.NSManagedObjectID;
  // doc://com.apple.documentation/documentation/coredata/nsincrementalstore/1506828-referenceobjectforobjectid
  referenceObjectForObjectID(objectID: cocoascript.NSManagedObjectID):cocoascript.NSIncrementalStore;
  // doc://com.apple.documentation/documentation/coredata/nsincrementalstore/1506199-managedobjectcontextdidregistero
  managedObjectContextDidRegisterObjectsWithIDs(objectIDs: cocoascript.NSManagedObjectID):void;
  // doc://com.apple.documentation/documentation/coredata/nsincrementalstore/1506878-managedobjectcontextdidunregiste
  managedObjectContextDidUnregisterObjectsWithIDs(objectIDs: cocoascript.NSManagedObjectID):void;
  // doc://com.apple.documentation/documentation/coredata/nsincrementalstore/1506708-loadmetadata
  loadMetadata(error: cocoascript._Nullable):cocoascript.BOOL;
  // 
  alloc():cocoascript.NSIncrementalStore;
  // 
  init():cocoascript.NSIncrementalStore;
}
}
declare const NSIncrementalStore: cocoascript.NSIncrementalStore;

