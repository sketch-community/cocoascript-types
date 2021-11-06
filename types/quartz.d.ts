declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/ikimagebrowserview
   */
  interface IKImageBrowserView extends NSView {
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503511-initwithframe
    initWithFrame(frame: NSRect):IKImageBrowserView;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1504391-reloaddata
    reloadData():void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503780-delegate
    delegate(): id;
    setDelegate(): void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503824-datasource
    dataSource(): id;
    setDataSource(): void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1504667-setcellsstylemask
    setCellsStyleMask(mask: NSUInteger):void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503414-cellsstylemask
    cellsStyleMask():NSUInteger;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1504519-setconstrainstooriginalsize
    setConstrainsToOriginalSize(flag: BOOL):void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1504875-constrainstooriginalsize
    constrainsToOriginalSize():BOOL;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503943-setintercellspacing
    setIntercellSpacing(aSize: NSSize):void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1505048-intercellspacing
    intercellSpacing():NSSize;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1505041-newcellforrepresenteditem
    newCellForRepresentedItem(anItem: IKImageBrowserView):IKImageBrowserCell;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1504245-setzoomvalue
    setZoomValue(aValue: number):void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503515-zoomvalue
    zoomValue():number;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503927-setcontentresizingmask
    setContentResizingMask(mask: NSUInteger):void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503721-contentresizingmask
    contentResizingMask():NSUInteger;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1504013-scrollindextovisible
    scrollIndexToVisible(index: NSInteger):void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503795-setcellsize
    setCellSize(size: NSSize):void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1505258-cellsize
    cellSize():NSSize;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503571-indexofitematpoint
    indexOfItemAtPoint(point: NSPoint):NSInteger;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1504718-itemframeatindex
    itemFrameAtIndex(index: NSInteger):NSRect;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1504925-visibleitemindexes
    visibleItemIndexes():NSIndexSet;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503549-cellforitematindex
    cellForItemAtIndex(index: NSUInteger):IKImageBrowserCell;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1505279-selectionindexes
    selectionIndexes():NSIndexSet;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1504885-setselectionindexes
    setSelectionIndexes_byExtendingSelection(indexes: NSIndexSet, extendSelection: BOOL):void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1505241-setallowsmultipleselection
    setAllowsMultipleSelection(flag: BOOL):void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1505106-allowsmultipleselection
    allowsMultipleSelection():BOOL;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1504559-setallowsemptyselection
    setAllowsEmptySelection(flag: BOOL):void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1504364-allowsemptyselection
    allowsEmptySelection():BOOL;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503485-setallowsreordering
    setAllowsReordering(flag: BOOL):void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1504969-allowsreordering
    allowsReordering():BOOL;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503716-setanimates
    setAnimates(flag: BOOL):void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503490-animates
    animates():BOOL;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503921-expandgroupatindex
    expandGroupAtIndex(index: NSUInteger):void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1505086-collapsegroupatindex
    collapseGroupAtIndex(index: NSUInteger):void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503854-isgroupexpandedatindex
    isGroupExpandedAtIndex(index: NSUInteger):BOOL;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1504090-setdraggingdestinationdelegate
    setDraggingDestinationDelegate(delegate: IKImageBrowserView):void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1504980-draggingdestinationdelegate
    draggingDestinationDelegate():IKImageBrowserView;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503953-setdropindex
    setDropIndex_dropOperation(index: NSInteger, operation: IKImageBrowserDropOperation):void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503733-indexatlocationofdroppeditem
    indexAtLocationOfDroppedItem():NSUInteger;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1504965-setallowsdroppingonitems
    setAllowsDroppingOnItems(flag: BOOL):void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503495-allowsdroppingonitems
    allowsDroppingOnItems():BOOL;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1504110-dropoperation
    dropOperation():IKImageBrowserDropOperation;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1505235-setforegroundlayer
    setForegroundLayer(aLayer: CALayer):void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503987-foregroundlayer
    foregroundLayer():CALayer;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503859-setbackgroundlayer
    setBackgroundLayer(aLayer: CALayer):void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1504728-backgroundlayer
    backgroundLayer():CALayer;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503422-setcancontrolquicklookpanel
    setCanControlQuickLookPanel(flag: BOOL):void;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1504351-cancontrolquicklookpanel
    canControlQuickLookPanel():BOOL;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503777-numberofcolumns
    numberOfColumns():NSUInteger;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1504312-numberofrows
    numberOfRows():NSUInteger;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1504178-rectofcolumn
    rectOfColumn(columnIndex: NSUInteger):NSRect;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1505001-columnindexesinrect
    columnIndexesInRect(rect: NSRect):NSIndexSet;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503618-rectofrow
    rectOfRow(rowIndex: NSUInteger):NSRect;
    // https://developer.apple.com/documentation/quartz/ikimagebrowserview/1503452-rowindexesinrect
    rowIndexesInRect(rect: NSRect):NSIndexSet;
    //
    alloc():IKImageBrowserView;
    //
    init():IKImageBrowserView;
  }
}

declare const IKImageBrowserView: cocoascript.IKImageBrowserView;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/qccomposition
   */
  interface QCComposition extends NSObject {
    // https://developer.apple.com/documentation/quartz/qccomposition/1503768-compositionwithfile
    compositionWithFile(path: string | cocoascript.NSString):QCComposition;
    // https://developer.apple.com/documentation/quartz/qccomposition/1504831-compositionwithdata
    compositionWithData(data: NSData):QCComposition;
    // https://developer.apple.com/documentation/quartz/qccomposition/1505184-attributes
    attributes():NSDictionary;
    // https://developer.apple.com/documentation/quartz/qccomposition/1503694-protocols
    protocols():NSArray;
    // https://developer.apple.com/documentation/quartz/qccomposition/1493218-identifier
    identifier():NSString;
    // https://developer.apple.com/documentation/quartz/qccomposition/1504185-inputkeys
    inputKeys():NSArray;
    // https://developer.apple.com/documentation/quartz/qccomposition/1504100-outputkeys
    outputKeys():NSArray;
    //
    alloc():QCComposition;
    //
    init():QCComposition;
  }
}

declare const QCComposition: cocoascript.QCComposition;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartz/ikimagebrowserdropoperation
  type IKImageBrowserDropOperation = number;
}
declare namespace cocoascript {
  /**
   * A layer that loads, plays, and controls Quartz Composer compositions in a Core Animation layer hierarchy.
   * https://developer.apple.com/documentation/quartz/qccompositionlayer
   */
  interface QCCompositionLayer extends CAOpenGLLayer {
    // https://developer.apple.com/documentation/quartz/qccompositionlayer/1515355-compositionlayerwithfile
    compositionLayerWithFile(path: string | cocoascript.NSString):QCCompositionLayer;
    // https://developer.apple.com/documentation/quartz/qccompositionlayer/1515353-compositionlayerwithcomposition
    compositionLayerWithComposition(composition: QCComposition):QCCompositionLayer;
    // https://developer.apple.com/documentation/quartz/qccompositionlayer/1504706-initwithfile
    initWithFile(path: string | cocoascript.NSString):QCCompositionLayer;
    // https://developer.apple.com/documentation/quartz/qccompositionlayer/1503553-initwithcomposition
    initWithComposition(composition: QCComposition):QCCompositionLayer;
    // https://developer.apple.com/documentation/quartz/qccompositionlayer/1503496-composition
    composition():QCComposition;
    //
    alloc():QCCompositionLayer;
    //
    init():QCCompositionLayer;
  }
}

declare const QCCompositionLayer: cocoascript.QCCompositionLayer;
declare namespace cocoascript {
  /**
   * A class that allows users to edit the input parameters of a composition in real time. The composition can be rendering in any of the following objects:
   * https://developer.apple.com/documentation/quartz/qccompositionparameterview
   */
  interface QCCompositionParameterView extends NSView {
    // https://developer.apple.com/documentation/quartz/qccompositionparameterview/1503814-setcompositionrenderer
    setCompositionRenderer(renderer: QCCompositionRenderer):void;
    // https://developer.apple.com/documentation/quartz/qccompositionparameterview/1503933-compositionrenderer
    compositionRenderer():QCCompositionRenderer;
    // https://developer.apple.com/documentation/quartz/qccompositionparameterview/1504339-hasparameters
    hasParameters():BOOL;
    // https://developer.apple.com/documentation/quartz/qccompositionparameterview/1504516-setdelegate
    setDelegate(delegate: QCCompositionParameterView):void;
    // https://developer.apple.com/documentation/quartz/qccompositionparameterview/1503520-delegate
    delegate():QCCompositionParameterView;
    // https://developer.apple.com/documentation/quartz/qccompositionparameterview/1504845-setdrawsbackground
    setDrawsBackground(flag: BOOL):void;
    // https://developer.apple.com/documentation/quartz/qccompositionparameterview/1503491-drawsbackground
    drawsBackground():BOOL;
    // https://developer.apple.com/documentation/quartz/qccompositionparameterview/1504544-setbackgroundcolor
    setBackgroundColor(color: NSColor):void;
    // https://developer.apple.com/documentation/quartz/qccompositionparameterview/1503481-backgroundcolor
    backgroundColor():NSColor;
    //
    alloc():QCCompositionParameterView;
    //
    init():QCCompositionParameterView;
  }
}

