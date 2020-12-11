declare namespace cocoascript {
  /**
   * A set of optional methods implemented by delegates of
   * doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate
   */
  interface NSOutlineViewDelegate extends NSControlTextEditingDelegate {
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1531199-outlineview
    outlineView_shouldExpandItem(outlineView: cocoascript.NSOutlineView, item: cocoascript.NSOutlineViewDelegate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1529825-outlineview
    outlineView_shouldCollapseItem(outlineView: cocoascript.NSOutlineView, item: cocoascript.NSOutlineViewDelegate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1526847-outlineview
    outlineView_typeSelectStringForTableColumn_item(outlineView: cocoascript.NSOutlineView, tableColumn: cocoascript.NSTableColumn, item: cocoascript.NSOutlineViewDelegate):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1533321-outlineview
    outlineView_nextTypeSelectMatchFromItem_toItem_forString(outlineView: cocoascript.NSOutlineView, startItem: cocoascript.NSOutlineViewDelegate, endItem: cocoascript.NSOutlineViewDelegate, searchString: cocoascript.NSString):cocoascript.NSOutlineViewDelegate;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1532941-outlineview
    outlineView_shouldTypeSelectForEvent_withCurrentSearchString(outlineView: cocoascript.NSOutlineView, event: cocoascript.NSEvent, searchString: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1527695-outlineview
    outlineView_toolTipForCell_rect_tableColumn_item_mouseLocation(outlineView: cocoascript.NSOutlineView, cell: cocoascript.NSCell, rect: cocoascript.NSRectPointer, tableColumn: cocoascript.NSTableColumn, item: cocoascript.NSOutlineViewDelegate, mouseLocation: cocoascript.NSPoint):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1535118-outlineview
    outlineView_shouldSelectTableColumn(outlineView: cocoascript.NSOutlineView, tableColumn: cocoascript.NSTableColumn):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1531075-outlineview
    outlineView_shouldSelectItem(outlineView: cocoascript.NSOutlineView, item: cocoascript.NSOutlineViewDelegate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1527575-outlineview
    outlineView_selectionIndexesForProposedSelection(outlineView: cocoascript.NSOutlineView, proposedSelectionIndexes: cocoascript.NSIndexSet):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1530734-selectionshouldchangeinoutlinevi
    selectionShouldChangeInOutlineView(outlineView: cocoascript.NSOutlineView):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1532481-outlineviewselectionischanging
    outlineViewSelectionIsChanging(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1526913-outlineviewselectiondidchange
    outlineViewSelectionDidChange(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1529359-outlineview
    outlineView_willDisplayCell_forTableColumn_item(outlineView: cocoascript.NSOutlineView, cell: cocoascript.NSOutlineViewDelegate, tableColumn: cocoascript.NSTableColumn, item: cocoascript.NSOutlineViewDelegate):void;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1535808-outlineview
    outlineView_willDisplayOutlineCell_forTableColumn_item(outlineView: cocoascript.NSOutlineView, cell: cocoascript.NSOutlineViewDelegate, tableColumn: cocoascript.NSTableColumn, item: cocoascript.NSOutlineViewDelegate):void;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1525161-outlineview
    outlineView_dataCellForTableColumn_item(outlineView: cocoascript.NSOutlineView, tableColumn: cocoascript.NSTableColumn, item: cocoascript.NSOutlineViewDelegate):cocoascript.NSCell;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1534006-outlineview
    outlineView_shouldShowOutlineCellForItem(outlineView: cocoascript.NSOutlineView, item: cocoascript.NSOutlineViewDelegate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1534411-outlineview
    outlineView_shouldShowCellExpansionForTableColumn_item(outlineView: cocoascript.NSOutlineView, tableColumn: cocoascript.NSTableColumn, item: cocoascript.NSOutlineViewDelegate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1530792-outlineview
    outlineView_shouldReorderColumn_toColumn(outlineView: cocoascript.NSOutlineView, columnIndex: cocoascript.NSInteger, newColumnIndex: cocoascript.NSInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1525297-outlineviewcolumndidmove
    outlineViewColumnDidMove(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1533372-outlineviewcolumndidresize
    outlineViewColumnDidResize(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1535847-outlineviewitemwillexpand
    outlineViewItemWillExpand(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1530869-outlineviewitemdidexpand
    outlineViewItemDidExpand(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1526896-outlineviewitemwillcollapse
    outlineViewItemWillCollapse(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1535557-outlineviewitemdidcollapse
    outlineViewItemDidCollapse(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1535450-outlineview
    outlineView_shouldEditTableColumn_item(outlineView: cocoascript.NSOutlineView, tableColumn: cocoascript.NSTableColumn, item: cocoascript.NSOutlineViewDelegate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1531835-outlineview
    outlineView_mouseDownInHeaderOfTableColumn(outlineView: cocoascript.NSOutlineView, tableColumn: cocoascript.NSTableColumn):void;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1534040-outlineview
    outlineView_didClickTableColumn(outlineView: cocoascript.NSOutlineView, tableColumn: cocoascript.NSTableColumn):void;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1526632-outlineview
    outlineView_didDragTableColumn(outlineView: cocoascript.NSOutlineView, tableColumn: cocoascript.NSTableColumn):void;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1531870-outlineview
    outlineView_heightOfRowByItem(outlineView: cocoascript.NSOutlineView, item: cocoascript.NSOutlineViewDelegate):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1530479-outlineview
    outlineView_sizeToFitWidthOfColumn(outlineView: cocoascript.NSOutlineView, column: cocoascript.NSInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/3626816-outlineview
    outlineView_tintConfigurationForItem(outlineView: cocoascript.NSOutlineView, item: cocoascript.NSOutlineViewDelegate):cocoascript.NSTintConfiguration;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1534295-outlineview
    outlineView_shouldTrackCell_forTableColumn_item(outlineView: cocoascript.NSOutlineView, cell: cocoascript.NSCell, tableColumn: cocoascript.NSTableColumn, item: cocoascript.NSOutlineViewDelegate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1528482-outlineview
    outlineView_isGroupItem(outlineView: cocoascript.NSOutlineView, item: cocoascript.NSOutlineViewDelegate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1528320-outlineview
    outlineView_didAddRowView_forRow(outlineView: cocoascript.NSOutlineView, rowView: cocoascript.NSTableRowView, row: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1530612-outlineview
    outlineView_didRemoveRowView_forRow(outlineView: cocoascript.NSOutlineView, rowView: cocoascript.NSTableRowView, row: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1532140-outlineview
    outlineView_rowViewForItem(outlineView: cocoascript.NSOutlineView, item: cocoascript.NSOutlineViewDelegate):cocoascript.NSTableRowView;
    // doc://com.apple.documentation/documentation/appkit/nsoutlineviewdelegate/1535566-outlineview
    outlineView_viewForTableColumn_item(outlineView: cocoascript.NSOutlineView, tableColumn: cocoascript.NSTableColumn, item: cocoascript.NSOutlineViewDelegate):cocoascript.NSView;
  }
}
