declare namespace cocoascript {
  /**
   * A set of related records, displayed in rows that represent individual records and columns that represent the attributes of those records.
   * doc://com.apple.documentation/documentation/appkit/nstableview
   */
  interface NSTableView extends NSControl {
    // doc://com.apple.documentation/documentation/appkit/nstableview/1528481-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSTableView;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1525511-initwithframe
    initWithFrame(frameRect: cocoascript.NSRect):cocoascript.NSTableView;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1531866-datasource
    dataSource(): cocoascript.NSTableViewDataSource;
    setDataSource(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1533450-usesstaticcontents
    usesStaticContents(): cocoascript.BOOL;
    setUsesStaticContents(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1528382-reloaddata
    reloadData():void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1527621-reloaddataforrowindexes
    reloadDataForRowIndexes_columnIndexes(rowIndexes: cocoascript.NSIndexSet, columnIndexes: cocoascript.NSIndexSet):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1535482-makeviewwithidentifier
    makeViewWithIdentifier_owner(identifier: cocoascript.NSUserInterfaceItemIdentifier, owner: cocoascript.NSTableView):cocoascript.NSView;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1525162-rowviewatrow
    rowViewAtRow_makeIfNecessary(row: cocoascript.NSInteger, makeIfNecessary: cocoascript.BOOL):cocoascript.NSTableRowView;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1528831-viewatcolumn
    viewAtColumn_row_makeIfNecessary(column: cocoascript.NSInteger, row: cocoascript.NSInteger, makeIfNecessary: cocoascript.BOOL):cocoascript.NSView;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1527288-beginupdates
    beginUpdates():void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1526267-endupdates
    endUpdates():void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1535835-moverowatindex
    moveRowAtIndex_toIndex(oldIndex: cocoascript.NSInteger, newIndex: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1532406-insertrowsatindexes
    insertRowsAtIndexes_withAnimation(indexes: cocoascript.NSIndexSet, animationOptions: cocoascript.NSTableViewAnimationOptions):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1524655-removerowsatindexes
    removeRowsAtIndexes_withAnimation(indexes: cocoascript.NSIndexSet, animationOptions: cocoascript.NSTableViewAnimationOptions):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1526732-rowforview
    rowForView(view: cocoascript.NSView):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1529415-columnforview
    columnForView(view: cocoascript.NSView):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1524297-registernib
    registerNib_forIdentifier(nib: cocoascript.NSNib, identifier: cocoascript.NSUserInterfaceItemIdentifier):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1530663-registerednibsbyidentifier
    registeredNibsByIdentifier(): cocoascript.NSNib;
    setRegisteredNibsByIdentifier(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1526992-doubleaction
    doubleAction(): cocoascript.SEL;
    setDoubleAction(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1529205-clickedcolumn
    clickedColumn(): cocoascript.NSInteger;
    setClickedColumn(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1527357-clickedrow
    clickedRow(): cocoascript.NSInteger;
    setClickedRow(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1530207-allowscolumnreordering
    allowsColumnReordering(): cocoascript.BOOL;
    setAllowsColumnReordering(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1527826-allowscolumnresizing
    allowsColumnResizing(): cocoascript.BOOL;
    setAllowsColumnResizing(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1532523-allowsmultipleselection
    allowsMultipleSelection(): cocoascript.BOOL;
    setAllowsMultipleSelection(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1535902-allowsemptyselection
    allowsEmptySelection(): cocoascript.BOOL;
    setAllowsEmptySelection(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1525276-allowscolumnselection
    allowsColumnSelection(): cocoascript.BOOL;
    setAllowsColumnSelection(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/2870126-usesautomaticrowheights
    usesAutomaticRowHeights(): cocoascript.BOOL;
    setUsesAutomaticRowHeights(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1524258-intercellspacing
    intercellSpacing(): cocoascript.NSSize;
    setIntercellSpacing(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1529148-rowheight
    rowHeight(): cocoascript.CGFloat;
    setRowHeight(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1527806-backgroundcolor
    backgroundColor(): cocoascript.NSColor;
    setBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1533967-usesalternatingrowbackgroundcolo
    usesAlternatingRowBackgroundColors(): cocoascript.BOOL;
    setUsesAlternatingRowBackgroundColors(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/3622475-style
    style(): cocoascript.NSTableViewStyle;
    setStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/3622474-effectivestyle
    effectiveStyle(): cocoascript.NSTableViewStyle;
    setEffectiveStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1526311-selectionhighlightstyle
    selectionHighlightStyle(): cocoascript.NSTableViewSelectionHighlightStyle;
    setSelectionHighlightStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1524620-gridcolor
    gridColor(): cocoascript.NSColor;
    setGridColor(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1528689-gridstylemask
    gridStyleMask(): cocoascript.NSTableViewGridLineStyle;
    setGridStyleMask(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1524846-indicatorimageintablecolumn
    indicatorImageInTableColumn(tableColumn: cocoascript.NSTableColumn):cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1534381-setindicatorimage
    setIndicatorImage_inTableColumn(image: cocoascript.NSImage, tableColumn: cocoascript.NSTableColumn):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1531825-effectiverowsizestyle
    effectiveRowSizeStyle(): cocoascript.NSTableViewRowSizeStyle;
    setEffectiveRowSizeStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1534438-rowsizestyle
    rowSizeStyle(): cocoascript.NSTableViewRowSizeStyle;
    setRowSizeStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1534098-addtablecolumn
    addTableColumn(tableColumn: cocoascript.NSTableColumn):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1535381-removetablecolumn
    removeTableColumn(tableColumn: cocoascript.NSTableColumn):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1530719-movecolumn
    moveColumn_toColumn(oldIndex: cocoascript.NSInteger, newIndex: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1528735-tablecolumns
    tableColumns(): cocoascript.NSTableColumn;
    setTableColumns(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1526734-columnwithidentifier
    columnWithIdentifier(identifier: cocoascript.NSUserInterfaceItemIdentifier):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1531134-tablecolumnwithidentifier
    tableColumnWithIdentifier(identifier: cocoascript.NSUserInterfaceItemIdentifier):cocoascript.NSTableColumn;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1524416-selectcolumnindexes
    selectColumnIndexes_byExtendingSelection(indexes: cocoascript.NSIndexSet, extend: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1532974-selectedcolumn
    selectedColumn(): cocoascript.NSInteger;
    setSelectedColumn(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1524283-selectedcolumnindexes
    selectedColumnIndexes(): cocoascript.NSIndexSet;
    setSelectedColumnIndexes(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1525334-deselectcolumn
    deselectColumn(column: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1524361-numberofselectedcolumns
    numberOfSelectedColumns(): cocoascript.NSInteger;
    setNumberOfSelectedColumns(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1524306-iscolumnselected
    isColumnSelected(column: cocoascript.NSInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1529688-selectrowindexes
    selectRowIndexes_byExtendingSelection(indexes: cocoascript.NSIndexSet, extend: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1535010-selectedrow
    selectedRow(): cocoascript.NSInteger;
    setSelectedRow(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1533844-selectedrowindexes
    selectedRowIndexes(): cocoascript.NSIndexSet;
    setSelectedRowIndexes(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1532722-deselectrow
    deselectRow(row: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1527463-numberofselectedrows
    numberOfSelectedRows(): cocoascript.NSInteger;
    setNumberOfSelectedRows(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1525882-isrowselected
    isRowSelected(row: cocoascript.NSInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1534002-selectall
    selectAll(sender: cocoascript.NSTableView):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1533302-deselectall
    deselectAll(sender: cocoascript.NSTableView):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1532750-enumerateavailablerowviewsusingb
    enumerateAvailableRowViewsUsingBlock(handler: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1526084-allowstypeselect
    allowsTypeSelect(): cocoascript.BOOL;
    setAllowsTypeSelect(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1528902-numberofcolumns
    numberOfColumns(): cocoascript.NSInteger;
    setNumberOfColumns(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1527941-numberofrows
    numberOfRows(): cocoascript.NSInteger;
    setNumberOfRows(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1528624-floatsgrouprows
    floatsGroupRows(): cocoascript.BOOL;
    setFloatsGroupRows(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1526295-editcolumn
    editColumn_row_withEvent_select(column: cocoascript.NSInteger, row: cocoascript.NSInteger, event: cocoascript.NSEvent, select: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1532307-editedcolumn
    editedColumn(): cocoascript.NSInteger;
    setEditedColumn(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1534282-editedrow
    editedRow(): cocoascript.NSInteger;
    setEditedRow(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1534008-didaddrowview
    didAddRowView_forRow(rowView: cocoascript.NSTableRowView, row: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1532903-didremoverowview
    didRemoveRowView_forRow(rowView: cocoascript.NSTableRowView, row: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1535880-headerview
    headerView(): cocoascript.NSTableHeaderView;
    setHeaderView(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1535831-cornerview
    cornerView(): cocoascript.NSView;
    setCornerView(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1644591-userinterfacelayoutdirection
    userInterfaceLayoutDirection(): cocoascript.NSUserInterfaceLayoutDirection;
    setUserInterfaceLayoutDirection(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1531546-rectofcolumn
    rectOfColumn(column: cocoascript.NSInteger):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1532948-rectofrow
    rectOfRow(row: cocoascript.NSInteger):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1525344-rowsinrect
    rowsInRect(rect: cocoascript.NSRect):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1526013-columnindexesinrect
    columnIndexesInRect(rect: cocoascript.NSRect):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1527504-columnatpoint
    columnAtPoint(point: cocoascript.NSPoint):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1530884-rowatpoint
    rowAtPoint(point: cocoascript.NSPoint):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1524517-frameofcellatcolumn
    frameOfCellAtColumn_row(column: cocoascript.NSInteger, row: cocoascript.NSInteger):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1530784-columnautoresizingstyle
    columnAutoresizingStyle(): cocoascript.NSTableViewColumnAutoresizingStyle;
    setColumnAutoresizingStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1525859-sizelastcolumntofit
    sizeLastColumnToFit():void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1534147-notenumberofrowschanged
    noteNumberOfRowsChanged():void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1528077-tile
    tile():void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1530680-sizetofit
    sizeToFit():void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1532126-noteheightofrowswithindexeschang
    noteHeightOfRowsWithIndexesChanged(indexSet: cocoascript.NSIndexSet):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1533711-drawrow
    drawRow_clipRect(row: cocoascript.NSInteger, clipRect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1527006-drawgridincliprect
    drawGridInClipRect(clipRect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1530758-highlightselectionincliprect
    highlightSelectionInClipRect(clipRect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1528866-drawbackgroundincliprect
    drawBackgroundInClipRect(clipRect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1529902-scrollrowtovisible
    scrollRowToVisible(row: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1535570-scrollcolumntovisible
    scrollColumnToVisible(column: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1525596-autosavetablecolumns
    autosaveTableColumns(): cocoascript.BOOL;
    setAutosaveTableColumns(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1534409-autosavename
    autosaveName(): cocoascript.NSTableViewAutosaveName;
    setAutosaveName(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1534325-delegate
    delegate(): cocoascript.NSTableViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1524980-highlightedtablecolumn
    highlightedTableColumn(): cocoascript.NSTableColumn;
    setHighlightedTableColumn(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1526541-dragimageforrowswithindexes
    dragImageForRowsWithIndexes_tableColumns_event_offset(dragRows: cocoascript.NSIndexSet, tableColumns: cocoascript.NSTableColumn, dragEvent: cocoascript.NSEvent, dragImageOffset: cocoascript.NSPointPointer):cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1524273-candragrowswithindexes
    canDragRowsWithIndexes_atPoint(rowIndexes: cocoascript.NSIndexSet, mouseDownPoint: cocoascript.NSPoint):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1527199-setdraggingsourceoperationmask
    setDraggingSourceOperationMask_forLocal(mask: cocoascript.NSDragOperation, isLocal: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1534585-verticalmotioncanbegindrag
    verticalMotionCanBeginDrag(): cocoascript.BOOL;
    setVerticalMotionCanBeginDrag(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1527570-draggingdestinationfeedbackstyle
    draggingDestinationFeedbackStyle(): cocoascript.NSTableViewDraggingDestinationFeedbackStyle;
    setDraggingDestinationFeedbackStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1535123-setdroprow
    setDropRow_dropOperation(row: cocoascript.NSInteger, dropOperation: cocoascript.NSTableViewDropOperation):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1534198-sortdescriptors
    sortDescriptors(): cocoascript.NSSortDescriptor;
    setSortDescriptors(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1533198-rowactionsvisible
    rowActionsVisible(): cocoascript.BOOL;
    setRowActionsVisible(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1534141-hiderowsatindexes
    hideRowsAtIndexes_withAnimation(indexes: cocoascript.NSIndexSet, rowAnimation: cocoascript.NSTableViewAnimationOptions):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1527447-unhiderowsatindexes
    unhideRowsAtIndexes_withAnimation(indexes: cocoascript.NSIndexSet, rowAnimation: cocoascript.NSTableViewAnimationOptions):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1534914-hiddenrowindexes
    hiddenRowIndexes(): cocoascript.NSIndexSet;
    setHiddenRowIndexes(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1539436-dragimageforrows
    dragImageForRows_event_dragImageOffset(dragRows: cocoascript.NSArray, dragEvent: cocoascript.NSEvent, dragImageOffset: cocoascript.NSPointPointer):cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1539494-setautoresizesallcolumnstofit
    setAutoresizesAllColumnsToFit(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1539541-autoresizesallcolumnstofit
    autoresizesAllColumnsToFit():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1539563-selectcolumn
    selectColumn_byExtendingSelection(column: cocoascript.NSInteger, extend: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1539465-selectrow
    selectRow_byExtendingSelection(row: cocoascript.NSInteger, extend: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/objectivec/nsobject/1539424-tableview
    tableView_writeRows_toPasteboard(tableView: cocoascript.NSTableView, rows: cocoascript.NSArray, pboard: cocoascript.NSPasteboard):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1539529-setdrawsgrid
    setDrawsGrid(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1539576-drawsgrid
    drawsGrid():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1539418-selectedcolumnenumerator
    selectedColumnEnumerator():cocoascript.NSEnumerator;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1539483-selectedrowenumerator
    selectedRowEnumerator():cocoascript.NSEnumerator;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1533870-focusedcolumn
    focusedColumn():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1534977-setfocusedcolumn
    setFocusedColumn(focusedColumn: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1531629-shouldfocuscell
    shouldFocusCell_atColumn_row(cell: cocoascript.NSCell, column: cocoascript.NSInteger, row: cocoascript.NSInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1527932-performclickoncellatcolumn
    performClickOnCellAtColumn_row(column: cocoascript.NSInteger, row: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1534640-preparedcellatcolumn
    preparedCellAtColumn_row(column: cocoascript.NSInteger, row: cocoascript.NSInteger):cocoascript.NSCell;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1539450-columnsinrect
    columnsInRect(rect: cocoascript.NSRect):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1529201-textshouldbeginediting
    textShouldBeginEditing(textObject: cocoascript.NSText):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1535888-textdidbeginediting
    textDidBeginEditing(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1529764-textdidchange
    textDidChange(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1531760-textshouldendediting
    textShouldEndEditing(textObject: cocoascript.NSText):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstableview/1532159-textdidendediting
    textDidEndEditing(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nstableviewcolumndidmovenotification
    NSTableViewColumnDidMoveNotification(): cocoascript.NSNotificationName;
    setNSTableViewColumnDidMoveNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableviewcolumndidresizenotification
    NSTableViewColumnDidResizeNotification(): cocoascript.NSNotificationName;
    setNSTableViewColumnDidResizeNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableviewselectiondidchangenotification
    NSTableViewSelectionDidChangeNotification(): cocoascript.NSNotificationName;
    setNSTableViewSelectionDidChangeNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nstableviewselectionischangingnotification
    NSTableViewSelectionIsChangingNotification(): cocoascript.NSNotificationName;
    setNSTableViewSelectionIsChangingNotification(): void;
    //
    alloc():cocoascript.NSTableView;
    //
    init():cocoascript.NSTableView;
  }
}

declare const NSTableView: cocoascript.NSTableView;