declare const QCCompositionParameterView: cocoascript.QCCompositionParameterView;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/qccompositionpickerview
   */
  interface QCCompositionPickerView extends NSView {
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447368-setbackgroundcolor
    setBackgroundColor(color: NSColor):void;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447383-backgroundcolor
    backgroundColor():NSColor;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447365-setdrawsbackground
    setDrawsBackground(flag: BOOL):void;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447373-drawsbackground
    drawsBackground():BOOL;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447371-setdefaultvalue
    setDefaultValue_forInputKey(value: QCCompositionPickerView, key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447344-resetdefaultinputvalues
    resetDefaultInputValues():void;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447361-startanimation
    startAnimation(sender: QCCompositionPickerView):void;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447323-stopanimation
    stopAnimation(sender: QCCompositionPickerView):void;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447381-isanimating
    isAnimating():BOOL;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447369-setmaxanimationframerate
    setMaxAnimationFrameRate(maxFPS: number):void;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447379-maxanimationframerate
    maxAnimationFrameRate():number;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447356-setshowscompositionnames
    setShowsCompositionNames(flag: BOOL):void;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447338-showscompositionnames
    showsCompositionNames():BOOL;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447325-setdelegate
    setDelegate(delegate: QCCompositionPickerView):void;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447333-delegate
    delegate():QCCompositionPickerView;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447335-setcompositionsfromrepositorywit
    setCompositionsFromRepositoryWithProtocol_andAttributes(protocol: string | cocoascript.NSString, attributes: NSDictionary):void;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447327-compositions
    compositions():NSArray;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447340-setallowsemptyselection
    setAllowsEmptySelection(flag: BOOL):void;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447354-allowsemptyselection
    allowsEmptySelection():BOOL;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447375-setcompositionaspectratio
    setCompositionAspectRatio(ratio: NSSize):void;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447336-compositionaspectratio
    compositionAspectRatio():NSSize;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447363-setselectedcomposition
    setSelectedComposition(composition: QCComposition):void;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447329-selectedcomposition
    selectedComposition():QCComposition;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447346-setnumberofcolumns
    setNumberOfColumns(columns: NSUInteger):void;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447331-numberofcolumns
    numberOfColumns():NSUInteger;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447350-setnumberofrows
    setNumberOfRows(rows: NSUInteger):void;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerview/1447366-numberofrows
    numberOfRows():NSUInteger;
    //
    alloc():QCCompositionPickerView;
    //
    init():QCCompositionPickerView;
  }
}

declare const QCCompositionPickerView: cocoascript.QCCompositionPickerView;
// https://developer.apple.com/documentation/quartz/qccompositionpickerviewdidselectcompositionnotification
declare const QCCompositionPickerViewDidSelectCompositionNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/ikimageview
   */
  interface IKImageView extends NSView {
    // https://developer.apple.com/documentation/quartz/ikimageview/1504032-delegate
    delegate(): id;
    setDelegate(): void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1504496-zoomfactor
    zoomFactor(): CGFloat;
    setZoomFactor(): void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1504691-rotationangle
    rotationAngle(): CGFloat;
    setRotationAngle(): void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1503607-currenttoolmode
    currentToolMode(): string | cocoascript.NSString;
    setCurrentToolMode(): void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1503709-autoresizes
    autoresizes(): BOOL;
    setAutoresizes(): void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1503565-hashorizontalscroller
    hasHorizontalScroller(): BOOL;
    setHasHorizontalScroller(): void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1505256-hasverticalscroller
    hasVerticalScroller(): BOOL;
    setHasVerticalScroller(): void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1503469-autohidesscrollers
    autohidesScrollers(): BOOL;
    setAutohidesScrollers(): void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1504887-supportsdraganddrop
    supportsDragAndDrop(): BOOL;
    setSupportsDragAndDrop(): void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1505302-editable
    editable(): BOOL;
    setEditable(): void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1504092-doubleclickopensimageeditpanel
    doubleClickOpensImageEditPanel(): BOOL;
    setDoubleClickOpensImageEditPanel(): void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1503698-imagecorrection
    imageCorrection(): CIFilter;
    setImageCorrection(): void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1503567-backgroundcolor
    backgroundColor(): NSColor;
    setBackgroundColor(): void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1504005-imagesize
    imageSize():NSSize;
    // https://developer.apple.com/documentation/quartz/ikimageview/1503845-imageproperties
    imageProperties():NSDictionary;
    // https://developer.apple.com/documentation/quartz/ikimageview/1504371-image
    image():CGImageRef;
    // https://developer.apple.com/documentation/quartz/ikimageview/1503915-setimage
    setImage_imageProperties(image: CGImageRef, metaData: NSDictionary):void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1505314-setimagewithurl
    setImageWithURL(url: NSURL):void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1503535-setrotationangle
    setRotationAngle_centerPoint(rotationAngle: CGFloat, centerPoint: NSPoint):void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1503762-setimagezoomfactor
    setImageZoomFactor_centerPoint(zoomFactor: CGFloat, centerPoint: NSPoint):void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1504450-zoomimagetofit
    zoomImageToFit(sender: IKImageView):void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1504415-zoomimagetoactualsize
    zoomImageToActualSize(sender: IKImageView):void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1504460-zoomimagetorect
    zoomImageToRect(rect: NSRect):void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1503800-zoomin
    zoomIn(sender: IKImageView):void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1503436-zoomout
    zoomOut(sender: IKImageView):void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1503855-crop
    crop(sender: IKImageView):void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1505282-flipimagehorizontal
    flipImageHorizontal(sender: IKImageView):void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1503836-flipimagevertical
    flipImageVertical(sender: IKImageView):void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1503769-rotateimageleft
    rotateImageLeft(sender: IKImageView):void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1503427-rotateimageright
    rotateImageRight(sender: IKImageView):void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1504283-setoverlay
    setOverlay_forType(layer: CALayer, layerType: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1504236-overlayfortype
    overlayForType(layerType: string | cocoascript.NSString):CALayer;
    // https://developer.apple.com/documentation/quartz/ikimageview/1503677-scrolltopoint
    scrollToPoint(point: NSPoint):void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1504366-scrolltorect
    scrollToRect(rect: NSRect):void;
    // https://developer.apple.com/documentation/quartz/ikimageview/1503743-convertviewpointtoimagepoint
    convertViewPointToImagePoint(viewPoint: NSPoint):NSPoint;
    // https://developer.apple.com/documentation/quartz/ikimageview/1504464-convertviewrecttoimagerect
    convertViewRectToImageRect(viewRect: NSRect):NSRect;
    // https://developer.apple.com/documentation/quartz/ikimageview/1504633-convertimagepointtoviewpoint
    convertImagePointToViewPoint(imagePoint: NSPoint):NSPoint;
    // https://developer.apple.com/documentation/quartz/ikimageview/1504409-convertimagerecttoviewrect
    convertImageRectToViewRect(imageRect: NSRect):NSRect;
    //
    alloc():IKImageView;
    //
    init():IKImageView;
  }
}

declare const IKImageView: cocoascript.IKImageView;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/quartz/quartzfiltermanager
   */
  interface QuartzFilterManager extends NSObject {
    // https://developer.apple.com/documentation/quartz/quartzfiltermanager/1503409-delegate
    delegate():QuartzFilterManager;
    // https://developer.apple.com/documentation/quartz/quartzfiltermanager/1505297-filterpanel
    filterPanel():NSPanel;
    // https://developer.apple.com/documentation/quartz/quartzfiltermanager/1505290-filterview
    filterView():QuartzFilterView;
    // https://developer.apple.com/documentation/quartz/quartzfiltermanager/1503784-importfilter
    importFilter(filterProperties: NSDictionary):QuartzFilter;
    // https://developer.apple.com/documentation/quartz/quartzfiltermanager/1503913-selectfilter
    selectFilter(filter: QuartzFilter):BOOL;
    // https://developer.apple.com/documentation/quartz/quartzfiltermanager/1504816-selectedfilter
    selectedFilter():QuartzFilter;
    // https://developer.apple.com/documentation/quartz/quartzfiltermanager/1505098-setdelegate
    setDelegate(aDelegate: QuartzFilterManager):void;
    // https://developer.apple.com/documentation/quartz/quartzfiltermanager/1503432-filtersindomains
    filtersInDomains(domains: NSArray):NSArray;
    // https://developer.apple.com/documentation/quartz/quartzfiltermanager/1518336-filtermanager
    filterManager():QuartzFilterManager;
    //
    alloc():QuartzFilterManager;
    //
    init():QuartzFilterManager;
  }
}

