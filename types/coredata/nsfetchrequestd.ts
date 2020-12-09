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
  execute(error: cocoascript._Nullable):cocoascript.NSArray;
  // 
  alloc():cocoascript.NSFetchRequest;
  // 
  init():cocoascript.NSFetchRequest;
}
}
declare const NSFetchRequest: cocoascript.NSFetchRequest;

