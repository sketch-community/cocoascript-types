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