declare const QuartzFilterManager: cocoascript.QuartzFilterManager;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/quartz/quartzfilter
   */
  interface QuartzFilter extends NSObject {
    // https://developer.apple.com/documentation/quartz/quartzfilter/1433671-quartzfilterwithurl
    quartzFilterWithURL(aURL: NSURL):QuartzFilter;
    // https://developer.apple.com/documentation/quartz/quartzfilter/1433675-quartzfilterwithoutputintents
    quartzFilterWithOutputIntents(outputIntents: NSArray):QuartzFilter;
    // https://developer.apple.com/documentation/quartz/quartzfilter/1433673-quartzfilterwithproperties
    quartzFilterWithProperties(properties: NSDictionary):QuartzFilter;
    // https://developer.apple.com/documentation/quartz/quartzfilter/1433684-applytocontext
    applyToContext(aContext: CGContextRef):BOOL;
    // https://developer.apple.com/documentation/quartz/quartzfilter/1433682-localizedname
    localizedName():NSString;
    // https://developer.apple.com/documentation/quartz/quartzfilter/1433686-properties
    properties():NSDictionary;
    // https://developer.apple.com/documentation/quartz/quartzfilter/1433679-removefromcontext
    removeFromContext(aContext: CGContextRef):void;
    // https://developer.apple.com/documentation/quartz/quartzfilter/1433677-url
    url():NSURL;
    //
    alloc():QuartzFilter;
    //
    init():QuartzFilter;
  }
}

declare const QuartzFilter: cocoascript.QuartzFilter;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/iksaveoptions
   */
  interface IKSaveOptions extends NSObject {
    // https://developer.apple.com/documentation/quartz/iksaveoptions/1503412-initwithimageproperties
    initWithImageProperties_imageUTType(imageProperties: NSDictionary, imageUTType: string | cocoascript.NSString):IKSaveOptions;
    // https://developer.apple.com/documentation/quartz/iksaveoptions/1503458-addsaveoptionsaccessoryviewtosav
    addSaveOptionsAccessoryViewToSavePanel(savePanel: NSSavePanel):void;
    // https://developer.apple.com/documentation/quartz/iksaveoptions/1505299-imageproperties
    imageProperties(): NSDictionary;
    setImageProperties(): void;
    // https://developer.apple.com/documentation/quartz/iksaveoptions/1504388-imageuttype
    imageUTType(): string | cocoascript.NSString;
    setImageUTType(): void;
    // https://developer.apple.com/documentation/quartz/iksaveoptions/1504791-userselection
    userSelection(): NSDictionary;
    setUserSelection(): void;
    // https://developer.apple.com/documentation/quartz/iksaveoptions/1503653-delegate
    delegate(): id;
    setDelegate(): void;
    // https://developer.apple.com/documentation/objectivec/nsobject/1503501-saveoptions
    saveOptions_shouldShowUTType(saveOptions: IKSaveOptions, utType: string | cocoascript.NSString):BOOL;
    // https://developer.apple.com/documentation/quartz/iksaveoptions/1504945-addsaveoptionstoview
    addSaveOptionsToView(view: NSView):void;
    //
    alloc():IKSaveOptions;
    //
    init():IKSaveOptions;
  }
}

declare const IKSaveOptions: cocoascript.IKSaveOptions;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/qccompositionrepository
   */
  interface QCCompositionRepository extends NSObject {
    // https://developer.apple.com/documentation/quartz/qccompositionrepository/1493222-sharedcompositionrepository
    sharedCompositionRepository():QCCompositionRepository;
    // https://developer.apple.com/documentation/quartz/qccompositionrepository/1493225-compositionwithidentifier
    compositionWithIdentifier(identifier: string | cocoascript.NSString):QCComposition;
    // https://developer.apple.com/documentation/quartz/qccompositionrepository/1493216-compositionswithprotocols
    compositionsWithProtocols_andAttributes(protocols: NSArray, attributes: NSDictionary):NSArray;
    // https://developer.apple.com/documentation/quartz/qccompositionrepository/1493221-allcompositions
    allCompositions():NSArray;
    //
    alloc():QCCompositionRepository;
    //
    init():QCCompositionRepository;
  }
}

declare const QCCompositionRepository: cocoascript.QCCompositionRepository;
// https://developer.apple.com/documentation/quartz/qccompositionrepositorydidupdatenotification
declare const QCCompositionRepositoryDidUpdateNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A
   * https://developer.apple.com/documentation/quartz/qcrenderer
   */
  interface QCRenderer extends NSObject {
    // https://developer.apple.com/documentation/quartz/qcrenderer/1504825-initwithcomposition
    initWithComposition_colorSpace(composition: QCComposition, colorSpace: CGColorSpaceRef):QCRenderer;
    // https://developer.apple.com/documentation/quartz/qcrenderer/1504247-initwithopenglcontext
    initWithOpenGLContext_pixelFormat_file(context: NSOpenGLContext, format: NSOpenGLPixelFormat, path: string | cocoascript.NSString):QCRenderer;
    // https://developer.apple.com/documentation/quartz/qcrenderer/1504424-initwithcglcontext
    initWithCGLContext_pixelFormat_colorSpace_composition(context: any, format: any, colorSpace: CGColorSpaceRef, composition: QCComposition):QCRenderer;
    // https://developer.apple.com/documentation/quartz/qcrenderer/1504610-initoffscreenwithsize
    initOffScreenWithSize_colorSpace_composition(size: NSSize, colorSpace: CGColorSpaceRef, composition: QCComposition):QCRenderer;
    // https://developer.apple.com/documentation/quartz/qcrenderer/1503792-renderattime
    renderAtTime_arguments(time: NSTimeInterval, arguments: NSDictionary):BOOL;
    // https://developer.apple.com/documentation/quartz/qcrenderer/1503919-composition
    composition():QCComposition;
    // https://developer.apple.com/documentation/quartz/qcrenderer/1504422-snapshotimage
    snapshotImage():NSImage;
    // https://developer.apple.com/documentation/quartz/qcrenderer/1503473-createsnapshotimageoftype
    createSnapshotImageOfType(type: string | cocoascript.NSString):QCRenderer;
    // https://developer.apple.com/documentation/quartz/qcrenderer/1504024-renderingtimefortime
    renderingTimeForTime_arguments(time: NSTimeInterval, arguments: NSDictionary):NSTimeInterval;
    //
    alloc():QCRenderer;
    //
    init():QCRenderer;
  }
}

declare const QCRenderer: cocoascript.QCRenderer;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/qcview
   */
  interface QCView extends NSView {
    // https://developer.apple.com/documentation/quartz/qcview/1436256-renderattime
    renderAtTime_arguments(time: NSTimeInterval, arguments: NSDictionary):BOOL;
    // https://developer.apple.com/documentation/quartz/qcview/1436241-loadcompositionfromfile
    loadCompositionFromFile(path: string | cocoascript.NSString):BOOL;
    // https://developer.apple.com/documentation/quartz/qcview/1436246-loadcomposition
    loadComposition(composition: QCComposition):BOOL;
    // https://developer.apple.com/documentation/quartz/qcview/1436242-loadedcomposition
    loadedComposition():QCComposition;
    // https://developer.apple.com/documentation/quartz/qcview/1436231-unloadcomposition
    unloadComposition():void;
    // https://developer.apple.com/documentation/quartz/qcview/1436243-erase
    erase():void;
    // https://developer.apple.com/documentation/quartz/qcview/1436232-erasecolor
    eraseColor():NSColor;
    // https://developer.apple.com/documentation/quartz/qcview/1436229-seterasecolor
    setEraseColor(color: NSColor):void;
    // https://developer.apple.com/documentation/quartz/qcview/1436253-eventforwardingmask
    eventForwardingMask():NSUInteger;
    // https://developer.apple.com/documentation/quartz/qcview/1436240-seteventforwardingmask
    setEventForwardingMask(mask: NSUInteger):void;
    // https://developer.apple.com/documentation/quartz/qcview/1436228-maxrenderingframerate
    maxRenderingFrameRate():number;
    // https://developer.apple.com/documentation/quartz/qcview/1436248-setmaxrenderingframerate
    setMaxRenderingFrameRate(maxFPS: number):void;
    // https://developer.apple.com/documentation/quartz/qcview/1436255-startrendering
    startRendering():BOOL;
    // https://developer.apple.com/documentation/quartz/qcview/1436239-isrendering
    isRendering():BOOL;
    // https://developer.apple.com/documentation/quartz/qcview/1436245-autostartsrendering
    autostartsRendering():BOOL;
    // https://developer.apple.com/documentation/quartz/qcview/1436233-setautostartsrendering
    setAutostartsRendering(flag: BOOL):void;
    // https://developer.apple.com/documentation/quartz/qcview/1436247-stoprendering
    stopRendering():void;
    // https://developer.apple.com/documentation/quartz/qcview/1436238-pauserendering
    pauseRendering():void;
    // https://developer.apple.com/documentation/quartz/qcview/1436237-ispausedrendering
    isPausedRendering():BOOL;
    // https://developer.apple.com/documentation/quartz/qcview/1436252-resumerendering
    resumeRendering():void;
    // https://developer.apple.com/documentation/quartz/qcview/1436227-play
    play(sender: QCView):void;
    // https://developer.apple.com/documentation/quartz/qcview/1436254-start
    start(sender: QCView):void;
    // https://developer.apple.com/documentation/quartz/qcview/1436244-stop
    stop(sender: QCView):void;
    // https://developer.apple.com/documentation/quartz/qcview/1436235-snapshotimage
    snapshotImage():NSImage;
    // https://developer.apple.com/documentation/quartz/qcview/1436250-createsnapshotimageoftype
    createSnapshotImageOfType(type: string | cocoascript.NSString):QCView;
    // https://developer.apple.com/documentation/quartz/qcview/1436249-openglcontext
    openGLContext():NSOpenGLContext;
    // https://developer.apple.com/documentation/quartz/qcview/1436234-openglpixelformat
    openGLPixelFormat():NSOpenGLPixelFormat;
    //
    alloc():QCView;
    //
    init():QCView;
  }
}

