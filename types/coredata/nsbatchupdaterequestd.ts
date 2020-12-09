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

