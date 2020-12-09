declare namespace cocoascript {
/**
 * A concrete class used to represent basic nodes in a Core Data incremental store.
 * doc://com.apple.documentation/documentation/coredata/nsincrementalstorenode
 */
interface NSIncrementalStoreNode extends NSObject {
  // doc://com.apple.documentation/documentation/coredata/nsincrementalstorenode/1506321-initwithobjectid
  initWithObjectID_withValues_version(objectID: cocoascript.NSManagedObjectID, values: cocoascript.NSIncrementalStoreNode, version: cocoascript.uint64_t):cocoascript.NSIncrementalStoreNode;
  // doc://com.apple.documentation/documentation/coredata/nsincrementalstorenode/1506827-objectid
  objectID(): cocoascript.NSManagedObjectID;
  setObjectID(): void;
  // doc://com.apple.documentation/documentation/coredata/nsincrementalstorenode/1506721-updatewithvalues
  updateWithValues_version(values: cocoascript.NSIncrementalStoreNode, version: cocoascript.uint64_t):void;
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