declare const QCView: cocoascript.QCView;
// https://developer.apple.com/documentation/quartz/qcviewdidstartrenderingnotification
declare const QCViewDidStartRenderingNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/quartz/qcviewdidstoprenderingnotification
declare const QCViewDidStopRenderingNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/ikfilterbrowserpanel
   */
  interface IKFilterBrowserPanel extends NSPanel {
    // https://developer.apple.com/documentation/quartz/ikfilterbrowserpanel/1504426-filtername
    filterName():NSString;
    // https://developer.apple.com/documentation/quartz/ikfilterbrowserpanel/1503992-filterbrowserviewwithoptions
    filterBrowserViewWithOptions(inOptions: NSDictionary):IKFilterBrowserView;
    // https://developer.apple.com/documentation/quartz/ikfilterbrowserpanel/1504894-beginwithoptions
    beginWithOptions_modelessDelegate_didEndSelector_contextInfo(inOptions: NSDictionary, modelessDelegate: IKFilterBrowserPanel, didEndSelector: SEL, contextInfo: void):void;
    // https://developer.apple.com/documentation/quartz/ikfilterbrowserpanel/1504636-beginsheetwithoptions
    beginSheetWithOptions_modalForWindow_modalDelegate_didEndSelector_contextInfo(inOptions: NSDictionary, docWindow: NSWindow, modalDelegate: IKFilterBrowserPanel, didEndSelector: SEL, contextInfo: void):void;
    // https://developer.apple.com/documentation/quartz/ikfilterbrowserpanel/1504028-runmodalwithoptions
    runModalWithOptions(inOptions: NSDictionary):number;
    // https://developer.apple.com/documentation/quartz/ikfilterbrowserpanel/1505223-finish
    finish(sender: IKFilterBrowserPanel):void;
    // https://developer.apple.com/documentation/quartz/ikfilterbrowserpanel/1503504-filterbrowserpanelwithstylemask
    filterBrowserPanelWithStyleMask(styleMask: number):IKFilterBrowserPanel;
    //
    alloc():IKFilterBrowserPanel;
    //
    init():IKFilterBrowserPanel;
  }
}

declare const IKFilterBrowserPanel: cocoascript.IKFilterBrowserPanel;
// https://developer.apple.com/documentation/quartz/ikfilterbrowserwillpreviewfilternotification
declare const IKFilterBrowserWillPreviewFilterNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/quartz/ikfilterbrowserfilterselectednotification
declare const IKFilterBrowserFilterSelectedNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/quartz/ikfilterbrowserfilterdoubleclicknotification
declare const IKFilterBrowserFilterDoubleClickNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/ikscannerdeviceviewdelegate
   */
  interface IKScannerDeviceViewDelegate {
    // https://developer.apple.com/documentation/quartz/ikscannerdeviceviewdelegate/1504462-scannerdeviceview
    scannerDeviceView_didScanToURL_fileData_error(scannerDeviceView: IKScannerDeviceView, url: NSURL, data: NSData, error: NSError):void;
    // https://developer.apple.com/documentation/quartz/ikscannerdeviceviewdelegate/1503476-scannerdeviceview
    scannerDeviceView_didEncounterError(scannerDeviceView: IKScannerDeviceView, error: NSError):void;
    // https://developer.apple.com/documentation/quartz/ikscannerdeviceviewdelegate/1503867-scannerdeviceview
    scannerDeviceView_didScanToBandData_scanInfo_error(scannerDeviceView: IKScannerDeviceView, data: any, scanInfo: NSDictionary, error: NSError):void;
    // https://developer.apple.com/documentation/quartz/ikscannerdeviceviewdelegate/1504768-scannerdeviceview
    scannerDeviceView_didScanToURL_error(scannerDeviceView: IKScannerDeviceView, url: NSURL, error: NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/ikcameradeviceview
   */
  interface IKCameraDeviceView extends NSView {
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1503753-cameradevice
    cameraDevice(): any;
    setCameraDevice(): void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1504002-iconsize
    iconSize(): NSUInteger;
    setIconSize(): void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1504881-mode
    mode(): IKCameraDeviceViewDisplayMode;
    setMode(): void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1504417-hasdisplaymodeicon
    hasDisplayModeIcon(): BOOL;
    setHasDisplayModeIcon(): void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1503413-hasdisplaymodetable
    hasDisplayModeTable(): BOOL;
    setHasDisplayModeTable(): void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1503771-transfermode
    transferMode(): IKCameraDeviceViewTransferMode;
    setTransferMode(): void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1504639-candownloadselecteditems
    canDownloadSelectedItems(): BOOL;
    setCanDownloadSelectedItems(): void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1503702-downloadsdirectory
    downloadsDirectory(): NSURL;
    setDownloadsDirectory(): void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1504833-downloadselecteditems
    downloadSelectedItems(sender: IKCameraDeviceView):void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1504326-downloadallitems
    downloadAllItems(sender: IKCameraDeviceView):void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1503822-downloadselectedcontrollabel
    downloadSelectedControlLabel(): string | cocoascript.NSString;
    setDownloadSelectedControlLabel(): void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1504281-downloadallcontrollabel
    downloadAllControlLabel(): string | cocoascript.NSString;
    setDownloadAllControlLabel(): void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1505006-displaysdownloadsdirectorycontro
    displaysDownloadsDirectoryControl(): BOOL;
    setDisplaysDownloadsDirectoryControl(): void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1503644-displayspostprocessapplicationco
    displaysPostProcessApplicationControl(): BOOL;
    setDisplaysPostProcessApplicationControl(): void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1504227-postprocessapplication
    postProcessApplication(): NSURL;
    setPostProcessApplication(): void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1504949-candeleteselecteditems
    canDeleteSelectedItems(): BOOL;
    setCanDeleteSelectedItems(): void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1504333-deleteselecteditems
    deleteSelectedItems(sender: IKCameraDeviceView):void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1503804-selectindexes
    selectIndexes_byExtendingSelection(indexes: NSIndexSet, extend: BOOL):void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1504546-selectedindexes
    selectedIndexes():NSIndexSet;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1504315-delegate
    delegate(): IKCameraDeviceViewDelegate;
    setDelegate(): void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1503947-canrotateselecteditemsleft
    canRotateSelectedItemsLeft(): BOOL;
    setCanRotateSelectedItemsLeft(): void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1503525-canrotateselecteditemsright
    canRotateSelectedItemsRight(): BOOL;
    setCanRotateSelectedItemsRight(): void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1503662-rotateleft
    rotateLeft(sender: IKCameraDeviceView):void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceview/1505123-rotateright
    rotateRight(sender: IKCameraDeviceView):void;
    //
    alloc():IKCameraDeviceView;
    //
    init():IKCameraDeviceView;
  }
}

declare const IKCameraDeviceView: cocoascript.IKCameraDeviceView;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/ikdevicebrowserview
   */
  interface IKDeviceBrowserView extends NSView {
    // https://developer.apple.com/documentation/quartz/ikdevicebrowserview/1443071-selecteddevice
    selectedDevice(): any;
    setSelectedDevice(): void;
    // https://developer.apple.com/documentation/quartz/ikdevicebrowserview/1443061-displayslocalcameras
    displaysLocalCameras(): BOOL;
    setDisplaysLocalCameras(): void;
    // https://developer.apple.com/documentation/quartz/ikdevicebrowserview/1443056-displaysnetworkcameras
    displaysNetworkCameras(): BOOL;
    setDisplaysNetworkCameras(): void;
    // https://developer.apple.com/documentation/quartz/ikdevicebrowserview/1443052-displayslocalscanners
    displaysLocalScanners(): BOOL;
    setDisplaysLocalScanners(): void;
    // https://developer.apple.com/documentation/quartz/ikdevicebrowserview/1443078-displaysnetworkscanners
    displaysNetworkScanners(): BOOL;
    setDisplaysNetworkScanners(): void;
    // https://developer.apple.com/documentation/quartz/ikdevicebrowserview/1443080-mode
    mode(): IKDeviceBrowserViewDisplayMode;
    setMode(): void;
    // https://developer.apple.com/documentation/quartz/ikdevicebrowserview/1443054-delegate
    delegate(): IKDeviceBrowserViewDelegate;
    setDelegate(): void;
    //
    alloc():IKDeviceBrowserView;
    //
    init():IKDeviceBrowserView;
  }
}

