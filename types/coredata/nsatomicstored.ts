declare namespace cocoascript {
  /**
   * An abstract superclass that you subclass to create a Core Data atomic store.
   * doc://com.apple.documentation/documentation/coredata/nsatomicstore
   */
  interface NSAtomicStore extends NSPersistentStore {
    // doc://com.apple.documentation/documentation/coredata/nsatomicstore/1388054-initwithpersistentstorecoordinat
    initWithPersistentStoreCoordinator_configurationName_URL_options(coordinator: cocoascript.NSPersistentStoreCoordinator, configurationName: cocoascript.NSString, url: cocoascript.NSURL, options: cocoascript.NSDictionary):cocoascript.NSAtomicStore;
    // doc://com.apple.documentation/documentation/coredata/nsatomicstore/1388060-load
    load(error: cocoascript._Nullable):cocoascript.BOOL;
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
    save(error: cocoascript._Nullable):cocoascript.BOOL;
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
