declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/quartz/qlpreviewpaneldelegate
   */
  interface QLPreviewPanelDelegate extends NSWindowDelegate {
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpaneldelegate/1503889-previewpanel
    previewPanel_handleEvent(panel: cocoascript.QLPreviewPanel, event: cocoascript.NSEvent):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpaneldelegate/1503423-previewpanel
    previewPanel_sourceFrameOnScreenForPreviewItem(panel: cocoascript.QLPreviewPanel, item: cocoascript.QLPreviewItem):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpaneldelegate/1505277-previewpanel
    previewPanel_transitionImageForPreviewItem_contentRect(panel: cocoascript.QLPreviewPanel, item: cocoascript.QLPreviewItem, contentRect: cocoascript.NSRect):cocoascript.QLPreviewPanelDelegate;
  }
}
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
declare namespace cocoascript {
  /**
   * A protocol that defines properties you implement to make your application’s content visible in a preview.
   * doc://com.apple.documentation/documentation/quartz/qlpreviewitem
   */
  interface QLPreviewItem extends NSObject {
    // doc://com.apple.documentation/documentation/quartz/qlpreviewitem/1419913-previewitemurl
    previewItemURL(): cocoascript.NSURL;
    setPreviewItemURL(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewitem/1419911-previewitemtitle
    previewItemTitle(): cocoascript.NSString;
    setPreviewItemTitle(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewitem/1419915-previewitemdisplaystate
    previewItemDisplayState(): cocoascript.id;
    setPreviewItemDisplayState(): void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol for implementing a custom controller to create previews of files.
   * doc://com.apple.documentation/documentation/quartz/qlpreviewingcontroller
   */
  interface QLPreviewingController extends NSObject {
    // doc://com.apple.documentation/documentation/quartz/qlpreviewingcontroller/2867936-preparepreviewoffileaturl
    preparePreviewOfFileAtURL_completionHandler(url: cocoascript.NSURL, handler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewingcontroller/2882042-preparepreviewofsearchableitemwi
    preparePreviewOfSearchableItemWithIdentifier_queryString_completionHandler(identifier: cocoascript.NSString, queryString: cocoascript.NSString, handler: cocoascript.NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/qccomposition
   */
  interface QCComposition extends NSObject {
    // doc://com.apple.documentation/documentation/quartz/qccomposition/1505184-attributes
    attributes():cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/quartz/qccomposition/1503694-protocols
    protocols():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/quartz/qccomposition/1493218-identifier
    identifier():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/quartz/qccomposition/1504185-inputkeys
    inputKeys():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/quartz/qccomposition/1504100-outputkeys
    outputKeys():cocoascript.NSArray;
    //
    alloc():cocoascript.QCComposition;
    //
    init():cocoascript.QCComposition;
  }
}

declare const QCComposition: cocoascript.QCComposition;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/qlpreviewpanel
   */
  interface QLPreviewPanel extends NSPanel {
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1505327-currentcontroller
    currentController(): cocoascript.id;
    setCurrentController(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1503825-updatecontroller
    updateController():void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1503465-datasource
    dataSource(): cocoascript.QLPreviewPanelDataSource;
    setDataSource(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1504075-reloaddata
    reloadData():void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1505151-refreshcurrentpreviewitem
    refreshCurrentPreviewItem():void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1503428-currentpreviewitemindex
    currentPreviewItemIndex(): cocoascript.NSInteger;
    setCurrentPreviewItemIndex(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1503578-currentpreviewitem
    currentPreviewItem(): cocoascript.QLPreviewItem;
    setCurrentPreviewItem(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1505195-displaystate
    displayState(): cocoascript.id;
    setDisplayState(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1504770-delegate
    delegate(): cocoascript.id;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1503434-enterfullscreenmode
    enterFullScreenMode_withOptions(screen: cocoascript.NSScreen, options: cocoascript.NSDictionary):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1503669-exitfullscreenmodewithoptions
    exitFullScreenModeWithOptions(options: cocoascript.NSDictionary):void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpanel/1503609-infullscreenmode
    inFullScreenMode(): cocoascript.BOOL;
    setInFullScreenMode(): void;
    //
    alloc():cocoascript.QLPreviewPanel;
    //
    init():cocoascript.QLPreviewPanel;
  }
}

declare const QLPreviewPanel: cocoascript.QLPreviewPanel;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartz/ikimagebrowserdropoperation
  type IKImageBrowserDropOperation = number;
}
declare namespace cocoascript {
  /**
   * A layer that loads, plays, and controls Quartz Composer compositions in a Core Animation layer hierarchy.
   * doc://com.apple.documentation/documentation/quartz/qccompositionlayer
   */
  interface QCCompositionLayer extends CAOpenGLLayer {
    // doc://com.apple.documentation/documentation/quartz/qccompositionlayer/1504706-initwithfile
    initWithFile(path: cocoascript.NSString):cocoascript.QCCompositionLayer;
    // doc://com.apple.documentation/documentation/quartz/qccompositionlayer/1503553-initwithcomposition
    initWithComposition(composition: cocoascript.QCComposition):cocoascript.QCCompositionLayer;
    // doc://com.apple.documentation/documentation/quartz/qccompositionlayer/1503496-composition
    composition():cocoascript.QCComposition;
    //
    alloc():cocoascript.QCCompositionLayer;
    //
    init():cocoascript.QCCompositionLayer;
  }
}

declare const QCCompositionLayer: cocoascript.QCCompositionLayer;
declare namespace cocoascript {
  /**
   * A class that allows users to edit the input parameters of a composition in real time. The composition can be rendering in any of the following objects:
   * doc://com.apple.documentation/documentation/quartz/qccompositionparameterview
   */
  interface QCCompositionParameterView extends NSView {
    // doc://com.apple.documentation/documentation/quartz/qccompositionparameterview/1503814-setcompositionrenderer
    setCompositionRenderer(renderer: cocoascript.QCCompositionRenderer):void;
    // doc://com.apple.documentation/documentation/quartz/qccompositionparameterview/1503933-compositionrenderer
    compositionRenderer():cocoascript.QCCompositionRenderer;
    // doc://com.apple.documentation/documentation/quartz/qccompositionparameterview/1504339-hasparameters
    hasParameters():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qccompositionparameterview/1504516-setdelegate
    setDelegate(delegate: cocoascript.QCCompositionParameterView):void;
    // doc://com.apple.documentation/documentation/quartz/qccompositionparameterview/1503520-delegate
    delegate():cocoascript.QCCompositionParameterView;
    // doc://com.apple.documentation/documentation/quartz/qccompositionparameterview/1504845-setdrawsbackground
    setDrawsBackground(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/qccompositionparameterview/1503491-drawsbackground
    drawsBackground():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qccompositionparameterview/1504544-setbackgroundcolor
    setBackgroundColor(color: cocoascript.NSColor):void;
    // doc://com.apple.documentation/documentation/quartz/qccompositionparameterview/1503481-backgroundcolor
    backgroundColor():cocoascript.NSColor;
    //
    alloc():cocoascript.QCCompositionParameterView;
    //
    init():cocoascript.QCCompositionParameterView;
  }
}

declare const QCCompositionParameterView: cocoascript.QCCompositionParameterView;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/qccompositionpickerview
   */
  interface QCCompositionPickerView extends NSView {
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447368-setbackgroundcolor
    setBackgroundColor(color: cocoascript.NSColor):void;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447383-backgroundcolor
    backgroundColor():cocoascript.NSColor;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447365-setdrawsbackground
    setDrawsBackground(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447373-drawsbackground
    drawsBackground():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447371-setdefaultvalue
    setDefaultValue_forInputKey(value: cocoascript.QCCompositionPickerView, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447344-resetdefaultinputvalues
    resetDefaultInputValues():void;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447361-startanimation
    startAnimation(sender: cocoascript.QCCompositionPickerView):void;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447323-stopanimation
    stopAnimation(sender: cocoascript.QCCompositionPickerView):void;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447381-isanimating
    isAnimating():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447369-setmaxanimationframerate
    setMaxAnimationFrameRate(maxFPS: number):void;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447379-maxanimationframerate
    maxAnimationFrameRate():number;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447356-setshowscompositionnames
    setShowsCompositionNames(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447338-showscompositionnames
    showsCompositionNames():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447325-setdelegate
    setDelegate(delegate: cocoascript.QCCompositionPickerView):void;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447333-delegate
    delegate():cocoascript.QCCompositionPickerView;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447335-setcompositionsfromrepositorywit
    setCompositionsFromRepositoryWithProtocol_andAttributes(protocol: cocoascript.NSString, attributes: cocoascript.NSDictionary):void;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447327-compositions
    compositions():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447340-setallowsemptyselection
    setAllowsEmptySelection(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447354-allowsemptyselection
    allowsEmptySelection():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447375-setcompositionaspectratio
    setCompositionAspectRatio(ratio: cocoascript.NSSize):void;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447336-compositionaspectratio
    compositionAspectRatio():cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447363-setselectedcomposition
    setSelectedComposition(composition: cocoascript.QCComposition):void;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447329-selectedcomposition
    selectedComposition():cocoascript.QCComposition;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447346-setnumberofcolumns
    setNumberOfColumns(columns: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447331-numberofcolumns
    numberOfColumns():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447350-setnumberofrows
    setNumberOfRows(rows: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerview/1447366-numberofrows
    numberOfRows():cocoascript.NSUInteger;
    //
    alloc():cocoascript.QCCompositionPickerView;
    //
    init():cocoascript.QCCompositionPickerView;
  }
}

declare const QCCompositionPickerView: cocoascript.QCCompositionPickerView;
// doc://com.apple.documentation/documentation/quartz/qccompositionpickerviewdidselectcompositionnotification
declare const QCCompositionPickerViewDidSelectCompositionNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikimageview
   */
  interface IKImageView extends NSView {
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1504032-delegate
    delegate(): cocoascript.id;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1504496-zoomfactor
    zoomFactor(): cocoascript.CGFloat;
    setZoomFactor(): void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1504691-rotationangle
    rotationAngle(): cocoascript.CGFloat;
    setRotationAngle(): void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1503607-currenttoolmode
    currentToolMode(): cocoascript.NSString;
    setCurrentToolMode(): void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1503709-autoresizes
    autoresizes(): cocoascript.BOOL;
    setAutoresizes(): void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1503565-hashorizontalscroller
    hasHorizontalScroller(): cocoascript.BOOL;
    setHasHorizontalScroller(): void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1505256-hasverticalscroller
    hasVerticalScroller(): cocoascript.BOOL;
    setHasVerticalScroller(): void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1503469-autohidesscrollers
    autohidesScrollers(): cocoascript.BOOL;
    setAutohidesScrollers(): void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1504887-supportsdraganddrop
    supportsDragAndDrop(): cocoascript.BOOL;
    setSupportsDragAndDrop(): void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1505302-editable
    editable(): cocoascript.BOOL;
    setEditable(): void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1504092-doubleclickopensimageeditpanel
    doubleClickOpensImageEditPanel(): cocoascript.BOOL;
    setDoubleClickOpensImageEditPanel(): void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1503698-imagecorrection
    imageCorrection(): cocoascript.CIFilter;
    setImageCorrection(): void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1503567-backgroundcolor
    backgroundColor(): cocoascript.NSColor;
    setBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1504005-imagesize
    imageSize():cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1503845-imageproperties
    imageProperties():cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1504371-image
    image():cocoascript.CGImageRef;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1503915-setimage
    setImage_imageProperties(image: cocoascript.CGImageRef, metaData: cocoascript.NSDictionary):void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1505314-setimagewithurl
    setImageWithURL(url: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1503535-setrotationangle
    setRotationAngle_centerPoint(rotationAngle: cocoascript.CGFloat, centerPoint: cocoascript.NSPoint):void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1503762-setimagezoomfactor
    setImageZoomFactor_centerPoint(zoomFactor: cocoascript.CGFloat, centerPoint: cocoascript.NSPoint):void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1504450-zoomimagetofit
    zoomImageToFit(sender: cocoascript.IKImageView):void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1504415-zoomimagetoactualsize
    zoomImageToActualSize(sender: cocoascript.IKImageView):void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1504460-zoomimagetorect
    zoomImageToRect(rect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1503800-zoomin
    zoomIn(sender: cocoascript.IKImageView):void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1503436-zoomout
    zoomOut(sender: cocoascript.IKImageView):void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1503855-crop
    crop(sender: cocoascript.IKImageView):void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1505282-flipimagehorizontal
    flipImageHorizontal(sender: cocoascript.IKImageView):void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1503836-flipimagevertical
    flipImageVertical(sender: cocoascript.IKImageView):void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1503769-rotateimageleft
    rotateImageLeft(sender: cocoascript.IKImageView):void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1503427-rotateimageright
    rotateImageRight(sender: cocoascript.IKImageView):void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1504283-setoverlay
    setOverlay_forType(layer: cocoascript.CALayer, layerType: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1504236-overlayfortype
    overlayForType(layerType: cocoascript.NSString):cocoascript.CALayer;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1503677-scrolltopoint
    scrollToPoint(point: cocoascript.NSPoint):void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1504366-scrolltorect
    scrollToRect(rect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1503743-convertviewpointtoimagepoint
    convertViewPointToImagePoint(viewPoint: cocoascript.NSPoint):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1504464-convertviewrecttoimagerect
    convertViewRectToImageRect(viewRect: cocoascript.NSRect):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1504633-convertimagepointtoviewpoint
    convertImagePointToViewPoint(imagePoint: cocoascript.NSPoint):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/quartz/ikimageview/1504409-convertimagerecttoviewrect
    convertImageRectToViewRect(imageRect: cocoascript.NSRect):cocoascript.NSRect;
    //
    alloc():cocoascript.IKImageView;
    //
    init():cocoascript.IKImageView;
  }
}

declare const IKImageView: cocoascript.IKImageView;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/quartz/quartzfiltermanager
   */
  interface QuartzFilterManager extends NSObject {
    // doc://com.apple.documentation/documentation/quartz/quartzfiltermanager/1503409-delegate
    delegate():cocoascript.QuartzFilterManager;
    // doc://com.apple.documentation/documentation/quartz/quartzfiltermanager/1505297-filterpanel
    filterPanel():cocoascript.NSPanel;
    // doc://com.apple.documentation/documentation/quartz/quartzfiltermanager/1505290-filterview
    filterView():cocoascript.QuartzFilterView;
    // doc://com.apple.documentation/documentation/quartz/quartzfiltermanager/1503784-importfilter
    importFilter(filterProperties: cocoascript.NSDictionary):cocoascript.QuartzFilter;
    // doc://com.apple.documentation/documentation/quartz/quartzfiltermanager/1503913-selectfilter
    selectFilter(filter: cocoascript.QuartzFilter):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/quartzfiltermanager/1504816-selectedfilter
    selectedFilter():cocoascript.QuartzFilter;
    // doc://com.apple.documentation/documentation/quartz/quartzfiltermanager/1505098-setdelegate
    setDelegate(aDelegate: cocoascript.QuartzFilterManager):void;
    //
    alloc():cocoascript.QuartzFilterManager;
    //
    init():cocoascript.QuartzFilterManager;
  }
}

declare const QuartzFilterManager: cocoascript.QuartzFilterManager;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/quartz/quartzfilter
   */
  interface QuartzFilter extends NSObject {
    // doc://com.apple.documentation/documentation/quartz/quartzfilter/1433684-applytocontext
    applyToContext(aContext: cocoascript.CGContextRef):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/quartzfilter/1433682-localizedname
    localizedName():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/quartz/quartzfilter/1433686-properties
    properties():cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/quartz/quartzfilter/1433679-removefromcontext
    removeFromContext(aContext: cocoascript.CGContextRef):void;
    // doc://com.apple.documentation/documentation/quartz/quartzfilter/1433677-url
    url():cocoascript.NSURL;
    //
    alloc():cocoascript.QuartzFilter;
    //
    init():cocoascript.QuartzFilter;
  }
}

declare const QuartzFilter: cocoascript.QuartzFilter;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/iksaveoptions
   */
  interface IKSaveOptions extends NSObject {
    // doc://com.apple.documentation/documentation/quartz/iksaveoptions/1503412-initwithimageproperties
    initWithImageProperties_imageUTType(imageProperties: cocoascript.NSDictionary, imageUTType: cocoascript.NSString):cocoascript.IKSaveOptions;
    // doc://com.apple.documentation/documentation/quartz/iksaveoptions/1503458-addsaveoptionsaccessoryviewtosav
    addSaveOptionsAccessoryViewToSavePanel(savePanel: cocoascript.NSSavePanel):void;
    // doc://com.apple.documentation/documentation/quartz/iksaveoptions/1505299-imageproperties
    imageProperties(): cocoascript.NSDictionary;
    setImageProperties(): void;
    // doc://com.apple.documentation/documentation/quartz/iksaveoptions/1504388-imageuttype
    imageUTType(): cocoascript.NSString;
    setImageUTType(): void;
    // doc://com.apple.documentation/documentation/quartz/iksaveoptions/1504791-userselection
    userSelection(): cocoascript.NSDictionary;
    setUserSelection(): void;
    // doc://com.apple.documentation/documentation/quartz/iksaveoptions/1503653-delegate
    delegate(): cocoascript.id;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/objectivec/nsobject/1503501-saveoptions
    saveOptions_shouldShowUTType(saveOptions: cocoascript.IKSaveOptions, utType: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/iksaveoptions/1504945-addsaveoptionstoview
    addSaveOptionsToView(view: cocoascript.NSView):void;
    //
    alloc():cocoascript.IKSaveOptions;
    //
    init():cocoascript.IKSaveOptions;
  }
}

declare const IKSaveOptions: cocoascript.IKSaveOptions;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/qccompositionrepository
   */
  interface QCCompositionRepository extends NSObject {
    // doc://com.apple.documentation/documentation/quartz/qccompositionrepository/1493225-compositionwithidentifier
    compositionWithIdentifier(identifier: cocoascript.NSString):cocoascript.QCComposition;
    // doc://com.apple.documentation/documentation/quartz/qccompositionrepository/1493216-compositionswithprotocols
    compositionsWithProtocols_andAttributes(protocols: cocoascript.NSArray, attributes: cocoascript.NSDictionary):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/quartz/qccompositionrepository/1493221-allcompositions
    allCompositions():cocoascript.NSArray;
    //
    alloc():cocoascript.QCCompositionRepository;
    //
    init():cocoascript.QCCompositionRepository;
  }
}

declare const QCCompositionRepository: cocoascript.QCCompositionRepository;
// doc://com.apple.documentation/documentation/quartz/qccompositionrepositorydidupdatenotification
declare const QCCompositionRepositoryDidUpdateNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A
   * doc://com.apple.documentation/documentation/quartz/qcrenderer
   */
  interface QCRenderer extends NSObject {
    // doc://com.apple.documentation/documentation/quartz/qcrenderer/1504825-initwithcomposition
    initWithComposition_colorSpace(composition: cocoascript.QCComposition, colorSpace: cocoascript.CGColorSpaceRef):cocoascript.QCRenderer;
    // doc://com.apple.documentation/documentation/quartz/qcrenderer/1504247-initwithopenglcontext
    initWithOpenGLContext_pixelFormat_file(context: cocoascript.NSOpenGLContext, format: cocoascript.NSOpenGLPixelFormat, path: cocoascript.NSString):cocoascript.QCRenderer;
    // doc://com.apple.documentation/documentation/quartz/qcrenderer/1504424-initwithcglcontext
    initWithCGLContext_pixelFormat_colorSpace_composition(context: any, format: any, colorSpace: cocoascript.CGColorSpaceRef, composition: cocoascript.QCComposition):cocoascript.QCRenderer;
    // doc://com.apple.documentation/documentation/quartz/qcrenderer/1504610-initoffscreenwithsize
    initOffScreenWithSize_colorSpace_composition(size: cocoascript.NSSize, colorSpace: cocoascript.CGColorSpaceRef, composition: cocoascript.QCComposition):cocoascript.QCRenderer;
    // doc://com.apple.documentation/documentation/quartz/qcrenderer/1503792-renderattime
    renderAtTime_arguments(time: cocoascript.NSTimeInterval, arguments: cocoascript.NSDictionary):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcrenderer/1503919-composition
    composition():cocoascript.QCComposition;
    // doc://com.apple.documentation/documentation/quartz/qcrenderer/1504422-snapshotimage
    snapshotImage():cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/quartz/qcrenderer/1503473-createsnapshotimageoftype
    createSnapshotImageOfType(type: cocoascript.NSString):cocoascript.QCRenderer;
    // doc://com.apple.documentation/documentation/quartz/qcrenderer/1504024-renderingtimefortime
    renderingTimeForTime_arguments(time: cocoascript.NSTimeInterval, arguments: cocoascript.NSDictionary):cocoascript.NSTimeInterval;
    //
    alloc():cocoascript.QCRenderer;
    //
    init():cocoascript.QCRenderer;
  }
}

declare const QCRenderer: cocoascript.QCRenderer;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/qcview
   */
  interface QCView extends NSView {
    // doc://com.apple.documentation/documentation/quartz/qcview/1436256-renderattime
    renderAtTime_arguments(time: cocoascript.NSTimeInterval, arguments: cocoascript.NSDictionary):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436241-loadcompositionfromfile
    loadCompositionFromFile(path: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436246-loadcomposition
    loadComposition(composition: cocoascript.QCComposition):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436242-loadedcomposition
    loadedComposition():cocoascript.QCComposition;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436231-unloadcomposition
    unloadComposition():void;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436243-erase
    erase():void;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436232-erasecolor
    eraseColor():cocoascript.NSColor;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436229-seterasecolor
    setEraseColor(color: cocoascript.NSColor):void;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436253-eventforwardingmask
    eventForwardingMask():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436240-seteventforwardingmask
    setEventForwardingMask(mask: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436228-maxrenderingframerate
    maxRenderingFrameRate():number;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436248-setmaxrenderingframerate
    setMaxRenderingFrameRate(maxFPS: number):void;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436255-startrendering
    startRendering():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436239-isrendering
    isRendering():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436245-autostartsrendering
    autostartsRendering():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436233-setautostartsrendering
    setAutostartsRendering(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436247-stoprendering
    stopRendering():void;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436238-pauserendering
    pauseRendering():void;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436237-ispausedrendering
    isPausedRendering():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436252-resumerendering
    resumeRendering():void;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436227-play
    play(sender: cocoascript.QCView):void;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436254-start
    start(sender: cocoascript.QCView):void;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436244-stop
    stop(sender: cocoascript.QCView):void;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436235-snapshotimage
    snapshotImage():cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436250-createsnapshotimageoftype
    createSnapshotImageOfType(type: cocoascript.NSString):cocoascript.QCView;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436249-openglcontext
    openGLContext():cocoascript.NSOpenGLContext;
    // doc://com.apple.documentation/documentation/quartz/qcview/1436234-openglpixelformat
    openGLPixelFormat():cocoascript.NSOpenGLPixelFormat;
    //
    alloc():cocoascript.QCView;
    //
    init():cocoascript.QCView;
  }
}

declare const QCView: cocoascript.QCView;
// doc://com.apple.documentation/documentation/quartz/qcviewdidstartrenderingnotification
declare const QCViewDidStartRenderingNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/quartz/qcviewdidstoprenderingnotification
declare const QCViewDidStopRenderingNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/qlpreviewpaneldatasource
   */
  interface QLPreviewPanelDataSource {
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpaneldatasource/1504383-previewpanel
    previewPanel_previewItemAtIndex(panel: cocoascript.QLPreviewPanel, index: cocoascript.NSInteger):cocoascript.QLPreviewItem;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewpaneldatasource/1504441-numberofpreviewitemsinpreviewpan
    numberOfPreviewItemsInPreviewPanel(panel: cocoascript.QLPreviewPanel):cocoascript.NSInteger;
  }
}
declare namespace cocoascript {
  /**
   * A Quick Look preview of an item that you can embed into your view hierarchy.
   * doc://com.apple.documentation/documentation/quartz/qlpreviewview
   */
  interface QLPreviewView extends NSView {
    // doc://com.apple.documentation/documentation/quartz/qlpreviewview/1504541-initwithframe
    initWithFrame_style(frame: cocoascript.NSRect, style: cocoascript.QLPreviewViewStyle):cocoascript.QLPreviewView;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewview/1503812-initwithframe
    initWithFrame(frame: cocoascript.NSRect):cocoascript.QLPreviewView;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewview/1504747-previewitem
    previewItem(): cocoascript.QLPreviewItem;
    setPreviewItem(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewview/1504399-refreshpreviewitem
    refreshPreviewItem():void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewview/1503408-displaystate
    displayState(): cocoascript.id;
    setDisplayState(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewview/1503689-autostarts
    autostarts(): cocoascript.BOOL;
    setAutostarts(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewview/1503457-shouldclosewithwindow
    shouldCloseWithWindow(): cocoascript.BOOL;
    setShouldCloseWithWindow(): void;
    // doc://com.apple.documentation/documentation/quartz/qlpreviewview/1503506-close
    close():void;
    //
    alloc():cocoascript.QLPreviewView;
    //
    init():cocoascript.QLPreviewView;
  }
}

declare const QLPreviewView: cocoascript.QLPreviewView;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikfilterbrowserpanel
   */
  interface IKFilterBrowserPanel extends NSPanel {
    // doc://com.apple.documentation/documentation/quartz/ikfilterbrowserpanel/1504426-filtername
    filterName():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/quartz/ikfilterbrowserpanel/1503992-filterbrowserviewwithoptions
    filterBrowserViewWithOptions(inOptions: cocoascript.NSDictionary):cocoascript.IKFilterBrowserView;
    // doc://com.apple.documentation/documentation/quartz/ikfilterbrowserpanel/1504894-beginwithoptions
    beginWithOptions_modelessDelegate_didEndSelector_contextInfo(inOptions: cocoascript.NSDictionary, modelessDelegate: cocoascript.IKFilterBrowserPanel, didEndSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/quartz/ikfilterbrowserpanel/1504636-beginsheetwithoptions
    beginSheetWithOptions_modalForWindow_modalDelegate_didEndSelector_contextInfo(inOptions: cocoascript.NSDictionary, docWindow: cocoascript.NSWindow, modalDelegate: cocoascript.IKFilterBrowserPanel, didEndSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/quartz/ikfilterbrowserpanel/1504028-runmodalwithoptions
    runModalWithOptions(inOptions: cocoascript.NSDictionary):number;
    // doc://com.apple.documentation/documentation/quartz/ikfilterbrowserpanel/1505223-finish
    finish(sender: cocoascript.IKFilterBrowserPanel):void;
    //
    alloc():cocoascript.IKFilterBrowserPanel;
    //
    init():cocoascript.IKFilterBrowserPanel;
  }
}

declare const IKFilterBrowserPanel: cocoascript.IKFilterBrowserPanel;
// doc://com.apple.documentation/documentation/quartz/ikfilterbrowserwillpreviewfilternotification
declare const IKFilterBrowserWillPreviewFilterNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/quartz/ikfilterbrowserfilterselectednotification
declare const IKFilterBrowserFilterSelectedNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/quartz/ikfilterbrowserfilterdoubleclicknotification
declare const IKFilterBrowserFilterDoubleClickNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikscannerdeviceviewdelegate
   */
  interface IKScannerDeviceViewDelegate {
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceviewdelegate/1504462-scannerdeviceview
    scannerDeviceView_didScanToURL_fileData_error(scannerDeviceView: cocoascript.IKScannerDeviceView, url: cocoascript.NSURL, data: cocoascript.NSData, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceviewdelegate/1503476-scannerdeviceview
    scannerDeviceView_didEncounterError(scannerDeviceView: cocoascript.IKScannerDeviceView, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceviewdelegate/1503867-scannerdeviceview
    scannerDeviceView_didScanToBandData_scanInfo_error(scannerDeviceView: cocoascript.IKScannerDeviceView, data: cocoascript.ICScannerBandData, scanInfo: cocoascript.NSDictionary, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceviewdelegate/1504768-scannerdeviceview
    scannerDeviceView_didScanToURL_error(scannerDeviceView: cocoascript.IKScannerDeviceView, url: cocoascript.NSURL, error: cocoascript.NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikcameradeviceview
   */
  interface IKCameraDeviceView extends NSView {
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1503753-cameradevice
    cameraDevice(): cocoascript.ICCameraDevice;
    setCameraDevice(): void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504002-iconsize
    iconSize(): cocoascript.NSUInteger;
    setIconSize(): void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504881-mode
    mode(): cocoascript.IKCameraDeviceViewDisplayMode;
    setMode(): void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504417-hasdisplaymodeicon
    hasDisplayModeIcon(): cocoascript.BOOL;
    setHasDisplayModeIcon(): void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1503413-hasdisplaymodetable
    hasDisplayModeTable(): cocoascript.BOOL;
    setHasDisplayModeTable(): void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1503771-transfermode
    transferMode(): cocoascript.IKCameraDeviceViewTransferMode;
    setTransferMode(): void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504639-candownloadselecteditems
    canDownloadSelectedItems(): cocoascript.BOOL;
    setCanDownloadSelectedItems(): void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1503702-downloadsdirectory
    downloadsDirectory(): cocoascript.NSURL;
    setDownloadsDirectory(): void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504833-downloadselecteditems
    downloadSelectedItems(sender: cocoascript.IKCameraDeviceView):void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504326-downloadallitems
    downloadAllItems(sender: cocoascript.IKCameraDeviceView):void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1503822-downloadselectedcontrollabel
    downloadSelectedControlLabel(): cocoascript.NSString;
    setDownloadSelectedControlLabel(): void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504281-downloadallcontrollabel
    downloadAllControlLabel(): cocoascript.NSString;
    setDownloadAllControlLabel(): void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1505006-displaysdownloadsdirectorycontro
    displaysDownloadsDirectoryControl(): cocoascript.BOOL;
    setDisplaysDownloadsDirectoryControl(): void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1503644-displayspostprocessapplicationco
    displaysPostProcessApplicationControl(): cocoascript.BOOL;
    setDisplaysPostProcessApplicationControl(): void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504227-postprocessapplication
    postProcessApplication(): cocoascript.NSURL;
    setPostProcessApplication(): void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504949-candeleteselecteditems
    canDeleteSelectedItems(): cocoascript.BOOL;
    setCanDeleteSelectedItems(): void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504333-deleteselecteditems
    deleteSelectedItems(sender: cocoascript.IKCameraDeviceView):void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1503804-selectindexes
    selectIndexes_byExtendingSelection(indexes: cocoascript.NSIndexSet, extend: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504546-selectedindexes
    selectedIndexes():cocoascript.NSIndexSet;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1504315-delegate
    delegate(): cocoascript.IKCameraDeviceViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1503947-canrotateselecteditemsleft
    canRotateSelectedItemsLeft(): cocoascript.BOOL;
    setCanRotateSelectedItemsLeft(): void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1503525-canrotateselecteditemsright
    canRotateSelectedItemsRight(): cocoascript.BOOL;
    setCanRotateSelectedItemsRight(): void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1503662-rotateleft
    rotateLeft(sender: cocoascript.IKCameraDeviceView):void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceview/1505123-rotateright
    rotateRight(sender: cocoascript.IKCameraDeviceView):void;
    //
    alloc():cocoascript.IKCameraDeviceView;
    //
    init():cocoascript.IKCameraDeviceView;
  }
}

declare const IKCameraDeviceView: cocoascript.IKCameraDeviceView;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikdevicebrowserview
   */
  interface IKDeviceBrowserView extends NSView {
    // doc://com.apple.documentation/documentation/quartz/ikdevicebrowserview/1443071-selecteddevice
    selectedDevice(): cocoascript.ICDevice;
    setSelectedDevice(): void;
    // doc://com.apple.documentation/documentation/quartz/ikdevicebrowserview/1443061-displayslocalcameras
    displaysLocalCameras(): cocoascript.BOOL;
    setDisplaysLocalCameras(): void;
    // doc://com.apple.documentation/documentation/quartz/ikdevicebrowserview/1443056-displaysnetworkcameras
    displaysNetworkCameras(): cocoascript.BOOL;
    setDisplaysNetworkCameras(): void;
    // doc://com.apple.documentation/documentation/quartz/ikdevicebrowserview/1443052-displayslocalscanners
    displaysLocalScanners(): cocoascript.BOOL;
    setDisplaysLocalScanners(): void;
    // doc://com.apple.documentation/documentation/quartz/ikdevicebrowserview/1443078-displaysnetworkscanners
    displaysNetworkScanners(): cocoascript.BOOL;
    setDisplaysNetworkScanners(): void;
    // doc://com.apple.documentation/documentation/quartz/ikdevicebrowserview/1443080-mode
    mode(): cocoascript.IKDeviceBrowserViewDisplayMode;
    setMode(): void;
    // doc://com.apple.documentation/documentation/quartz/ikdevicebrowserview/1443054-delegate
    delegate(): cocoascript.IKDeviceBrowserViewDelegate;
    setDelegate(): void;
    //
    alloc():cocoascript.IKDeviceBrowserView;
    //
    init():cocoascript.IKDeviceBrowserView;
  }
}

declare const IKDeviceBrowserView: cocoascript.IKDeviceBrowserView;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikimageeditpanel
   */
  interface IKImageEditPanel extends NSPanel {
    // doc://com.apple.documentation/documentation/quartz/ikimageeditpanel/1504436-filterarray
    filterArray(): cocoascript.NSArray;
    setFilterArray(): void;
    // doc://com.apple.documentation/documentation/quartz/ikimageeditpanel/1503831-datasource
    dataSource(): cocoascript.IKImageEditPanelDataSource;
    setDataSource(): void;
    // doc://com.apple.documentation/documentation/quartz/ikimageeditpanel/1503419-reloaddata
    reloadData():void;
    //
    alloc():cocoascript.IKImageEditPanel;
    //
    init():cocoascript.IKImageEditPanel;
  }
}

declare const IKImageEditPanel: cocoascript.IKImageEditPanel;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview
   */
  interface IKScannerDeviceView extends NSView {
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1504379-scannerdevice
    scannerDevice(): cocoascript.ICScannerDevice;
    setScannerDevice(): void;
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1504321-mode
    mode(): cocoascript.IKScannerDeviceViewDisplayMode;
    setMode(): void;
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1503437-hasdisplaymodeadvanced
    hasDisplayModeAdvanced(): cocoascript.BOOL;
    setHasDisplayModeAdvanced(): void;
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1504506-hasdisplaymodesimple
    hasDisplayModeSimple(): cocoascript.BOOL;
    setHasDisplayModeSimple(): void;
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1503830-displaysdownloadsdirectorycontro
    displaysDownloadsDirectoryControl(): cocoascript.BOOL;
    setDisplaysDownloadsDirectoryControl(): void;
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1503585-downloadsdirectory
    downloadsDirectory(): cocoascript.NSURL;
    setDownloadsDirectory(): void;
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1505017-transfermode
    transferMode(): cocoascript.IKScannerDeviceViewTransferMode;
    setTransferMode(): void;
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1503744-documentname
    documentName(): cocoascript.NSString;
    setDocumentName(): void;
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1505053-displayspostprocessapplicationco
    displaysPostProcessApplicationControl(): cocoascript.BOOL;
    setDisplaysPostProcessApplicationControl(): void;
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1505215-postprocessapplication
    postProcessApplication(): cocoascript.NSURL;
    setPostProcessApplication(): void;
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1504170-delegate
    delegate(): cocoascript.IKScannerDeviceViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1504055-overviewcontrollabel
    overviewControlLabel(): cocoascript.NSString;
    setOverviewControlLabel(): void;
    // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceview/1504143-scancontrollabel
    scanControlLabel(): cocoascript.NSString;
    setScanControlLabel(): void;
    //
    alloc():cocoascript.IKScannerDeviceView;
    //
    init():cocoascript.IKScannerDeviceView;
  }
}

declare const IKScannerDeviceView: cocoascript.IKScannerDeviceView;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikslideshow
   */
  interface IKSlideshow extends NSObject {
    // doc://com.apple.documentation/documentation/quartz/ikslideshow/1504036-runslideshowwithdatasource
    runSlideshowWithDataSource_inMode_options(dataSource: cocoascript.IKSlideshowDataSource, slideshowMode: cocoascript.NSString, slideshowOptions: cocoascript.NSDictionary):void;
    // doc://com.apple.documentation/documentation/quartz/ikslideshow/1503801-stopslideshow
    stopSlideshow(sender: cocoascript.IKSlideshow):void;
    // doc://com.apple.documentation/documentation/quartz/ikslideshow/1504967-autoplaydelay
    autoPlayDelay(): cocoascript.NSTimeInterval;
    setAutoPlayDelay(): void;
    // doc://com.apple.documentation/documentation/quartz/ikslideshow/1503700-indexofcurrentslideshowitem
    indexOfCurrentSlideshowItem():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/quartz/ikslideshow/1504298-reloaddata
    reloadData():void;
    // doc://com.apple.documentation/documentation/quartz/ikslideshow/1504713-reloadslideshowitematindex
    reloadSlideshowItemAtIndex(index: cocoascript.NSUInteger):void;
    //
    alloc():cocoascript.IKSlideshow;
    //
    init():cocoascript.IKSlideshow;
  }
}

declare const IKSlideshow: cocoascript.IKSlideshow;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikfilterbrowserview
   */
  interface IKFilterBrowserView extends NSView {
    // doc://com.apple.documentation/documentation/quartz/ikfilterbrowserview/1405296-setpreviewstate
    setPreviewState(inState: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/ikfilterbrowserview/1405294-filtername
    filterName():cocoascript.NSString;
    //
    alloc():cocoascript.IKFilterBrowserView;
    //
    init():cocoascript.IKFilterBrowserView;
  }
}

declare const IKFilterBrowserView: cocoascript.IKFilterBrowserView;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikfilteruiview
   */
  interface IKFilterUIView extends NSView {
    // doc://com.apple.documentation/documentation/quartz/ikfilteruiview/1504139-initwithframe
    initWithFrame_filter(frameRect: cocoascript.NSRect, inFilter: cocoascript.CIFilter):cocoascript.IKFilterUIView;
    // doc://com.apple.documentation/documentation/quartz/ikfilteruiview/1504622-filter
    filter():cocoascript.CIFilter;
    // doc://com.apple.documentation/documentation/quartz/ikfilteruiview/1504206-objectcontroller
    objectController():cocoascript.NSObjectController;
    //
    alloc():cocoascript.IKFilterUIView;
    //
    init():cocoascript.IKFilterUIView;
  }
}

declare const IKFilterUIView: cocoascript.IKFilterUIView;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell
   */
  interface IKImageBrowserCell extends NSObject {
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500044-frame
    frame():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500052-imageframe
    imageFrame():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500074-subtitleframe
    subtitleFrame():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500069-titleframe
    titleFrame():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500064-imagecontainerframe
    imageContainerFrame():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500047-indexofrepresenteditem
    indexOfRepresentedItem():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500071-representeditem
    representedItem():cocoascript.IKImageBrowserCell;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500051-isselected
    isSelected():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500070-selectionframe
    selectionFrame():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500042-imagealignment
    imageAlignment():cocoascript.NSImageAlignment;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500060-opacity
    opacity():cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500062-cellstate
    cellState():cocoascript.IKImageBrowserCellState;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500045-layerfortype
    layerForType(type: cocoascript.NSString):cocoascript.CALayer;
    // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercell/1500049-imagebrowserview
    imageBrowserView():cocoascript.IKImageBrowserView;
    //
    alloc():cocoascript.IKImageBrowserCell;
    //
    init():cocoascript.IKImageBrowserCell;
  }
}

declare const IKImageBrowserCell: cocoascript.IKImageBrowserCell;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikpicturetaker
   */
  interface IKPictureTaker extends NSPanel {
    // doc://com.apple.documentation/documentation/quartz/ikpicturetaker/1504302-beginpicturetakersheetforwindow
    beginPictureTakerSheetForWindow_withDelegate_didEndSelector_contextInfo(aWindow: cocoascript.NSWindow, delegate: cocoascript.IKPictureTaker, didEndSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/quartz/ikpicturetaker/1503448-beginpicturetakerwithdelegate
    beginPictureTakerWithDelegate_didEndSelector_contextInfo(delegate: cocoascript.IKPictureTaker, didEndSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/quartz/ikpicturetaker/1504753-popuprecentsmenuforview
    popUpRecentsMenuForView_withDelegate_didEndSelector_contextInfo(aView: cocoascript.NSView, delegate: cocoascript.IKPictureTaker, didEndSelector: cocoascript.SEL, contextInfo: void):void;
    // doc://com.apple.documentation/documentation/quartz/ikpicturetaker/1503911-runmodal
    runModal():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/quartz/ikpicturetaker/1503724-setinputimage
    setInputImage(image: cocoascript.NSImage):void;
    // doc://com.apple.documentation/documentation/quartz/ikpicturetaker/1505220-inputimage
    inputImage():cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/quartz/ikpicturetaker/1504563-outputimage
    outputImage():cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/quartz/ikpicturetaker/1504915-setmirroring
    setMirroring(b: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/ikpicturetaker/1504121-mirroring
    mirroring():cocoascript.BOOL;
    //
    alloc():cocoascript.IKPictureTaker;
    //
    init():cocoascript.IKPictureTaker;
  }
}

declare const IKPictureTaker: cocoascript.IKPictureTaker;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikcameradeviceviewdelegate
   */
  interface IKCameraDeviceViewDelegate {
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceviewdelegate/1503524-cameradeviceview
    cameraDeviceView_didDownloadFile_location_fileData_error(cameraDeviceView: cocoascript.IKCameraDeviceView, file: cocoascript.ICCameraFile, url: cocoascript.NSURL, data: cocoascript.NSData, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceviewdelegate/1505308-cameradeviceviewselectiondidchan
    cameraDeviceViewSelectionDidChange(cameraDeviceView: cocoascript.IKCameraDeviceView):void;
    // doc://com.apple.documentation/documentation/quartz/ikcameradeviceviewdelegate/1505239-cameradeviceview
    cameraDeviceView_didEncounterError(cameraDeviceView: cocoascript.IKCameraDeviceView, error: cocoascript.NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikdevicebrowserviewdelegate
   */
  interface IKDeviceBrowserViewDelegate {
    // doc://com.apple.documentation/documentation/quartz/ikdevicebrowserviewdelegate/1443059-devicebrowserview
    deviceBrowserView_selectionDidChange(deviceBrowserView: cocoascript.IKDeviceBrowserView, device: cocoascript.ICDevice):void;
    // doc://com.apple.documentation/documentation/quartz/ikdevicebrowserviewdelegate/1443076-devicebrowserview
    deviceBrowserView_didEncounterError(deviceBrowserView: cocoascript.IKDeviceBrowserView, error: cocoascript.NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikfiltercustomuiprovider
   */
  interface IKFilterCustomUIProvider {
    // doc://com.apple.documentation/documentation/quartz/ikfiltercustomuiprovider/1427525-provideviewforuiconfiguration
    provideViewForUIConfiguration_excludedKeys(inUIConfiguration: cocoascript.NSDictionary, inKeys: cocoascript.NSArray):cocoascript.IKFilterUIView;
  }
}
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikimageeditpaneldatasource
   */
  interface IKImageEditPanelDataSource {
    // doc://com.apple.documentation/documentation/quartz/ikimageeditpaneldatasource/1504167-imageproperties
    imageProperties():cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/quartz/ikimageeditpaneldatasource/1503517-setimage
    setImage_imageProperties(image: cocoascript.CGImageRef, metaData: cocoascript.NSDictionary):void;
    // doc://com.apple.documentation/documentation/quartz/ikimageeditpaneldatasource/1505304-image
    image():cocoascript.CGImageRef;
    // doc://com.apple.documentation/documentation/quartz/ikimageeditpaneldatasource/1505271-thumbnailwithmaximumsize
    thumbnailWithMaximumSize(size: cocoascript.NSSize):cocoascript.CGImageRef;
    // doc://com.apple.documentation/documentation/quartz/ikimageeditpaneldatasource/1503472-hasadjustmode
    hasAdjustMode():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/ikimageeditpaneldatasource/1505246-hasdetailsmode
    hasDetailsMode():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/ikimageeditpaneldatasource/1505020-haseffectsmode
    hasEffectsMode():cocoascript.BOOL;
  }
}
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikslideshowdatasource
   */
  interface IKSlideshowDataSource {
    // doc://com.apple.documentation/documentation/quartz/ikslideshowdatasource/1503441-numberofslideshowitems
    numberOfSlideshowItems():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/quartz/ikslideshowdatasource/1503729-slideshowitematindex
    slideshowItemAtIndex(index: cocoascript.NSUInteger):cocoascript.IKSlideshowDataSource;
    // doc://com.apple.documentation/documentation/quartz/ikslideshowdatasource/1503638-nameofslideshowitematindex
    nameOfSlideshowItemAtIndex(index: cocoascript.NSUInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/quartz/ikslideshowdatasource/1505226-canexportslideshowitematindex
    canExportSlideshowItemAtIndex_toApplication(index: cocoascript.NSUInteger, applicationBundleIdentifier: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/ikslideshowdatasource/1504337-slideshowwillstart
    slideshowWillStart():void;
    // doc://com.apple.documentation/documentation/quartz/ikslideshowdatasource/1504870-slideshowdidstop
    slideshowDidStop():void;
    // doc://com.apple.documentation/documentation/quartz/ikslideshowdatasource/1504272-slideshowdidchangecurrentindex
    slideshowDidChangeCurrentIndex(newIndex: cocoascript.NSUInteger):void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartz/ikimagebrowsercellstate
  type IKImageBrowserCellState = number;
}
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/qccompositionrenderer
   */
  interface QCCompositionRenderer {
    // doc://com.apple.documentation/documentation/quartz/qccompositionrenderer/1503737-setvalue
    setValue_forInputKey(value: cocoascript.QCCompositionRenderer, key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qccompositionrenderer/1505206-valueforinputkey
    valueForInputKey(key: cocoascript.NSString):cocoascript.QCCompositionRenderer;
    // doc://com.apple.documentation/documentation/quartz/qccompositionrenderer/1504448-valueforoutputkey
    valueForOutputKey(key: cocoascript.NSString):cocoascript.QCCompositionRenderer;
    // doc://com.apple.documentation/documentation/quartz/qccompositionrenderer/1504745-valueforoutputkey
    valueForOutputKey_ofType(key: cocoascript.NSString, type: cocoascript.NSString):cocoascript.QCCompositionRenderer;
    // doc://com.apple.documentation/documentation/quartz/qccompositionrenderer/1503626-inputkeys
    inputKeys():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/quartz/qccompositionrenderer/1503732-outputkeys
    outputKeys():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/quartz/qccompositionrenderer/1503829-attributes
    attributes():cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/quartz/qccompositionrenderer/1504772-userinfo
    userInfo():cocoascript.NSMutableDictionary;
    // doc://com.apple.documentation/documentation/quartz/qccompositionrenderer/1503849-propertylistfrominputvalues
    propertyListFromInputValues():cocoascript.QCCompositionRenderer;
    // doc://com.apple.documentation/documentation/quartz/qccompositionrenderer/1504479-setinputvalueswithpropertylist
    setInputValuesWithPropertyList(plist: cocoascript.QCCompositionRenderer):void;
  }
}
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/qccompositionpickerpanel
   */
  interface QCCompositionPickerPanel extends NSPanel {
    // doc://com.apple.documentation/documentation/quartz/qccompositionpickerpanel/1459648-compositionpickerview
    compositionPickerView():cocoascript.QCCompositionPickerView;
    //
    alloc():cocoascript.QCCompositionPickerPanel;
    //
    init():cocoascript.QCCompositionPickerPanel;
  }
}

declare const QCCompositionPickerPanel: cocoascript.QCCompositionPickerPanel;
// doc://com.apple.documentation/documentation/quartz/qccompositionpickerpaneldidselectcompositionnotification
declare const QCCompositionPickerPanelDidSelectCompositionNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/quartz/qcpatchcontroller
   */
  interface QCPatchController extends NSController {
    //
    alloc():cocoascript.QCPatchController;
    //
    init():cocoascript.QCPatchController;
  }
}

declare const QCPatchController: cocoascript.QCPatchController;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/qcplugin
   */
  interface QCPlugIn extends NSObject {
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488847-execute
    execute_atTime_withArguments(context: cocoascript.QCPlugInContext, time: cocoascript.NSTimeInterval, arguments: cocoascript.NSDictionary):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488786-startexecution
    startExecution(context: cocoascript.QCPlugInContext):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488696-enableexecution
    enableExecution(context: cocoascript.QCPlugInContext):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488782-disableexecution
    disableExecution(context: cocoascript.QCPlugInContext):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488832-stopexecution
    stopExecution(context: cocoascript.QCPlugInContext):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1504984-createviewcontroller
    createViewController():cocoascript.QCPlugInViewController;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488752-serializedvalueforkey
    serializedValueForKey(key: cocoascript.NSString):cocoascript.QCPlugIn;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488851-setserializedvalue
    setSerializedValue_forKey(serializedValue: cocoascript.QCPlugIn, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488858-addinputportwithtype
    addInputPortWithType_forKey_withAttributes(type: cocoascript.NSString, key: cocoascript.NSString, attributes: cocoascript.NSDictionary):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488707-removeinputportforkey
    removeInputPortForKey(key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488760-addoutputportwithtype
    addOutputPortWithType_forKey_withAttributes(type: cocoascript.NSString, key: cocoascript.NSString, attributes: cocoascript.NSDictionary):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488800-removeoutputportforkey
    removeOutputPortForKey(key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488811-didvalueforinputkeychange
    didValueForInputKeyChange(key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488802-valueforinputkey
    valueForInputKey(key: cocoascript.NSString):cocoascript.QCPlugIn;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488788-setvalue
    setValue_forOutputKey(value: cocoascript.QCPlugIn, key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcplugin/1488727-executiontimeforcontext
    executionTimeForContext_atTime_withArguments(context: cocoascript.QCPlugInContext, time: cocoascript.NSTimeInterval, arguments: cocoascript.NSDictionary):cocoascript.NSTimeInterval;
    //
    alloc():cocoascript.QCPlugIn;
    //
    init():cocoascript.QCPlugIn;
  }
}

declare const QCPlugIn: cocoascript.QCPlugIn;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/qcpluginviewcontroller
   */
  interface QCPlugInViewController extends NSViewController {
    // doc://com.apple.documentation/documentation/quartz/qcpluginviewcontroller/1504077-initwithplugin
    initWithPlugIn_viewNibName(plugIn: cocoascript.QCPlugIn, name: cocoascript.NSString):cocoascript.QCPlugInViewController;
    // doc://com.apple.documentation/documentation/quartz/qcpluginviewcontroller/1504411-plugin
    plugIn():cocoascript.QCPlugIn;
    //
    alloc():cocoascript.QCPlugInViewController;
    //
    init():cocoascript.QCPlugInViewController;
  }
}

declare const QCPlugInViewController: cocoascript.QCPlugInViewController;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/qcplugincontext
   */
  interface QCPlugInContext {
    // doc://com.apple.documentation/documentation/quartz/qcplugincontext/1488849-cglcontextobj
    CGLContextObj():any;
    // doc://com.apple.documentation/documentation/quartz/qcplugincontext/1488711-logmessage
    logMessage(format: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugincontext/1488731-userinfo
    userInfo():cocoascript.NSMutableDictionary;
    // doc://com.apple.documentation/documentation/quartz/qcplugincontext/1488700-bounds
    bounds():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/qcplugincontext/1488846-colorspace
    colorSpace():cocoascript.CGColorSpaceRef;
    // doc://com.apple.documentation/documentation/quartz/qcplugincontext/1488754-outputimageproviderfrombufferwit
    outputImageProviderFromBufferWithPixelFormat_pixelsWide_pixelsHigh_baseAddress_bytesPerRow_releaseCallback_releaseContext_colorSpace_shouldColorMatch(format: cocoascript.NSString, width: cocoascript.NSUInteger, height: cocoascript.NSUInteger, baseAddress: void, rowBytes: cocoascript.NSUInteger, callback: cocoascript.QCPlugInBufferReleaseCallback, context: void, colorSpace: cocoascript.CGColorSpaceRef, colorMatch: cocoascript.BOOL):cocoascript.QCPlugInContext;
    // doc://com.apple.documentation/documentation/quartz/qcplugincontext/1488756-outputimageproviderfromtexturewi
    outputImageProviderFromTextureWithPixelFormat_pixelsWide_pixelsHigh_name_flipped_releaseCallback_releaseContext_colorSpace_shouldColorMatch(format: cocoascript.NSString, width: cocoascript.NSUInteger, height: cocoascript.NSUInteger, name: cocoascript.GLuint, flipped: cocoascript.BOOL, callback: cocoascript.QCPlugInTextureReleaseCallback, context: void, colorSpace: cocoascript.CGColorSpaceRef, colorMatch: cocoascript.BOOL):cocoascript.QCPlugInContext;
    // doc://com.apple.documentation/documentation/quartz/qcplugincontext/1488750-compositionurl
    compositionURL():cocoascript.NSURL;
  }
}
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource
   */
  interface QCPlugInInputImageSource {
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488736-locktexturerepresentationwithcol
    lockTextureRepresentationWithColorSpace_forBounds(colorSpace: cocoascript.CGColorSpaceRef, bounds: cocoascript.NSRect):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488856-unlocktexturerepresentation
    unlockTextureRepresentation():void;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488746-lockbufferrepresentationwithpixe
    lockBufferRepresentationWithPixelFormat_colorSpace_forBounds(format: cocoascript.NSString, colorSpace: cocoascript.CGColorSpaceRef, bounds: cocoascript.NSRect):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488704-bindtexturerepresentationtocglco
    bindTextureRepresentationToCGLContext_textureUnit_normalizeCoordinates(cgl_ctx: any, unit: any, flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488702-unbindtexturerepresentationfromc
    unbindTextureRepresentationFromCGLContext_textureUnit(cgl_ctx: any, unit: any):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488764-unlockbufferrepresentation
    unlockBufferRepresentation():void;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488777-imagecolorspace
    imageColorSpace():cocoascript.CGColorSpaceRef;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488733-shouldcolormatch
    shouldColorMatch():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488855-texturepixelswide
    texturePixelsWide():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488768-texturepixelshigh
    texturePixelsHigh():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488769-texturetarget
    textureTarget():void;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488744-texturename
    textureName():void;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488836-texturecolorspace
    textureColorSpace():cocoascript.CGColorSpaceRef;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488693-textureflipped
    textureFlipped():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488798-texturematrix
    textureMatrix():cocoascript.const;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488784-imagebounds
    imageBounds():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488823-bufferpixelswide
    bufferPixelsWide():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488860-bufferpixelshigh
    bufferPixelsHigh():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488758-bufferpixelformat
    bufferPixelFormat():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488698-buffercolorspace
    bufferColorSpace():cocoascript.CGColorSpaceRef;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488774-bufferbaseaddress
    bufferBaseAddress():void;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488834-bufferbytesperrow
    bufferBytesPerRow():cocoascript.NSUInteger;
  }
}
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider
   */
  interface QCPlugInOutputImageProvider {
    // doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider/1488841-rendertobuffer
    renderToBuffer_withBytesPerRow_pixelFormat_forBounds(baseAddress: void, rowBytes: cocoascript.NSUInteger, format: cocoascript.NSString, bounds: cocoascript.NSRect):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider/1488717-copyrenderedtextureforcglcontext
    copyRenderedTextureForCGLContext_pixelFormat_bounds_isFlipped(cgl_ctx: any, format: cocoascript.NSString, bounds: cocoascript.NSRect, flipped: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider/1488815-renderwithcglcontext
    renderWithCGLContext_forBounds(cgl_ctx: any, bounds: cocoascript.NSRect):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider/1488829-releaserenderedtexture
    releaseRenderedTexture_forCGLContext(name: cocoascript.GLuint, cgl_ctx: any):void;
    // doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider/1488867-imagebounds
    imageBounds():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider/1488715-imagecolorspace
    imageColorSpace():cocoascript.CGColorSpaceRef;
    // doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider/1488825-shouldcolormatch
    shouldColorMatch():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider/1488709-supportedbufferpixelformats
    supportedBufferPixelFormats():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider/1488820-supportedrenderedtexturepixelfor
    supportedRenderedTexturePixelFormats():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider/1488804-canrenderwithcglcontext
    canRenderWithCGLContext(cgl_ctx: any):cocoascript.BOOL;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartz/qcpluginexecutionmode
  type QCPlugInExecutionMode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartz/qcplugintimemode
  type QCPlugInTimeMode = number;
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/quartz/quartzfilterview
   */
  interface QuartzFilterView extends NSView {
    // doc://com.apple.documentation/documentation/quartz/quartzfilterview/1505010-sizetofit
    sizeToFit():void;
    //
    alloc():cocoascript.QuartzFilterView;
    //
    init():cocoascript.QuartzFilterView;
  }
}

declare const QuartzFilterView: cocoascript.QuartzFilterView;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartz/qlpreviewitemloadingblock
  type QLPreviewItemLoadingBlock = cocoascript.NSError;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartz/qlpreviewviewstyle
  type QLPreviewViewStyle = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceviewdisplaymode
  type IKCameraDeviceViewDisplayMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartz/ikcameradeviceviewtransfermode
  type IKCameraDeviceViewTransferMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartz/ikdevicebrowserviewdisplaymode
  type IKDeviceBrowserViewDisplayMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceviewtransfermode
  type IKScannerDeviceViewTransferMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartz/ikscannerdeviceviewdisplaymode
  type IKScannerDeviceViewDisplayMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartz/qcpluginbufferreleasecallback
  type QCPlugInBufferReleaseCallback = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartz/qcplugintexturereleasecallback
  type QCPlugInTextureReleaseCallback = void;
}