declare const IKDeviceBrowserView: cocoascript.IKDeviceBrowserView;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/ikimageeditpanel
   */
  interface IKImageEditPanel extends NSPanel {
    // https://developer.apple.com/documentation/quartz/ikimageeditpanel/1503827-sharedimageeditpanel
    sharedImageEditPanel():IKImageEditPanel;
    // https://developer.apple.com/documentation/quartz/ikimageeditpanel/1504436-filterarray
    filterArray(): NSArray;
    setFilterArray(): void;
    // https://developer.apple.com/documentation/quartz/ikimageeditpanel/1503831-datasource
    dataSource(): IKImageEditPanelDataSource;
    setDataSource(): void;
    // https://developer.apple.com/documentation/quartz/ikimageeditpanel/1503419-reloaddata
    reloadData():void;
    //
    alloc():IKImageEditPanel;
    //
    init():IKImageEditPanel;
  }
}

declare const IKImageEditPanel: cocoascript.IKImageEditPanel;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/ikscannerdeviceview
   */
  interface IKScannerDeviceView extends NSView {
    // https://developer.apple.com/documentation/quartz/ikscannerdeviceview/1504379-scannerdevice
    scannerDevice(): any;
    setScannerDevice(): void;
    // https://developer.apple.com/documentation/quartz/ikscannerdeviceview/1504321-mode
    mode(): IKScannerDeviceViewDisplayMode;
    setMode(): void;
    // https://developer.apple.com/documentation/quartz/ikscannerdeviceview/1503437-hasdisplaymodeadvanced
    hasDisplayModeAdvanced(): BOOL;
    setHasDisplayModeAdvanced(): void;
    // https://developer.apple.com/documentation/quartz/ikscannerdeviceview/1504506-hasdisplaymodesimple
    hasDisplayModeSimple(): BOOL;
    setHasDisplayModeSimple(): void;
    // https://developer.apple.com/documentation/quartz/ikscannerdeviceview/1503830-displaysdownloadsdirectorycontro
    displaysDownloadsDirectoryControl(): BOOL;
    setDisplaysDownloadsDirectoryControl(): void;
    // https://developer.apple.com/documentation/quartz/ikscannerdeviceview/1503585-downloadsdirectory
    downloadsDirectory(): NSURL;
    setDownloadsDirectory(): void;
    // https://developer.apple.com/documentation/quartz/ikscannerdeviceview/1505017-transfermode
    transferMode(): IKScannerDeviceViewTransferMode;
    setTransferMode(): void;
    // https://developer.apple.com/documentation/quartz/ikscannerdeviceview/1503744-documentname
    documentName(): string | cocoascript.NSString;
    setDocumentName(): void;
    // https://developer.apple.com/documentation/quartz/ikscannerdeviceview/1505053-displayspostprocessapplicationco
    displaysPostProcessApplicationControl(): BOOL;
    setDisplaysPostProcessApplicationControl(): void;
    // https://developer.apple.com/documentation/quartz/ikscannerdeviceview/1505215-postprocessapplication
    postProcessApplication(): NSURL;
    setPostProcessApplication(): void;
    // https://developer.apple.com/documentation/quartz/ikscannerdeviceview/1504170-delegate
    delegate(): IKScannerDeviceViewDelegate;
    setDelegate(): void;
    // https://developer.apple.com/documentation/quartz/ikscannerdeviceview/1504055-overviewcontrollabel
    overviewControlLabel(): string | cocoascript.NSString;
    setOverviewControlLabel(): void;
    // https://developer.apple.com/documentation/quartz/ikscannerdeviceview/1504143-scancontrollabel
    scanControlLabel(): string | cocoascript.NSString;
    setScanControlLabel(): void;
    //
    alloc():IKScannerDeviceView;
    //
    init():IKScannerDeviceView;
  }
}

declare const IKScannerDeviceView: cocoascript.IKScannerDeviceView;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/ikslideshow
   */
  interface IKSlideshow extends NSObject {
    // https://developer.apple.com/documentation/quartz/ikslideshow/1504883-sharedslideshow
    sharedSlideshow():IKSlideshow;
    // https://developer.apple.com/documentation/quartz/ikslideshow/1504036-runslideshowwithdatasource
    runSlideshowWithDataSource_inMode_options(dataSource: IKSlideshowDataSource, slideshowMode: string | cocoascript.NSString, slideshowOptions: NSDictionary):void;
    // https://developer.apple.com/documentation/quartz/ikslideshow/1503801-stopslideshow
    stopSlideshow(sender: IKSlideshow):void;
    // https://developer.apple.com/documentation/quartz/ikslideshow/1504967-autoplaydelay
    autoPlayDelay(): NSTimeInterval;
    setAutoPlayDelay(): void;
    // https://developer.apple.com/documentation/quartz/ikslideshow/1503700-indexofcurrentslideshowitem
    indexOfCurrentSlideshowItem():NSUInteger;
    // https://developer.apple.com/documentation/quartz/ikslideshow/1504298-reloaddata
    reloadData():void;
    // https://developer.apple.com/documentation/quartz/ikslideshow/1504713-reloadslideshowitematindex
    reloadSlideshowItemAtIndex(index: NSUInteger):void;
    // https://developer.apple.com/documentation/quartz/ikslideshow/1504783-canexporttoapplication
    canExportToApplication(applicationBundleIdentifier: string | cocoascript.NSString):BOOL;
    // https://developer.apple.com/documentation/quartz/ikslideshow/1503513-exportslideshowitem
    exportSlideshowItem_toApplication(item: IKSlideshow, applicationBundleIdentifier: string | cocoascript.NSString):void;
    //
    alloc():IKSlideshow;
    //
    init():IKSlideshow;
  }
}

declare const IKSlideshow: cocoascript.IKSlideshow;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/ikfilterbrowserview
   */
  interface IKFilterBrowserView extends NSView {
    // https://developer.apple.com/documentation/quartz/ikfilterbrowserview/1405296-setpreviewstate
    setPreviewState(inState: BOOL):void;
    // https://developer.apple.com/documentation/quartz/ikfilterbrowserview/1405294-filtername
    filterName():NSString;
    //
    alloc():IKFilterBrowserView;
    //
    init():IKFilterBrowserView;
  }
}

declare const IKFilterBrowserView: cocoascript.IKFilterBrowserView;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/ikfilteruiview
   */
  interface IKFilterUIView extends NSView {
    // https://developer.apple.com/documentation/quartz/ikfilteruiview/1504872-viewwithframe
    viewWithFrame_filter(frameRect: NSRect, inFilter: CIFilter):IKFilterUIView;
    // https://developer.apple.com/documentation/quartz/ikfilteruiview/1504139-initwithframe
    initWithFrame_filter(frameRect: NSRect, inFilter: CIFilter):IKFilterUIView;
    // https://developer.apple.com/documentation/quartz/ikfilteruiview/1504622-filter
    filter():CIFilter;
    // https://developer.apple.com/documentation/quartz/ikfilteruiview/1504206-objectcontroller
    objectController():NSObjectController;
    //
    alloc():IKFilterUIView;
    //
    init():IKFilterUIView;
  }
}

declare const IKFilterUIView: cocoascript.IKFilterUIView;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/quartz/ikimagebrowsercell
   */
  interface IKImageBrowserCell extends NSObject {
    // https://developer.apple.com/documentation/quartz/ikimagebrowsercell/1500044-frame
    frame():NSRect;
    // https://developer.apple.com/documentation/quartz/ikimagebrowsercell/1500052-imageframe
    imageFrame():NSRect;
    // https://developer.apple.com/documentation/quartz/ikimagebrowsercell/1500074-subtitleframe
    subtitleFrame():NSRect;
    // https://developer.apple.com/documentation/quartz/ikimagebrowsercell/1500069-titleframe
    titleFrame():NSRect;
    // https://developer.apple.com/documentation/quartz/ikimagebrowsercell/1500064-imagecontainerframe
    imageContainerFrame():NSRect;
    // https://developer.apple.com/documentation/quartz/ikimagebrowsercell/1500047-indexofrepresenteditem
    indexOfRepresentedItem():NSUInteger;
    // https://developer.apple.com/documentation/quartz/ikimagebrowsercell/1500071-representeditem
    representedItem():IKImageBrowserCell;
    // https://developer.apple.com/documentation/quartz/ikimagebrowsercell/1500051-isselected
    isSelected():BOOL;
    // https://developer.apple.com/documentation/quartz/ikimagebrowsercell/1500070-selectionframe
    selectionFrame():NSRect;
    // https://developer.apple.com/documentation/quartz/ikimagebrowsercell/1500042-imagealignment
    imageAlignment():NSImageAlignment;
    // https://developer.apple.com/documentation/quartz/ikimagebrowsercell/1500060-opacity
    opacity():CGFloat;
    // https://developer.apple.com/documentation/quartz/ikimagebrowsercell/1500062-cellstate
    cellState():IKImageBrowserCellState;
    // https://developer.apple.com/documentation/quartz/ikimagebrowsercell/1500045-layerfortype
    layerForType(type: string | cocoascript.NSString):CALayer;
    // https://developer.apple.com/documentation/quartz/ikimagebrowsercell/1500049-imagebrowserview
    imageBrowserView():IKImageBrowserView;
    //
    alloc():IKImageBrowserCell;
    //
    init():IKImageBrowserCell;
  }
}

