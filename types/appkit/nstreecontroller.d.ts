declare namespace cocoascript {
  /**
   * A bindings-compatible controller that manages a tree of objects.
   * doc://com.apple.documentation/documentation/appkit/nstreecontroller
   */
  interface NSTreeController extends NSObjectController {
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1526827-sortdescriptors
    sortDescriptors(): cocoascript.NSSortDescriptor;
    setSortDescriptors(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1530427-content
    content(): cocoascript.id;
    setContent(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1527465-arrangedobjects
    arrangedObjects(): cocoascript.NSTreeNode;
    setArrangedObjects(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1525868-rearrangeobjects
    rearrangeObjects():void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1527490-setselectionindexpath
    setSelectionIndexPath(indexPath: cocoascript.NSIndexPath):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1533951-selectionindexpath
    selectionIndexPath(): cocoascript.NSIndexPath;
    setSelectionIndexPath(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1528494-setselectionindexpaths
    setSelectionIndexPaths(indexPaths: cocoascript.NSIndexPath):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1534861-selectionindexpaths
    selectionIndexPaths(): cocoascript.NSIndexPath;
    setSelectionIndexPaths(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1529670-selectedobjects
    selectedObjects(): cocoascript.NSArray;
    setSelectedObjects(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1534151-selectednodes
    selectedNodes(): cocoascript.NSTreeNode;
    setSelectedNodes(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1534200-selectsinsertedobjects
    selectsInsertedObjects(): cocoascript.BOOL;
    setSelectsInsertedObjects(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1535862-addselectionindexpaths
    addSelectionIndexPaths(indexPaths: cocoascript.NSIndexPath):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1532401-removeselectionindexpaths
    removeSelectionIndexPaths(indexPaths: cocoascript.NSIndexPath):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1526188-avoidsemptyselection
    avoidsEmptySelection(): cocoascript.BOOL;
    setAvoidsEmptySelection(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1524473-preservesselection
    preservesSelection(): cocoascript.BOOL;
    setPreservesSelection(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1529530-alwaysusesmultiplevaluesmarker
    alwaysUsesMultipleValuesMarker(): cocoascript.BOOL;
    setAlwaysUsesMultipleValuesMarker(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1525961-add
    add(sender: cocoascript.NSTreeController):void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1527676-addchild
    addChild(sender: cocoascript.NSTreeController):void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1525790-canaddchild
    canAddChild(): cocoascript.BOOL;
    setCanAddChild(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1534180-caninsert
    canInsert(): cocoascript.BOOL;
    setCanInsert(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1524647-caninsertchild
    canInsertChild(): cocoascript.BOOL;
    setCanInsertChild(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1533671-insert
    insert(sender: cocoascript.NSTreeController):void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1524323-insertchild
    insertChild(sender: cocoascript.NSTreeController):void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1530156-insertobject
    insertObject_atArrangedObjectIndexPath(object: cocoascript.NSTreeController, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1530531-insertobjects
    insertObjects_atArrangedObjectIndexPaths(objects: cocoascript.NSArray, indexPaths: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1534110-remove
    remove(sender: cocoascript.NSTreeController):void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1530806-removeobjectatarrangedobjectinde
    removeObjectAtArrangedObjectIndexPath(indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1525602-removeobjectsatarrangedobjectind
    removeObjectsAtArrangedObjectIndexPaths(indexPaths: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1532133-movenode
    moveNode_toIndexPath(node: cocoascript.NSTreeNode, indexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1530337-movenodes
    moveNodes_toIndexPath(nodes: cocoascript.NSTreeNode, startingIndexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1528721-childrenkeypath
    childrenKeyPath(): cocoascript.NSString;
    setChildrenKeyPath(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1525412-childrenkeypathfornode
    childrenKeyPathForNode(node: cocoascript.NSTreeNode):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1529127-countkeypath
    countKeyPath(): cocoascript.NSString;
    setCountKeyPath(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1528109-countkeypathfornode
    countKeyPathForNode(node: cocoascript.NSTreeNode):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1532164-leafkeypath
    leafKeyPath(): cocoascript.NSString;
    setLeafKeyPath(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreecontroller/1526740-leafkeypathfornode
    leafKeyPathForNode(node: cocoascript.NSTreeNode):cocoascript.NSString;
    //
    alloc():cocoascript.NSTreeController;
    //
    init():cocoascript.NSTreeController;
  }
}

declare const NSTreeController: cocoascript.NSTreeController;
