declare namespace cocoascript {
  /**
   * A legacy interface for grouping radio buttons or other types of cells together.
   * doc://com.apple.documentation/documentation/appkit/nsmatrix
   */
  interface NSMatrix extends NSControl {
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436428-initwithframe
    initWithFrame(frameRect: cocoascript.NSRect):cocoascript.NSMatrix;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436400-initwithframe
    initWithFrame_mode_cellClass_numberOfRows_numberOfColumns(frameRect: cocoascript.NSRect, mode: cocoascript.NSMatrixMode, factoryId: cocoascript.Class, rowsHigh: cocoascript.NSInteger, colsWide: cocoascript.NSInteger):cocoascript.NSMatrix;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436386-initwithframe
    initWithFrame_mode_prototype_numberOfRows_numberOfColumns(frameRect: cocoascript.NSRect, mode: cocoascript.NSMatrixMode, cell: cocoascript.NSCell, rowsHigh: cocoascript.NSInteger, colsWide: cocoascript.NSInteger):cocoascript.NSMatrix;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436390-mode
    mode(): cocoascript.NSMatrixMode;
    setMode(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436394-allowsemptyselection
    allowsEmptySelection(): cocoascript.BOOL;
    setAllowsEmptySelection(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436431-selectionbyrect
    selectionByRect(): cocoascript.BOOL;
    setSelectionByRect(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436445-cellclass
    cellClass(): cocoascript.Class;
    setCellClass(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436406-prototype
    prototype(): cocoascript.NSCell;
    setPrototype(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436419-addcolumn
    addColumn():void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436453-addcolumnwithcells
    addColumnWithCells(newCells: cocoascript.NSCell):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436414-addrow
    addRow():void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436450-addrowwithcells
    addRowWithCells(newCells: cocoascript.NSCell):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436417-cellframeatrow
    cellFrameAtRow_column(row: cocoascript.NSInteger, col: cocoascript.NSInteger):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436497-cellsize
    cellSize(): cocoascript.NSSize;
    setCellSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436423-getnumberofrows
    getNumberOfRows_columns(rowCount: cocoascript.NSInteger, colCount: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436376-insertcolumn
    insertColumn(column: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436483-insertcolumn
    insertColumn_withCells(column: cocoascript.NSInteger, newCells: cocoascript.NSCell):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436427-insertrow
    insertRow(row: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436493-insertrow
    insertRow_withCells(row: cocoascript.NSInteger, newCells: cocoascript.NSCell):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436398-intercellspacing
    intercellSpacing(): cocoascript.NSSize;
    setIntercellSpacing(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436439-makecellatrow
    makeCellAtRow_column(row: cocoascript.NSInteger, col: cocoascript.NSInteger):cocoascript.NSCell;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436461-numberofcolumns
    numberOfColumns(): cocoascript.NSInteger;
    setNumberOfColumns(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436507-numberofrows
    numberOfRows(): cocoascript.NSInteger;
    setNumberOfRows(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436384-putcell
    putCell_atRow_column(newCell: cocoascript.NSCell, row: cocoascript.NSInteger, col: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436397-removecolumn
    removeColumn(col: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436403-removerow
    removeRow(row: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436452-renewrows
    renewRows_columns(newRows: cocoascript.NSInteger, newCols: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436468-sortusingfunction
    sortUsingFunction_context(compare: void, context: void):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436475-sortusingselector
    sortUsingSelector(comparator: cocoascript.SEL):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436501-autorecalculatescellsize
    autorecalculatesCellSize(): cocoascript.BOOL;
    setAutorecalculatesCellSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436441-getrow
    getRow_column_forPoint(row: cocoascript.NSInteger, col: cocoascript.NSInteger, point: cocoascript.NSPoint):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436421-getrow
    getRow_column_ofCell(row: cocoascript.NSInteger, col: cocoascript.NSInteger, cell: cocoascript.NSCell):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436479-setstate
    setState_atRow_column(value: cocoascript.NSInteger, row: cocoascript.NSInteger, col: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436372-settooltip
    setToolTip_forCell(toolTipString: cocoascript.NSString, cell: cocoascript.NSCell):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436401-tooltipforcell
    toolTipForCell(cell: cocoascript.NSCell):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436399-selectcellatrow
    selectCellAtRow_column(row: cocoascript.NSInteger, col: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436446-selectcellwithtag
    selectCellWithTag(tag: cocoascript.NSInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436378-selectall
    selectAll(sender: cocoascript.NSMatrix):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436411-keycell
    keyCell(): cocoascript.NSCell;
    setKeyCell(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436405-setselectionfrom
    setSelectionFrom_to_anchor_highlight(startPos: cocoascript.NSInteger, endPos: cocoascript.NSInteger, anchorPos: cocoascript.NSInteger, lit: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436396-deselectallcells
    deselectAllCells():void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436440-deselectselectedcell
    deselectSelectedCell():void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436472-selectedcell
    selectedCell(): cocoascript.NSCell;
    setSelectedCell(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436434-selectedcells
    selectedCells(): cocoascript.NSCell;
    setSelectedCells(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436389-selectedcolumn
    selectedColumn(): cocoascript.NSInteger;
    setSelectedColumn(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436377-selectedrow
    selectedRow(): cocoascript.NSInteger;
    setSelectedRow(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436424-cellatrow
    cellAtRow_column(row: cocoascript.NSInteger, col: cocoascript.NSInteger):cocoascript.NSCell;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436481-cellwithtag
    cellWithTag(tag: cocoascript.NSInteger):cocoascript.NSCell;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436464-cells
    cells(): cocoascript.NSCell;
    setCells(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436442-backgroundcolor
    backgroundColor(): cocoascript.NSColor;
    setBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436449-cellbackgroundcolor
    cellBackgroundColor(): cocoascript.NSColor;
    setCellBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436447-drawsbackground
    drawsBackground(): cocoascript.BOOL;
    setDrawsBackground(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436379-drawscellbackground
    drawsCellBackground(): cocoascript.BOOL;
    setDrawsCellBackground(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436470-selecttext
    selectText(sender: cocoascript.NSMatrix):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436459-selecttextatrow
    selectTextAtRow_column(row: cocoascript.NSInteger, col: cocoascript.NSInteger):cocoascript.NSCell;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436393-textshouldbeginediting
    textShouldBeginEditing(textObject: cocoascript.NSText):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436395-textdidbeginediting
    textDidBeginEditing(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436489-textdidchange
    textDidChange(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436509-textshouldendediting
    textShouldEndEditing(textObject: cocoascript.NSText):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436426-textdidendediting
    textDidEndEditing(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436491-tabkeytraversescells
    tabKeyTraversesCells(): cocoascript.BOOL;
    setTabKeyTraversesCells(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436404-delegate
    delegate(): cocoascript.NSMatrixDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436375-autosizescells
    autosizesCells(): cocoascript.BOOL;
    setAutosizesCells(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436503-setvalidatesize
    setValidateSize(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436408-sizetocells
    sizeToCells():void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436410-autoscroll
    autoscroll(): cocoascript.BOOL;
    setAutoscroll(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436420-setscrollable
    setScrollable(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436455-scrollcelltovisibleatrow
    scrollCellToVisibleAtRow_column(row: cocoascript.NSInteger, col: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436495-drawcellatrow
    drawCellAtRow_column(row: cocoascript.NSInteger, col: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436499-highlightcell
    highlightCell_atRow_column(flag: cocoascript.BOOL, row: cocoascript.NSInteger, col: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436413-sendaction
    sendAction():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436370-sendaction
    sendAction_to_forAllCells(selector: cocoascript.SEL, object: cocoascript.NSMatrix, flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436469-doubleaction
    doubleAction(): cocoascript.SEL;
    setDoubleAction(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436436-senddoubleaction
    sendDoubleAction():void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436454-acceptsfirstmouse
    acceptsFirstMouse(event: cocoascript.NSEvent):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436460-mousedown
    mouseDown(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436487-mousedownflags
    mouseDownFlags(): cocoascript.NSInteger;
    setMouseDownFlags(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436418-performkeyequivalent
    performKeyEquivalent(event: cocoascript.NSEvent):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsmatrix/1436478-resetcursorrects
    resetCursorRects():void;
    //
    alloc():cocoascript.NSMatrix;
    //
    init():cocoascript.NSMatrix;
  }
}

declare const NSMatrix: cocoascript.NSMatrix;