declare const IKImageBrowserCell: cocoascript.IKImageBrowserCell;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/ikpicturetaker
   */
  interface IKPictureTaker extends NSPanel {
    // https://developer.apple.com/documentation/quartz/ikpicturetaker/1503805-picturetaker
    pictureTaker():IKPictureTaker;
    // https://developer.apple.com/documentation/quartz/ikpicturetaker/1504302-beginpicturetakersheetforwindow
    beginPictureTakerSheetForWindow_withDelegate_didEndSelector_contextInfo(aWindow: NSWindow, delegate: IKPictureTaker, didEndSelector: SEL, contextInfo: void):void;
    // https://developer.apple.com/documentation/quartz/ikpicturetaker/1503448-beginpicturetakerwithdelegate
    beginPictureTakerWithDelegate_didEndSelector_contextInfo(delegate: IKPictureTaker, didEndSelector: SEL, contextInfo: void):void;
    // https://developer.apple.com/documentation/quartz/ikpicturetaker/1504753-popuprecentsmenuforview
    popUpRecentsMenuForView_withDelegate_didEndSelector_contextInfo(aView: NSView, delegate: IKPictureTaker, didEndSelector: SEL, contextInfo: void):void;
    // https://developer.apple.com/documentation/quartz/ikpicturetaker/1503911-runmodal
    runModal():NSInteger;
    // https://developer.apple.com/documentation/quartz/ikpicturetaker/1503724-setinputimage
    setInputImage(image: NSImage):void;
    // https://developer.apple.com/documentation/quartz/ikpicturetaker/1505220-inputimage
    inputImage():NSImage;
    // https://developer.apple.com/documentation/quartz/ikpicturetaker/1504563-outputimage
    outputImage():NSImage;
    // https://developer.apple.com/documentation/quartz/ikpicturetaker/1504915-setmirroring
    setMirroring(b: BOOL):void;
    // https://developer.apple.com/documentation/quartz/ikpicturetaker/1504121-mirroring
    mirroring():BOOL;
    //
    alloc():IKPictureTaker;
    //
    init():IKPictureTaker;
  }
}

declare const IKPictureTaker: cocoascript.IKPictureTaker;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/ikcameradeviceviewdelegate
   */
  interface IKCameraDeviceViewDelegate {
    // https://developer.apple.com/documentation/quartz/ikcameradeviceviewdelegate/1503524-cameradeviceview
    cameraDeviceView_didDownloadFile_location_fileData_error(cameraDeviceView: IKCameraDeviceView, file: any, url: NSURL, data: NSData, error: NSError):void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceviewdelegate/1505308-cameradeviceviewselectiondidchan
    cameraDeviceViewSelectionDidChange(cameraDeviceView: IKCameraDeviceView):void;
    // https://developer.apple.com/documentation/quartz/ikcameradeviceviewdelegate/1505239-cameradeviceview
    cameraDeviceView_didEncounterError(cameraDeviceView: IKCameraDeviceView, error: NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/ikdevicebrowserviewdelegate
   */
  interface IKDeviceBrowserViewDelegate {
    // https://developer.apple.com/documentation/quartz/ikdevicebrowserviewdelegate/1443059-devicebrowserview
    deviceBrowserView_selectionDidChange(deviceBrowserView: IKDeviceBrowserView, device: any):void;
    // https://developer.apple.com/documentation/quartz/ikdevicebrowserviewdelegate/1443076-devicebrowserview
    deviceBrowserView_didEncounterError(deviceBrowserView: IKDeviceBrowserView, error: NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/ikfiltercustomuiprovider
   */
  interface IKFilterCustomUIProvider {
    // https://developer.apple.com/documentation/quartz/ikfiltercustomuiprovider/1427525-provideviewforuiconfiguration
    provideViewForUIConfiguration_excludedKeys(inUIConfiguration: NSDictionary, inKeys: NSArray):IKFilterUIView;
  }
}
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/ikimageeditpaneldatasource
   */
  interface IKImageEditPanelDataSource {
    // https://developer.apple.com/documentation/quartz/ikimageeditpaneldatasource/1504167-imageproperties
    imageProperties():NSDictionary;
    // https://developer.apple.com/documentation/quartz/ikimageeditpaneldatasource/1503517-setimage
    setImage_imageProperties(image: CGImageRef, metaData: NSDictionary):void;
    // https://developer.apple.com/documentation/quartz/ikimageeditpaneldatasource/1505304-image
    image():CGImageRef;
    // https://developer.apple.com/documentation/quartz/ikimageeditpaneldatasource/1505271-thumbnailwithmaximumsize
    thumbnailWithMaximumSize(size: NSSize):CGImageRef;
    // https://developer.apple.com/documentation/quartz/ikimageeditpaneldatasource/1503472-hasadjustmode
    hasAdjustMode():BOOL;
    // https://developer.apple.com/documentation/quartz/ikimageeditpaneldatasource/1505246-hasdetailsmode
    hasDetailsMode():BOOL;
    // https://developer.apple.com/documentation/quartz/ikimageeditpaneldatasource/1505020-haseffectsmode
    hasEffectsMode():BOOL;
  }
}
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/ikslideshowdatasource
   */
  interface IKSlideshowDataSource {
    // https://developer.apple.com/documentation/quartz/ikslideshowdatasource/1503441-numberofslideshowitems
    numberOfSlideshowItems():NSUInteger;
    // https://developer.apple.com/documentation/quartz/ikslideshowdatasource/1503729-slideshowitematindex
    slideshowItemAtIndex(index: NSUInteger):IKSlideshowDataSource;
    // https://developer.apple.com/documentation/quartz/ikslideshowdatasource/1503638-nameofslideshowitematindex
    nameOfSlideshowItemAtIndex(index: NSUInteger):NSString;
    // https://developer.apple.com/documentation/quartz/ikslideshowdatasource/1505226-canexportslideshowitematindex
    canExportSlideshowItemAtIndex_toApplication(index: NSUInteger, applicationBundleIdentifier: string | cocoascript.NSString):BOOL;
    // https://developer.apple.com/documentation/quartz/ikslideshowdatasource/1504337-slideshowwillstart
    slideshowWillStart():void;
    // https://developer.apple.com/documentation/quartz/ikslideshowdatasource/1504870-slideshowdidstop
    slideshowDidStop():void;
    // https://developer.apple.com/documentation/quartz/ikslideshowdatasource/1504272-slideshowdidchangecurrentindex
    slideshowDidChangeCurrentIndex(newIndex: NSUInteger):void;
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartz/ikimagebrowsercellstate
  type IKImageBrowserCellState = number;
}
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/qccompositionrenderer
   */
  interface QCCompositionRenderer {
    // https://developer.apple.com/documentation/quartz/qccompositionrenderer/1503737-setvalue
    setValue_forInputKey(value: QCCompositionRenderer, key: string | cocoascript.NSString):BOOL;
    // https://developer.apple.com/documentation/quartz/qccompositionrenderer/1505206-valueforinputkey
    valueForInputKey(key: string | cocoascript.NSString):QCCompositionRenderer;
    // https://developer.apple.com/documentation/quartz/qccompositionrenderer/1504448-valueforoutputkey
    valueForOutputKey(key: string | cocoascript.NSString):QCCompositionRenderer;
    // https://developer.apple.com/documentation/quartz/qccompositionrenderer/1504745-valueforoutputkey
    valueForOutputKey_ofType(key: string | cocoascript.NSString, type: string | cocoascript.NSString):QCCompositionRenderer;
    // https://developer.apple.com/documentation/quartz/qccompositionrenderer/1503626-inputkeys
    inputKeys():NSArray;
    // https://developer.apple.com/documentation/quartz/qccompositionrenderer/1503732-outputkeys
    outputKeys():NSArray;
    // https://developer.apple.com/documentation/quartz/qccompositionrenderer/1503829-attributes
    attributes():NSDictionary;
    // https://developer.apple.com/documentation/quartz/qccompositionrenderer/1504772-userinfo
    userInfo():NSMutableDictionary;
    // https://developer.apple.com/documentation/quartz/qccompositionrenderer/1503849-propertylistfrominputvalues
    propertyListFromInputValues():QCCompositionRenderer;
    // https://developer.apple.com/documentation/quartz/qccompositionrenderer/1504479-setinputvalueswithpropertylist
    setInputValuesWithPropertyList(plist: QCCompositionRenderer):void;
  }
}
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/qccompositionpickerpanel
   */
  interface QCCompositionPickerPanel extends NSPanel {
    // https://developer.apple.com/documentation/quartz/qccompositionpickerpanel/1459650-sharedcompositionpickerpanel
    sharedCompositionPickerPanel():QCCompositionPickerPanel;
    // https://developer.apple.com/documentation/quartz/qccompositionpickerpanel/1459648-compositionpickerview
    compositionPickerView():QCCompositionPickerView;
    //
    alloc():QCCompositionPickerPanel;
    //
    init():QCCompositionPickerPanel;
  }
}

