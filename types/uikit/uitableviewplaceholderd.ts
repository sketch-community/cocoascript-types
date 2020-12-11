declare namespace cocoascript {
  /**
   * An object that contains information about a placeholder cell being inserted into a table.
   * doc://com.apple.documentation/documentation/uikit/uitableviewplaceholder
   */
  interface UITableViewPlaceholder extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uitableviewplaceholder/2921666-initwithinsertionindexpath
    initWithInsertionIndexPath_reuseIdentifier_rowHeight(insertionIndexPath: cocoascript.NSIndexPath, reuseIdentifier: cocoascript.NSString, rowHeight: cocoascript.CGFloat):cocoascript.UITableViewPlaceholder;
    // doc://com.apple.documentation/documentation/uikit/uitableviewplaceholder/2921671-cellupdatehandler
    cellUpdateHandler(): cocoascript.UITableViewCell;
    setCellUpdateHandler(): void;
    //
    alloc():cocoascript.UITableViewPlaceholder;
    //
    init():cocoascript.UITableViewPlaceholder;
  }
}

declare const UITableViewPlaceholder: cocoascript.UITableViewPlaceholder;
