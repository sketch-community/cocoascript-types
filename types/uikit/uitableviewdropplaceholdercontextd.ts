declare namespace cocoascript {
  /**
   * An object for tracking a placeholder cell that you added to your table during a drop operation.
   * doc://com.apple.documentation/documentation/uikit/uitableviewdropplaceholdercontext
   */
  interface UITableViewDropPlaceholderContext extends UIDragAnimating {
    // doc://com.apple.documentation/documentation/uikit/uitableviewdropplaceholdercontext/2897487-commitinsertionwithdatasourceupd
    commitInsertionWithDataSourceUpdates(dataSourceUpdates: cocoascript.NSIndexPath):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdropplaceholdercontext/2897343-deleteplaceholder
    deletePlaceholder():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdropplaceholdercontext/2897407-dragitem
    dragItem(): cocoascript.UIDragItem;
    setDragItem(): void;
  }
}