declare const QCCompositionPickerPanel: cocoascript.QCCompositionPickerPanel;
// https://developer.apple.com/documentation/quartz/qccompositionpickerpaneldidselectcompositionnotification
declare const QCCompositionPickerPanelDidSelectCompositionNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/quartz/qcpatchcontroller
   */
  interface QCPatchController extends NSController {
    //
    alloc():QCPatchController;
    //
    init():QCPatchController;
  }
}

declare const QCPatchController: cocoascript.QCPatchController;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/qcplugin
   */
  interface QCPlugIn extends NSObject {
    // https://developer.apple.com/documentation/quartz/qcplugin/1488695-executionmode
    executionMode():QCPlugInExecutionMode;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488805-timemode
    timeMode():QCPlugInTimeMode;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488847-execute
    execute_atTime_withArguments(context: QCPlugInContext, time: NSTimeInterval, arguments: NSDictionary):BOOL;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488786-startexecution
    startExecution(context: QCPlugInContext):BOOL;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488696-enableexecution
    enableExecution(context: QCPlugInContext):void;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488782-disableexecution
    disableExecution(context: QCPlugInContext):void;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488832-stopexecution
    stopExecution(context: QCPlugInContext):void;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488869-attributes
    attributes():NSDictionary;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488766-attributesforpropertyportwithkey
    attributesForPropertyPortWithKey(key: string | cocoascript.NSString):NSDictionary;
    // https://developer.apple.com/documentation/quartz/qcplugin/1504984-createviewcontroller
    createViewController():QCPlugInViewController;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488790-pluginkeys
    plugInKeys():NSArray;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488752-serializedvalueforkey
    serializedValueForKey(key: string | cocoascript.NSString):QCPlugIn;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488851-setserializedvalue
    setSerializedValue_forKey(serializedValue: QCPlugIn, key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488858-addinputportwithtype
    addInputPortWithType_forKey_withAttributes(type: string | cocoascript.NSString, key: string | cocoascript.NSString, attributes: NSDictionary):void;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488707-removeinputportforkey
    removeInputPortForKey(key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488760-addoutputportwithtype
    addOutputPortWithType_forKey_withAttributes(type: string | cocoascript.NSString, key: string | cocoascript.NSString, attributes: NSDictionary):void;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488800-removeoutputportforkey
    removeOutputPortForKey(key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488811-didvalueforinputkeychange
    didValueForInputKeyChange(key: string | cocoascript.NSString):BOOL;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488802-valueforinputkey
    valueForInputKey(key: string | cocoascript.NSString):QCPlugIn;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488788-setvalue
    setValue_forOutputKey(value: QCPlugIn, key: string | cocoascript.NSString):BOOL;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488840-loadpluginatpath
    loadPlugInAtPath(path: string | cocoascript.NSString):BOOL;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488853-registerpluginclass
    registerPlugInClass(aClass: Class):void;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488742-sortedpropertyportkeys
    sortedPropertyPortKeys():NSArray;
    // https://developer.apple.com/documentation/quartz/qcplugin/1488727-executiontimeforcontext
    executionTimeForContext_atTime_withArguments(context: QCPlugInContext, time: NSTimeInterval, arguments: NSDictionary):NSTimeInterval;
    //
    alloc():QCPlugIn;
    //
    init():QCPlugIn;
  }
}

declare const QCPlugIn: cocoascript.QCPlugIn;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/qcpluginviewcontroller
   */
  interface QCPlugInViewController extends NSViewController {
    // https://developer.apple.com/documentation/quartz/qcpluginviewcontroller/1504077-initwithplugin
    initWithPlugIn_viewNibName(plugIn: QCPlugIn, name: string | cocoascript.NSString):QCPlugInViewController;
    // https://developer.apple.com/documentation/quartz/qcpluginviewcontroller/1504411-plugin
    plugIn():QCPlugIn;
    //
    alloc():QCPlugInViewController;
    //
    init():QCPlugInViewController;
  }
}

declare const QCPlugInViewController: cocoascript.QCPlugInViewController;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/qcplugincontext
   */
  interface QCPlugInContext {
    // https://developer.apple.com/documentation/quartz/qcplugincontext/1488849-cglcontextobj
    CGLContextObj():any;
    // https://developer.apple.com/documentation/quartz/qcplugincontext/1488711-logmessage
    logMessage(...format: Array<string | cocoascript.NSString>):void;
    // https://developer.apple.com/documentation/quartz/qcplugincontext/1488731-userinfo
    userInfo():NSMutableDictionary;
    // https://developer.apple.com/documentation/quartz/qcplugincontext/1488700-bounds
    bounds():NSRect;
    // https://developer.apple.com/documentation/quartz/qcplugincontext/1488846-colorspace
    colorSpace():CGColorSpaceRef;
    // https://developer.apple.com/documentation/quartz/qcplugincontext/1488754-outputimageproviderfrombufferwit
    outputImageProviderFromBufferWithPixelFormat_pixelsWide_pixelsHigh_baseAddress_bytesPerRow_releaseCallback_releaseContext_colorSpace_shouldColorMatch(format: string | cocoascript.NSString, width: NSUInteger, height: NSUInteger, baseAddress: void, rowBytes: NSUInteger, callback: QCPlugInBufferReleaseCallback, context: void, colorSpace: CGColorSpaceRef, colorMatch: BOOL):QCPlugInContext;
    // https://developer.apple.com/documentation/quartz/qcplugincontext/1488756-outputimageproviderfromtexturewi
    outputImageProviderFromTextureWithPixelFormat_pixelsWide_pixelsHigh_name_flipped_releaseCallback_releaseContext_colorSpace_shouldColorMatch(format: string | cocoascript.NSString, width: NSUInteger, height: NSUInteger, name: any, flipped: BOOL, callback: QCPlugInTextureReleaseCallback, context: void, colorSpace: CGColorSpaceRef, colorMatch: BOOL):QCPlugInContext;
    // https://developer.apple.com/documentation/quartz/qcplugincontext/1488750-compositionurl
    compositionURL():NSURL;
  }
}
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/qcplugininputimagesource
   */
  interface QCPlugInInputImageSource {
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488736-locktexturerepresentationwithcol
    lockTextureRepresentationWithColorSpace_forBounds(colorSpace: CGColorSpaceRef, bounds: NSRect):BOOL;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488856-unlocktexturerepresentation
    unlockTextureRepresentation():void;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488746-lockbufferrepresentationwithpixe
    lockBufferRepresentationWithPixelFormat_colorSpace_forBounds(format: string | cocoascript.NSString, colorSpace: CGColorSpaceRef, bounds: NSRect):BOOL;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488704-bindtexturerepresentationtocglco
    bindTextureRepresentationToCGLContext_textureUnit_normalizeCoordinates(cgl_ctx: any, unit: any, flag: BOOL):void;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488702-unbindtexturerepresentationfromc
    unbindTextureRepresentationFromCGLContext_textureUnit(cgl_ctx: any, unit: any):void;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488764-unlockbufferrepresentation
    unlockBufferRepresentation():void;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488777-imagecolorspace
    imageColorSpace():CGColorSpaceRef;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488733-shouldcolormatch
    shouldColorMatch():BOOL;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488855-texturepixelswide
    texturePixelsWide():NSUInteger;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488768-texturepixelshigh
    texturePixelsHigh():NSUInteger;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488769-texturetarget
    textureTarget():any;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488744-texturename
    textureName():any;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488836-texturecolorspace
    textureColorSpace():CGColorSpaceRef;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488693-textureflipped
    textureFlipped():BOOL;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488798-texturematrix
    textureMatrix():any;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488784-imagebounds
    imageBounds():NSRect;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488823-bufferpixelswide
    bufferPixelsWide():NSUInteger;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488860-bufferpixelshigh
    bufferPixelsHigh():NSUInteger;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488758-bufferpixelformat
    bufferPixelFormat():NSString;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488698-buffercolorspace
    bufferColorSpace():CGColorSpaceRef;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488774-bufferbaseaddress
    bufferBaseAddress():void;
    // https://developer.apple.com/documentation/quartz/qcplugininputimagesource/1488834-bufferbytesperrow
    bufferBytesPerRow():NSUInteger;
  }
}
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider
   */
  interface QCPlugInOutputImageProvider {
    // https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider/1488841-rendertobuffer
    renderToBuffer_withBytesPerRow_pixelFormat_forBounds(baseAddress: void, rowBytes: NSUInteger, format: string | cocoascript.NSString, bounds: NSRect):BOOL;
    // https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider/1488717-copyrenderedtextureforcglcontext
    copyRenderedTextureForCGLContext_pixelFormat_bounds_isFlipped(cgl_ctx: any, format: string | cocoascript.NSString, bounds: NSRect, flipped: BOOL):any;
    // https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider/1488815-renderwithcglcontext
    renderWithCGLContext_forBounds(cgl_ctx: any, bounds: NSRect):BOOL;
    // https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider/1488829-releaserenderedtexture
    releaseRenderedTexture_forCGLContext(name: any, cgl_ctx: any):void;
    // https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider/1488867-imagebounds
    imageBounds():NSRect;
    // https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider/1488715-imagecolorspace
    imageColorSpace():CGColorSpaceRef;
    // https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider/1488825-shouldcolormatch
    shouldColorMatch():BOOL;
    // https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider/1488709-supportedbufferpixelformats
    supportedBufferPixelFormats():NSArray;
    // https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider/1488820-supportedrenderedtexturepixelfor
    supportedRenderedTexturePixelFormats():NSArray;
    // https://developer.apple.com/documentation/quartz/qcpluginoutputimageprovider/1488804-canrenderwithcglcontext
    canRenderWithCGLContext(cgl_ctx: any):BOOL;
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartz/qcpluginexecutionmode
  type QCPlugInExecutionMode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartz/qcplugintimemode
  type QCPlugInTimeMode = number;
}
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/qlpreviewpanel
   */
  interface QLPreviewPanel extends NSPanel {
    // https://developer.apple.com/documentation/quartz/qlpreviewpanel/1503415-sharedpreviewpanel
    sharedPreviewPanel():QLPreviewPanel;
    // https://developer.apple.com/documentation/quartz/qlpreviewpanel/1505319-sharedpreviewpanelexists
    sharedPreviewPanelExists():BOOL;
    // https://developer.apple.com/documentation/quartz/qlpreviewpanel/1505327-currentcontroller
    currentController(): id;
    setCurrentController(): void;
    // https://developer.apple.com/documentation/quartz/qlpreviewpanel/1503825-updatecontroller
    updateController():void;
    // https://developer.apple.com/documentation/quartz/qlpreviewpanel/1503465-datasource
    dataSource(): QLPreviewPanelDataSource;
    setDataSource(): void;
    // https://developer.apple.com/documentation/quartz/qlpreviewpanel/1504075-reloaddata
    reloadData():void;
    // https://developer.apple.com/documentation/quartz/qlpreviewpanel/1505151-refreshcurrentpreviewitem
    refreshCurrentPreviewItem():void;
    // https://developer.apple.com/documentation/quartz/qlpreviewpanel/1503428-currentpreviewitemindex
    currentPreviewItemIndex(): NSInteger;
    setCurrentPreviewItemIndex(): void;
    // https://developer.apple.com/documentation/quartz/qlpreviewpanel/1503578-currentpreviewitem
    currentPreviewItem(): QLPreviewItem;
    setCurrentPreviewItem(): void;
    // https://developer.apple.com/documentation/quartz/qlpreviewpanel/1505195-displaystate
    displayState(): id;
    setDisplayState(): void;
    // https://developer.apple.com/documentation/quartz/qlpreviewpanel/1504770-delegate
    delegate(): id;
    setDelegate(): void;
    // https://developer.apple.com/documentation/quartz/qlpreviewpanel/1503434-enterfullscreenmode
    enterFullScreenMode_withOptions(screen: NSScreen, options: NSDictionary):BOOL;
    // https://developer.apple.com/documentation/quartz/qlpreviewpanel/1503669-exitfullscreenmodewithoptions
    exitFullScreenModeWithOptions(options: NSDictionary):void;
    // https://developer.apple.com/documentation/quartz/qlpreviewpanel/1503609-infullscreenmode
    inFullScreenMode(): BOOL;
    setInFullScreenMode(): void;
    //
    alloc():QLPreviewPanel;
    //
    init():QLPreviewPanel;
  }
}

