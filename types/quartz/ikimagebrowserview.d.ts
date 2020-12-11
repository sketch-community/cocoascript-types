declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikimagebrowserview
   */
  interface IKImageBrowserView extends NSView {
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503511-initwithframe
    initWithFrame(frame: cocoascript.NSRect):cocoascript.IKImageBrowserView;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1504391-reloaddata
    reloadData():void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503780-delegate
    delegate(): cocoascript.id;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503824-datasource
    dataSource(): cocoascript.id;
    setDataSource(): void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1504667-setcellsstylemask
    setCellsStyleMask(mask: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503414-cellsstylemask
    cellsStyleMask():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1504519-setconstrainstooriginalsize
    setConstrainsToOriginalSize(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1504875-constrainstooriginalsize
    constrainsToOriginalSize():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503943-setintercellspacing
    setIntercellSpacing(aSize: cocoascript.NSSize):void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1505048-intercellspacing
    intercellSpacing():cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1505041-newcellforrepresenteditem
    newCellForRepresentedItem(anItem: cocoascript.IKImageBrowserView):cocoascript.IKImageBrowserCell;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1504245-setzoomvalue
    setZoomValue(aValue: number):void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503515-zoomvalue
    zoomValue():number;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503927-setcontentresizingmask
    setContentResizingMask(mask: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503721-contentresizingmask
    contentResizingMask():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1504013-scrollindextovisible
    scrollIndexToVisible(index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503795-setcellsize
    setCellSize(size: cocoascript.NSSize):void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1505258-cellsize
    cellSize():cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503571-indexofitematpoint
    indexOfItemAtPoint(point: cocoascript.NSPoint):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1504718-itemframeatindex
    itemFrameAtIndex(index: cocoascript.NSInteger):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1504925-visibleitemindexes
    visibleItemIndexes():cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503549-cellforitematindex
    cellForItemAtIndex(index: cocoascript.NSUInteger):cocoascript.IKImageBrowserCell;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1505279-selectionindexes
    selectionIndexes():cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1504885-setselectionindexes
    setSelectionIndexes_byExtendingSelection(indexes: cocoascript.NSIndexSet, extendSelection: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1505241-setallowsmultipleselection
    setAllowsMultipleSelection(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1505106-allowsmultipleselection
    allowsMultipleSelection():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1504559-setallowsemptyselection
    setAllowsEmptySelection(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1504364-allowsemptyselection
    allowsEmptySelection():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503485-setallowsreordering
    setAllowsReordering(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1504969-allowsreordering
    allowsReordering():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503716-setanimates
    setAnimates(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503490-animates
    animates():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503921-expandgroupatindex
    expandGroupAtIndex(index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1505086-collapsegroupatindex
    collapseGroupAtIndex(index: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503854-isgroupexpandedatindex
    isGroupExpandedAtIndex(index: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1504090-setdraggingdestinationdelegate
    setDraggingDestinationDelegate(delegate: cocoascript.IKImageBrowserView):void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1504980-draggingdestinationdelegate
    draggingDestinationDelegate():cocoascript.IKImageBrowserView;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503953-setdropindex
    setDropIndex_dropOperation(index: cocoascript.NSInteger, operation: cocoascript.IKImageBrowserDropOperation):void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503733-indexatlocationofdroppeditem
    indexAtLocationOfDroppedItem():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1504965-setallowsdroppingonitems
    setAllowsDroppingOnItems(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503495-allowsdroppingonitems
    allowsDroppingOnItems():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1504110-dropoperation
    dropOperation():cocoascript.IKImageBrowserDropOperation;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1505235-setforegroundlayer
    setForegroundLayer(aLayer: cocoascript.CALayer):void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503987-foregroundlayer
    foregroundLayer():cocoascript.CALayer;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503859-setbackgroundlayer
    setBackgroundLayer(aLayer: cocoascript.CALayer):void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1504728-backgroundlayer
    backgroundLayer():cocoascript.CALayer;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503422-setcancontrolquicklookpanel
    setCanControlQuickLookPanel(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1504351-cancontrolquicklookpanel
    canControlQuickLookPanel():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503777-numberofcolumns
    numberOfColumns():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1504312-numberofrows
    numberOfRows():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1504178-rectofcolumn
    rectOfColumn(columnIndex: cocoascript.NSUInteger):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1505001-columnindexesinrect
    columnIndexesInRect(rect: cocoascript.NSRect):cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503618-rectofrow
    rectOfRow(rowIndex: cocoascript.NSUInteger):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowserview/1503452-rowindexesinrect
    rowIndexesInRect(rect: cocoascript.NSRect):cocoascript.NSIndexSet;
    //
    alloc():cocoascript.IKImageBrowserView;
    //
    init():cocoascript.IKImageBrowserView;
  }
}

declare const IKImageBrowserView: cocoascript.IKImageBrowserView;
