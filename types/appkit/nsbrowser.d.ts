declare namespace cocoascript {
  /**
   * An interface that displays a hierarchically organized list of data items that can be navigated and selected.
   * doc://com.apple.documentation/documentation/appkit/nsbrowser
   */
  interface NSBrowser extends NSControl {
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407792-reusescolumns
    reusesColumns(): cocoascript.BOOL;
    setReusesColumns(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407749-maxvisiblecolumns
    maxVisibleColumns(): cocoascript.NSInteger;
    setMaxVisibleColumns(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407696-autohidesscroller
    autohidesScroller(): cocoascript.BOOL;
    setAutohidesScroller(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407520-backgroundcolor
    backgroundColor(): cocoascript.NSColor;
    setBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407513-mincolumnwidth
    minColumnWidth(): cocoascript.CGFloat;
    setMinColumnWidth(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407653-separatescolumns
    separatesColumns(): cocoascript.BOOL;
    setSeparatesColumns(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407564-takestitlefrompreviouscolumn
    takesTitleFromPreviousColumn(): cocoascript.BOOL;
    setTakesTitleFromPreviousColumn(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407788-tile
    tile():void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407686-delegate
    delegate(): cocoascript.NSBrowserDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407505-cellclass
    cellClass(): cocoascript.Class;
    setCellClass(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407811-setcellclass
    setCellClass(factoryId: cocoascript.Class):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407662-cellprototype
    cellPrototype(): cocoascript.id;
    setCellPrototype(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407796-allowsbranchselection
    allowsBranchSelection(): cocoascript.BOOL;
    setAllowsBranchSelection(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407585-allowsemptyselection
    allowsEmptySelection(): cocoascript.BOOL;
    setAllowsEmptySelection(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407509-allowsmultipleselection
    allowsMultipleSelection(): cocoascript.BOOL;
    setAllowsMultipleSelection(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407807-selectedrowindexesincolumn
    selectedRowIndexesInColumn(column: cocoascript.NSInteger):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407618-selectrowindexes
    selectRowIndexes_inColumn(indexes: cocoascript.NSIndexSet, column: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407682-allowstypeselect
    allowsTypeSelect(): cocoascript.BOOL;
    setAllowsTypeSelect(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407730-selectedcell
    selectedCell(): cocoascript.id;
    setSelectedCell(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407592-selectedcellincolumn
    selectedCellInColumn(column: cocoascript.NSInteger):cocoascript.NSBrowser;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407588-selectedcells
    selectedCells(): cocoascript.NSCell;
    setSelectedCells(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407717-selectall
    selectAll(sender: cocoascript.NSBrowser):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407528-selectedrowincolumn
    selectedRowInColumn(column: cocoascript.NSInteger):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407560-selectrow
    selectRow_inColumn(row: cocoascript.NSInteger, column: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407507-selectionindexpath
    selectionIndexPath(): cocoascript.NSIndexPath;
    setSelectionIndexPath(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407536-selectionindexpaths
    selectionIndexPaths(): cocoascript.NSIndexPath;
    setSelectionIndexPaths(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407581-loadedcellatrow
    loadedCellAtRow_column(row: cocoascript.NSInteger, col: cocoascript.NSInteger):cocoascript.NSBrowser;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407558-edititematindexpath
    editItemAtIndexPath_withEvent_select(indexPath: cocoascript.NSIndexPath, event: cocoascript.NSEvent, select: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407673-itematindexpath
    itemAtIndexPath(indexPath: cocoascript.NSIndexPath):cocoascript.NSBrowser;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407701-itematrow
    itemAtRow_inColumn(row: cocoascript.NSInteger, column: cocoascript.NSInteger):cocoascript.NSBrowser;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407739-indexpathforcolumn
    indexPathForColumn(column: cocoascript.NSInteger):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407713-isleafitem
    isLeafItem(item: cocoascript.NSBrowser):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407570-parentforitemsincolumn
    parentForItemsInColumn(column: cocoascript.NSInteger):cocoascript.NSBrowser;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407731-path
    path():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407751-setpath
    setPath(path: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407727-pathtocolumn
    pathToColumn(column: cocoascript.NSInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407688-pathseparator
    pathSeparator(): cocoascript.NSString;
    setPathSeparator(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407723-addcolumn
    addColumn():void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407568-selectedcolumn
    selectedColumn(): cocoascript.NSInteger;
    setSelectedColumn(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407715-lastcolumn
    lastColumn(): cocoascript.NSInteger;
    setLastColumn(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407703-firstvisiblecolumn
    firstVisibleColumn(): cocoascript.NSInteger;
    setFirstVisibleColumn(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407700-numberofvisiblecolumns
    numberOfVisibleColumns(): cocoascript.NSInteger;
    setNumberOfVisibleColumns(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407610-lastvisiblecolumn
    lastVisibleColumn(): cocoascript.NSInteger;
    setLastVisibleColumn(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407725-validatevisiblecolumns
    validateVisibleColumns():void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407758-loaded
    loaded(): cocoascript.BOOL;
    setLoaded(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407745-loadcolumnzero
    loadColumnZero():void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407764-reloadcolumn
    reloadColumn(column: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407794-titleofcolumn
    titleOfColumn(column: cocoascript.NSInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407575-settitle
    setTitle_ofColumn(string: cocoascript.NSString, column: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407735-titled
    titled(): cocoascript.BOOL;
    setTitled(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407809-drawtitleofcolumn
    drawTitleOfColumn_inRect(column: cocoascript.NSInteger, rect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407709-titleheight
    titleHeight(): cocoascript.CGFloat;
    setTitleHeight(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407544-titleframeofcolumn
    titleFrameOfColumn(column: cocoascript.NSInteger):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407608-noteheightofrowswithindexeschang
    noteHeightOfRowsWithIndexesChanged_inColumn(indexSet: cocoascript.NSIndexSet, columnIndex: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407805-reloaddataforrowindexes
    reloadDataForRowIndexes_inColumn(rowIndexes: cocoascript.NSIndexSet, column: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407551-hashorizontalscroller
    hasHorizontalScroller(): cocoascript.BOOL;
    setHasHorizontalScroller(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407516-scrollcolumntovisible
    scrollColumnToVisible(column: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407747-scrollcolumnsleftby
    scrollColumnsLeftBy(shiftAmount: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407684-scrollcolumnsrightby
    scrollColumnsRightBy(shiftAmount: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407719-scrollrowtovisible
    scrollRowToVisible_inColumn(row: cocoascript.NSInteger, column: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407559-setdraggingsourceoperationmask
    setDraggingSourceOperationMask_forLocal(mask: cocoascript.NSDragOperation, isLocal: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407632-candragrowswithindexes
    canDragRowsWithIndexes_inColumn_withEvent(rowIndexes: cocoascript.NSIndexSet, column: cocoascript.NSInteger, event: cocoascript.NSEvent):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407532-draggingimageforrowswithindexes
    draggingImageForRowsWithIndexes_inColumn_withEvent_offset(rowIndexes: cocoascript.NSIndexSet, column: cocoascript.NSInteger, event: cocoascript.NSEvent, dragImageOffset: cocoascript.NSPointPointer):cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407620-frameofcolumn
    frameOfColumn(column: cocoascript.NSInteger):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407617-frameofinsideofcolumn
    frameOfInsideOfColumn(column: cocoascript.NSInteger):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407622-frameofrow
    frameOfRow_inColumn(row: cocoascript.NSInteger, column: cocoascript.NSInteger):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407606-getrow
    getRow_column_forPoint(row: cocoascript.NSInteger, column: cocoascript.NSInteger, point: cocoascript.NSPoint):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407698-doubleaction
    doubleAction(): cocoascript.SEL;
    setDoubleAction(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407614-sendsactiononarrowkeys
    sendsActionOnArrowKeys(): cocoascript.BOOL;
    setSendsActionOnArrowKeys(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407675-sendaction
    sendAction():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407600-doclick
    doClick(sender: cocoascript.NSBrowser):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407800-dodoubleclick
    doDoubleClick(sender: cocoascript.NSBrowser):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407590-clickedcolumn
    clickedColumn(): cocoascript.NSInteger;
    setClickedColumn(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407671-clickedrow
    clickedRow(): cocoascript.NSInteger;
    setClickedRow(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407650-columnsautosavename
    columnsAutosaveName(): cocoascript.NSBrowserColumnsAutosaveName;
    setColumnsAutosaveName(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407522-columncontentwidthforcolumnwidth
    columnContentWidthForColumnWidth(columnWidth: cocoascript.CGFloat):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407648-columnwidthforcolumncontentwidth
    columnWidthForColumnContentWidth(columnContentWidth: cocoascript.CGFloat):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407694-columnresizingtype
    columnResizingType(): cocoascript.NSBrowserColumnResizingType;
    setColumnResizingType(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407690-prefersallcolumnuserresizing
    prefersAllColumnUserResizing(): cocoascript.BOOL;
    setPrefersAllColumnUserResizing(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407778-widthofcolumn
    widthOfColumn(column: cocoascript.NSInteger):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407679-setwidth
    setWidth_ofColumn(columnWidth: cocoascript.CGFloat, columnIndex: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407615-defaultcolumnwidth
    defaultColumnWidth():cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407651-setdefaultcolumnwidth
    setDefaultColumnWidth(columnWidth: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407642-rowheight
    rowHeight(): cocoascript.CGFloat;
    setRowHeight(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowsercolumnconfigurationdidchangenotification
    NSBrowserColumnConfigurationDidChangeNotification(): cocoascript.NSNotificationName;
    setNSBrowserColumnConfigurationDidChangeNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407743-updatescroller
    updateScroller():void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407655-scrollviascroller
    scrollViaScroller(sender: cocoascript.NSScroller):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407753-displayallcolumns
    displayAllColumns():void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407760-displaycolumn
    displayColumn(column: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407640-columnofmatrix
    columnOfMatrix(matrix: cocoascript.NSMatrix):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407573-matrixincolumn
    matrixInColumn(column: cocoascript.NSInteger):cocoascript.NSMatrix;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407790-matrixclass
    matrixClass():cocoascript.Class;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407711-setmatrixclass
    setMatrixClass(factoryId: cocoascript.Class):void;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407546-acceptsarrowkeys
    acceptsArrowKeys():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsbrowser/1407680-setacceptsarrowkeys
    setAcceptsArrowKeys(flag: cocoascript.BOOL):void;
    //
    alloc():cocoascript.NSBrowser;
    //
    init():cocoascript.NSBrowser;
  }
}

declare const NSBrowser: cocoascript.NSBrowser;
