declare namespace cocoascript {
  /**
   * The infrastructure for drawing, printing, and handling events in an app.
   * doc://com.apple.documentation/documentation/appkit/nsview
   */
  interface NSView extends NSResponder {
    // doc://com.apple.documentation/documentation/appkit/nsview/1483458-initwithframe
    initWithFrame(frameRect: cocoascript.NSRect):cocoascript.NSView;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483626-prepareforreuse
    prepareForReuse():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483737-superview
    superview(): cocoascript.NSView;
    setSuperview(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483539-subviews
    subviews(): cocoascript.NSView;
    setSubviews(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483301-window
    window(): cocoascript.NSWindow;
    setWindow(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483783-addsubview
    addSubview(view: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483640-addsubview
    addSubview_positioned_relativeTo(view: cocoascript.NSView, place: cocoascript.NSWindowOrderingMode, otherView: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483454-didaddsubview
    didAddSubview(subview: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483265-removefromsuperview
    removeFromSuperview():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483644-removefromsuperviewwithoutneedin
    removeFromSuperviewWithoutNeedingDisplay():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483632-replacesubview
    replaceSubview_with(oldView: cocoascript.NSView, newView: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483219-isdescendantof
    isDescendantOf(view: cocoascript.NSView):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483383-opaqueancestor
    opaqueAncestor(): cocoascript.NSView;
    setOpaqueAncestor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483353-ancestorsharedwithview
    ancestorSharedWithView(view: cocoascript.NSView):cocoascript.NSView;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483805-sortsubviewsusingfunction
    sortSubviewsUsingFunction_context(compare: void, context: void):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483568-viewdidmovetosuperview
    viewDidMoveToSuperview():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483329-viewdidmovetowindow
    viewDidMoveToWindow():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483545-viewwillmovetosuperview
    viewWillMoveToSuperview(newSuperview: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483415-viewwillmovetowindow
    viewWillMoveToWindow(newWindow: cocoascript.NSWindow):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483624-willremovesubview
    willRemoveSubview(subview: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1514865-enclosingmenuitem
    enclosingMenuItem(): cocoascript.NSMenuItem;
    setEnclosingMenuItem(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483713-frame
    frame(): cocoascript.NSRect;
    setFrame(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483283-setframeorigin
    setFrameOrigin(newOrigin: cocoascript.NSPoint):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483530-setframesize
    setFrameSize(newSize: cocoascript.NSSize):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483412-framerotation
    frameRotation(): cocoascript.CGFloat;
    setFrameRotation(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483817-bounds
    bounds(): cocoascript.NSRect;
    setBounds(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483345-setboundsorigin
    setBoundsOrigin(newOrigin: cocoascript.NSPoint):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483399-setboundssize
    setBoundsSize(newSize: cocoascript.NSSize):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483746-boundsrotation
    boundsRotation(): cocoascript.CGFloat;
    setBoundsRotation(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483695-wantslayer
    wantsLayer(): cocoascript.BOOL;
    setWantsLayer(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483461-wantsupdatelayer
    wantsUpdateLayer(): cocoascript.BOOL;
    setWantsUpdateLayer(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483298-layer
    layer(): cocoascript.CALayer;
    setLayer(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483687-makebackinglayer
    makeBackingLayer():cocoascript.CALayer;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483375-layercontentsplacement
    layerContentsPlacement(): cocoascript.NSViewLayerContentsPlacement;
    setLayerContentsPlacement(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483514-layercontentsredrawpolicy
    layerContentsRedrawPolicy(): cocoascript.NSViewLayerContentsRedrawPolicy;
    setLayerContentsRedrawPolicy(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483347-candrawsubviewsintolayer
    canDrawSubviewsIntoLayer(): cocoascript.BOOL;
    setCanDrawSubviewsIntoLayer(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483576-layerusescoreimagefilters
    layerUsesCoreImageFilters(): cocoascript.BOOL;
    setLayerUsesCoreImageFilters(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483560-alphavalue
    alphaValue(): cocoascript.CGFloat;
    setAlphaValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483367-framecenterrotation
    frameCenterRotation(): cocoascript.CGFloat;
    setFrameCenterRotation(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483689-backgroundfilters
    backgroundFilters(): cocoascript.CIFilter;
    setBackgroundFilters(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483516-compositingfilter
    compositingFilter(): cocoascript.CIFilter;
    setCompositingFilter(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483703-contentfilters
    contentFilters(): cocoascript.CIFilter;
    setContentFilters(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483263-shadow
    shadow(): cocoascript.NSShadow;
    setShadow(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483580-updatelayer
    updateLayer():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483686-drawrect
    drawRect(dirtyRect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483277-candraw
    canDraw(): cocoascript.BOOL;
    setCanDraw(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483425-candrawconcurrently
    canDrawConcurrently(): cocoascript.BOOL;
    setCanDrawConcurrently(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483446-visiblerect
    visibleRect(): cocoascript.NSRect;
    setVisibleRect(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483772-getrectsbeingdrawn
    getRectsBeingDrawn_count(rects: cocoascript._Nullable, count: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483570-needstodrawrect
    needsToDrawRect(rect: cocoascript.NSRect):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483365-wantsdefaultclipping
    wantsDefaultClipping(): cocoascript.BOOL;
    setWantsDefaultClipping(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483440-bitmapimagerepforcachingdisplayi
    bitmapImageRepForCachingDisplayInRect(rect: cocoascript.NSRect):cocoascript.NSBitmapImageRep;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483552-cachedisplayinrect
    cacheDisplayInRect_toBitmapImageRep(rect: cocoascript.NSRect, bitmapImageRep: cocoascript.NSBitmapImageRep):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483705-print
    print(sender: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483438-beginpageinrect
    beginPageInRect_atPlacement(rect: cocoascript.NSRect, location: cocoascript.NSPoint):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483735-datawithepsinsiderect
    dataWithEPSInsideRect(rect: cocoascript.NSRect):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483797-datawithpdfinsiderect
    dataWithPDFInsideRect(rect: cocoascript.NSRect):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483753-printjobtitle
    printJobTitle(): cocoascript.NSString;
    setPrintJobTitle(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483674-pageheader
    pageHeader(): cocoascript.NSAttributedString;
    setPageHeader(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483355-pagefooter
    pageFooter(): cocoascript.NSAttributedString;
    setPageFooter(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483235-writeepsinsiderect
    writeEPSInsideRect_toPasteboard(rect: cocoascript.NSRect, pasteboard: cocoascript.NSPasteboard):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483499-writepdfinsiderect
    writePDFInsideRect_toPasteboard(rect: cocoascript.NSRect, pasteboard: cocoascript.NSPasteboard):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483292-drawpageborderwithsize
    drawPageBorderWithSize(borderSize: cocoascript.NSSize):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483233-drawsheetborderwithsize
    drawSheetBorderWithSize(borderSize: cocoascript.NSSize):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483691-heightadjustlimit
    heightAdjustLimit(): cocoascript.CGFloat;
    setHeightAdjustLimit(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483392-widthadjustlimit
    widthAdjustLimit(): cocoascript.CGFloat;
    setWidthAdjustLimit(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483622-adjustpagewidthnew
    adjustPageWidthNew_left_right_limit(newRight: cocoascript.CGFloat, oldLeft: cocoascript.CGFloat, oldRight: cocoascript.CGFloat, rightLimit: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483258-adjustpageheightnew
    adjustPageHeightNew_top_bottom_limit(newBottom: cocoascript.CGFloat, oldTop: cocoascript.CGFloat, oldBottom: cocoascript.CGFloat, bottomLimit: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483774-knowspagerange
    knowsPageRange(range: cocoascript.NSRangePointer):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483252-rectforpage
    rectForPage(page: cocoascript.NSInteger):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483223-locationofprintrect
    locationOfPrintRect(rect: cocoascript.NSRect):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483475-setneedsdisplayinrect
    setNeedsDisplayInRect(invalidRect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483360-needsdisplay
    needsDisplay(): cocoascript.BOOL;
    setNeedsDisplay(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483487-display
    display():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483518-displayrect
    displayRect(rect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483699-displayrectignoringopacity
    displayRectIgnoringOpacity(rect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483436-displayrectignoringopacity
    displayRectIgnoringOpacity_inContext(rect: cocoascript.NSRect, context: cocoascript.NSGraphicsContext):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483566-displayifneeded
    displayIfNeeded():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483813-displayifneededinrect
    displayIfNeededInRect(rect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483526-displayifneededignoringopacity
    displayIfNeededIgnoringOpacity():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483481-displayifneededinrectignoringopa
    displayIfNeededInRectIgnoringOpacity(rect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483731-translaterectsneedingdisplayinre
    translateRectsNeedingDisplayInRect_by(clipRect: cocoascript.NSRect, delta: cocoascript.NSSize):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483558-opaque
    opaque(): cocoascript.BOOL;
    setOpaque(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483351-viewwilldraw
    viewWillDraw():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483321-backingalignedrect
    backingAlignedRect_options(rect: cocoascript.NSRect, options: cocoascript.NSAlignmentOptions):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483456-convertpointfrombacking
    convertPointFromBacking(point: cocoascript.NSPoint):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483803-convertpointtobacking
    convertPointToBacking(point: cocoascript.NSPoint):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483554-convertpointfromlayer
    convertPointFromLayer(point: cocoascript.NSPoint):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483315-convertpointtolayer
    convertPointToLayer(point: cocoascript.NSPoint):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483819-convertrectfrombacking
    convertRectFromBacking(rect: cocoascript.NSRect):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483648-convertrecttobacking
    convertRectToBacking(rect: cocoascript.NSRect):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483404-convertrectfromlayer
    convertRectFromLayer(rect: cocoascript.NSRect):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483776-convertrecttolayer
    convertRectToLayer(rect: cocoascript.NSRect):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483319-convertsizefrombacking
    convertSizeFromBacking(size: cocoascript.NSSize):cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483227-convertsizetobacking
    convertSizeToBacking(size: cocoascript.NSSize):cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483479-convertsizefromlayer
    convertSizeFromLayer(size: cocoascript.NSSize):cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483701-convertsizetolayer
    convertSizeToLayer(size: cocoascript.NSSize):cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483269-convertpoint
    convertPoint_fromView(point: cocoascript.NSPoint, view: cocoascript.NSView):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483406-convertpoint
    convertPoint_toView(point: cocoascript.NSPoint, view: cocoascript.NSView):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483307-convertsize
    convertSize_fromView(size: cocoascript.NSSize, view: cocoascript.NSView):cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483744-convertsize
    convertSize_toView(size: cocoascript.NSSize, view: cocoascript.NSView):cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483785-convertrect
    convertRect_fromView(rect: cocoascript.NSRect, view: cocoascript.NSView):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483217-convertrect
    convertRect_toView(rect: cocoascript.NSRect, view: cocoascript.NSView):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483725-centerscanrect
    centerScanRect(rect: cocoascript.NSRect):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483385-translateorigintopoint
    translateOriginToPoint(translation: cocoascript.NSPoint):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483721-scaleunitsquaretosize
    scaleUnitSquareToSize(newUnitSize: cocoascript.NSSize):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483444-rotatebyangle
    rotateByAngle(angle: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483532-flipped
    flipped(): cocoascript.BOOL;
    setFlipped(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483709-rotatedfrombase
    rotatedFromBase(): cocoascript.BOOL;
    setRotatedFromBase(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483390-rotatedorscaledfrombase
    rotatedOrScaledFromBase(): cocoascript.BOOL;
    setRotatedOrScaledFromBase(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483358-autoresizessubviews
    autoresizesSubviews(): cocoascript.BOOL;
    setAutoresizesSubviews(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483281-autoresizingmask
    autoresizingMask(): cocoascript.NSAutoresizingMaskOptions;
    setAutoresizingMask(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483495-resizesubviewswitholdsize
    resizeSubviewsWithOldSize(oldSize: cocoascript.NSSize):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483697-resizewitholdsuperviewsize
    resizeWithOldSuperviewSize(oldSize: cocoascript.NSSize):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526974-bottomanchor
    bottomAnchor(): cocoascript.NSLayoutYAxisAnchor;
    setBottomAnchor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526924-centerxanchor
    centerXAnchor(): cocoascript.NSLayoutXAxisAnchor;
    setCenterXAnchor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526935-centeryanchor
    centerYAnchor(): cocoascript.NSLayoutYAxisAnchor;
    setCenterYAnchor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526900-firstbaselineanchor
    firstBaselineAnchor(): cocoascript.NSLayoutYAxisAnchor;
    setFirstBaselineAnchor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526942-heightanchor
    heightAnchor(): cocoascript.NSLayoutDimension;
    setHeightAnchor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526959-lastbaselineanchor
    lastBaselineAnchor(): cocoascript.NSLayoutYAxisAnchor;
    setLastBaselineAnchor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1524264-leadinganchor
    leadingAnchor(): cocoascript.NSLayoutXAxisAnchor;
    setLeadingAnchor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526951-leftanchor
    leftAnchor(): cocoascript.NSLayoutXAxisAnchor;
    setLeftAnchor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1524466-rightanchor
    rightAnchor(): cocoascript.NSLayoutXAxisAnchor;
    setRightAnchor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526859-topanchor
    topAnchor(): cocoascript.NSLayoutYAxisAnchor;
    setTopAnchor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526983-trailinganchor
    trailingAnchor(): cocoascript.NSLayoutXAxisAnchor;
    setTrailingAnchor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526638-widthanchor
    widthAnchor(): cocoascript.NSLayoutDimension;
    setWidthAnchor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526917-constraints
    constraints(): cocoascript.NSLayoutConstraint;
    setConstraints(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526969-addconstraint
    addConstraint(constraint: cocoascript.NSLayoutConstraint):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526931-addconstraints
    addConstraints(constraints: cocoascript.NSLayoutConstraint):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1524333-removeconstraint
    removeConstraint(constraint: cocoascript.NSLayoutConstraint):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526932-removeconstraints
    removeConstraints(constraints: cocoascript.NSLayoutConstraint):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1530406-addlayoutguide
    addLayoutGuide(guide: cocoascript.NSLayoutGuide):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1534395-layoutguides
    layoutGuides(): cocoascript.NSLayoutGuide;
    setLayoutGuides(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/3622483-layoutmarginsguide
    layoutMarginsGuide(): cocoascript.NSLayoutGuide;
    setLayoutMarginsGuide(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/3553228-safearealayoutguide
    safeAreaLayoutGuide(): cocoascript.NSLayoutGuide;
    setSafeAreaLayoutGuide(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1527086-removelayoutguide
    removeLayoutGuide(guide: cocoascript.NSLayoutGuide):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526904-fittingsize
    fittingSize(): cocoascript.NSSize;
    setFittingSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526996-intrinsiccontentsize
    intrinsicContentSize(): cocoascript.NSSize;
    setIntrinsicContentSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526864-invalidateintrinsiccontentsize
    invalidateIntrinsicContentSize():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526991-contentcompressionresistanceprio
    contentCompressionResistancePriorityForOrientation(orientation: cocoascript.NSLayoutConstraintOrientation):cocoascript.NSLayoutPriority;
    // doc://com.apple.documentation/documentation/appkit/nsview/1524974-setcontentcompressionresistancep
    setContentCompressionResistancePriority_forOrientation(priority: cocoascript.NSLayoutPriority, orientation: cocoascript.NSLayoutConstraintOrientation):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526979-contenthuggingpriorityfororienta
    contentHuggingPriorityForOrientation(orientation: cocoascript.NSLayoutConstraintOrientation):cocoascript.NSLayoutPriority;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526937-setcontenthuggingpriority
    setContentHuggingPriority_forOrientation(priority: cocoascript.NSLayoutPriority, orientation: cocoascript.NSLayoutConstraintOrientation):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526905-alignmentrectforframe
    alignmentRectForFrame(frame: cocoascript.NSRect):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsview/1525584-frameforalignmentrect
    frameForAlignmentRect(alignmentRect: cocoascript.NSRect):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526870-alignmentrectinsets
    alignmentRectInsets(): cocoascript.NSEdgeInsets;
    setAlignmentRectInsets(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526949-baselineoffsetfrombottom
    baselineOffsetFromBottom(): cocoascript.CGFloat;
    setBaselineOffsetFromBottom(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526963-firstbaselineoffsetfromtop
    firstBaselineOffsetFromTop(): cocoascript.CGFloat;
    setFirstBaselineOffsetFromTop(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1525942-lastbaselineoffsetfrombottom
    lastBaselineOffsetFromBottom(): cocoascript.CGFloat;
    setLastBaselineOffsetFromBottom(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526912-needslayout
    needsLayout(): cocoascript.BOOL;
    setNeedsLayout(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526146-layout
    layout():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526871-layoutsubtreeifneeded
    layoutSubtreeIfNeeded():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526856-needsupdateconstraints
    needsUpdateConstraints(): cocoascript.BOOL;
    setNeedsUpdateConstraints(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526891-updateconstraints
    updateConstraints():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526939-updateconstraintsforsubtreeifnee
    updateConstraintsForSubtreeIfNeeded():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526926-requiresconstraintbasedlayout
    requiresConstraintBasedLayout(): cocoascript.BOOL;
    setRequiresConstraintBasedLayout(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526961-translatesautoresizingmaskintoco
    translatesAutoresizingMaskIntoConstraints(): cocoascript.BOOL;
    setTranslatesAutoresizingMaskIntoConstraints(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1525968-constraintsaffectinglayoutforori
    constraintsAffectingLayoutForOrientation(orientation: cocoascript.NSLayoutConstraintOrientation):cocoascript.NSLayoutConstraint;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526907-hasambiguouslayout
    hasAmbiguousLayout(): cocoascript.BOOL;
    setHasAmbiguousLayout(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526934-exerciseambiguityinlayout
    exerciseAmbiguityInLayout():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483608-lockfocus
    lockFocus():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483285-lockfocusifcandraw
    lockFocusIfCanDraw():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483534-lockfocusifcandrawincontext
    lockFocusIfCanDrawInContext(context: cocoascript.NSGraphicsContext):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483711-unlockfocus
    unlockFocus():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483662-focusview
    focusView(): cocoascript.NSView;
    setFocusView(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483261-focusringtype
    focusRingType(): cocoascript.NSFocusRingType;
    setFocusRingType(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483287-focusringmaskbounds
    focusRingMaskBounds(): cocoascript.NSRect;
    setFocusRingMaskBounds(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483335-drawfocusringmask
    drawFocusRingMask():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483809-notefocusringmaskchanged
    noteFocusRingMaskChanged():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483556-setkeyboardfocusringneedsdisplay
    setKeyboardFocusRingNeedsDisplayInRect(rect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483589-defaultfocusringtype
    defaultFocusRingType(): cocoascript.NSFocusRingType;
    setDefaultFocusRingType(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483793-allowsvibrancy
    allowsVibrancy(): cocoascript.BOOL;
    setAllowsVibrancy(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483780-enterfullscreenmode
    enterFullScreenMode_withOptions(screen: cocoascript.NSScreen, options: cocoascript.NSView):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483256-exitfullscreenmodewithoptions
    exitFullScreenModeWithOptions(options: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483337-infullscreenmode
    inFullScreenMode(): cocoascript.BOOL;
    setInFullScreenMode(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483369-hidden
    hidden(): cocoascript.BOOL;
    setHidden(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483473-hiddenorhashiddenancestor
    hiddenOrHasHiddenAncestor(): cocoascript.BOOL;
    setHiddenOrHasHiddenAncestor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483596-viewdidhide
    viewDidHide():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483275-viewdidunhide
    viewDidUnhide():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483267-inliveresize
    inLiveResize(): cocoascript.BOOL;
    setInLiveResize(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483795-preservescontentduringliveresize
    preservesContentDuringLiveResize(): cocoascript.BOOL;
    setPreservesContentDuringLiveResize(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483221-getrectsexposedduringliveresize
    getRectsExposedDuringLiveResize_count(exposedRects: cocoascript.NSRect, count: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483528-rectpreservedduringliveresize
    rectPreservedDuringLiveResize(): cocoascript.NSRect;
    setRectPreservedDuringLiveResize(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483620-viewwillstartliveresize
    viewWillStartLiveResize():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483543-viewdidendliveresize
    viewDidEndLiveResize():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483658-gesturerecognizers
    gestureRecognizers(): cocoascript.NSGestureRecognizer;
    setGestureRecognizers(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483749-addgesturerecognizer
    addGestureRecognizer(gestureRecognizer: cocoascript.NSGestureRecognizer):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483789-removegesturerecognizer
    removeGestureRecognizer(gestureRecognizer: cocoascript.NSGestureRecognizer):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483410-acceptsfirstmouse
    acceptsFirstMouse(event: cocoascript.NSEvent):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483364-hittest
    hitTest(point: cocoascript.NSPoint):cocoascript.NSView;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483237-mouse
    mouse_inRect(point: cocoascript.NSPoint, rect: cocoascript.NSRect):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483664-performkeyequivalent
    performKeyEquivalent(event: cocoascript.NSEvent):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483666-mousedowncanmovewindow
    mouseDownCanMoveWindow(): cocoascript.BOOL;
    setMouseDownCanMoveWindow(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483323-inputcontext
    inputContext(): cocoascript.NSTextInputContext;
    setInputContext(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483739-acceptstouchevents
    acceptsTouchEvents(): cocoascript.BOOL;
    setAcceptsTouchEvents(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483594-wantsrestingtouches
    wantsRestingTouches(): cocoascript.BOOL;
    setWantsRestingTouches(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483759-canbecomekeyview
    canBecomeKeyView(): cocoascript.BOOL;
    setCanBecomeKeyView(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483512-needspaneltobecomekey
    needsPanelToBecomeKey(): cocoascript.BOOL;
    setNeedsPanelToBecomeKey(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483465-nextkeyview
    nextKeyView(): cocoascript.NSView;
    setNextKeyView(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483572-nextvalidkeyview
    nextValidKeyView(): cocoascript.NSView;
    setNextValidKeyView(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483646-previouskeyview
    previousKeyView(): cocoascript.NSView;
    setPreviousKeyView(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483371-previousvalidkeyview
    previousValidKeyView(): cocoascript.NSView;
    setPreviousValidKeyView(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483427-preparecontentinrect
    prepareContentInRect(rect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483215-preparedcontentrect
    preparedContentRect(): cocoascript.NSRect;
    setPreparedContentRect(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483394-scrollpoint
    scrollPoint(point: cocoascript.NSPoint):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483811-scrollrecttovisible
    scrollRectToVisible(rect: cocoascript.NSRect):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483471-autoscroll
    autoscroll(event: cocoascript.NSEvent):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483616-adjustscroll
    adjustScroll(newVisible: cocoascript.NSRect):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483497-scrollrect
    scrollRect_by(rect: cocoascript.NSRect, delta: cocoascript.NSSize):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483654-enclosingscrollview
    enclosingScrollView(): cocoascript.NSScrollView;
    setEnclosingScrollView(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1531337-scrollclipview
    scrollClipView_toPoint(clipView: cocoascript.NSClipView, point: cocoascript.NSPoint):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1534216-reflectscrolledclipview
    reflectScrolledClipView(clipView: cocoascript.NSClipView):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483578-registerfordraggedtypes
    registerForDraggedTypes(newTypes: cocoascript.NSPasteboardType):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483602-unregisterdraggedtypes
    unregisterDraggedTypes():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483564-registereddraggedtypes
    registeredDraggedTypes(): cocoascript.NSPasteboardType;
    setRegisteredDraggedTypes(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483791-begindraggingsessionwithitems
    beginDraggingSessionWithItems_event_source(items: cocoascript.NSDraggingItem, event: cocoascript.NSEvent, source: cocoascript.NSDraggingSource):cocoascript.NSDraggingSession;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483600-dragfile
    dragFile_fromRect_slideBack_event(filename: cocoascript.NSString, rect: cocoascript.NSRect, flag: cocoascript.BOOL, event: cocoascript.NSEvent):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483598-dragpromisedfilesoftypes
    dragPromisedFilesOfTypes_fromRect_source_slideBack_event(typeArray: cocoascript.NSString, rect: cocoascript.NSRect, sourceObject: cocoascript.NSView, flag: cocoascript.BOOL, event: cocoascript.NSEvent):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483244-shoulddelaywindoworderingforeven
    shouldDelayWindowOrderingForEvent(event: cocoascript.NSEvent):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483305-rectforsmartmagnificationatpoint
    rectForSmartMagnificationAtPoint_inRect(location: cocoascript.NSPoint, visibleRect: cocoascript.NSRect):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483524-postsframechangednotifications
    postsFrameChangedNotifications(): cocoascript.BOOL;
    setPostsFrameChangedNotifications(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483239-postsboundschangednotifications
    postsBoundsChangedNotifications(): cocoascript.BOOL;
    setPostsBoundsChangedNotifications(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483742-viewdidchangebackingproperties
    viewDidChangeBackingProperties():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483294-viewwithtag
    viewWithTag(tag: cocoascript.NSInteger):cocoascript.NSView;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483248-tag
    tag(): cocoascript.NSInteger;
    setTag(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483229-addtooltiprect
    addToolTipRect_owner_userData(rect: cocoascript.NSRect, owner: cocoascript.NSView, data: void):cocoascript.NSToolTipTag;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483801-removealltooltips
    removeAllToolTips():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483522-removetooltip
    removeToolTip(tag: cocoascript.NSToolTipTag):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483541-tooltip
    toolTip(): cocoascript.NSString;
    setToolTip(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483668-addtrackingrect
    addTrackingRect_owner_userData_assumeInside(rect: cocoascript.NSRect, owner: cocoascript.NSView, data: void, flag: cocoascript.BOOL):cocoascript.NSTrackingRectTag;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483729-removetrackingrect
    removeTrackingRect(tag: cocoascript.NSTrackingRectTag):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483489-addtrackingarea
    addTrackingArea(trackingArea: cocoascript.NSTrackingArea):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483634-removetrackingarea
    removeTrackingArea(trackingArea: cocoascript.NSTrackingArea):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483333-trackingareas
    trackingAreas(): cocoascript.NSTrackingArea;
    setTrackingAreas(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483719-updatetrackingareas
    updateTrackingAreas():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483540-addcursorrect
    addCursorRect_cursor(rect: cocoascript.NSRect, object: cocoascript.NSCursor):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483676-removecursorrect
    removeCursorRect_cursor(rect: cocoascript.NSRect, object: cocoascript.NSCursor):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483733-discardcursorrects
    discardCursorRects():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483448-resetcursorrects
    resetCursorRects():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483231-menuforevent
    menuForEvent(event: cocoascript.NSEvent):cocoascript.NSMenu;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483417-defaultmenu
    defaultMenu(): cocoascript.NSMenu;
    setDefaultMenu(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483429-willopenmenu
    willOpenMenu_withEvent(menu: cocoascript.NSMenu, event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483770-didclosemenu
    didCloseMenu_withEvent(menu: cocoascript.NSMenu, event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483423-begindocument
    beginDocument():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483610-enddocument
    endDocument():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483549-endpage
    endPage():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483747-showdefinitionforattributedstrin
    showDefinitionForAttributedString_atPoint(attrString: cocoascript.NSAttributedString, textBaselineOrigin: cocoascript.NSPoint):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483587-showdefinitionforattributedstrin
    showDefinitionForAttributedString_range_options_baselineOriginProvider(attrString: cocoascript.NSAttributedString, targetRange: cocoascript.NSRange, options: cocoascript.NSView, originProvider: cocoascript.NSRange):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483317-drawingfindindicator
    drawingFindIndicator(): cocoascript.BOOL;
    setDrawingFindIndicator(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483254-userinterfacelayoutdirection
    userInterfaceLayoutDirection(): cocoascript.NSUserInterfaceLayoutDirection;
    setUserInterfaceLayoutDirection(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1414938-wantsbestresolutionopenglsurface
    wantsBestResolutionOpenGLSurface(): cocoascript.BOOL;
    setWantsBestResolutionOpenGLSurface(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1426890-pressureconfiguration
    pressureConfiguration(): cocoascript.NSPressureConfiguration;
    setPressureConfiguration(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483362-convertpointtobase
    convertPointToBase(point: cocoascript.NSPoint):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483778-convertpointfrombase
    convertPointFromBase(point: cocoascript.NSPoint):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483349-convertsizetobase
    convertSizeToBase(size: cocoascript.NSSize):cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483357-convertsizefrombase
    convertSizeFromBase(size: cocoascript.NSSize):cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483331-convertrecttobase
    convertRectToBase(rect: cocoascript.NSRect):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483591-convertrectfrombase
    convertRectFromBase(rect: cocoascript.NSRect):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483585-performmnemonic
    performMnemonic(string: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483250-shoulddrawcolor
    shouldDrawColor():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483581-allocategstate
    allocateGState():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483313-gstate
    gState():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483652-setupgstate
    setUpGState():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483727-renewgstate
    renewGState():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483761-releasegstate
    releaseGState():void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483279-dragimage
    dragImage_at_offset_event_pasteboard_source_slideBack(image: cocoascript.NSImage, viewLocation: cocoascript.NSPoint, initialOffset: cocoascript.NSSize, event: cocoascript.NSEvent, pboard: cocoascript.NSPasteboard, sourceObj: cocoascript.NSView, slideFlag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsviewboundsdidchangenotification
    NSViewBoundsDidChangeNotification(): cocoascript.NSNotificationName;
    setNSViewBoundsDidChangeNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsviewfocusdidchangenotification
    NSViewFocusDidChangeNotification(): cocoascript.NSNotificationName;
    setNSViewFocusDidChangeNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsviewframedidchangenotification
    NSViewFrameDidChangeNotification(): cocoascript.NSNotificationName;
    setNSViewFrameDidChangeNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsviewdidupdatetrackingareasnotification
    NSViewDidUpdateTrackingAreasNotification(): cocoascript.NSNotificationName;
    setNSViewDidUpdateTrackingAreasNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsviewglobalframedidchangenotification
    NSViewGlobalFrameDidChangeNotification(): cocoascript.NSNotificationName;
    setNSViewGlobalFrameDidChangeNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1483715-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSView;
    // doc://com.apple.documentation/documentation/appkit/nsview/3553226-additionalsafeareainsets
    additionalSafeAreaInsets(): cocoascript.NSEdgeInsets;
    setAdditionalSafeAreaInsets(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/2544839-allowedtouchtypes
    allowedTouchTypes(): cocoascript.NSTouchTypeMask;
    setAllowedTouchTypes(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/2544729-candidatelisttouchbaritem
    candidateListTouchBarItem(): cocoascript.NSCandidateListTouchBarItem;
    setCandidateListTouchBarItem(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/3353053-horizontalcontentsizeconstrainta
    horizontalContentSizeConstraintActive(): cocoascript.BOOL;
    setHorizontalContentSizeConstraintActive(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/3353054-verticalcontentsizeconstraintact
    verticalContentSizeConstraintActive(): cocoascript.BOOL;
    setVerticalContentSizeConstraintActive(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/3553227-safeareainsets
    safeAreaInsets(): cocoascript.NSEdgeInsets;
    setSafeAreaInsets(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/3553229-safearearect
    safeAreaRect(): cocoascript.NSRect;
    setSafeAreaRect(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1414929-wantsextendeddynamicrangeopengls
    wantsExtendedDynamicRangeOpenGLSurface(): cocoascript.BOOL;
    setWantsExtendedDynamicRangeOpenGLSurface(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/2870005-compatiblewithresponsivescrollin
    compatibleWithResponsiveScrolling(): cocoascript.BOOL;
    setCompatibleWithResponsiveScrolling(): void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1532033-rulerview
    rulerView_didAddMarker(ruler: cocoascript.NSRulerView, marker: cocoascript.NSRulerMarker):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1534537-rulerview
    rulerView_didMoveMarker(ruler: cocoascript.NSRulerView, marker: cocoascript.NSRulerMarker):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1524467-rulerview
    rulerView_didRemoveMarker(ruler: cocoascript.NSRulerView, marker: cocoascript.NSRulerMarker):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1524873-rulerview
    rulerView_handleMouseDown(ruler: cocoascript.NSRulerView, event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/1535261-rulerview
    rulerView_locationForPoint(ruler: cocoascript.NSRulerView, point: cocoascript.NSPoint):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nsview/1524292-rulerview
    rulerView_pointForLocation(ruler: cocoascript.NSRulerView, point: cocoascript.CGFloat):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/appkit/nsview/1526729-rulerview
    rulerView_shouldAddMarker(ruler: cocoascript.NSRulerView, marker: cocoascript.NSRulerMarker):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsview/1532310-rulerview
    rulerView_shouldMoveMarker(ruler: cocoascript.NSRulerView, marker: cocoascript.NSRulerMarker):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsview/1527001-rulerview
    rulerView_shouldRemoveMarker(ruler: cocoascript.NSRulerView, marker: cocoascript.NSRulerMarker):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsview/1533016-rulerview
    rulerView_willAddMarker_atLocation(ruler: cocoascript.NSRulerView, marker: cocoascript.NSRulerMarker, location: cocoascript.CGFloat):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nsview/1530840-rulerview
    rulerView_willMoveMarker_toLocation(ruler: cocoascript.NSRulerView, marker: cocoascript.NSRulerMarker, location: cocoascript.CGFloat):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nsview/1529850-rulerview
    rulerView_willSetClientView(ruler: cocoascript.NSRulerView, newClient: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsview/2977088-viewdidchangeeffectiveappearance
    viewDidChangeEffectiveAppearance():void;
    //
    alloc():cocoascript.NSView;
    //
    init():cocoascript.NSView;
  }
}

declare const NSView: cocoascript.NSView;
