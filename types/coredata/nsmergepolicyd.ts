declare namespace cocoascript {
  /**
   * A policy object that you use to resolve conflicts between the persistent store and in-memory versions of managed objects.
   * doc://com.apple.documentation/documentation/coredata/nsmergepolicy
   */
  interface NSMergePolicy extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsmergepolicy/1506763-initwithmergetype
    initWithMergeType(ty: cocoascript.NSMergePolicyType):cocoascript.NSMergePolicy;
    // doc://com.apple.documentation/documentation/coredata/nsmergepolicy/1506675-mergetype
    mergeType(): cocoascript.NSMergePolicyType;
    setMergeType(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmergepolicy/1506253-resolveconflicts
    resolveConflicts_error(list: cocoascript.NSArray, error: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsmergepolicy/1506678-resolveconstraintconflicts
    resolveConstraintConflicts_error(list: cocoascript.NSConstraintConflict, error: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsmergepolicy/1506787-resolveoptimisticlockingversionc
    resolveOptimisticLockingVersionConflicts_error(list: cocoascript.NSMergeConflict, error: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsmergepolicy/1690612-errormergepolicy
    errorMergePolicy(): cocoascript.NSMergePolicy;
    setErrorMergePolicy(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmergepolicy/1690607-mergebypropertyobjecttrumpmergep
    mergeByPropertyObjectTrumpMergePolicy(): cocoascript.NSMergePolicy;
    setMergeByPropertyObjectTrumpMergePolicy(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmergepolicy/1690609-mergebypropertystoretrumpmergepo
    mergeByPropertyStoreTrumpMergePolicy(): cocoascript.NSMergePolicy;
    setMergeByPropertyStoreTrumpMergePolicy(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmergepolicy/1690610-overwritemergepolicy
    overwriteMergePolicy(): cocoascript.NSMergePolicy;
    setOverwriteMergePolicy(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmergepolicy/1690613-rollbackmergepolicy
    rollbackMergePolicy(): cocoascript.NSMergePolicy;
    setRollbackMergePolicy(): void;
    //
    alloc():cocoascript.NSMergePolicy;
    //
    init():cocoascript.NSMergePolicy;
  }
}

declare const NSMergePolicy: cocoascript.NSMergePolicy;
