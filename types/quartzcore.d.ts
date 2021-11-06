declare namespace cocoascript {
  /**
   * A layer that provides a layer suitable for rendering OpenGL content.
   * https://developer.apple.com/documentation/quartzcore/caopengllayer
   */
  interface CAOpenGLLayer extends CALayer {
    // https://developer.apple.com/documentation/quartzcore/caopengllayer/1521873-colorspace
    colorspace(): CGColorSpaceRef;
    setColorspace(value: CGColorSpaceRef): void;
    // https://developer.apple.com/documentation/quartzcore/caopengllayer/1521900-wantsextendeddynamicrangecontent
    wantsExtendedDynamicRangeContent(): boolean;
    setWantsExtendedDynamicRangeContent(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/caopengllayer/1522116-asynchronous
    asynchronous(): boolean;
    setAsynchronous(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/caopengllayer/1522184-candrawincglcontext
    canDrawInCGLContext_pixelFormat_forLayerTime_displayTime(ctx: any, pf: any, t: CFTimeInterval, ts: CVTimeStamp):boolean;
    // https://developer.apple.com/documentation/quartzcore/caopengllayer/1522316-drawincglcontext
    drawInCGLContext_pixelFormat_forLayerTime_displayTime(ctx: any, pf: any, t: CFTimeInterval, ts: CVTimeStamp):void;
    // https://developer.apple.com/documentation/quartzcore/caopengllayer/1522052-copycglpixelformatfordisplaymask
    copyCGLPixelFormatForDisplayMask(mask: number):any;
    // https://developer.apple.com/documentation/quartzcore/caopengllayer/1521910-releasecglpixelformat
    releaseCGLPixelFormat(pf: any):void;
    // https://developer.apple.com/documentation/quartzcore/caopengllayer/1521894-copycglcontextforpixelformat
    copyCGLContextForPixelFormat(pf: any):any;
    // https://developer.apple.com/documentation/quartzcore/caopengllayer/1521850-releasecglcontext
    releaseCGLContext(ctx: any):void;
    //
    alloc():CAOpenGLLayer;
    //
    init():CAOpenGLLayer;
  }
}

declare const CAOpenGLLayer: cocoascript.CAOpenGLLayer;
declare namespace cocoascript {
  /**
   * An object that manages image-based content and allows you to perform animations on that content.
   * https://developer.apple.com/documentation/quartzcore/calayer
   */
  interface CALayer extends NSObject {
    // https://developer.apple.com/documentation/quartzcore/calayer/1410793-layer
    layer():CALayer;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410835-init
    init():CALayer;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410842-initwithlayer
    initWithLayer(layer: CALayer):CALayer;
    // https://developer.apple.com/documentation/quartzcore/calayer/1522119-layerwithremoteclientid
    layerWithRemoteClientId(client_id: number):CALayer;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410744-presentationlayer
    presentationLayer():CALayer;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410853-modellayer
    modelLayer():CALayer;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410984-delegate
    delegate(): CALayerDelegate;
    setDelegate(value: CALayerDelegate): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410773-contents
    contents(): id;
    setContents(value: id): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410866-contentsrect
    contentsRect(): CGRect;
    setContentsRect(value: CGRect): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410740-contentscenter
    contentsCenter(): CGRect;
    setContentsCenter(value: CGRect): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410926-display
    display():void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410757-drawincontext
    drawInContext(ctx: CGContextRef):void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410872-contentsgravity
    contentsGravity(): CALayerContentsGravity;
    setContentsGravity(value: CALayerContentsGravity): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410933-opacity
    opacity(): number;
    setOpacity(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410838-hidden
    hidden(): boolean;
    setHidden(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410896-maskstobounds
    masksToBounds(): boolean;
    setMasksToBounds(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410861-mask
    mask(): CALayer;
    setMask(value: CALayer): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410924-doublesided
    doubleSided(): boolean;
    setDoubleSided(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410818-cornerradius
    cornerRadius(): CGFloat;
    setCornerRadius(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/2877488-maskedcorners
    maskedCorners(): CACornerMask;
    setMaskedCorners(value: CACornerMask): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410917-borderwidth
    borderWidth(): CGFloat;
    setBorderWidth(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410903-bordercolor
    borderColor(): CGColorRef;
    setBorderColor(value: CGColorRef): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410966-backgroundcolor
    backgroundColor(): CGColorRef;
    setBackgroundColor(value: CGColorRef): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410751-shadowopacity
    shadowOpacity(): number;
    setShadowOpacity(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410819-shadowradius
    shadowRadius(): CGFloat;
    setShadowRadius(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410970-shadowoffset
    shadowOffset(): CGSize;
    setShadowOffset(value: CGSize): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410829-shadowcolor
    shadowColor(): CGColorRef;
    setShadowColor(value: CGColorRef): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410771-shadowpath
    shadowPath(): CGPathRef;
    setShadowPath(value: CGPathRef): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410875-style
    style(): NSDictionary;
    setStyle(value: NSDictionary): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1621285-allowsedgeantialiasing
    allowsEdgeAntialiasing(): boolean;
    setAllowsEdgeAntialiasing(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1621277-allowsgroupopacity
    allowsGroupOpacity(): boolean;
    setAllowsGroupOpacity(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410901-filters
    filters(): NSArray;
    setFilters(value: NSArray): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410748-compositingfilter
    compositingFilter(): id;
    setCompositingFilter(value: id): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410827-backgroundfilters
    backgroundFilters(): NSArray;
    setBackgroundFilters(value: NSArray): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410898-minificationfilter
    minificationFilter(): CALayerContentsFilter;
    setMinificationFilter(value: CALayerContentsFilter): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410775-minificationfilterbias
    minificationFilterBias(): number;
    setMinificationFilterBias(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410907-magnificationfilter
    magnificationFilter(): CALayerContentsFilter;
    setMagnificationFilter(value: CALayerContentsFilter): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410763-opaque
    opaque(): boolean;
    setOpaque(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410892-edgeantialiasingmask
    edgeAntialiasingMask(): CAEdgeAntialiasingMask;
    setEdgeAntialiasingMask(value: CAEdgeAntialiasingMask): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410777-contentsareflipped
    contentsAreFlipped():boolean;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410960-geometryflipped
    geometryFlipped(): boolean;
    setGeometryFlipped(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410974-drawsasynchronously
    drawsAsynchronously(): boolean;
    setDrawsAsynchronously(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410905-shouldrasterize
    shouldRasterize(): boolean;
    setShouldRasterize(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410801-rasterizationscale
    rasterizationScale(): CGFloat;
    setRasterizationScale(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1792104-contentsformat
    contentsFormat(): CALayerContentsFormat;
    setContentsFormat(value: CALayerContentsFormat): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410909-renderincontext
    renderInContext(ctx: CGContextRef):void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410779-frame
    frame(): CGRect;
    setFrame(value: CGRect): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410915-bounds
    bounds(): CGRect;
    setBounds(value: CGRect): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410791-position
    position(): CGPoint;
    setPosition(value: CGPoint): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410884-zposition
    zPosition(): CGFloat;
    setZPosition(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410796-anchorpointz
    anchorPointZ(): CGFloat;
    setAnchorPointZ(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410817-anchorpoint
    anchorPoint(): CGPoint;
    setAnchorPoint(value: CGPoint): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410746-contentsscale
    contentsScale(): CGFloat;
    setContentsScale(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410836-transform
    transform(): CATransform3D;
    setTransform(value: CATransform3D): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410888-sublayertransform
    sublayerTransform(): CATransform3D;
    setSublayerTransform(value: CATransform3D): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410882-affinetransform
    affineTransform():CGAffineTransform;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410868-setaffinetransform
    setAffineTransform(m: CGAffineTransform):void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410802-sublayers
    sublayers(): CALayer;
    setSublayers(value: CALayer): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410761-superlayer
    superlayer(): CALayer;
    setSuperlayer(value: CALayer): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410833-addsublayer
    addSublayer(layer: CALayer):void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410767-removefromsuperlayer
    removeFromSuperlayer():void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410944-insertsublayer
    insertSublayer_atIndex(layer: CALayer, idx: number):void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410840-insertsublayer
    insertSublayer_below(layer: CALayer, sibling: CALayer):void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410798-insertsublayer
    insertSublayer_above(layer: CALayer, sibling: CALayer):void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410820-replacesublayer
    replaceSublayer_with(oldLayer: CALayer, newLayer: CALayer):void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410855-setneedsdisplay
    setNeedsDisplay():void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410800-setneedsdisplayinrect
    setNeedsDisplayInRect(r: CGRect):void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410923-needsdisplayonboundschange
    needsDisplayOnBoundsChange(): boolean;
    setNeedsDisplayOnBoundsChange(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410813-displayifneeded
    displayIfNeeded():void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410958-needsdisplay
    needsDisplay():boolean;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410769-needsdisplayforkey
    needsDisplayForKey(key: string | cocoascript.NSString):boolean;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410848-addanimation
    addAnimation_forKey(anim: CAAnimation, key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410808-animationforkey
    animationForKey(key: string | cocoascript.NSString):CAAnimation;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410810-removeallanimations
    removeAllAnimations():void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410939-removeanimationforkey
    removeAnimationForKey(key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410937-animationkeys
    animationKeys():NSString;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410749-layoutmanager
    layoutManager(): CALayoutManager;
    setLayoutManager(value: CALayoutManager): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410946-setneedslayout
    setNeedsLayout():void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410935-layoutsublayers
    layoutSublayers():void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410873-layoutifneeded
    layoutIfNeeded():void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410956-needslayout
    needsLayout():boolean;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410877-autoresizingmask
    autoresizingMask(): CAAutoresizingMask;
    setAutoresizingMask(value: CAAutoresizingMask): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410894-resizewitholdsuperlayersize
    resizeWithOldSuperlayerSize(size: CGSize):void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410929-resizesublayerswitholdsize
    resizeSublayersWithOldSize(size: CGSize):void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410980-preferredframesize
    preferredFrameSize():CGSize;
    // https://developer.apple.com/documentation/quartzcore/calayer/1521906-constraints
    constraints(): CAConstraint;
    setConstraints(value: CAConstraint): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1521899-addconstraint
    addConstraint(c: CAConstraint):void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410844-actionforkey
    actionForKey(event: string | cocoascript.NSString):CAAction;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410789-actions
    actions(): CAAction;
    setActions(value: CAAction): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410954-defaultactionforkey
    defaultActionForKey(event: string | cocoascript.NSString):CAAction;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410825-convertpoint
    convertPoint_fromLayer(p: CGPoint, l: CALayer):CGPoint;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410881-convertpoint
    convertPoint_toLayer(p: CGPoint, l: CALayer):CGPoint;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410948-convertrect
    convertRect_fromLayer(r: CGRect, l: CALayer):CGRect;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410742-convertrect
    convertRect_toLayer(r: CGRect, l: CALayer):CGRect;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410821-converttime
    convertTime_fromLayer(t: CFTimeInterval, l: CALayer):CFTimeInterval;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410823-converttime
    convertTime_toLayer(t: CFTimeInterval, l: CALayer):CFTimeInterval;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410972-hittest
    hitTest(p: CGPoint):CALayer;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410857-containspoint
    containsPoint(p: CGPoint):boolean;
    // https://developer.apple.com/documentation/quartzcore/calayer/1521892-visiblerect
    visibleRect(): CGRect;
    setVisibleRect(value: CGRect): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1522202-scrollpoint
    scrollPoint(p: CGPoint):void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1522139-scrollrecttovisible
    scrollRectToVisible(r: CGRect):void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410879-name
    name(): string | cocoascript.NSString;
    setName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410753-shouldarchivevalueforkey
    shouldArchiveValueForKey(key: string | cocoascript.NSString):boolean;
    // https://developer.apple.com/documentation/quartzcore/calayer/1410886-defaultvalueforkey
    defaultValueForKey(key: string | cocoascript.NSString):CALayer;
    // https://developer.apple.com/documentation/quartzcore/calayer/3152596-cornercurve
    cornerCurve(): CALayerCornerCurve;
    setCornerCurve(value: CALayerCornerCurve): void;
    // https://developer.apple.com/documentation/quartzcore/calayer/3152597-cornercurveexpansionfactor
    cornerCurveExpansionFactor(curve: CALayerCornerCurve):CGFloat;
    //
    alloc():CALayer;
    //
    init():CALayer;
  }
}

declare const CALayer: cocoascript.CALayer;
// https://developer.apple.com/documentation/quartzcore/kcagravityresize
declare const kCAGravityResize: cocoascript.CALayerContentsGravity;
// https://developer.apple.com/documentation/quartzcore/kcagravityresizeaspect
declare const kCAGravityResizeAspect: cocoascript.CALayerContentsGravity;
// https://developer.apple.com/documentation/quartzcore/kcagravityresizeaspectfill
declare const kCAGravityResizeAspectFill: cocoascript.CALayerContentsGravity;
declare namespace cocoascript {
  /**
   * The abstract superclass for animations in Core Animation.
   * https://developer.apple.com/documentation/quartzcore/caanimation
   */
  interface CAAnimation extends NSObject {
    // https://developer.apple.com/documentation/quartzcore/caanimation/1412479-animation
    animation():CAAnimation;
    // https://developer.apple.com/documentation/quartzcore/caanimation/2867443-animationwithscnanimation
    animationWithSCNAnimation(animation: SCNAnimation):CAAnimation;
    // https://developer.apple.com/documentation/quartzcore/caanimation/1412458-removedoncompletion
    removedOnCompletion(): boolean;
    setRemovedOnCompletion(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/caanimation/1412456-timingfunction
    timingFunction(): CAMediaTimingFunction;
    setTimingFunction(value: CAMediaTimingFunction): void;
    // https://developer.apple.com/documentation/quartzcore/caanimation/1412530-defaultvalueforkey
    defaultValueForKey(key: string | cocoascript.NSString):CAAnimation;
    // https://developer.apple.com/documentation/quartzcore/caanimation/1412490-delegate
    delegate(): CAAnimationDelegate;
    setDelegate(value: CAAnimationDelegate): void;
    // https://developer.apple.com/documentation/quartzcore/caanimation/1412525-shouldarchivevalueforkey
    shouldArchiveValueForKey(key: string | cocoascript.NSString):boolean;
    // https://developer.apple.com/documentation/quartzcore/caanimation/1523819-usesscenetimebase
    usesSceneTimeBase(): boolean;
    setUsesSceneTimeBase(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/caanimation/1523370-fadeinduration
    fadeInDuration(): CGFloat;
    setFadeInDuration(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caanimation/1522959-fadeoutduration
    fadeOutDuration(): CGFloat;
    setFadeOutDuration(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caanimation/1523940-animationevents
    animationEvents(): SCNAnimationEvent;
    setAnimationEvents(value: SCNAnimationEvent): void;
    // https://developer.apple.com/documentation/quartzcore/caanimation/3875342-preferredframeraterange
    preferredFrameRateRange(): CAFrameRateRange;
    setPreferredFrameRateRange(value: CAFrameRateRange): void;
    //
    alloc():CAAnimation;
    //
    init():CAAnimation;
  }
}

declare const CAAnimation: cocoascript.CAAnimation;
declare namespace cocoascript {
  /**
   * A mechanism for grouping multiple layer-tree operations into atomic updates to the render tree.
   * https://developer.apple.com/documentation/quartzcore/catransaction
   */
  interface CATransaction extends NSObject {
    // https://developer.apple.com/documentation/quartzcore/catransaction/1448282-begin
    begin():void;
    // https://developer.apple.com/documentation/quartzcore/catransaction/1448255-commit
    commit():void;
    // https://developer.apple.com/documentation/quartzcore/catransaction/1448270-flush
    flush():void;
    // https://developer.apple.com/documentation/quartzcore/catransaction/1448263-animationduration
    animationDuration():CFTimeInterval;
    // https://developer.apple.com/documentation/quartzcore/catransaction/1448283-setanimationduration
    setAnimationDuration(dur: CFTimeInterval):void;
    // https://developer.apple.com/documentation/quartzcore/catransaction/1448269-animationtimingfunction
    animationTimingFunction():CAMediaTimingFunction;
    // https://developer.apple.com/documentation/quartzcore/catransaction/1448279-setanimationtimingfunction
    setAnimationTimingFunction(func: CAMediaTimingFunction):void;
    // https://developer.apple.com/documentation/quartzcore/catransaction/1448276-disableactions
    disableActions():boolean;
    // https://developer.apple.com/documentation/quartzcore/catransaction/1448261-setdisableactions
    setDisableActions(flag: boolean):void;
    // https://developer.apple.com/documentation/quartzcore/catransaction/1448280-completionblock
    completionBlock():void;
    // https://developer.apple.com/documentation/quartzcore/catransaction/1448281-setcompletionblock
    setCompletionBlock(block: void):void;
    // https://developer.apple.com/documentation/quartzcore/catransaction/1448267-lock
    lock():void;
    // https://developer.apple.com/documentation/quartzcore/catransaction/1448285-unlock
    unlock():void;
    // https://developer.apple.com/documentation/quartzcore/catransaction/1448278-setvalue
    setValue_forKey(anObject: CATransaction, key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/quartzcore/catransaction/1448259-valueforkey
    valueForKey(key: string | cocoascript.NSString):CATransaction;
    //
    alloc():CATransaction;
    //
    init():CATransaction;
  }
}

declare const CATransaction: cocoascript.CATransaction;
declare namespace cocoascript {
  /**
   * A Core Animation layer that Metal can render into, typically to be displayed onscreen.
   * https://developer.apple.com/documentation/quartzcore/cametallayer
   */
  interface CAMetalLayer extends CALayer {
    // https://developer.apple.com/documentation/quartzcore/cametallayer/1478163-device
    device(): any;
    setDevice(value: any): void;
    // https://developer.apple.com/documentation/quartzcore/cametallayer/3175021-preferreddevice
    preferredDevice(): any;
    setPreferredDevice(value: any): void;
    // https://developer.apple.com/documentation/quartzcore/cametallayer/1478155-pixelformat
    pixelFormat(): any;
    setPixelFormat(value: any): void;
    // https://developer.apple.com/documentation/quartzcore/cametallayer/1478170-colorspace
    colorspace(): CGColorSpaceRef;
    setColorspace(value: CGColorSpaceRef): void;
    // https://developer.apple.com/documentation/quartzcore/cametallayer/1478168-framebufferonly
    framebufferOnly(): boolean;
    setFramebufferOnly(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/cametallayer/1478174-drawablesize
    drawableSize(): CGSize;
    setDrawableSize(value: CGSize): void;
    // https://developer.apple.com/documentation/quartzcore/cametallayer/1478157-presentswithtransaction
    presentsWithTransaction(): boolean;
    setPresentsWithTransaction(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/cametallayer/2887087-displaysyncenabled
    displaySyncEnabled(): boolean;
    setDisplaySyncEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/cametallayer/1478161-wantsextendeddynamicrangecontent
    wantsExtendedDynamicRangeContent(): boolean;
    setWantsExtendedDynamicRangeContent(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/cametallayer/3182052-edrmetadata
    EDRMetadata(): CAEDRMetadata;
    setEDRMetadata(value: CAEDRMetadata): void;
    // https://developer.apple.com/documentation/quartzcore/cametallayer/1478172-nextdrawable
    nextDrawable():CAMetalDrawable;
    // https://developer.apple.com/documentation/quartzcore/cametallayer/2938720-maximumdrawablecount
    maximumDrawableCount(): NSUInteger;
    setMaximumDrawableCount(value: NSUInteger): void;
    // https://developer.apple.com/documentation/quartzcore/cametallayer/2887086-allowsnextdrawabletimeout
    allowsNextDrawableTimeout(): boolean;
    setAllowsNextDrawableTimeout(value: boolean): void;
    //
    alloc():CAMetalLayer;
    //
    init():CAMetalLayer;
  }
}

declare const CAMetalLayer: cocoascript.CAMetalLayer;
declare namespace cocoascript {
  /**
   * A Metal drawable associated with a Core Animation layer.
   * https://developer.apple.com/documentation/quartzcore/cametaldrawable
   */
  interface CAMetalDrawable extends MTLDrawable {
    // https://developer.apple.com/documentation/quartzcore/cametaldrawable/1478159-texture
    texture(): any;
    setTexture(value: any): void;
    // https://developer.apple.com/documentation/quartzcore/cametaldrawable/1478165-layer
    layer(): CAMetalLayer;
    setLayer(value: CAMetalLayer): void;
  }
}
declare namespace cocoascript {
  /**
   * A layer that supports drawing OpenGL content in iOS and tvOS applications.
   * https://developer.apple.com/documentation/quartzcore/caeagllayer
   */
  interface CAEAGLLayer extends CALayer {
    // https://developer.apple.com/documentation/quartzcore/caeagllayer/1618676-presentswithtransaction
    presentsWithTransaction(): boolean;
    setPresentsWithTransaction(value: boolean): void;
    //
    alloc():CAEAGLLayer;
    //
    init():CAEAGLLayer;
  }
}

declare const CAEAGLLayer: cocoascript.CAEAGLLayer;
declare namespace cocoascript {
  /**
   * Metadata describing how extended dynamic range (EDR) values should be tone mapped.
   * https://developer.apple.com/documentation/quartzcore/caedrmetadata
   */
  interface CAEDRMetadata extends NSObject {
    // https://developer.apple.com/documentation/quartzcore/caedrmetadata/3194384-hlgmetadata
    HLGMetadata(): CAEDRMetadata;
    setHLGMetadata(value: CAEDRMetadata): void;
    // https://developer.apple.com/documentation/quartzcore/caedrmetadata/3194382-hdr10metadatawithdisplayinfo
    HDR10MetadataWithDisplayInfo_contentInfo_opticalOutputScale(displayData: NSData, contentData: NSData, scale: number):CAEDRMetadata;
    // https://developer.apple.com/documentation/quartzcore/caedrmetadata/3194383-hdr10metadatawithminluminance
    HDR10MetadataWithMinLuminance_maxLuminance_opticalOutputScale(minNits: number, maxNits: number, scale: number):CAEDRMetadata;
    //
    alloc():CAEDRMetadata;
    //
    init():CAEDRMetadata;
  }
}

declare const CAEDRMetadata: cocoascript.CAEDRMetadata;
declare namespace cocoascript {
  /**
   * A layer that allows an application to render a layer tree into a Core OpenGL context.
   * https://developer.apple.com/documentation/quartzcore/carenderer
   */
  interface CARenderer extends NSObject {
    // https://developer.apple.com/documentation/quartzcore/carenderer/1519589-rendererwithcglcontext
    rendererWithCGLContext_options(ctx: void, dict: NSDictionary):CARenderer;
    // https://developer.apple.com/documentation/quartzcore/carenderer/2869759-rendererwithmtltexture
    rendererWithMTLTexture_options(tex: any, dict: NSDictionary):CARenderer;
    // https://developer.apple.com/documentation/quartzcore/carenderer/1519583-layer
    layer(): CALayer;
    setLayer(value: CALayer): void;
    // https://developer.apple.com/documentation/quartzcore/carenderer/1519591-bounds
    bounds(): CGRect;
    setBounds(value: CGRect): void;
    // https://developer.apple.com/documentation/quartzcore/carenderer/1519595-beginframeattime
    beginFrameAtTime_timeStamp(t: CFTimeInterval, ts: CVTimeStamp):void;
    // https://developer.apple.com/documentation/quartzcore/carenderer/1519594-updatebounds
    updateBounds():CGRect;
    // https://developer.apple.com/documentation/quartzcore/carenderer/1519585-addupdaterect
    addUpdateRect(r: CGRect):void;
    // https://developer.apple.com/documentation/quartzcore/carenderer/1519582-render
    render():void;
    // https://developer.apple.com/documentation/quartzcore/carenderer/1519592-nextframetime
    nextFrameTime():CFTimeInterval;
    // https://developer.apple.com/documentation/quartzcore/carenderer/1519593-endframe
    endFrame():void;
    // https://developer.apple.com/documentation/quartzcore/carenderer/2998892-setdestination
    setDestination(tex: any):void;
    //
    alloc():CARenderer;
    //
    init():CARenderer;
  }
}

declare const CARenderer: cocoascript.CARenderer;
declare namespace cocoascript {
  /**
   * A layer that provides a way to asynchronously provide tiles of the layer's content, potentially cached at multiple levels of detail.
   * https://developer.apple.com/documentation/quartzcore/catiledlayer
   */
  interface CATiledLayer extends CALayer {
    // https://developer.apple.com/documentation/quartzcore/catiledlayer/1522145-fadeduration
    fadeDuration():CFTimeInterval;
    // https://developer.apple.com/documentation/quartzcore/catiledlayer/1522244-levelsofdetail
    levelsOfDetail(): any;
    setLevelsOfDetail(value: any): void;
    // https://developer.apple.com/documentation/quartzcore/catiledlayer/1522099-levelsofdetailbias
    levelsOfDetailBias(): any;
    setLevelsOfDetailBias(value: any): void;
    // https://developer.apple.com/documentation/quartzcore/catiledlayer/1522114-tilesize
    tileSize(): CGSize;
    setTileSize(value: CGSize): void;
    //
    alloc():CATiledLayer;
    //
    init():CATiledLayer;
  }
}

declare const CATiledLayer: cocoascript.CATiledLayer;
declare namespace cocoascript {
  /**
   * Methods your app can implement to respond to layer-related events.
   * https://developer.apple.com/documentation/quartzcore/calayerdelegate
   */
  interface CALayerDelegate extends NSObject {
    // https://developer.apple.com/documentation/quartzcore/calayerdelegate/2097261-displaylayer
    displayLayer(layer: CALayer):void;
    // https://developer.apple.com/documentation/quartzcore/calayerdelegate/2097262-drawlayer
    drawLayer_inContext(layer: CALayer, ctx: CGContextRef):void;
    // https://developer.apple.com/documentation/quartzcore/calayerdelegate/2097263-layerwilldraw
    layerWillDraw(layer: CALayer):void;
    // https://developer.apple.com/documentation/quartzcore/calayerdelegate/2097257-layoutsublayersoflayer
    layoutSublayersOfLayer(layer: CALayer):void;
    // https://developer.apple.com/documentation/quartzcore/calayerdelegate/2097264-actionforlayer
    actionForLayer_forKey(layer: CALayer, event: string | cocoascript.NSString):CAAction;
  }
}
declare namespace cocoascript {
  /**
   * Methods your app can implement to respond when animations start and stop.
   * https://developer.apple.com/documentation/quartzcore/caanimationdelegate
   */
  interface CAAnimationDelegate extends NSObject {
    // https://developer.apple.com/documentation/quartzcore/caanimationdelegate/2097265-animationdidstart
    animationDidStart(anim: CAAnimation):void;
    // https://developer.apple.com/documentation/quartzcore/caanimationdelegate/2097259-animationdidstop
    animationDidStop_finished(anim: CAAnimation, flag: boolean):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods that allow an object to manage the layout of a layer and its sublayers.
   * https://developer.apple.com/documentation/quartzcore/calayoutmanager
   */
  interface CALayoutManager extends NSObject {
    // https://developer.apple.com/documentation/quartzcore/calayoutmanager/2097258-invalidatelayoutoflayer
    invalidateLayoutOfLayer(layer: CALayer):void;
    // https://developer.apple.com/documentation/quartzcore/calayoutmanager/2097260-layoutsublayersoflayer
    layoutSublayersOfLayer(layer: CALayer):void;
    // https://developer.apple.com/documentation/quartzcore/calayoutmanager/2097256-preferredsizeoflayer
    preferredSizeOfLayer(layer: CALayer):CGSize;
  }
}
declare namespace cocoascript {
  /**
   * Methods that model a hierarchical timing system, allowing objects to map time between their parent and local time.
   * https://developer.apple.com/documentation/quartzcore/camediatiming
   */
  interface CAMediaTiming {
    // https://developer.apple.com/documentation/quartzcore/camediatiming/1427654-begintime
    beginTime(): CFTimeInterval;
    setBeginTime(value: CFTimeInterval): void;
    // https://developer.apple.com/documentation/quartzcore/camediatiming/1427650-timeoffset
    timeOffset(): CFTimeInterval;
    setTimeOffset(value: CFTimeInterval): void;
    // https://developer.apple.com/documentation/quartzcore/camediatiming/1427666-repeatcount
    repeatCount(): number;
    setRepeatCount(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/camediatiming/1427643-repeatduration
    repeatDuration(): CFTimeInterval;
    setRepeatDuration(value: CFTimeInterval): void;
    // https://developer.apple.com/documentation/quartzcore/camediatiming/1427652-duration
    duration(): CFTimeInterval;
    setDuration(value: CFTimeInterval): void;
    // https://developer.apple.com/documentation/quartzcore/camediatiming/1427647-speed
    speed(): number;
    setSpeed(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/camediatiming/1427645-autoreverses
    autoreverses(): boolean;
    setAutoreverses(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/camediatiming/1427656-fillmode
    fillMode(): CAMediaTimingFillMode;
    setFillMode(value: CAMediaTimingFillMode): void;
  }
}
declare namespace cocoascript {
  /**
   * An interface that allows objects to respond to actions triggered by a
   * https://developer.apple.com/documentation/quartzcore/caaction
   */
  interface CAAction {
    // https://developer.apple.com/documentation/quartzcore/caaction/1410806-runactionforkey
    runActionForKey_object_arguments(event: string | cocoascript.NSString, anObject: CAAction, dict: NSDictionary):void;
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/cacornermask
  type CACornerMask = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/caautoresizingmask
  type CAAutoresizingMask = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/caedgeantialiasingmask
  type CAEdgeAntialiasingMask = number;
}
declare namespace cocoascript {
  interface CATransform3D {
  }
}
declare namespace cocoascript {
  /**
   * A representation of a single layout constraint between two layers.
   * https://developer.apple.com/documentation/quartzcore/caconstraint
   */
  interface CAConstraint extends NSObject {
    // https://developer.apple.com/documentation/quartzcore/caconstraint/1574941-constraintwithattribute
    constraintWithAttribute_relativeTo_attribute_scale_offset(attr: CAConstraintAttribute, srcId: string | cocoascript.NSString, srcAttr: CAConstraintAttribute, m: CGFloat, c: CGFloat):CAConstraint;
    // https://developer.apple.com/documentation/quartzcore/caconstraint/1522328-constraintwithattribute
    constraintWithAttribute_relativeTo_attribute_offset(attr: CAConstraintAttribute, srcId: string | cocoascript.NSString, srcAttr: CAConstraintAttribute, c: CGFloat):CAConstraint;
    // https://developer.apple.com/documentation/quartzcore/caconstraint/1521924-constraintwithattribute
    constraintWithAttribute_relativeTo_attribute(attr: CAConstraintAttribute, srcId: string | cocoascript.NSString, srcAttr: CAConstraintAttribute):CAConstraint;
    // https://developer.apple.com/documentation/quartzcore/caconstraint/1522213-initwithattribute
    initWithAttribute_relativeTo_attribute_scale_offset(attr: CAConstraintAttribute, srcId: string | cocoascript.NSString, srcAttr: CAConstraintAttribute, m: CGFloat, c: CGFloat):CAConstraint;
    // https://developer.apple.com/documentation/quartzcore/caconstraint/1522186-attribute
    attribute(): CAConstraintAttribute;
    setAttribute(value: CAConstraintAttribute): void;
    // https://developer.apple.com/documentation/quartzcore/caconstraint/1522142-offset
    offset(): CGFloat;
    setOffset(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caconstraint/1521911-scale
    scale(): CGFloat;
    setScale(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caconstraint/1522385-sourceattribute
    sourceAttribute(): CAConstraintAttribute;
    setSourceAttribute(value: CAConstraintAttribute): void;
    // https://developer.apple.com/documentation/quartzcore/caconstraint/1522224-sourcename
    sourceName(): string | cocoascript.NSString;
    setSourceName(value: string | cocoascript.NSString): void;
    //
    alloc():CAConstraint;
    //
    init():CAConstraint;
  }
}

declare const CAConstraint: cocoascript.CAConstraint;
declare namespace cocoascript {
  /**
   * An object that provides a constraint-based layout manager.
   * https://developer.apple.com/documentation/quartzcore/caconstraintlayoutmanager
   */
  interface CAConstraintLayoutManager extends NSObject {
    // https://developer.apple.com/documentation/quartzcore/caconstraintlayoutmanager/1574940-layoutmanager
    layoutManager():CAConstraintLayoutManager;
    //
    alloc():CAConstraintLayoutManager;
    //
    init():CAConstraintLayoutManager;
  }
}

declare const CAConstraintLayoutManager: cocoascript.CAConstraintLayoutManager;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/calayercontentsgravity
  type CALayerContentsGravity = cocoascript.NSString;
}
// https://developer.apple.com/documentation/quartzcore/kcagravitytop
declare const kCAGravityTop: cocoascript.CALayerContentsGravity;
// https://developer.apple.com/documentation/quartzcore/kcagravitybottom
declare const kCAGravityBottom: cocoascript.CALayerContentsGravity;
// https://developer.apple.com/documentation/quartzcore/kcagravitycenter
declare const kCAGravityCenter: cocoascript.CALayerContentsGravity;
// https://developer.apple.com/documentation/quartzcore/kcagravitybottomleft
declare const kCAGravityBottomLeft: cocoascript.CALayerContentsGravity;
// https://developer.apple.com/documentation/quartzcore/kcagravitytopleft
declare const kCAGravityTopLeft: cocoascript.CALayerContentsGravity;
declare namespace cocoascript {
  /**
   * An object that provides a flexible method of defining animated transformations.
   * https://developer.apple.com/documentation/quartzcore/cavaluefunction
   */
  interface CAValueFunction extends NSObject {
    // https://developer.apple.com/documentation/quartzcore/cavaluefunction/1521888-name
    name(): CAValueFunctionName;
    setName(value: CAValueFunctionName): void;
    // https://developer.apple.com/documentation/quartzcore/cavaluefunction/1522115-functionwithname
    functionWithName(name: CAValueFunctionName):CAValueFunction;
    //
    alloc():CAValueFunction;
    //
    init():CAValueFunction;
  }
}

declare const CAValueFunction: cocoascript.CAValueFunction;
declare namespace cocoascript {
  /**
   * A function that defines the pacing of an animation as a timing curve.
   * https://developer.apple.com/documentation/quartzcore/camediatimingfunction
   */
  interface CAMediaTimingFunction extends NSObject {
    // https://developer.apple.com/documentation/quartzcore/camediatimingfunction/1521979-functionwithname
    functionWithName(name: CAMediaTimingFunctionName):CAMediaTimingFunction;
    // https://developer.apple.com/documentation/quartzcore/camediatimingfunction/1574338-functionwithcontrolpoints
    functionWithControlPoints(c1x: number):CAMediaTimingFunction;
    // https://developer.apple.com/documentation/quartzcore/camediatimingfunction/1522235-initwithcontrolpoints
    initWithControlPoints(c1x: number):CAMediaTimingFunction;
    // https://developer.apple.com/documentation/quartzcore/camediatimingfunction/1522057-getcontrolpointatindex
    getControlPointAtIndex_values(idx: any, ptr: number):void;
    //
    alloc():CAMediaTimingFunction;
    //
    init():CAMediaTimingFunction;
  }
}

declare const CAMediaTimingFunction: cocoascript.CAMediaTimingFunction;
declare namespace cocoascript {
  /**
   * The definition of a particle emitted by a CAEmitterLayer.
   * https://developer.apple.com/documentation/quartzcore/caemittercell
   */
  interface CAEmitterCell extends NSObject {
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1584370-emittercell
    emitterCell():CAEmitterCell;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522109-contents
    contents(): id;
    setContents(value: id): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522124-contentsrect
    contentsRect(): CGRect;
    setContentsRect(value: CGRect): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1521866-emittercells
    emitterCells(): CAEmitterCell;
    setEmitterCells(value: CAEmitterCell): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1521831-enabled
    enabled(): boolean;
    setEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522322-color
    color(): CGColorRef;
    setColor(value: CGColorRef): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522176-redrange
    redRange(): number;
    setRedRange(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1521867-greenrange
    greenRange(): number;
    setGreenRange(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522158-bluerange
    blueRange(): number;
    setBlueRange(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522110-alpharange
    alphaRange(): number;
    setAlphaRange(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1521859-redspeed
    redSpeed(): number;
    setRedSpeed(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1521946-greenspeed
    greenSpeed(): number;
    setGreenSpeed(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522082-bluespeed
    blueSpeed(): number;
    setBlueSpeed(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522120-alphaspeed
    alphaSpeed(): number;
    setAlphaSpeed(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522228-magnificationfilter
    magnificationFilter(): string | cocoascript.NSString;
    setMagnificationFilter(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522222-minificationfilter
    minificationFilter(): string | cocoascript.NSString;
    setMinificationFilter(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1521907-minificationfilterbias
    minificationFilterBias(): number;
    setMinificationFilterBias(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522287-scale
    scale(): CGFloat;
    setScale(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1521915-scalerange
    scaleRange(): CGFloat;
    setScaleRange(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522197-contentsscale
    contentsScale(): CGFloat;
    setContentsScale(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1521909-name
    name(): string | cocoascript.NSString;
    setName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1521925-style
    style(): NSDictionary;
    setStyle(value: NSDictionary): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522361-spin
    spin(): CGFloat;
    setSpin(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522084-spinrange
    spinRange(): CGFloat;
    setSpinRange(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1521857-emissionlatitude
    emissionLatitude(): CGFloat;
    setEmissionLatitude(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522013-emissionlongitude
    emissionLongitude(): CGFloat;
    setEmissionLongitude(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1521847-emissionrange
    emissionRange(): CGFloat;
    setEmissionRange(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522075-lifetime
    lifetime(): number;
    setLifetime(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522101-lifetimerange
    lifetimeRange(): number;
    setLifetimeRange(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522100-birthrate
    birthRate(): number;
    setBirthRate(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522241-scalespeed
    scaleSpeed(): CGFloat;
    setScaleSpeed(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1521837-velocity
    velocity(): CGFloat;
    setVelocity(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522330-velocityrange
    velocityRange(): CGFloat;
    setVelocityRange(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1521879-xacceleration
    xAcceleration(): CGFloat;
    setXAcceleration(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522077-yacceleration
    yAcceleration(): CGFloat;
    setYAcceleration(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522298-zacceleration
    zAcceleration(): CGFloat;
    setZAcceleration(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1521964-defaultvalueforkey
    defaultValueForKey(key: string | cocoascript.NSString):CAEmitterCell;
    // https://developer.apple.com/documentation/quartzcore/caemittercell/1522005-shouldarchivevalueforkey
    shouldArchiveValueForKey(key: string | cocoascript.NSString):boolean;
    //
    alloc():CAEmitterCell;
    //
    init():CAEmitterCell;
  }
}

declare const CAEmitterCell: cocoascript.CAEmitterCell;
declare namespace cocoascript {
  /**
   * An object that provides basic, single-keyframe animation capabilities for a layer property.
   * https://developer.apple.com/documentation/quartzcore/cabasicanimation
   */
  interface CABasicAnimation extends CAPropertyAnimation {
    // https://developer.apple.com/documentation/quartzcore/cabasicanimation/1412519-fromvalue
    fromValue(): id;
    setFromValue(value: id): void;
    // https://developer.apple.com/documentation/quartzcore/cabasicanimation/1412523-tovalue
    toValue(): id;
    setToValue(value: id): void;
    // https://developer.apple.com/documentation/quartzcore/cabasicanimation/1412445-byvalue
    byValue(): id;
    setByValue(value: id): void;
    //
    alloc():CABasicAnimation;
    //
    init():CABasicAnimation;
  }
}

declare const CABasicAnimation: cocoascript.CABasicAnimation;
declare namespace cocoascript {
  /**
   * An object that provides keyframe animation capabilities for a layer object.
   * https://developer.apple.com/documentation/quartzcore/cakeyframeanimation
   */
  interface CAKeyframeAnimation extends CAPropertyAnimation {
    // https://developer.apple.com/documentation/quartzcore/cakeyframeanimation/1412498-values
    values(): NSArray;
    setValues(value: NSArray): void;
    // https://developer.apple.com/documentation/quartzcore/cakeyframeanimation/1412474-path
    path(): CGPathRef;
    setPath(value: CGPathRef): void;
    // https://developer.apple.com/documentation/quartzcore/cakeyframeanimation/1412522-keytimes
    keyTimes(): NSNumber;
    setKeyTimes(value: NSNumber): void;
    // https://developer.apple.com/documentation/quartzcore/cakeyframeanimation/1412465-timingfunctions
    timingFunctions(): CAMediaTimingFunction;
    setTimingFunctions(value: CAMediaTimingFunction): void;
    // https://developer.apple.com/documentation/quartzcore/cakeyframeanimation/1412500-calculationmode
    calculationMode(): CAAnimationCalculationMode;
    setCalculationMode(value: CAAnimationCalculationMode): void;
    // https://developer.apple.com/documentation/quartzcore/cakeyframeanimation/1412454-rotationmode
    rotationMode(): CAAnimationRotationMode;
    setRotationMode(value: CAAnimationRotationMode): void;
    // https://developer.apple.com/documentation/quartzcore/cakeyframeanimation/1412475-tensionvalues
    tensionValues(): NSNumber;
    setTensionValues(value: NSNumber): void;
    // https://developer.apple.com/documentation/quartzcore/cakeyframeanimation/1412491-continuityvalues
    continuityValues(): NSNumber;
    setContinuityValues(value: NSNumber): void;
    // https://developer.apple.com/documentation/quartzcore/cakeyframeanimation/1412485-biasvalues
    biasValues(): NSNumber;
    setBiasValues(value: NSNumber): void;
    //
    alloc():CAKeyframeAnimation;
    //
    init():CAKeyframeAnimation;
  }
}

declare const CAKeyframeAnimation: cocoascript.CAKeyframeAnimation;
declare namespace cocoascript {
  /**
   * An object that allows multiple animations to be grouped and run concurrently.
   * https://developer.apple.com/documentation/quartzcore/caanimationgroup
   */
  interface CAAnimationGroup extends CAAnimation {
    // https://developer.apple.com/documentation/quartzcore/caanimationgroup/1412516-animations
    animations(): CAAnimation;
    setAnimations(value: CAAnimation): void;
    //
    alloc():CAAnimationGroup;
    //
    init():CAAnimationGroup;
  }
}

declare const CAAnimationGroup: cocoascript.CAAnimationGroup;
declare namespace cocoascript {
  /**
   * An object that provides an animated transition between a layer's states.
   * https://developer.apple.com/documentation/quartzcore/catransition
   */
  interface CATransition extends CAAnimation {
    // https://developer.apple.com/documentation/quartzcore/catransition/1412511-startprogress
    startProgress(): number;
    setStartProgress(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/catransition/1412509-endprogress
    endProgress(): number;
    setEndProgress(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/catransition/1412502-type
    type(): CATransitionType;
    setType(value: CATransitionType): void;
    // https://developer.apple.com/documentation/quartzcore/catransition/1412467-subtype
    subtype(): CATransitionSubtype;
    setSubtype(value: CATransitionSubtype): void;
    // https://developer.apple.com/documentation/quartzcore/catransition/1412506-filter
    filter(): id;
    setFilter(value: id): void;
    //
    alloc():CATransition;
    //
    init():CATransition;
  }
}

declare const CATransition: cocoascript.CATransition;
declare namespace cocoascript {
  /**
   * An abstract subclass of
   * https://developer.apple.com/documentation/quartzcore/capropertyanimation
   */
  interface CAPropertyAnimation extends CAAnimation {
    // https://developer.apple.com/documentation/quartzcore/capropertyanimation/1412496-keypath
    keyPath(): string | cocoascript.NSString;
    setKeyPath(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/quartzcore/capropertyanimation/1412538-cumulative
    cumulative(): boolean;
    setCumulative(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/capropertyanimation/1412493-additive
    additive(): boolean;
    setAdditive(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/capropertyanimation/1412447-valuefunction
    valueFunction(): CAValueFunction;
    setValueFunction(value: CAValueFunction): void;
    // https://developer.apple.com/documentation/quartzcore/capropertyanimation/1412534-animationwithkeypath
    animationWithKeyPath(path: string | cocoascript.NSString):CAPropertyAnimation;
    //
    alloc():CAPropertyAnimation;
    //
    init():CAPropertyAnimation;
  }
}

declare const CAPropertyAnimation: cocoascript.CAPropertyAnimation;
declare namespace cocoascript {
  /**
   * An animation that applies a spring-like force to a layer's properties.
   * https://developer.apple.com/documentation/quartzcore/caspringanimation
   */
  interface CASpringAnimation extends CABasicAnimation {
    // https://developer.apple.com/documentation/quartzcore/caspringanimation/1412532-damping
    damping(): CGFloat;
    setDamping(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caspringanimation/1412443-initialvelocity
    initialVelocity(): CGFloat;
    setInitialVelocity(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caspringanimation/1412540-mass
    mass(): CGFloat;
    setMass(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caspringanimation/1412524-settlingduration
    settlingDuration(): CFTimeInterval;
    setSettlingDuration(value: CFTimeInterval): void;
    // https://developer.apple.com/documentation/quartzcore/caspringanimation/1412515-stiffness
    stiffness(): CGFloat;
    setStiffness(value: CGFloat): void;
    //
    alloc():CASpringAnimation;
    //
    init():CASpringAnimation;
  }
}

declare const CASpringAnimation: cocoascript.CASpringAnimation;
declare namespace cocoascript {
  /**
   * A layer that provides simple text layout and rendering of plain or attributed strings.
   * https://developer.apple.com/documentation/quartzcore/catextlayer
   */
  interface CATextLayer extends CALayer {
    // https://developer.apple.com/documentation/quartzcore/catextlayer/1515295-string
    string(): id;
    setString(value: id): void;
    // https://developer.apple.com/documentation/quartzcore/catextlayer/1515303-font
    font(): CFTypeRef;
    setFont(value: CFTypeRef): void;
    // https://developer.apple.com/documentation/quartzcore/catextlayer/1515290-fontsize
    fontSize(): CGFloat;
    setFontSize(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/catextlayer/1515305-foregroundcolor
    foregroundColor(): CGColorRef;
    setForegroundColor(value: CGColorRef): void;
    // https://developer.apple.com/documentation/quartzcore/catextlayer/1515300-allowsfontsubpixelquantization
    allowsFontSubpixelQuantization(): boolean;
    setAllowsFontSubpixelQuantization(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/catextlayer/1515302-wrapped
    wrapped(): boolean;
    setWrapped(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/catextlayer/1515301-alignmentmode
    alignmentMode(): CATextLayerAlignmentMode;
    setAlignmentMode(value: CATextLayerAlignmentMode): void;
    // https://developer.apple.com/documentation/quartzcore/catextlayer/1515296-truncationmode
    truncationMode(): CATextLayerTruncationMode;
    setTruncationMode(value: CATextLayerTruncationMode): void;
    //
    alloc():CATextLayer;
    //
    init():CATextLayer;
  }
}

declare const CATextLayer: cocoascript.CATextLayer;
declare namespace cocoascript {
  /**
   * A layer that draws a cubic Bezier spline in its coordinate space.
   * https://developer.apple.com/documentation/quartzcore/cashapelayer
   */
  interface CAShapeLayer extends CALayer {
    // https://developer.apple.com/documentation/quartzcore/cashapelayer/1521904-path
    path(): CGPathRef;
    setPath(value: CGPathRef): void;
    // https://developer.apple.com/documentation/quartzcore/cashapelayer/1522248-fillcolor
    fillColor(): CGColorRef;
    setFillColor(value: CGColorRef): void;
    // https://developer.apple.com/documentation/quartzcore/cashapelayer/1522146-fillrule
    fillRule(): CAShapeLayerFillRule;
    setFillRule(value: CAShapeLayerFillRule): void;
    // https://developer.apple.com/documentation/quartzcore/cashapelayer/1521905-linecap
    lineCap(): CAShapeLayerLineCap;
    setLineCap(value: CAShapeLayerLineCap): void;
    // https://developer.apple.com/documentation/quartzcore/cashapelayer/1521921-linedashpattern
    lineDashPattern(): NSNumber;
    setLineDashPattern(value: NSNumber): void;
    // https://developer.apple.com/documentation/quartzcore/cashapelayer/1521856-linedashphase
    lineDashPhase(): CGFloat;
    setLineDashPhase(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/cashapelayer/1522147-linejoin
    lineJoin(): CAShapeLayerLineJoin;
    setLineJoin(value: CAShapeLayerLineJoin): void;
    // https://developer.apple.com/documentation/quartzcore/cashapelayer/1521890-linewidth
    lineWidth(): CGFloat;
    setLineWidth(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/cashapelayer/1521870-miterlimit
    miterLimit(): CGFloat;
    setMiterLimit(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/cashapelayer/1521897-strokecolor
    strokeColor(): CGColorRef;
    setStrokeColor(value: CGColorRef): void;
    // https://developer.apple.com/documentation/quartzcore/cashapelayer/1521929-strokestart
    strokeStart(): CGFloat;
    setStrokeStart(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/cashapelayer/1522252-strokeend
    strokeEnd(): CGFloat;
    setStrokeEnd(value: CGFloat): void;
    //
    alloc():CAShapeLayer;
    //
    init():CAShapeLayer;
  }
}

declare const CAShapeLayer: cocoascript.CAShapeLayer;
declare namespace cocoascript {
  /**
   * A layer that draws a color gradient over its background color, filling the shape of the layer (including rounded corners)
   * https://developer.apple.com/documentation/quartzcore/cagradientlayer
   */
  interface CAGradientLayer extends CALayer {
    // https://developer.apple.com/documentation/quartzcore/cagradientlayer/1462403-colors
    colors(): NSArray;
    setColors(value: NSArray): void;
    // https://developer.apple.com/documentation/quartzcore/cagradientlayer/1462410-locations
    locations(): NSNumber;
    setLocations(value: NSNumber): void;
    // https://developer.apple.com/documentation/quartzcore/cagradientlayer/1462412-endpoint
    endPoint(): CGPoint;
    setEndPoint(value: CGPoint): void;
    // https://developer.apple.com/documentation/quartzcore/cagradientlayer/1462408-startpoint
    startPoint(): CGPoint;
    setStartPoint(value: CGPoint): void;
    // https://developer.apple.com/documentation/quartzcore/cagradientlayer/1462413-type
    type(): CAGradientLayerType;
    setType(value: CAGradientLayerType): void;
    //
    alloc():CAGradientLayer;
    //
    init():CAGradientLayer;
  }
}

declare const CAGradientLayer: cocoascript.CAGradientLayer;
declare namespace cocoascript {
  /**
   * A timer object that allows your app to synchronize its drawing to the refresh rate of the display.
   * https://developer.apple.com/documentation/quartzcore/cadisplaylink
   */
  interface CADisplayLink extends NSObject {
    // https://developer.apple.com/documentation/quartzcore/cadisplaylink/1621228-displaylinkwithtarget
    displayLinkWithTarget_selector(target: CADisplayLink, sel: SEL):CADisplayLink;
    // https://developer.apple.com/documentation/quartzcore/cadisplaylink/1621323-addtorunloop
    addToRunLoop_forMode(runloop: NSRunLoop, mode: NSRunLoopMode):void;
    // https://developer.apple.com/documentation/quartzcore/cadisplaylink/1621325-removefromrunloop
    removeFromRunLoop_forMode(runloop: NSRunLoop, mode: NSRunLoopMode):void;
    // https://developer.apple.com/documentation/quartzcore/cadisplaylink/1621293-invalidate
    invalidate():void;
    // https://developer.apple.com/documentation/quartzcore/cadisplaylink/1621292-duration
    duration(): CFTimeInterval;
    setDuration(value: CFTimeInterval): void;
    // https://developer.apple.com/documentation/quartzcore/cadisplaylink/1648421-preferredframespersecond
    preferredFramesPerSecond(): NSInteger;
    setPreferredFramesPerSecond(value: NSInteger): void;
    // https://developer.apple.com/documentation/quartzcore/cadisplaylink/1621229-paused
    paused(): boolean;
    setPaused(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/cadisplaylink/1621257-timestamp
    timestamp(): CFTimeInterval;
    setTimestamp(value: CFTimeInterval): void;
    // https://developer.apple.com/documentation/quartzcore/cadisplaylink/1648422-targettimestamp
    targetTimestamp(): CFTimeInterval;
    setTargetTimestamp(value: CFTimeInterval): void;
    // https://developer.apple.com/documentation/quartzcore/cadisplaylink/1621231-frameinterval
    frameInterval(): NSInteger;
    setFrameInterval(value: NSInteger): void;
    // https://developer.apple.com/documentation/quartzcore/cadisplaylink/3875343-preferredframeraterange
    preferredFrameRateRange(): CAFrameRateRange;
    setPreferredFrameRateRange(value: CAFrameRateRange): void;
    //
    alloc():CADisplayLink;
    //
    init():CADisplayLink;
  }
}

declare const CADisplayLink: cocoascript.CADisplayLink;
declare namespace cocoascript {
  /**
   * A layer that emits, animates, and renders a particle system.
   * https://developer.apple.com/documentation/quartzcore/caemitterlayer
   */
  interface CAEmitterLayer extends CALayer {
    // https://developer.apple.com/documentation/quartzcore/caemitterlayer/1521923-emittercells
    emitterCells(): CAEmitterCell;
    setEmitterCells(value: CAEmitterCell): void;
    // https://developer.apple.com/documentation/quartzcore/caemitterlayer/1522104-rendermode
    renderMode(): CAEmitterLayerRenderMode;
    setRenderMode(value: CAEmitterLayerRenderMode): void;
    // https://developer.apple.com/documentation/quartzcore/caemitterlayer/1522289-emitterposition
    emitterPosition(): CGPoint;
    setEmitterPosition(value: CGPoint): void;
    // https://developer.apple.com/documentation/quartzcore/caemitterlayer/1521919-emittershape
    emitterShape(): CAEmitterLayerEmitterShape;
    setEmitterShape(value: CAEmitterLayerEmitterShape): void;
    // https://developer.apple.com/documentation/quartzcore/caemitterlayer/1522169-emitterzposition
    emitterZPosition(): CGFloat;
    setEmitterZPosition(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caemitterlayer/1521844-emitterdepth
    emitterDepth(): CGFloat;
    setEmitterDepth(value: CGFloat): void;
    // https://developer.apple.com/documentation/quartzcore/caemitterlayer/1521869-emittersize
    emitterSize(): CGSize;
    setEmitterSize(value: CGSize): void;
    // https://developer.apple.com/documentation/quartzcore/caemitterlayer/1521841-scale
    scale(): number;
    setScale(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/caemitterlayer/1522079-seed
    seed(): number;
    setSeed(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/caemitterlayer/1521861-spin
    spin(): number;
    setSpin(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/caemitterlayer/1522015-velocity
    velocity(): number;
    setVelocity(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/caemitterlayer/1521976-birthrate
    birthRate(): number;
    setBirthRate(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/caemitterlayer/1522128-emittermode
    emitterMode(): CAEmitterLayerEmitterMode;
    setEmitterMode(value: CAEmitterLayerEmitterMode): void;
    // https://developer.apple.com/documentation/quartzcore/caemitterlayer/1522144-lifetime
    lifetime(): number;
    setLifetime(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/caemitterlayer/1521872-preservesdepth
    preservesDepth(): boolean;
    setPreservesDepth(value: boolean): void;
    //
    alloc():CAEmitterLayer;
    //
    init():CAEmitterLayer;
  }
}

declare const CAEmitterLayer: cocoascript.CAEmitterLayer;
declare namespace cocoascript {
  /**
   * A layer that displays scrollable content larger than its own bounds.
   * https://developer.apple.com/documentation/quartzcore/cascrolllayer
   */
  interface CAScrollLayer extends CALayer {
    // https://developer.apple.com/documentation/quartzcore/cascrolllayer/1522111-scrollmode
    scrollMode(): CAScrollLayerScrollMode;
    setScrollMode(value: CAScrollLayerScrollMode): void;
    // https://developer.apple.com/documentation/quartzcore/cascrolllayer/1522021-scrolltopoint
    scrollToPoint(p: CGPoint):void;
    // https://developer.apple.com/documentation/quartzcore/cascrolllayer/1522167-scrolltorect
    scrollToRect(r: CGRect):void;
    //
    alloc():CAScrollLayer;
    //
    init():CAScrollLayer;
  }
}

declare const CAScrollLayer: cocoascript.CAScrollLayer;
declare namespace cocoascript {
  /**
   * Objects used to create true 3D layer hierarchies, rather than the flattened hierarchy rendering model used by other
   * https://developer.apple.com/documentation/quartzcore/catransformlayer
   */
  interface CATransformLayer extends CALayer {
    // https://developer.apple.com/documentation/quartzcore/catransformlayer/1805274-hittest
    ():void;
    //
    alloc():CATransformLayer;
    //
    init():CATransformLayer;
  }
}

declare const CATransformLayer: cocoascript.CATransformLayer;
declare namespace cocoascript {
  /**
   * A layer that creates a specified number of sublayer copies with varying geometric, temporal, and color transformations.
   * https://developer.apple.com/documentation/quartzcore/careplicatorlayer
   */
  interface CAReplicatorLayer extends CALayer {
    // https://developer.apple.com/documentation/quartzcore/careplicatorlayer/1521883-instancecount
    instanceCount(): NSInteger;
    setInstanceCount(value: NSInteger): void;
    // https://developer.apple.com/documentation/quartzcore/careplicatorlayer/1522391-instancedelay
    instanceDelay(): CFTimeInterval;
    setInstanceDelay(value: CFTimeInterval): void;
    // https://developer.apple.com/documentation/quartzcore/careplicatorlayer/1522312-instancetransform
    instanceTransform(): CATransform3D;
    setInstanceTransform(value: CATransform3D): void;
    // https://developer.apple.com/documentation/quartzcore/careplicatorlayer/1522095-preservesdepth
    preservesDepth(): boolean;
    setPreservesDepth(value: boolean): void;
    // https://developer.apple.com/documentation/quartzcore/careplicatorlayer/1522154-instancecolor
    instanceColor(): CGColorRef;
    setInstanceColor(value: CGColorRef): void;
    // https://developer.apple.com/documentation/quartzcore/careplicatorlayer/1522090-instanceredoffset
    instanceRedOffset(): number;
    setInstanceRedOffset(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/careplicatorlayer/1522032-instancegreenoffset
    instanceGreenOffset(): number;
    setInstanceGreenOffset(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/careplicatorlayer/1522267-instanceblueoffset
    instanceBlueOffset(): number;
    setInstanceBlueOffset(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/careplicatorlayer/1521898-instancealphaoffset
    instanceAlphaOffset(): number;
    setInstanceAlphaOffset(value: number): void;
    //
    alloc():CAReplicatorLayer;
    //
    init():CAReplicatorLayer;
  }
}

declare const CAReplicatorLayer: cocoascript.CAReplicatorLayer;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/quartzcore/caremotelayerclient
   */
  interface CARemoteLayerClient extends NSObject {
    // https://developer.apple.com/documentation/quartzcore/caremotelayerclient/1418377-initwithserverport
    initWithServerPort(port: any):CARemoteLayerClient;
    // https://developer.apple.com/documentation/quartzcore/caremotelayerclient/1418375-clientid
    clientId(): number;
    setClientId(value: number): void;
    // https://developer.apple.com/documentation/quartzcore/caremotelayerclient/1418373-layer
    layer(): CALayer;
    setLayer(value: CALayer): void;
    // https://developer.apple.com/documentation/quartzcore/caremotelayerclient/1418372-invalidate
    invalidate():void;
    //
    alloc():CARemoteLayerClient;
    //
    init():CARemoteLayerClient;
  }
}

declare const CARemoteLayerClient: cocoascript.CARemoteLayerClient;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/quartzcore/caremotelayerserver
   */
  interface CARemoteLayerServer extends NSObject {
    // https://developer.apple.com/documentation/quartzcore/caremotelayerserver/1521922-serverport
    serverPort(): any;
    setServerPort(value: any): void;
    // https://developer.apple.com/documentation/quartzcore/caremotelayerserver/1521954-sharedserver
    sharedServer():CARemoteLayerServer;
    //
    alloc():CARemoteLayerServer;
    //
    init():CARemoteLayerServer;
  }
}

declare const CARemoteLayerServer: cocoascript.CARemoteLayerServer;
declare namespace cocoascript {
  interface CAFrameRateRange {
  }
}
// https://developer.apple.com/documentation/quartzcore/caframeraterangedefault
declare const CAFrameRateRangeDefault: cocoascript.CAFrameRateRange;
// https://developer.apple.com/documentation/quartzcore/catransform3didentity
declare const CATransform3DIdentity: cocoascript.CATransform3D;
// https://developer.apple.com/documentation/quartzcore/kcafilterlinear
declare const kCAFilterLinear: cocoascript.CALayerContentsFilter;
// https://developer.apple.com/documentation/quartzcore/kcafilternearest
declare const kCAFilterNearest: cocoascript.CALayerContentsFilter;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/calayercontentsfilter
  type CALayerContentsFilter = cocoascript.NSString;
}
// https://developer.apple.com/documentation/quartzcore/kcagravityleft
declare const kCAGravityLeft: cocoascript.CALayerContentsGravity;
// https://developer.apple.com/documentation/quartzcore/kcagravityright
declare const kCAGravityRight: cocoascript.CALayerContentsGravity;
// https://developer.apple.com/documentation/quartzcore/kcagravitytopright
declare const kCAGravityTopRight: cocoascript.CALayerContentsGravity;
// https://developer.apple.com/documentation/quartzcore/kcagravitybottomright
declare const kCAGravityBottomRight: cocoascript.CALayerContentsGravity;
// https://developer.apple.com/documentation/quartzcore/kcafiltertrilinear
declare const kCAFilterTrilinear: cocoascript.CALayerContentsFilter;
// https://developer.apple.com/documentation/quartzcore/kcacontentsformatrgba8uint
declare const kCAContentsFormatRGBA8Uint: cocoascript.CALayerContentsFormat;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/calayercontentsformat
  type CALayerContentsFormat = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/calayercornercurve
  type CALayerCornerCurve = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/caconstraintattribute
  type CAConstraintAttribute = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/caanimationcalculationmode
  type CAAnimationCalculationMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/caanimationrotationmode
  type CAAnimationRotationMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/caemitterlayeremittermode
  type CAEmitterLayerEmitterMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/caemitterlayeremittershape
  type CAEmitterLayerEmitterShape = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/caemitterlayerrendermode
  type CAEmitterLayerRenderMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/cagradientlayertype
  type CAGradientLayerType = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/camediatimingfillmode
  type CAMediaTimingFillMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/camediatimingfunctionname
  type CAMediaTimingFunctionName = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/cascrolllayerscrollmode
  type CAScrollLayerScrollMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/cashapelayerfillrule
  type CAShapeLayerFillRule = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/cashapelayerlinecap
  type CAShapeLayerLineCap = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/cashapelayerlinejoin
  type CAShapeLayerLineJoin = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/catextlayeralignmentmode
  type CATextLayerAlignmentMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/catextlayertruncationmode
  type CATextLayerTruncationMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/catransitionsubtype
  type CATransitionSubtype = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/catransitiontype
  type CATransitionType = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/quartzcore/cavaluefunctionname
  type CAValueFunctionName = cocoascript.NSString;
}
// https://developer.apple.com/documentation/quartzcore/kcavaluefunctionrotatez
declare const kCAValueFunctionRotateZ: cocoascript.CAValueFunctionName;
// https://developer.apple.com/documentation/quartzcore/kcavaluefunctionscale
declare const kCAValueFunctionScale: cocoascript.CAValueFunctionName;
// https://developer.apple.com/documentation/quartzcore/kcavaluefunctiontranslate
declare const kCAValueFunctionTranslate: cocoascript.CAValueFunctionName;
// https://developer.apple.com/documentation/quartzcore/kcaemitterlayerpoint
declare const kCAEmitterLayerPoint: cocoascript.CAEmitterLayerEmitterShape;
// https://developer.apple.com/documentation/quartzcore/kcafillmoderemoved
declare const kCAFillModeRemoved: cocoascript.CAMediaTimingFillMode;
// https://developer.apple.com/documentation/quartzcore/kcafillmodeforwards
declare const kCAFillModeForwards: cocoascript.CAMediaTimingFillMode;
// https://developer.apple.com/documentation/quartzcore/kcafillmodebackwards
declare const kCAFillModeBackwards: cocoascript.CAMediaTimingFillMode;
// https://developer.apple.com/documentation/quartzcore/kcafillmodeboth
declare const kCAFillModeBoth: cocoascript.CAMediaTimingFillMode;
// https://developer.apple.com/documentation/quartzcore/kcacontentsformatrgba16float
declare const kCAContentsFormatRGBA16Float: cocoascript.CALayerContentsFormat;
// https://developer.apple.com/documentation/quartzcore/kcacontentsformatgray8uint
declare const kCAContentsFormatGray8Uint: cocoascript.CALayerContentsFormat;
// https://developer.apple.com/documentation/quartzcore/kcacornercurvecircular
declare const kCACornerCurveCircular: cocoascript.CALayerCornerCurve;
// https://developer.apple.com/documentation/quartzcore/kcacornercurvecontinuous
declare const kCACornerCurveContinuous: cocoascript.CALayerCornerCurve;
// https://developer.apple.com/documentation/quartzcore/kcaanimationcubic
declare const kCAAnimationCubic: cocoascript.CAAnimationCalculationMode;
// https://developer.apple.com/documentation/quartzcore/kcaanimationcubicpaced
declare const kCAAnimationCubicPaced: cocoascript.CAAnimationCalculationMode;
// https://developer.apple.com/documentation/quartzcore/kcaanimationdiscrete
declare const kCAAnimationDiscrete: cocoascript.CAAnimationCalculationMode;
// https://developer.apple.com/documentation/quartzcore/kcaanimationlinear
declare const kCAAnimationLinear: cocoascript.CAAnimationCalculationMode;
// https://developer.apple.com/documentation/quartzcore/kcaanimationpaced
declare const kCAAnimationPaced: cocoascript.CAAnimationCalculationMode;
// https://developer.apple.com/documentation/quartzcore/kcaanimationrotateauto
declare const kCAAnimationRotateAuto: cocoascript.CAAnimationRotationMode;
// https://developer.apple.com/documentation/quartzcore/kcaanimationrotateautoreverse
declare const kCAAnimationRotateAutoReverse: cocoascript.CAAnimationRotationMode;
// https://developer.apple.com/documentation/quartzcore/kcaemitterlayeroutline
declare const kCAEmitterLayerOutline: cocoascript.CAEmitterLayerEmitterMode;
// https://developer.apple.com/documentation/quartzcore/kcaemitterlayerpoints
declare const kCAEmitterLayerPoints: cocoascript.CAEmitterLayerEmitterMode;
// https://developer.apple.com/documentation/quartzcore/kcaemitterlayersurface
declare const kCAEmitterLayerSurface: cocoascript.CAEmitterLayerEmitterMode;
// https://developer.apple.com/documentation/quartzcore/kcaemitterlayervolume
declare const kCAEmitterLayerVolume: cocoascript.CAEmitterLayerEmitterMode;
// https://developer.apple.com/documentation/quartzcore/kcaemitterlayercircle
declare const kCAEmitterLayerCircle: cocoascript.CAEmitterLayerEmitterShape;
// https://developer.apple.com/documentation/quartzcore/kcaemitterlayercuboid
declare const kCAEmitterLayerCuboid: cocoascript.CAEmitterLayerEmitterShape;
// https://developer.apple.com/documentation/quartzcore/kcaemitterlayerline
declare const kCAEmitterLayerLine: cocoascript.CAEmitterLayerEmitterShape;
// https://developer.apple.com/documentation/quartzcore/kcaemitterlayerrectangle
declare const kCAEmitterLayerRectangle: cocoascript.CAEmitterLayerEmitterShape;
// https://developer.apple.com/documentation/quartzcore/kcaemitterlayersphere
declare const kCAEmitterLayerSphere: cocoascript.CAEmitterLayerEmitterShape;
// https://developer.apple.com/documentation/quartzcore/kcaemitterlayeradditive
declare const kCAEmitterLayerAdditive: cocoascript.CAEmitterLayerRenderMode;
// https://developer.apple.com/documentation/quartzcore/kcaemitterlayerbacktofront
declare const kCAEmitterLayerBackToFront: cocoascript.CAEmitterLayerRenderMode;
// https://developer.apple.com/documentation/quartzcore/kcaemitterlayeroldestfirst
declare const kCAEmitterLayerOldestFirst: cocoascript.CAEmitterLayerRenderMode;
// https://developer.apple.com/documentation/quartzcore/kcaemitterlayeroldestlast
declare const kCAEmitterLayerOldestLast: cocoascript.CAEmitterLayerRenderMode;
// https://developer.apple.com/documentation/quartzcore/kcaemitterlayerunordered
declare const kCAEmitterLayerUnordered: cocoascript.CAEmitterLayerRenderMode;
// https://developer.apple.com/documentation/quartzcore/kcagradientlayeraxial
declare const kCAGradientLayerAxial: cocoascript.CAGradientLayerType;
// https://developer.apple.com/documentation/quartzcore/kcagradientlayerconic
declare const kCAGradientLayerConic: cocoascript.CAGradientLayerType;
// https://developer.apple.com/documentation/quartzcore/kcagradientlayerradial
declare const kCAGradientLayerRadial: cocoascript.CAGradientLayerType;
// https://developer.apple.com/documentation/quartzcore/kcamediatimingfunctiondefault
declare const kCAMediaTimingFunctionDefault: cocoascript.CAMediaTimingFunctionName;
// https://developer.apple.com/documentation/quartzcore/kcamediatimingfunctioneasein
declare const kCAMediaTimingFunctionEaseIn: cocoascript.CAMediaTimingFunctionName;
// https://developer.apple.com/documentation/quartzcore/kcamediatimingfunctioneaseineaseout
declare const kCAMediaTimingFunctionEaseInEaseOut: cocoascript.CAMediaTimingFunctionName;
// https://developer.apple.com/documentation/quartzcore/kcamediatimingfunctioneaseout
declare const kCAMediaTimingFunctionEaseOut: cocoascript.CAMediaTimingFunctionName;
// https://developer.apple.com/documentation/quartzcore/kcamediatimingfunctionlinear
declare const kCAMediaTimingFunctionLinear: cocoascript.CAMediaTimingFunctionName;
// https://developer.apple.com/documentation/quartzcore/kcascrollboth
declare const kCAScrollBoth: cocoascript.CAScrollLayerScrollMode;
// https://developer.apple.com/documentation/quartzcore/kcascrollhorizontally
declare const kCAScrollHorizontally: cocoascript.CAScrollLayerScrollMode;
// https://developer.apple.com/documentation/quartzcore/kcascrollnone
declare const kCAScrollNone: cocoascript.CAScrollLayerScrollMode;
// https://developer.apple.com/documentation/quartzcore/kcascrollvertically
declare const kCAScrollVertically: cocoascript.CAScrollLayerScrollMode;
// https://developer.apple.com/documentation/quartzcore/kcafillruleevenodd
declare const kCAFillRuleEvenOdd: cocoascript.CAShapeLayerFillRule;
// https://developer.apple.com/documentation/quartzcore/kcafillrulenonzero
declare const kCAFillRuleNonZero: cocoascript.CAShapeLayerFillRule;
// https://developer.apple.com/documentation/quartzcore/kcalinecapbutt
declare const kCALineCapButt: cocoascript.CAShapeLayerLineCap;
// https://developer.apple.com/documentation/quartzcore/kcalinecapround
declare const kCALineCapRound: cocoascript.CAShapeLayerLineCap;
// https://developer.apple.com/documentation/quartzcore/kcalinecapsquare
declare const kCALineCapSquare: cocoascript.CAShapeLayerLineCap;
// https://developer.apple.com/documentation/quartzcore/kcalinejoinbevel
declare const kCALineJoinBevel: cocoascript.CAShapeLayerLineJoin;
// https://developer.apple.com/documentation/quartzcore/kcalinejoinmiter
declare const kCALineJoinMiter: cocoascript.CAShapeLayerLineJoin;
// https://developer.apple.com/documentation/quartzcore/kcalinejoinround
declare const kCALineJoinRound: cocoascript.CAShapeLayerLineJoin;
// https://developer.apple.com/documentation/quartzcore/kcaalignmentcenter
declare const kCAAlignmentCenter: cocoascript.CATextLayerAlignmentMode;
// https://developer.apple.com/documentation/quartzcore/kcaalignmentjustified
declare const kCAAlignmentJustified: cocoascript.CATextLayerAlignmentMode;
// https://developer.apple.com/documentation/quartzcore/kcaalignmentleft
declare const kCAAlignmentLeft: cocoascript.CATextLayerAlignmentMode;
// https://developer.apple.com/documentation/quartzcore/kcaalignmentnatural
declare const kCAAlignmentNatural: cocoascript.CATextLayerAlignmentMode;
// https://developer.apple.com/documentation/quartzcore/kcaalignmentright
declare const kCAAlignmentRight: cocoascript.CATextLayerAlignmentMode;
// https://developer.apple.com/documentation/quartzcore/kcatruncationend
declare const kCATruncationEnd: cocoascript.CATextLayerTruncationMode;
// https://developer.apple.com/documentation/quartzcore/kcatruncationmiddle
declare const kCATruncationMiddle: cocoascript.CATextLayerTruncationMode;
// https://developer.apple.com/documentation/quartzcore/kcatruncationnone
declare const kCATruncationNone: cocoascript.CATextLayerTruncationMode;
// https://developer.apple.com/documentation/quartzcore/kcatruncationstart
declare const kCATruncationStart: cocoascript.CATextLayerTruncationMode;
// https://developer.apple.com/documentation/quartzcore/kcatransitionfrombottom
declare const kCATransitionFromBottom: cocoascript.CATransitionSubtype;
// https://developer.apple.com/documentation/quartzcore/kcatransitionfromleft
declare const kCATransitionFromLeft: cocoascript.CATransitionSubtype;
// https://developer.apple.com/documentation/quartzcore/kcatransitionfromright
declare const kCATransitionFromRight: cocoascript.CATransitionSubtype;
// https://developer.apple.com/documentation/quartzcore/kcatransitionfromtop
declare const kCATransitionFromTop: cocoascript.CATransitionSubtype;
// https://developer.apple.com/documentation/quartzcore/kcatransitionfade
declare const kCATransitionFade: cocoascript.CATransitionType;
// https://developer.apple.com/documentation/quartzcore/kcatransitionmovein
declare const kCATransitionMoveIn: cocoascript.CATransitionType;
// https://developer.apple.com/documentation/quartzcore/kcatransitionpush
declare const kCATransitionPush: cocoascript.CATransitionType;
// https://developer.apple.com/documentation/quartzcore/kcatransitionreveal
declare const kCATransitionReveal: cocoascript.CATransitionType;
// https://developer.apple.com/documentation/quartzcore/kcavaluefunctionrotatex
declare const kCAValueFunctionRotateX: cocoascript.CAValueFunctionName;
// https://developer.apple.com/documentation/quartzcore/kcavaluefunctionrotatey
declare const kCAValueFunctionRotateY: cocoascript.CAValueFunctionName;
// https://developer.apple.com/documentation/quartzcore/kcavaluefunctionscalex
declare const kCAValueFunctionScaleX: cocoascript.CAValueFunctionName;
// https://developer.apple.com/documentation/quartzcore/kcavaluefunctionscaley
declare const kCAValueFunctionScaleY: cocoascript.CAValueFunctionName;
// https://developer.apple.com/documentation/quartzcore/kcavaluefunctionscalez
declare const kCAValueFunctionScaleZ: cocoascript.CAValueFunctionName;
// https://developer.apple.com/documentation/quartzcore/kcavaluefunctiontranslatex
declare const kCAValueFunctionTranslateX: cocoascript.CAValueFunctionName;
// https://developer.apple.com/documentation/quartzcore/kcavaluefunctiontranslatey
declare const kCAValueFunctionTranslateY: cocoascript.CAValueFunctionName;
// https://developer.apple.com/documentation/quartzcore/kcavaluefunctiontranslatez
declare const kCAValueFunctionTranslateZ: cocoascript.CAValueFunctionName;
