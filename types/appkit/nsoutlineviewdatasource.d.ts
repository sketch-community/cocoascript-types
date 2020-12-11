declare namespace cocoascript {
  /**
   * A set of methods that an outline view calls to retrieve data and information about it from the data source delegate, and—optionally—to update data values.
   * doc://com.apple.documentation/documentation/appkit/nsoutlineviewdatasource
   */
  interface NSOutlineViewDataSource extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdatasource/1529572-outlineview
    outlineView_acceptDrop_item_childIndex(outlineView: cocoascript.NSOutlineView, info: cocoascript.NSDraggingInfo, item: cocoascript.NSOutlineViewDataSource, index: cocoascript.NSInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdatasource/1528977-outlineview
    outlineView_child_ofItem(outlineView: cocoascript.NSOutlineView, index: cocoascript.NSInteger, item: cocoascript.NSOutlineViewDataSource):cocoascript.NSOutlineViewDataSource;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdatasource/1532073-outlineview
    outlineView_draggingSession_endedAtPoint_operation(outlineView: cocoascript.NSOutlineView, session: cocoascript.NSDraggingSession, screenPoint: cocoascript.NSPoint, operation: cocoascript.NSDragOperation):void;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdatasource/1535142-outlineview
    outlineView_draggingSession_willBeginAtPoint_forItems(outlineView: cocoascript.NSOutlineView, session: cocoascript.NSDraggingSession, screenPoint: cocoascript.NSPoint, draggedItems: cocoascript.NSArray):void;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdatasource/1535198-outlineview
    outlineView_isItemExpandable(outlineView: cocoascript.NSOutlineView, item: cocoascript.NSOutlineViewDataSource):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdatasource/1533602-outlineview
    outlineView_itemForPersistentObject(outlineView: cocoascript.NSOutlineView, object: cocoascript.NSOutlineViewDataSource):cocoascript.NSOutlineViewDataSource;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdatasource/1533948-outlineview
    outlineView_namesOfPromisedFilesDroppedAtDestination_forDraggedItems(outlineView: cocoascript.NSOutlineView, dropDestination: cocoascript.NSURL, items: cocoascript.NSArray):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdatasource/1535549-outlineview
    outlineView_numberOfChildrenOfItem(outlineView: cocoascript.NSOutlineView, item: cocoascript.NSOutlineViewDataSource):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdatasource/1531606-outlineview
    outlineView_objectValueForTableColumn_byItem(outlineView: cocoascript.NSOutlineView, tableColumn: cocoascript.NSTableColumn, item: cocoascript.NSOutlineViewDataSource):cocoascript.NSOutlineViewDataSource;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdatasource/1525837-outlineview
    outlineView_pasteboardWriterForItem(outlineView: cocoascript.NSOutlineView, item: cocoascript.NSOutlineViewDataSource):cocoascript.NSPasteboardWriting;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdatasource/1532545-outlineview
    outlineView_persistentObjectForItem(outlineView: cocoascript.NSOutlineView, item: cocoascript.NSOutlineViewDataSource):cocoascript.NSOutlineViewDataSource;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdatasource/1534817-outlineview
    outlineView_setObjectValue_forTableColumn_byItem(outlineView: cocoascript.NSOutlineView, object: cocoascript.NSOutlineViewDataSource, tableColumn: cocoascript.NSTableColumn, item: cocoascript.NSOutlineViewDataSource):void;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdatasource/1535892-outlineview
    outlineView_sortDescriptorsDidChange(outlineView: cocoascript.NSOutlineView, oldDescriptors: cocoascript.NSSortDescriptor):void;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdatasource/1534424-outlineview
    outlineView_updateDraggingItemsForDrag(outlineView: cocoascript.NSOutlineView, draggingInfo: cocoascript.NSDraggingInfo):void;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdatasource/1533597-outlineview
    outlineView_validateDrop_proposedItem_proposedChildIndex(outlineView: cocoascript.NSOutlineView, info: cocoascript.NSDraggingInfo, item: cocoascript.NSOutlineViewDataSource, index: cocoascript.NSInteger):cocoascript.NSDragOperation;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdatasource/1532910-outlineview
    outlineView_writeItems_toPasteboard(outlineView: cocoascript.NSOutlineView, items: cocoascript.NSArray, pasteboard: cocoascript.NSPasteboard):cocoascript.BOOL;
  }
}
