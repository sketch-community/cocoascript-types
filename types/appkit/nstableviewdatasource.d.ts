declare namespace cocoascript {
  /**
   * A set of methods that a table view uses to provide data to a table view and to allow the editing of the table view's data source object.
   * doc://com.apple.documentation/documentation/appkit/nstableviewdatasource
   */
  interface NSTableViewDataSource extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nstableviewdatasource/1524583-numberofrowsintableview
    numberOfRowsInTableView(tableView: cocoascript.NSTableView):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdatasource/1533674-tableview
    tableView_objectValueForTableColumn_row(tableView: cocoascript.NSTableView, tableColumn: cocoascript.NSTableColumn, row: cocoascript.NSInteger):cocoascript.NSTableViewDataSource;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdatasource/1526317-tableview
    tableView_setObjectValue_forTableColumn_row(tableView: cocoascript.NSTableView, object: cocoascript.NSTableViewDataSource, tableColumn: cocoascript.NSTableColumn, row: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdatasource/1535294-tableview
    tableView_pasteboardWriterForRow(tableView: cocoascript.NSTableView, row: cocoascript.NSInteger):cocoascript.NSPasteboardWriting;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdatasource/1527733-tableview
    tableView_acceptDrop_row_dropOperation(tableView: cocoascript.NSTableView, info: cocoascript.NSDraggingInfo, row: cocoascript.NSInteger, dropOperation: cocoascript.NSTableViewDropOperation):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdatasource/1530316-tableview
    tableView_namesOfPromisedFilesDroppedAtDestination_forDraggedRowsWithIndexes(tableView: cocoascript.NSTableView, dropDestination: cocoascript.NSURL, indexSet: cocoascript.NSIndexSet):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdatasource/1532052-tableview
    tableView_validateDrop_proposedRow_proposedDropOperation(tableView: cocoascript.NSTableView, info: cocoascript.NSDraggingInfo, row: cocoascript.NSInteger, dropOperation: cocoascript.NSTableViewDropOperation):cocoascript.NSDragOperation;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdatasource/1525370-tableview
    tableView_writeRowsWithIndexes_toPasteboard(tableView: cocoascript.NSTableView, rowIndexes: cocoascript.NSIndexSet, pboard: cocoascript.NSPasteboard):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdatasource/1528890-tableview
    tableView_draggingSession_willBeginAtPoint_forRowIndexes(tableView: cocoascript.NSTableView, session: cocoascript.NSDraggingSession, screenPoint: cocoascript.NSPoint, rowIndexes: cocoascript.NSIndexSet):void;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdatasource/1535273-tableview
    tableView_updateDraggingItemsForDrag(tableView: cocoascript.NSTableView, draggingInfo: cocoascript.NSDraggingInfo):void;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdatasource/1534355-tableview
    tableView_draggingSession_endedAtPoint_operation(tableView: cocoascript.NSTableView, session: cocoascript.NSDraggingSession, screenPoint: cocoascript.NSPoint, operation: cocoascript.NSDragOperation):void;
    // doc://com.apple.documentation/documentation/appkit/nstableviewdatasource/1532935-tableview
    tableView_sortDescriptorsDidChange(tableView: cocoascript.NSTableView, oldDescriptors: cocoascript.NSSortDescriptor):void;
  }
}