declare const QLPreviewPanel: cocoascript.QLPreviewPanel;
declare namespace cocoascript {
  /**
   * A Quick Look preview of an item that you can embed into your view hierarchy.
   * https://developer.apple.com/documentation/quartz/qlpreviewview
   */
  interface QLPreviewView extends NSView {
    // https://developer.apple.com/documentation/quartz/qlpreviewview/1504541-initwithframe
    initWithFrame_style(frame: NSRect, style: QLPreviewViewStyle):QLPreviewView;
    // https://developer.apple.com/documentation/quartz/qlpreviewview/1503812-initwithframe
    initWithFrame(frame: NSRect):QLPreviewView;
    // https://developer.apple.com/documentation/quartz/qlpreviewview/1504747-previewitem
    previewItem(): QLPreviewItem;
    setPreviewItem(): void;
    // https://developer.apple.com/documentation/quartz/qlpreviewview/1504399-refreshpreviewitem
    refreshPreviewItem():void;
    // https://developer.apple.com/documentation/quartz/qlpreviewview/1503408-displaystate
    displayState(): id;
    setDisplayState(): void;
    // https://developer.apple.com/documentation/quartz/qlpreviewview/1503689-autostarts
    autostarts(): BOOL;
    setAutostarts(): void;
    // https://developer.apple.com/documentation/quartz/qlpreviewview/1503457-shouldclosewithwindow
    shouldCloseWithWindow(): BOOL;
    setShouldCloseWithWindow(): void;
    // https://developer.apple.com/documentation/quartz/qlpreviewview/1503506-close
    close():void;
    //
    alloc():QLPreviewView;
    //
    init():QLPreviewView;
  }
}

declare const QLPreviewView: cocoascript.QLPreviewView;
declare namespace cocoascript {
  /**
   * A protocol that defines properties you implement to make your application’s content visible in a preview.
   * https://developer.apple.com/documentation/quartz/qlpreviewitem
   */
  interface QLPreviewItem extends NSObject {
    // https://developer.apple.com/documentation/quartz/qlpreviewitem/1419913-previewitemurl
    previewItemURL(): NSURL;
    setPreviewItemURL(): void;
    // https://developer.apple.com/documentation/quartz/qlpreviewitem/1419911-previewitemtitle
    previewItemTitle(): string | cocoascript.NSString;
    setPreviewItemTitle(): void;
    // https://developer.apple.com/documentation/quartz/qlpreviewitem/1419915-previewitemdisplaystate
    previewItemDisplayState(): id;
    setPreviewItemDisplayState(): void;
  }
}
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/quartz/qlpreviewpaneldatasource
   */
  interface QLPreviewPanelDataSource {
    // https://developer.apple.com/documentation/quartz/qlpreviewpaneldatasource/1504383-previewpanel
    previewPanel_previewItemAtIndex(panel: QLPreviewPanel, index: NSInteger):QLPreviewItem;
    // https://developer.apple.com/documentation/quartz/qlpreviewpaneldatasource/1504441-numberofpreviewitemsinpreviewpan
    numberOfPreviewItemsInPreviewPanel(panel: QLPreviewPanel):NSInteger;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/quartz/qlpreviewpaneldelegate
   */
  interface QLPreviewPanelDelegate extends NSWindowDelegate {
    // https://developer.apple.com/documentation/quartz/qlpreviewpaneldelegate/1503889-previewpanel
    previewPanel_handleEvent(panel: QLPreviewPanel, event: NSEvent):BOOL;
    // https://developer.apple.com/documentation/quartz/qlpreviewpaneldelegate/1503423-previewpanel
    previewPanel_sourceFrameOnScreenForPreviewItem(panel: QLPreviewPanel, item: QLPreviewItem):NSRect;
    // https://developer.apple.com/documentation/quartz/qlpreviewpaneldelegate/1505277-previewpanel
    previewPanel_transitionImageForPreviewItem_contentRect(panel: QLPreviewPanel, item: QLPreviewItem, contentRect: NSRect):QLPreviewPanelDelegate;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/quartz/quartzfilterview
   */
  interface QuartzFilterView extends NSView {
    // https://developer.apple.com/documentation/quartz/quartzfilterview/1505010-sizetofit
    sizeToFit():void;
    //
    alloc():QuartzFilterView;
    //
    init():QuartzFilterView;
  }
}

declare const QuartzFilterView: cocoascript.QuartzFilterView;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartz/ikcameradeviceviewdisplaymode
  type IKCameraDeviceViewDisplayMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartz/ikcameradeviceviewtransfermode
  type IKCameraDeviceViewTransferMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartz/ikdevicebrowserviewdisplaymode
  type IKDeviceBrowserViewDisplayMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartz/ikscannerdeviceviewtransfermode
  type IKScannerDeviceViewTransferMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartz/ikscannerdeviceviewdisplaymode
  type IKScannerDeviceViewDisplayMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A protocol for implementing a custom controller to create previews of files.
   * https://developer.apple.com/documentation/quartz/qlpreviewingcontroller
   */
  interface QLPreviewingController extends NSObject {
    // https://developer.apple.com/documentation/quartz/qlpreviewingcontroller/2867936-preparepreviewoffileaturl
    preparePreviewOfFileAtURL_completionHandler(url: NSURL, handler: NSError):void;
    // https://developer.apple.com/documentation/quartz/qlpreviewingcontroller/2882042-preparepreviewofsearchableitemwi
    preparePreviewOfSearchableItemWithIdentifier_queryString_completionHandler(identifier: string | cocoascript.NSString, queryString: string | cocoascript.NSString, handler: NSError):void;
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartz/qcpluginbufferreleasecallback
  type QCPlugInBufferReleaseCallback = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartz/qcplugintexturereleasecallback
  type QCPlugInTextureReleaseCallback = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartz/qlpreviewviewstyle
  type QLPreviewViewStyle = cocoascript.NSUInteger;
}
