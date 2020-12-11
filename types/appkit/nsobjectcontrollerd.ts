declare namespace cocoascript {
  /**
   * A controller that can manage an object's properties referenced by key-value paths.
   * doc://com.apple.documentation/documentation/appkit/nsobjectcontroller
   */
  interface NSObjectController extends NSController {
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1529422-initwithcontent
    initWithContent(content: cocoascript.NSObjectController):cocoascript.NSObjectController;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1530826-content
    content(): cocoascript.id;
    setContent(): void;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1534767-automaticallypreparescontent
    automaticallyPreparesContent(): cocoascript.BOOL;
    setAutomaticallyPreparesContent(): void;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1534218-preparecontent
    prepareContent():void;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1535459-objectclass
    objectClass(): cocoascript.Class;
    setObjectClass(): void;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1535921-newobject
    newObject():cocoascript.NSObjectController;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1534093-addobject
    addObject(object: cocoascript.NSObjectController):void;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1532897-removeobject
    removeObject(object: cocoascript.NSObjectController):void;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1528376-add
    add(sender: cocoascript.NSObjectController):void;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1528497-canadd
    canAdd(): cocoascript.BOOL;
    setCanAdd(): void;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1533713-remove
    remove(sender: cocoascript.NSObjectController):void;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1532378-canremove
    canRemove(): cocoascript.BOOL;
    setCanRemove(): void;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1534699-editable
    editable(): cocoascript.BOOL;
    setEditable(): void;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1535467-entityname
    entityName(): cocoascript.NSString;
    setEntityName(): void;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1524554-fetch
    fetch(sender: cocoascript.NSObjectController):void;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1531411-useslazyfetching
    usesLazyFetching(): cocoascript.BOOL;
    setUsesLazyFetching(): void;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1528145-defaultfetchrequest
    defaultFetchRequest():cocoascript.NSFetchRequest;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1533545-fetchpredicate
    fetchPredicate(): cocoascript.NSPredicate;
    setFetchPredicate(): void;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1530382-managedobjectcontext
    managedObjectContext(): cocoascript.NSManagedObjectContext;
    setManagedObjectContext(): void;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1531782-fetchwithrequest
    fetchWithRequest_merge_error(fetchRequest: cocoascript.NSFetchRequest, merge: cocoascript.BOOL, error: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1535397-selectedobjects
    selectedObjects(): cocoascript.NSArray;
    setSelectedObjects(): void;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1527403-selection
    selection(): cocoascript.id;
    setSelection(): void;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1534469-validateuserinterfaceitem
    validateUserInterfaceItem(item: cocoascript.NSValidatedUserInterfaceItem):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsobjectcontroller/1532995-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSObjectController;
    //
    alloc():cocoascript.NSObjectController;
    //
    init():cocoascript.NSObjectController;
  }
}

declare const NSObjectController: cocoascript.NSObjectController;
