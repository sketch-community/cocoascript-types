declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/foundation/nsorderedcollectiondifference
   */
  interface NSOrderedCollectionDifference extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectiondifference/3152184-haschanges
    hasChanges(): cocoascript.BOOL;
    setHasChanges(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectiondifference/3152188-insertions
    insertions(): any;
    setInsertions(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectiondifference/3152189-removals
    removals(): any;
    setRemovals(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectiondifference/3152185-initwithchanges
    initWithChanges(changes: cocoascript.NSOrderedCollectionChange):cocoascript.NSOrderedCollectionDifference;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectiondifference/3152186-initwithinsertindexes
    initWithInsertIndexes_insertedObjects_removeIndexes_removedObjects(inserts: cocoascript.NSIndexSet, insertedObjects: cocoascript.NSArray, removes: cocoascript.NSIndexSet, removedObjects: cocoascript.NSArray):cocoascript.NSOrderedCollectionDifference;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectiondifference/3152187-initwithinsertindexes
    initWithInsertIndexes_insertedObjects_removeIndexes_removedObjects_additionalChanges(inserts: cocoascript.NSIndexSet, insertedObjects: cocoascript.NSArray, removes: cocoascript.NSIndexSet, removedObjects: cocoascript.NSArray, changes: cocoascript.NSOrderedCollectionChange):cocoascript.NSOrderedCollectionDifference;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectiondifference/3180114-inversedifference
    inverseDifference():cocoascript.NSOrderedCollectionDifference;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectiondifference/3152183-differencebytransformingchangesw
    differenceByTransformingChangesWithBlock(block: cocoascript.NSOrderedCollectionChange):cocoascript.NSOrderedCollectionDifference;
    //
    alloc():cocoascript.NSOrderedCollectionDifference;
    //
    init():cocoascript.NSOrderedCollectionDifference;
  }
}

declare const NSOrderedCollectionDifference: cocoascript.NSOrderedCollectionDifference;
