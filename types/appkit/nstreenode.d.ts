declare namespace cocoascript {
  /**
   * A node in a tree of nodes.
   * doc://com.apple.documentation/documentation/appkit/nstreenode
   */
  interface NSTreeNode extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nstreenode/1533294-initwithrepresentedobject
    initWithRepresentedObject(modelObject: cocoascript.NSTreeNode):cocoascript.NSTreeNode;
    // doc://com.apple.documentation/documentation/appkit/nstreenode/1531596-representedobject
    representedObject(): cocoascript.id;
    setRepresentedObject(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreenode/1532255-indexpath
    indexPath(): cocoascript.NSIndexPath;
    setIndexPath(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreenode/1532729-leaf
    leaf(): cocoascript.BOOL;
    setLeaf(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreenode/1525285-childnodes
    childNodes(): cocoascript.NSTreeNode;
    setChildNodes(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreenode/1527238-mutablechildnodes
    mutableChildNodes(): cocoascript.NSTreeNode;
    setMutableChildNodes(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreenode/1534417-descendantnodeatindexpath
    descendantNodeAtIndexPath(indexPath: cocoascript.NSIndexPath):cocoascript.NSTreeNode;
    // doc://com.apple.documentation/documentation/appkit/nstreenode/1530728-parentnode
    parentNode(): cocoascript.NSTreeNode;
    setParentNode(): void;
    // doc://com.apple.documentation/documentation/appkit/nstreenode/1525615-sortwithsortdescriptors
    sortWithSortDescriptors_recursively(sortDescriptors: cocoascript.NSSortDescriptor, recursively: cocoascript.BOOL):void;
    //
    alloc():cocoascript.NSTreeNode;
    //
    init():cocoascript.NSTreeNode;
  }
}

declare const NSTreeNode: cocoascript.NSTreeNode;
