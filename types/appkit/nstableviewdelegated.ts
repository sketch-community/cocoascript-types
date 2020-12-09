declare namespace cocoascript {
/**
 * A set of optional methods you implement in a table view delegate to customize the behavior of the table view. 
 * doc://com.apple.documentation/documentation/appkit/nstableviewdelegate
 */
interface NSTableViewDelegate extends NSControlTextEditingDelegate {
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1527449-tableview
  tableView_viewForTableColumn_row(tableView: cocoascript.NSTableView, tableColumn: cocoascript.NSTableColumn, row: cocoascript.NSInteger):cocoascript.NSView;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1532417-tableview
  tableView_rowViewForRow(tableView: cocoascript.NSTableView, row: cocoascript.NSInteger):cocoascript.NSTableRowView;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1527434-tableview
  tableView_didAddRowView_forRow(tableView: cocoascript.NSTableView, rowView: cocoascript.NSTableRowView, row: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1528674-tableview
  tableView_didRemoveRowView_forRow(tableView: cocoascript.NSTableView, rowView: cocoascript.NSTableRowView, row: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1526676-tableview
  tableView_isGroupRow(tableView: cocoascript.NSTableView, row: cocoascript.NSInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1533829-tableview
  tableView_willDisplayCell_forTableColumn_row(tableView: cocoascript.NSTableView, cell: cocoascript.NSTableViewDelegate, tableColumn: cocoascript.NSTableColumn, row: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1529321-tableview
  tableView_dataCellForTableColumn_row(tableView: cocoascript.NSTableView, tableColumn: cocoascript.NSTableColumn, row: cocoascript.NSInteger):cocoascript.NSCell;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1535567-tableview
  tableView_shouldShowCellExpansionForTableColumn_row(tableView: cocoascript.NSTableView, tableColumn: cocoascript.NSTableColumn, row: cocoascript.NSInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1526097-tableview
  tableView_toolTipForCell_rect_tableColumn_row_mouseLocation(tableView: cocoascript.NSTableView, cell: cocoascript.NSCell, rect: cocoascript.NSRectPointer, tableColumn: cocoascript.NSTableColumn, row: cocoascript.NSInteger, mouseLocation: cocoascript.NSPoint):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1527305-tableview
  tableView_shouldEditTableColumn_row(tableView: cocoascript.NSTableView, tableColumn: cocoascript.NSTableColumn, row: cocoascript.NSInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1529684-tableview
  tableView_heightOfRow(tableView: cocoascript.NSTableView, row: cocoascript.NSInteger):cocoascript.CGFloat;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1526429-tableview
  tableView_sizeToFitWidthOfColumn(tableView: cocoascript.NSTableView, column: cocoascript.NSInteger):cocoascript.CGFloat;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1533949-selectionshouldchangeintableview
  selectionShouldChangeInTableView(tableView: cocoascript.NSTableView):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1526916-tableview
  tableView_shouldSelectRow(tableView: cocoascript.NSTableView, row: cocoascript.NSInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1532829-tableview
  tableView_selectionIndexesForProposedSelection(tableView: cocoascript.NSTableView, proposedSelectionIndexes: cocoascript.NSIndexSet):cocoascript.NSIndexSet;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1527204-tableview
  tableView_shouldSelectTableColumn(tableView: cocoascript.NSTableView, tableColumn: cocoascript.NSTableColumn):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1530812-tableviewselectionischanging
  tableViewSelectionIsChanging(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1528567-tableviewselectiondidchange
  tableViewSelectionDidChange(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1526347-tableview
  tableView_shouldTypeSelectForEvent_withCurrentSearchString(tableView: cocoascript.NSTableView, event: cocoascript.NSEvent, searchString: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1530001-tableview
  tableView_typeSelectStringForTableColumn_row(tableView: cocoascript.NSTableView, tableColumn: cocoascript.NSTableColumn, row: cocoascript.NSInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1534757-tableview
  tableView_nextTypeSelectMatchFromRow_toRow_forString(tableView: cocoascript.NSTableView, startRow: cocoascript.NSInteger, endRow: cocoascript.NSInteger, searchString: cocoascript.NSString):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1534434-tableview
  tableView_shouldReorderColumn_toColumn(tableView: cocoascript.NSTableView, columnIndex: cocoascript.NSInteger, newColumnIndex: cocoascript.NSInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1535732-tableview
  tableView_didDragTableColumn(tableView: cocoascript.NSTableView, tableColumn: cocoascript.NSTableColumn):void;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1534237-tableviewcolumndidmove
  tableViewColumnDidMove(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1535901-tableviewcolumndidresize
  tableViewColumnDidResize(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1533923-tableview
  tableView_didClickTableColumn(tableView: cocoascript.NSTableView, tableColumn: cocoascript.NSTableColumn):void;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1531711-tableview
  tableView_mouseDownInHeaderOfTableColumn(tableView: cocoascript.NSTableView, tableColumn: cocoascript.NSTableColumn):void;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1533564-tableview
  tableView_shouldTrackCell_forTableColumn_row(tableView: cocoascript.NSTableView, cell: cocoascript.NSCell, tableColumn: cocoascript.NSTableColumn, row: cocoascript.NSInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstableviewdelegate/1532060-tableview
  tableView_rowActionsForRow_edge(tableView: cocoascript.NSTableView, row: cocoascript.NSInteger, edge: cocoascript.NSTableRowActionEdge):cocoascript.NSTableViewRowAction;
}
}

