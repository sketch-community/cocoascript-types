declare namespace cocoascript {
  /**
   * A bindings-compatible controller that manages a collection of objects.
   * doc://com.apple.documentation/documentation/appkit/nsarraycontroller
   */
  interface NSArrayController extends NSObjectController {
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1525707-sortdescriptors
    sortDescriptors(): cocoascript.NSSortDescriptor;
    setSortDescriptors(): void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1533881-arrangeobjects
    arrangeObjects(objects: cocoascript.NSArray):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1534299-arrangedobjects
    arrangedObjects(): cocoascript.id;
    setArrangedObjects(): void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1534319-rearrangeobjects
    rearrangeObjects():void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1535702-add
    add(sender: cocoascript.NSArrayController):void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1532785-avoidsemptyselection
    avoidsEmptySelection(): cocoascript.BOOL;
    setAvoidsEmptySelection(): void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1530628-preservesselection
    preservesSelection(): cocoascript.BOOL;
    setPreservesSelection(): void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1527129-alwaysusesmultiplevaluesmarker
    alwaysUsesMultipleValuesMarker(): cocoascript.BOOL;
    setAlwaysUsesMultipleValuesMarker(): void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1535885-selectionindex
    selectionIndex(): cocoascript.NSUInteger;
    setSelectionIndex(): void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1526094-setselectionindex
    setSelectionIndex(index: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1527427-selectsinsertedobjects
    selectsInsertedObjects(): cocoascript.BOOL;
    setSelectsInsertedObjects(): void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1525801-setselectionindexes
    setSelectionIndexes(indexes: cocoascript.NSIndexSet):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1529908-selectionindexes
    selectionIndexes(): cocoascript.NSIndexSet;
    setSelectionIndexes(): void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1533997-addselectionindexes
    addSelectionIndexes(indexes: cocoascript.NSIndexSet):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1525061-removeselectionindexes
    removeSelectionIndexes(indexes: cocoascript.NSIndexSet):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1533937-setselectedobjects
    setSelectedObjects(objects: cocoascript.NSArray):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1526568-selectedobjects
    selectedObjects(): cocoascript.NSArray;
    setSelectedObjects(): void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1533846-addselectedobjects
    addSelectedObjects(objects: cocoascript.NSArray):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1532684-removeselectedobjects
    removeSelectedObjects(objects: cocoascript.NSArray):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1525178-selectnext
    selectNext(sender: cocoascript.NSArrayController):void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1534863-canselectnext
    canSelectNext(): cocoascript.BOOL;
    setCanSelectNext(): void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1528448-selectprevious
    selectPrevious(sender: cocoascript.NSArrayController):void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1534274-canselectprevious
    canSelectPrevious(): cocoascript.BOOL;
    setCanSelectPrevious(): void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1532900-caninsert
    canInsert(): cocoascript.BOOL;
    setCanInsert(): void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1535089-insert
    insert(sender: cocoascript.NSArrayController):void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1533774-addobject
    addObject(object: cocoascript.NSArrayController):void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1533977-addobjects
    addObjects(objects: cocoascript.NSArray):void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1532302-insertobject
    insertObject_atArrangedObjectIndex(object: cocoascript.NSArrayController, index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1527973-insertobjects
    insertObjects_atArrangedObjectIndexes(objects: cocoascript.NSArray, indexes: cocoascript.NSIndexSet):void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1534738-removeobjectatarrangedobjectinde
    removeObjectAtArrangedObjectIndex(index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1533508-removeobjectsatarrangedobjectind
    removeObjectsAtArrangedObjectIndexes(indexes: cocoascript.NSIndexSet):void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1535317-remove
    remove(sender: cocoascript.NSArrayController):void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1529424-removeobject
    removeObject(object: cocoascript.NSArrayController):void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1533426-removeobjects
    removeObjects(objects: cocoascript.NSArray):void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1534701-clearsfilterpredicateoninsertion
    clearsFilterPredicateOnInsertion(): cocoascript.BOOL;
    setClearsFilterPredicateOnInsertion(): void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1524815-filterpredicate
    filterPredicate(): cocoascript.NSPredicate;
    setFilterPredicate(): void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1524747-automaticallyrearrangesobjects
    automaticallyRearrangesObjects(): cocoascript.BOOL;
    setAutomaticallyRearrangesObjects(): void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1526714-automaticrearrangementkeypaths
    automaticRearrangementKeyPaths(): cocoascript.NSString;
    setAutomaticRearrangementKeyPaths(): void;
    // doc://com.apple.documentation/documentation/appkit/nsarraycontroller/1526171-didchangearrangementcriteria
    didChangeArrangementCriteria():void;
    //
    alloc():cocoascript.NSArrayController;
    //
    init():cocoascript.NSArrayController;
  }
}

declare const NSArrayController: cocoascript.NSArrayController;
