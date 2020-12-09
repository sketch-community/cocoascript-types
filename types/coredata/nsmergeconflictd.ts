declare namespace cocoascript {
/**
 * An encapsulation of conflicts that occur during an attempt to save changes in a managed object context.
 * doc://com.apple.documentation/documentation/coredata/nsmergeconflict
 */
interface NSMergeConflict extends NSObject {
  // doc://com.apple.documentation/documentation/coredata/nsmergeconflict/1506216-initwithsource
  initWithSource_newVersion_oldVersion_cachedSnapshot_persistedSnapshot(srcObject: cocoascript.NSManagedObject, newvers: cocoascript.NSUInteger, oldvers: cocoascript.NSUInteger, cachesnap: cocoascript.NSMergeConflict, persnap: cocoascript.NSMergeConflict):cocoascript.NSMergeConflict;
  // doc://com.apple.documentation/documentation/coredata/nsmergeconflict/1506809-sourceobject
  sourceObject(): cocoascript.NSManagedObject;
  setSourceObject(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmergeconflict/1506454-objectsnapshot
  objectSnapshot(): cocoascript.id;
  setObjectSnapshot(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmergeconflict/1506685-cachedsnapshot
  cachedSnapshot(): cocoascript.id;
  setCachedSnapshot(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmergeconflict/1506412-persistedsnapshot
  persistedSnapshot(): cocoascript.id;
  setPersistedSnapshot(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmergeconflict/1506190-newversionnumber
  newVersionNumber(): cocoascript.NSUInteger;
  setNewVersionNumber(): void;
  // doc://com.apple.documentation/documentation/coredata/nsmergeconflict/1506271-oldversionnumber
  oldVersionNumber(): cocoascript.NSUInteger;
  setOldVersionNumber(): void;
  // 
  alloc():cocoascript.NSMergeConflict;
  // 
  init():cocoascript.NSMergeConflict;
}
}
declare const NSMergeConflict: cocoascript.NSMergeConflict;

