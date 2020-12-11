declare namespace cocoascript {
  /**
   * An encapsulation of conflicts that occur during an attempt to save a managed object.
   * doc://com.apple.documentation/documentation/coredata/nsconstraintconflict
   */
  interface NSConstraintConflict extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsconstraintconflict/1506668-initwithconstraint
    initWithConstraint_databaseObject_databaseSnapshot_conflictingObjects_conflictingSnapshots(contraint: cocoascript.NSString, databaseObject: cocoascript.NSManagedObject, databaseSnapshot: cocoascript.NSDictionary, conflictingObjects: cocoascript.NSManagedObject, conflictingSnapshots: cocoascript.NSArray):cocoascript.NSConstraintConflict;
    // doc://com.apple.documentation/documentation/coredata/nsconstraintconflict/1506707-conflictingobjects
    conflictingObjects(): cocoascript.NSManagedObject;
    setConflictingObjects(): void;
    // doc://com.apple.documentation/documentation/coredata/nsconstraintconflict/1506774-conflictingsnapshots
    conflictingSnapshots(): cocoascript.NSDictionary;
    setConflictingSnapshots(): void;
    // doc://com.apple.documentation/documentation/coredata/nsconstraintconflict/1506902-constraint
    constraint(): cocoascript.NSString;
    setConstraint(): void;
    // doc://com.apple.documentation/documentation/coredata/nsconstraintconflict/1506399-constraintvalues
    constraintValues(): cocoascript.id;
    setConstraintValues(): void;
    // doc://com.apple.documentation/documentation/coredata/nsconstraintconflict/1506665-databaseobject
    databaseObject(): cocoascript.NSManagedObject;
    setDatabaseObject(): void;
    // doc://com.apple.documentation/documentation/coredata/nsconstraintconflict/1506687-databasesnapshot
    databaseSnapshot(): cocoascript.id;
    setDatabaseSnapshot(): void;
    //
    alloc():cocoascript.NSConstraintConflict;
    //
    init():cocoascript.NSConstraintConflict;
  }
}

declare const NSConstraintConflict: cocoascript.NSConstraintConflict;
