declare namespace cocoascript {
  /**
   * A layer that provides a layer suitable for rendering OpenGL content.
   * doc://com.apple.documentation/documentation/quartzcore/caopengllayer
   */
  interface CAOpenGLLayer extends CALayer {
    // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1521873-colorspace
    colorspace(): CGColorSpaceRef;
    setColorspace(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1521900-wantsextendeddynamicrangecontent
    wantsExtendedDynamicRangeContent(): BOOL;
    setWantsExtendedDynamicRangeContent(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1522116-asynchronous
    asynchronous(): BOOL;
    setAsynchronous(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1522184-candrawincglcontext
    canDrawInCGLContext_pixelFormat_forLayerTime_displayTime(ctx: any, pf: any, t: CFTimeInterval, ts: CVTimeStamp):BOOL;
    // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1522316-drawincglcontext
    drawInCGLContext_pixelFormat_forLayerTime_displayTime(ctx: any, pf: any, t: CFTimeInterval, ts: CVTimeStamp):void;
    // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1522052-copycglpixelformatfordisplaymask
    copyCGLPixelFormatForDisplayMask(mask: number):any;
    // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1521910-releasecglpixelformat
    releaseCGLPixelFormat(pf: any):void;
    // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1521894-copycglcontextforpixelformat
    copyCGLContextForPixelFormat(pf: any):any;
    // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1521850-releasecglcontext
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
   * doc://com.apple.documentation/documentation/quartzcore/calayer
   */
  interface CALayer extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410793-layer
    layer():CALayer;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410835-init
    init():CALayer;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410842-initwithlayer
    initWithLayer(layer: CALayer):CALayer;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1522119-layerwithremoteclientid
    layerWithRemoteClientId(client_id: number):CALayer;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410744-presentationlayer
    presentationLayer():CALayer;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410853-modellayer
    modelLayer():CALayer;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410984-delegate
    delegate(): CALayerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410773-contents
    contents(): id;
    setContents(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410866-contentsrect
    contentsRect(): CGRect;
    setContentsRect(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410740-contentscenter
    contentsCenter(): CGRect;
    setContentsCenter(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410926-display
    display():void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410757-drawincontext
    drawInContext(ctx: CGContextRef):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410872-contentsgravity
    contentsGravity(): CALayerContentsGravity;
    setContentsGravity(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410933-opacity
    opacity(): number;
    setOpacity(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410838-hidden
    hidden(): BOOL;
    setHidden(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410896-maskstobounds
    masksToBounds(): BOOL;
    setMasksToBounds(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410861-mask
    mask(): CALayer;
    setMask(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410924-doublesided
    doubleSided(): BOOL;
    setDoubleSided(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410818-cornerradius
    cornerRadius(): CGFloat;
    setCornerRadius(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/2877488-maskedcorners
    maskedCorners(): CACornerMask;
    setMaskedCorners(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410917-borderwidth
    borderWidth(): CGFloat;
    setBorderWidth(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410903-bordercolor
    borderColor(): CGColorRef;
    setBorderColor(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410966-backgroundcolor
    backgroundColor(): CGColorRef;
    setBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410751-shadowopacity
    shadowOpacity(): number;
    setShadowOpacity(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410819-shadowradius
    shadowRadius(): CGFloat;
    setShadowRadius(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410970-shadowoffset
    shadowOffset(): CGSize;
    setShadowOffset(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410829-shadowcolor
    shadowColor(): CGColorRef;
    setShadowColor(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410771-shadowpath
    shadowPath(): CGPathRef;
    setShadowPath(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410875-style
    style(): NSDictionary;
    setStyle(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1621285-allowsedgeantialiasing
    allowsEdgeAntialiasing(): BOOL;
    setAllowsEdgeAntialiasing(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1621277-allowsgroupopacity
    allowsGroupOpacity(): BOOL;
    setAllowsGroupOpacity(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410901-filters
    filters(): NSArray;
    setFilters(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410748-compositingfilter
    compositingFilter(): id;
    setCompositingFilter(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410827-backgroundfilters
    backgroundFilters(): NSArray;
    setBackgroundFilters(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410898-minificationfilter
    minificationFilter(): CALayerContentsFilter;
    setMinificationFilter(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410775-minificationfilterbias
    minificationFilterBias(): number;
    setMinificationFilterBias(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410907-magnificationfilter
    magnificationFilter(): CALayerContentsFilter;
    setMagnificationFilter(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410763-opaque
    opaque(): BOOL;
    setOpaque(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410892-edgeantialiasingmask
    edgeAntialiasingMask(): CAEdgeAntialiasingMask;
    setEdgeAntialiasingMask(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410777-contentsareflipped
    contentsAreFlipped():BOOL;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410960-geometryflipped
    geometryFlipped(): BOOL;
    setGeometryFlipped(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410974-drawsasynchronously
    drawsAsynchronously(): BOOL;
    setDrawsAsynchronously(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410905-shouldrasterize
    shouldRasterize(): BOOL;
    setShouldRasterize(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410801-rasterizationscale
    rasterizationScale(): CGFloat;
    setRasterizationScale(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1792104-contentsformat
    contentsFormat(): CALayerContentsFormat;
    setContentsFormat(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410909-renderincontext
    renderInContext(ctx: CGContextRef):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410779-frame
    frame(): CGRect;
    setFrame(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410915-bounds
    bounds(): CGRect;
    setBounds(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410791-position
    position(): CGPoint;
    setPosition(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410884-zposition
    zPosition(): CGFloat;
    setZPosition(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410796-anchorpointz
    anchorPointZ(): CGFloat;
    setAnchorPointZ(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410817-anchorpoint
    anchorPoint(): CGPoint;
    setAnchorPoint(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410746-contentsscale
    contentsScale(): CGFloat;
    setContentsScale(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410836-transform
    transform(): CATransform3D;
    setTransform(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410888-sublayertransform
    sublayerTransform(): CATransform3D;
    setSublayerTransform(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410882-affinetransform
    affineTransform():CGAffineTransform;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410868-setaffinetransform
    setAffineTransform(m: CGAffineTransform):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410802-sublayers
    sublayers(): CALayer;
    setSublayers(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410761-superlayer
    superlayer(): CALayer;
    setSuperlayer(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410833-addsublayer
    addSublayer(layer: CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410767-removefromsuperlayer
    removeFromSuperlayer():void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410944-insertsublayer
    insertSublayer_atIndex(layer: CALayer, idx: number):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410840-insertsublayer
    insertSublayer_below(layer: CALayer, sibling: CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410798-insertsublayer
    insertSublayer_above(layer: CALayer, sibling: CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410820-replacesublayer
    replaceSublayer_with(oldLayer: CALayer, newLayer: CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410855-setneedsdisplay
    setNeedsDisplay():void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410800-setneedsdisplayinrect
    setNeedsDisplayInRect(r: CGRect):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410923-needsdisplayonboundschange
    needsDisplayOnBoundsChange(): BOOL;
    setNeedsDisplayOnBoundsChange(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410813-displayifneeded
    displayIfNeeded():void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410958-needsdisplay
    needsDisplay():BOOL;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410769-needsdisplayforkey
    needsDisplayForKey(key: string | cocoascript.NSString):BOOL;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410848-addanimation
    addAnimation_forKey(anim: CAAnimation, key: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410808-animationforkey
    animationForKey(key: string | cocoascript.NSString):CAAnimation;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410810-removeallanimations
    removeAllAnimations():void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410939-removeanimationforkey
    removeAnimationForKey(key: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410937-animationkeys
    animationKeys():NSString;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410749-layoutmanager
    layoutManager(): CALayoutManager;
    setLayoutManager(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410946-setneedslayout
    setNeedsLayout():void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410935-layoutsublayers
    layoutSublayers():void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410873-layoutifneeded
    layoutIfNeeded():void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410956-needslayout
    needsLayout():BOOL;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410877-autoresizingmask
    autoresizingMask(): CAAutoresizingMask;
    setAutoresizingMask(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410894-resizewitholdsuperlayersize
    resizeWithOldSuperlayerSize(size: CGSize):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410929-resizesublayerswitholdsize
    resizeSublayersWithOldSize(size: CGSize):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410980-preferredframesize
    preferredFrameSize():CGSize;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1521906-constraints
    constraints(): CAConstraint;
    setConstraints(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1521899-addconstraint
    addConstraint(c: CAConstraint):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410844-actionforkey
    actionForKey(event: string | cocoascript.NSString):CAAction;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410789-actions
    actions(): CAAction;
    setActions(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410954-defaultactionforkey
    defaultActionForKey(event: string | cocoascript.NSString):CAAction;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410825-convertpoint
    convertPoint_fromLayer(p: CGPoint, l: CALayer):CGPoint;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410881-convertpoint
    convertPoint_toLayer(p: CGPoint, l: CALayer):CGPoint;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410948-convertrect
    convertRect_fromLayer(r: CGRect, l: CALayer):CGRect;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410742-convertrect
    convertRect_toLayer(r: CGRect, l: CALayer):CGRect;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410821-converttime
    convertTime_fromLayer(t: CFTimeInterval, l: CALayer):CFTimeInterval;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410823-converttime
    convertTime_toLayer(t: CFTimeInterval, l: CALayer):CFTimeInterval;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410972-hittest
    hitTest(p: CGPoint):CALayer;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410857-containspoint
    containsPoint(p: CGPoint):BOOL;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1521892-visiblerect
    visibleRect(): CGRect;
    setVisibleRect(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1522202-scrollpoint
    scrollPoint(p: CGPoint):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1522139-scrollrecttovisible
    scrollRectToVisible(r: CGRect):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410879-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410753-shouldarchivevalueforkey
    shouldArchiveValueForKey(key: string | cocoascript.NSString):BOOL;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410886-defaultvalueforkey
    defaultValueForKey(key: string | cocoascript.NSString):CALayer;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/3152596-cornercurve
    cornerCurve(): CALayerCornerCurve;
    setCornerCurve(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/3152597-cornercurveexpansionfactor
    cornerCurveExpansionFactor(curve: CALayerCornerCurve):CGFloat;
    //
    alloc():CALayer;
    //
    init():CALayer;
  }
}

declare const CALayer: cocoascript.CALayer;
// doc://com.apple.documentation/documentation/quartzcore/kcagravityresize
declare const kCAGravityResize: CALayerContentsGravity;
// doc://com.apple.documentation/documentation/quartzcore/kcagravityresizeaspect
declare const kCAGravityResizeAspect: CALayerContentsGravity;
// doc://com.apple.documentation/documentation/quartzcore/kcagravityresizeaspectfill
declare const kCAGravityResizeAspectFill: CALayerContentsGravity;
declare namespace cocoascript {
  /**
   * The abstract superclass for animations in Core Animation.
   * doc://com.apple.documentation/documentation/quartzcore/caanimation
   */
  interface CAAnimation extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1412479-animation
    animation():CAAnimation;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/2867443-animationwithscnanimation
    animationWithSCNAnimation(animation: SCNAnimation):CAAnimation;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1412458-removedoncompletion
    removedOnCompletion(): BOOL;
    setRemovedOnCompletion(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1412456-timingfunction
    timingFunction(): CAMediaTimingFunction;
    setTimingFunction(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1412530-defaultvalueforkey
    defaultValueForKey(key: string | cocoascript.NSString):CAAnimation;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1412490-delegate
    delegate(): CAAnimationDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1412525-shouldarchivevalueforkey
    shouldArchiveValueForKey(key: string | cocoascript.NSString):BOOL;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1523819-usesscenetimebase
    usesSceneTimeBase(): BOOL;
    setUsesSceneTimeBase(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1523370-fadeinduration
    fadeInDuration(): CGFloat;
    setFadeInDuration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1522959-fadeoutduration
    fadeOutDuration(): CGFloat;
    setFadeOutDuration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1523940-animationevents
    animationEvents(): SCNAnimationEvent;
    setAnimationEvents(): void;
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
   * doc://com.apple.documentation/documentation/quartzcore/catransaction
   */
  interface CATransaction extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/catransaction/1448282-begin
    begin():void;
    // doc://com.apple.documentation/documentation/quartzcore/catransaction/1448255-commit
    commit():void;
    // doc://com.apple.documentation/documentation/quartzcore/catransaction/1448270-flush
    flush():void;
    // doc://com.apple.documentation/documentation/quartzcore/catransaction/1448263-animationduration
    animationDuration():CFTimeInterval;
    // doc://com.apple.documentation/documentation/quartzcore/catransaction/1448283-setanimationduration
    setAnimationDuration(dur: CFTimeInterval):void;
    // doc://com.apple.documentation/documentation/quartzcore/catransaction/1448269-animationtimingfunction
    animationTimingFunction():CAMediaTimingFunction;
    // doc://com.apple.documentation/documentation/quartzcore/catransaction/1448279-setanimationtimingfunction
    setAnimationTimingFunction(function: CAMediaTimingFunction):void;
    // doc://com.apple.documentation/documentation/quartzcore/catransaction/1448276-disableactions
    disableActions():BOOL;
    // doc://com.apple.documentation/documentation/quartzcore/catransaction/1448261-setdisableactions
    setDisableActions(flag: BOOL):void;
    // doc://com.apple.documentation/documentation/quartzcore/catransaction/1448280-completionblock
    completionBlock():void;
    // doc://com.apple.documentation/documentation/quartzcore/catransaction/1448281-setcompletionblock
    setCompletionBlock(block: void):void;
    // doc://com.apple.documentation/documentation/quartzcore/catransaction/1448267-lock
    lock():void;
    // doc://com.apple.documentation/documentation/quartzcore/catransaction/1448285-unlock
    unlock():void;
    // doc://com.apple.documentation/documentation/quartzcore/catransaction/1448278-setvalue
    setValue_forKey(anObject: CATransaction, key: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/quartzcore/catransaction/1448259-valueforkey
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
   * doc://com.apple.documentation/documentation/quartzcore/cametallayer
   */
  interface CAMetalLayer extends CALayer {
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478163-device
    device(): any;
    setDevice(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/3175021-preferreddevice
    preferredDevice(): any;
    setPreferredDevice(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478155-pixelformat
    pixelFormat(): any;
    setPixelFormat(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478170-colorspace
    colorspace(): CGColorSpaceRef;
    setColorspace(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478168-framebufferonly
    framebufferOnly(): BOOL;
    setFramebufferOnly(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478174-drawablesize
    drawableSize(): CGSize;
    setDrawableSize(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478157-presentswithtransaction
    presentsWithTransaction(): BOOL;
    setPresentsWithTransaction(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/2887087-displaysyncenabled
    displaySyncEnabled(): BOOL;
    setDisplaySyncEnabled(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478161-wantsextendeddynamicrangecontent
    wantsExtendedDynamicRangeContent(): BOOL;
    setWantsExtendedDynamicRangeContent(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/3182052-edrmetadata
    EDRMetadata(): CAEDRMetadata;
    setEDRMetadata(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478172-nextdrawable
    nextDrawable():CAMetalDrawable;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/2938720-maximumdrawablecount
    maximumDrawableCount(): NSUInteger;
    setMaximumDrawableCount(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/2887086-allowsnextdrawabletimeout
    allowsNextDrawableTimeout(): BOOL;
    setAllowsNextDrawableTimeout(): void;
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
   * doc://com.apple.documentation/documentation/quartzcore/cametaldrawable
   */
  interface CAMetalDrawable extends MTLDrawable {
    // doc://com.apple.documentation/documentation/quartzcore/cametaldrawable/1478159-texture
    texture(): any;
    setTexture(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametaldrawable/1478165-layer
    layer(): CAMetalLayer;
    setLayer(): void;
  }
}
declare namespace cocoascript {
  /**
   * A layer that supports drawing OpenGL content in iOS and tvOS applications.
   * doc://com.apple.documentation/documentation/quartzcore/caeagllayer
   */
  interface CAEAGLLayer extends CALayer {
    // doc://com.apple.documentation/documentation/quartzcore/caeagllayer/1618676-presentswithtransaction
    presentsWithTransaction(): BOOL;
    setPresentsWithTransaction(): void;
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
   * doc://com.apple.documentation/documentation/quartzcore/caedrmetadata
   */
  interface CAEDRMetadata extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/caedrmetadata/3194384-hlgmetadata
    HLGMetadata(): CAEDRMetadata;
    setHLGMetadata(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caedrmetadata/3194382-hdr10metadatawithdisplayinfo
    HDR10MetadataWithDisplayInfo_contentInfo_opticalOutputScale(displayData: NSData, contentData: NSData, scale: number):CAEDRMetadata;
    // doc://com.apple.documentation/documentation/quartzcore/caedrmetadata/3194383-hdr10metadatawithminluminance
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
   * doc://com.apple.documentation/documentation/quartzcore/carenderer
   */
  interface CARenderer extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519589-rendererwithcglcontext
    rendererWithCGLContext_options(ctx: void, dict: NSDictionary):CARenderer;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/2869759-rendererwithmtltexture
    rendererWithMTLTexture_options(tex: any, dict: NSDictionary):CARenderer;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519583-layer
    layer(): CALayer;
    setLayer(): void;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519591-bounds
    bounds(): CGRect;
    setBounds(): void;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519595-beginframeattime
    beginFrameAtTime_timeStamp(t: CFTimeInterval, ts: CVTimeStamp):void;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519594-updatebounds
    updateBounds():CGRect;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519585-addupdaterect
    addUpdateRect(r: CGRect):void;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519582-render
    render():void;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519592-nextframetime
    nextFrameTime():CFTimeInterval;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519593-endframe
    endFrame():void;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/2998892-setdestination
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
   * doc://com.apple.documentation/documentation/quartzcore/catiledlayer
   */
  interface CATiledLayer extends CALayer {
    // doc://com.apple.documentation/documentation/quartzcore/catiledlayer/1522145-fadeduration
    fadeDuration():CFTimeInterval;
    // doc://com.apple.documentation/documentation/quartzcore/catiledlayer/1522244-levelsofdetail
    levelsOfDetail(): any;
    setLevelsOfDetail(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catiledlayer/1522099-levelsofdetailbias
    levelsOfDetailBias(): any;
    setLevelsOfDetailBias(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catiledlayer/1522114-tilesize
    tileSize(): CGSize;
    setTileSize(): void;
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
   * doc://com.apple.documentation/documentation/quartzcore/calayerdelegate
   */
  interface CALayerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/calayerdelegate/2097261-displaylayer
    displayLayer(layer: CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayerdelegate/2097262-drawlayer
    drawLayer_inContext(layer: CALayer, ctx: CGContextRef):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayerdelegate/2097263-layerwilldraw
    layerWillDraw(layer: CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayerdelegate/2097257-layoutsublayersoflayer
    layoutSublayersOfLayer(layer: CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayerdelegate/2097264-actionforlayer
    actionForLayer_forKey(layer: CALayer, event: string | cocoascript.NSString):CAAction;
  }
}
declare namespace cocoascript {
  /**
   * Methods your app can implement to respond when animations start and stop.
   * doc://com.apple.documentation/documentation/quartzcore/caanimationdelegate
   */
  interface CAAnimationDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/caanimationdelegate/2097265-animationdidstart
    animationDidStart(anim: CAAnimation):void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimationdelegate/2097259-animationdidstop
    animationDidStop_finished(anim: CAAnimation, flag: BOOL):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods that allow an object to manage the layout of a layer and its sublayers.
   * doc://com.apple.documentation/documentation/quartzcore/calayoutmanager
   */
  interface CALayoutManager extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/calayoutmanager/2097258-invalidatelayoutoflayer
    invalidateLayoutOfLayer(layer: CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayoutmanager/2097260-layoutsublayersoflayer
    layoutSublayersOfLayer(layer: CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayoutmanager/2097256-preferredsizeoflayer
    preferredSizeOfLayer(layer: CALayer):CGSize;
  }
}
declare namespace cocoascript {
  /**
   * Methods that model a hierarchical timing system, allowing objects to map time between their parent and local time.
   * doc://com.apple.documentation/documentation/quartzcore/camediatiming
   */
  interface CAMediaTiming {
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427654-begintime
    beginTime(): CFTimeInterval;
    setBeginTime(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427650-timeoffset
    timeOffset(): CFTimeInterval;
    setTimeOffset(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427666-repeatcount
    repeatCount(): number;
    setRepeatCount(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427643-repeatduration
    repeatDuration(): CFTimeInterval;
    setRepeatDuration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427652-duration
    duration(): CFTimeInterval;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427647-speed
    speed(): number;
    setSpeed(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427645-autoreverses
    autoreverses(): BOOL;
    setAutoreverses(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427656-fillmode
    fillMode(): CAMediaTimingFillMode;
    setFillMode(): void;
  }
}
declare namespace cocoascript {
  /**
   * An interface that allows objects to respond to actions triggered by a
   * doc://com.apple.documentation/documentation/quartzcore/caaction
   */
  interface CAAction {
    // doc://com.apple.documentation/documentation/quartzcore/caaction/1410806-runactionforkey
    runActionForKey_object_arguments(event: string | cocoascript.NSString, anObject: CAAction, dict: NSDictionary):void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/cacornermask
  type CACornerMask = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/caautoresizingmask
  type CAAutoresizingMask = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/caedgeantialiasingmask
  type CAEdgeAntialiasingMask = number;
}
declare namespace cocoascript {
  interface CATransform3D {
  }
}
declare namespace cocoascript {
  /**
   * A representation of a single layout constraint between two layers.
   * doc://com.apple.documentation/documentation/quartzcore/caconstraint
   */
  interface CAConstraint extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1574941-constraintwithattribute
    constraintWithAttribute_relativeTo_attribute_scale_offset(attr: CAConstraintAttribute, srcId: string | cocoascript.NSString, srcAttr: CAConstraintAttribute, m: CGFloat, c: CGFloat):CAConstraint;
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1522328-constraintwithattribute
    constraintWithAttribute_relativeTo_attribute_offset(attr: CAConstraintAttribute, srcId: string | cocoascript.NSString, srcAttr: CAConstraintAttribute, c: CGFloat):CAConstraint;
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1521924-constraintwithattribute
    constraintWithAttribute_relativeTo_attribute(attr: CAConstraintAttribute, srcId: string | cocoascript.NSString, srcAttr: CAConstraintAttribute):CAConstraint;
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1522213-initwithattribute
    initWithAttribute_relativeTo_attribute_scale_offset(attr: CAConstraintAttribute, srcId: string | cocoascript.NSString, srcAttr: CAConstraintAttribute, m: CGFloat, c: CGFloat):CAConstraint;
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1522186-attribute
    attribute(): CAConstraintAttribute;
    setAttribute(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1522142-offset
    offset(): CGFloat;
    setOffset(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1521911-scale
    scale(): CGFloat;
    setScale(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1522385-sourceattribute
    sourceAttribute(): CAConstraintAttribute;
    setSourceAttribute(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1522224-sourcename
    sourceName(): string | cocoascript.NSString;
    setSourceName(): void;
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
   * doc://com.apple.documentation/documentation/quartzcore/caconstraintlayoutmanager
   */
  interface CAConstraintLayoutManager extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/caconstraintlayoutmanager/1574940-layoutmanager
    layoutManager():CAConstraintLayoutManager;
    //
    alloc():CAConstraintLayoutManager;
    //
    init():CAConstraintLayoutManager;
  }
}

declare const CAConstraintLayoutManager: cocoascript.CAConstraintLayoutManager;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/calayercontentsgravity
  type CALayerContentsGravity = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/quartzcore/kcagravitytop
declare const kCAGravityTop: CALayerContentsGravity;
// doc://com.apple.documentation/documentation/quartzcore/kcagravitybottom
declare const kCAGravityBottom: CALayerContentsGravity;
// doc://com.apple.documentation/documentation/quartzcore/kcagravitycenter
declare const kCAGravityCenter: CALayerContentsGravity;
// doc://com.apple.documentation/documentation/quartzcore/kcagravitybottomleft
declare const kCAGravityBottomLeft: CALayerContentsGravity;
// doc://com.apple.documentation/documentation/quartzcore/kcagravitytopleft
declare const kCAGravityTopLeft: CALayerContentsGravity;
declare namespace cocoascript {
  /**
   * An object that provides a flexible method of defining animated transformations.
   * doc://com.apple.documentation/documentation/quartzcore/cavaluefunction
   */
  interface CAValueFunction extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/cavaluefunction/1521888-name
    name(): CAValueFunctionName;
    setName(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cavaluefunction/1522115-functionwithname
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
   * doc://com.apple.documentation/documentation/quartzcore/camediatimingfunction
   */
  interface CAMediaTimingFunction extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/camediatimingfunction/1521979-functionwithname
    functionWithName(name: CAMediaTimingFunctionName):CAMediaTimingFunction;
    // doc://com.apple.documentation/documentation/quartzcore/camediatimingfunction/1574338-functionwithcontrolpoints
    functionWithControlPoints(c1x: number):CAMediaTimingFunction;
    // doc://com.apple.documentation/documentation/quartzcore/camediatimingfunction/1522235-initwithcontrolpoints
    initWithControlPoints(c1x: number):CAMediaTimingFunction;
    // doc://com.apple.documentation/documentation/quartzcore/camediatimingfunction/1522057-getcontrolpointatindex
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
   * doc://com.apple.documentation/documentation/quartzcore/caemittercell
   */
  interface CAEmitterCell extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1584370-emittercell
    emitterCell():CAEmitterCell;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522109-contents
    contents(): id;
    setContents(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522124-contentsrect
    contentsRect(): CGRect;
    setContentsRect(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521866-emittercells
    emitterCells(): CAEmitterCell;
    setEmitterCells(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521831-enabled
    enabled(): BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522322-color
    color(): CGColorRef;
    setColor(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522176-redrange
    redRange(): number;
    setRedRange(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521867-greenrange
    greenRange(): number;
    setGreenRange(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522158-bluerange
    blueRange(): number;
    setBlueRange(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522110-alpharange
    alphaRange(): number;
    setAlphaRange(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521859-redspeed
    redSpeed(): number;
    setRedSpeed(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521946-greenspeed
    greenSpeed(): number;
    setGreenSpeed(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522082-bluespeed
    blueSpeed(): number;
    setBlueSpeed(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522120-alphaspeed
    alphaSpeed(): number;
    setAlphaSpeed(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522228-magnificationfilter
    magnificationFilter(): string | cocoascript.NSString;
    setMagnificationFilter(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522222-minificationfilter
    minificationFilter(): string | cocoascript.NSString;
    setMinificationFilter(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521907-minificationfilterbias
    minificationFilterBias(): number;
    setMinificationFilterBias(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522287-scale
    scale(): CGFloat;
    setScale(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521915-scalerange
    scaleRange(): CGFloat;
    setScaleRange(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522197-contentsscale
    contentsScale(): CGFloat;
    setContentsScale(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521909-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521925-style
    style(): NSDictionary;
    setStyle(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522361-spin
    spin(): CGFloat;
    setSpin(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522084-spinrange
    spinRange(): CGFloat;
    setSpinRange(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521857-emissionlatitude
    emissionLatitude(): CGFloat;
    setEmissionLatitude(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522013-emissionlongitude
    emissionLongitude(): CGFloat;
    setEmissionLongitude(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521847-emissionrange
    emissionRange(): CGFloat;
    setEmissionRange(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522075-lifetime
    lifetime(): number;
    setLifetime(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522101-lifetimerange
    lifetimeRange(): number;
    setLifetimeRange(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522100-birthrate
    birthRate(): number;
    setBirthRate(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522241-scalespeed
    scaleSpeed(): CGFloat;
    setScaleSpeed(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521837-velocity
    velocity(): CGFloat;
    setVelocity(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522330-velocityrange
    velocityRange(): CGFloat;
    setVelocityRange(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521879-xacceleration
    xAcceleration(): CGFloat;
    setXAcceleration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522077-yacceleration
    yAcceleration(): CGFloat;
    setYAcceleration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522298-zacceleration
    zAcceleration(): CGFloat;
    setZAcceleration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521964-defaultvalueforkey
    defaultValueForKey(key: string | cocoascript.NSString):CAEmitterCell;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522005-shouldarchivevalueforkey
    shouldArchiveValueForKey(key: string | cocoascript.NSString):BOOL;
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
   * doc://com.apple.documentation/documentation/quartzcore/cabasicanimation
   */
  interface CABasicAnimation extends CAPropertyAnimation {
    // doc://com.apple.documentation/documentation/quartzcore/cabasicanimation/1412519-fromvalue
    fromValue(): id;
    setFromValue(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cabasicanimation/1412523-tovalue
    toValue(): id;
    setToValue(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cabasicanimation/1412445-byvalue
    byValue(): id;
    setByValue(): void;
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
   * doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation
   */
  interface CAKeyframeAnimation extends CAPropertyAnimation {
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412498-values
    values(): NSArray;
    setValues(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412474-path
    path(): CGPathRef;
    setPath(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412522-keytimes
    keyTimes(): NSNumber;
    setKeyTimes(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412465-timingfunctions
    timingFunctions(): CAMediaTimingFunction;
    setTimingFunctions(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412500-calculationmode
    calculationMode(): CAAnimationCalculationMode;
    setCalculationMode(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412454-rotationmode
    rotationMode(): CAAnimationRotationMode;
    setRotationMode(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412475-tensionvalues
    tensionValues(): NSNumber;
    setTensionValues(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412491-continuityvalues
    continuityValues(): NSNumber;
    setContinuityValues(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412485-biasvalues
    biasValues(): NSNumber;
    setBiasValues(): void;
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
   * doc://com.apple.documentation/documentation/quartzcore/caanimationgroup
   */
  interface CAAnimationGroup extends CAAnimation {
    // doc://com.apple.documentation/documentation/quartzcore/caanimationgroup/1412516-animations
    animations(): CAAnimation;
    setAnimations(): void;
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
   * doc://com.apple.documentation/documentation/quartzcore/catransition
   */
  interface CATransition extends CAAnimation {
    // doc://com.apple.documentation/documentation/quartzcore/catransition/1412511-startprogress
    startProgress(): number;
    setStartProgress(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catransition/1412509-endprogress
    endProgress(): number;
    setEndProgress(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catransition/1412502-type
    type(): CATransitionType;
    setType(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catransition/1412467-subtype
    subtype(): CATransitionSubtype;
    setSubtype(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catransition/1412506-filter
    filter(): id;
    setFilter(): void;
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
   * doc://com.apple.documentation/documentation/quartzcore/capropertyanimation
   */
  interface CAPropertyAnimation extends CAAnimation {
    // doc://com.apple.documentation/documentation/quartzcore/capropertyanimation/1412496-keypath
    keyPath(): string | cocoascript.NSString;
    setKeyPath(): void;
    // doc://com.apple.documentation/documentation/quartzcore/capropertyanimation/1412538-cumulative
    cumulative(): BOOL;
    setCumulative(): void;
    // doc://com.apple.documentation/documentation/quartzcore/capropertyanimation/1412493-additive
    additive(): BOOL;
    setAdditive(): void;
    // doc://com.apple.documentation/documentation/quartzcore/capropertyanimation/1412447-valuefunction
    valueFunction(): CAValueFunction;
    setValueFunction(): void;
    // doc://com.apple.documentation/documentation/quartzcore/capropertyanimation/1412534-animationwithkeypath
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
   * doc://com.apple.documentation/documentation/quartzcore/caspringanimation
   */
  interface CASpringAnimation extends CABasicAnimation {
    // doc://com.apple.documentation/documentation/quartzcore/caspringanimation/1412532-damping
    damping(): CGFloat;
    setDamping(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caspringanimation/1412443-initialvelocity
    initialVelocity(): CGFloat;
    setInitialVelocity(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caspringanimation/1412540-mass
    mass(): CGFloat;
    setMass(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caspringanimation/1412524-settlingduration
    settlingDuration(): CFTimeInterval;
    setSettlingDuration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caspringanimation/1412515-stiffness
    stiffness(): CGFloat;
    setStiffness(): void;
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
   * doc://com.apple.documentation/documentation/quartzcore/catextlayer
   */
  interface CATextLayer extends CALayer {
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515295-string
    string(): id;
    setString(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515303-font
    font(): CFTypeRef;
    setFont(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515290-fontsize
    fontSize(): CGFloat;
    setFontSize(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515305-foregroundcolor
    foregroundColor(): CGColorRef;
    setForegroundColor(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515300-allowsfontsubpixelquantization
    allowsFontSubpixelQuantization(): BOOL;
    setAllowsFontSubpixelQuantization(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515302-wrapped
    wrapped(): BOOL;
    setWrapped(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515301-alignmentmode
    alignmentMode(): CATextLayerAlignmentMode;
    setAlignmentMode(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515296-truncationmode
    truncationMode(): CATextLayerTruncationMode;
    setTruncationMode(): void;
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
   * doc://com.apple.documentation/documentation/quartzcore/cashapelayer
   */
  interface CAShapeLayer extends CALayer {
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521904-path
    path(): CGPathRef;
    setPath(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1522248-fillcolor
    fillColor(): CGColorRef;
    setFillColor(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1522146-fillrule
    fillRule(): CAShapeLayerFillRule;
    setFillRule(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521905-linecap
    lineCap(): CAShapeLayerLineCap;
    setLineCap(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521921-linedashpattern
    lineDashPattern(): NSNumber;
    setLineDashPattern(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521856-linedashphase
    lineDashPhase(): CGFloat;
    setLineDashPhase(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1522147-linejoin
    lineJoin(): CAShapeLayerLineJoin;
    setLineJoin(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521890-linewidth
    lineWidth(): CGFloat;
    setLineWidth(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521870-miterlimit
    miterLimit(): CGFloat;
    setMiterLimit(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521897-strokecolor
    strokeColor(): CGColorRef;
    setStrokeColor(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521929-strokestart
    strokeStart(): CGFloat;
    setStrokeStart(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1522252-strokeend
    strokeEnd(): CGFloat;
    setStrokeEnd(): void;
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
   * doc://com.apple.documentation/documentation/quartzcore/cagradientlayer
   */
  interface CAGradientLayer extends CALayer {
    // doc://com.apple.documentation/documentation/quartzcore/cagradientlayer/1462403-colors
    colors(): NSArray;
    setColors(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cagradientlayer/1462410-locations
    locations(): NSNumber;
    setLocations(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cagradientlayer/1462412-endpoint
    endPoint(): CGPoint;
    setEndPoint(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cagradientlayer/1462408-startpoint
    startPoint(): CGPoint;
    setStartPoint(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cagradientlayer/1462413-type
    type(): CAGradientLayerType;
    setType(): void;
    //
    alloc():CAGradientLayer;
    //
    init():CAGradientLayer;
  }
}

declare const CAGradientLayer: cocoascript.CAGradientLayer;
declare namespace cocoascript {
  /**
   * A timer object that allows your application to synchronize its drawing to the refresh rate of the display.
   * doc://com.apple.documentation/documentation/quartzcore/cadisplaylink
   */
  interface CADisplayLink extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621228-displaylinkwithtarget
    displayLinkWithTarget_selector(target: CADisplayLink, sel: SEL):CADisplayLink;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621323-addtorunloop
    addToRunLoop_forMode(runloop: NSRunLoop, mode: NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621325-removefromrunloop
    removeFromRunLoop_forMode(runloop: NSRunLoop, mode: NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621293-invalidate
    invalidate():void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621292-duration
    duration(): CFTimeInterval;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1648421-preferredframespersecond
    preferredFramesPerSecond(): NSInteger;
    setPreferredFramesPerSecond(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621231-frameinterval
    frameInterval(): NSInteger;
    setFrameInterval(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621229-paused
    paused(): BOOL;
    setPaused(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621257-timestamp
    timestamp(): CFTimeInterval;
    setTimestamp(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1648422-targettimestamp
    targetTimestamp(): CFTimeInterval;
    setTargetTimestamp(): void;
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
   * doc://com.apple.documentation/documentation/quartzcore/caemitterlayer
   */
  interface CAEmitterLayer extends CALayer {
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1521923-emittercells
    emitterCells(): CAEmitterCell;
    setEmitterCells(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1522104-rendermode
    renderMode(): CAEmitterLayerRenderMode;
    setRenderMode(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1522289-emitterposition
    emitterPosition(): CGPoint;
    setEmitterPosition(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1521919-emittershape
    emitterShape(): CAEmitterLayerEmitterShape;
    setEmitterShape(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1522169-emitterzposition
    emitterZPosition(): CGFloat;
    setEmitterZPosition(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1521844-emitterdepth
    emitterDepth(): CGFloat;
    setEmitterDepth(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1521869-emittersize
    emitterSize(): CGSize;
    setEmitterSize(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1521841-scale
    scale(): number;
    setScale(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1522079-seed
    seed(): number;
    setSeed(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1521861-spin
    spin(): number;
    setSpin(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1522015-velocity
    velocity(): number;
    setVelocity(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1521976-birthrate
    birthRate(): number;
    setBirthRate(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1522128-emittermode
    emitterMode(): CAEmitterLayerEmitterMode;
    setEmitterMode(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1522144-lifetime
    lifetime(): number;
    setLifetime(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1521872-preservesdepth
    preservesDepth(): BOOL;
    setPreservesDepth(): void;
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
   * doc://com.apple.documentation/documentation/quartzcore/cascrolllayer
   */
  interface CAScrollLayer extends CALayer {
    // doc://com.apple.documentation/documentation/quartzcore/cascrolllayer/1522111-scrollmode
    scrollMode(): CAScrollLayerScrollMode;
    setScrollMode(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cascrolllayer/1522021-scrolltopoint
    scrollToPoint(p: CGPoint):void;
    // doc://com.apple.documentation/documentation/quartzcore/cascrolllayer/1522167-scrolltorect
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
   * doc://com.apple.documentation/documentation/quartzcore/catransformlayer
   */
  interface CATransformLayer extends CALayer {
    // doc://com.apple.documentation/documentation/quartzcore/catransformlayer/1805274-hittest
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
   * doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer
   */
  interface CAReplicatorLayer extends CALayer {
    // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1521883-instancecount
    instanceCount(): NSInteger;
    setInstanceCount(): void;
    // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1522391-instancedelay
    instanceDelay(): CFTimeInterval;
    setInstanceDelay(): void;
    // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1522312-instancetransform
    instanceTransform(): CATransform3D;
    setInstanceTransform(): void;
    // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1522095-preservesdepth
    preservesDepth(): BOOL;
    setPreservesDepth(): void;
    // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1522154-instancecolor
    instanceColor(): CGColorRef;
    setInstanceColor(): void;
    // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1522090-instanceredoffset
    instanceRedOffset(): number;
    setInstanceRedOffset(): void;
    // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1522032-instancegreenoffset
    instanceGreenOffset(): number;
    setInstanceGreenOffset(): void;
    // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1522267-instanceblueoffset
    instanceBlueOffset(): number;
    setInstanceBlueOffset(): void;
    // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1521898-instancealphaoffset
    instanceAlphaOffset(): number;
    setInstanceAlphaOffset(): void;
    //
    alloc():CAReplicatorLayer;
    //
    init():CAReplicatorLayer;
  }
}

declare const CAReplicatorLayer: cocoascript.CAReplicatorLayer;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/quartzcore/caremotelayerclient
   */
  interface CARemoteLayerClient extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/caremotelayerclient/1418377-initwithserverport
    initWithServerPort(port: any):CARemoteLayerClient;
    // doc://com.apple.documentation/documentation/quartzcore/caremotelayerclient/1418375-clientid
    clientId(): number;
    setClientId(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caremotelayerclient/1418373-layer
    layer(): CALayer;
    setLayer(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caremotelayerclient/1418372-invalidate
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
   * doc://com.apple.documentation/documentation/quartzcore/caremotelayerserver
   */
  interface CARemoteLayerServer extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/caremotelayerserver/1521922-serverport
    serverPort(): any;
    setServerPort(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caremotelayerserver/1521954-sharedserver
    sharedServer():CARemoteLayerServer;
    //
    alloc():CARemoteLayerServer;
    //
    init():CARemoteLayerServer;
  }
}

declare const CARemoteLayerServer: cocoascript.CARemoteLayerServer;
// doc://com.apple.documentation/documentation/quartzcore/kcafilterlinear
declare const kCAFilterLinear: CALayerContentsFilter;
// doc://com.apple.documentation/documentation/quartzcore/kcafilternearest
declare const kCAFilterNearest: CALayerContentsFilter;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/calayercontentsfilter
  type CALayerContentsFilter = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/quartzcore/kcagravityleft
declare const kCAGravityLeft: CALayerContentsGravity;
// doc://com.apple.documentation/documentation/quartzcore/kcagravityright
declare const kCAGravityRight: CALayerContentsGravity;
// doc://com.apple.documentation/documentation/quartzcore/kcagravitytopright
declare const kCAGravityTopRight: CALayerContentsGravity;
// doc://com.apple.documentation/documentation/quartzcore/kcagravitybottomright
declare const kCAGravityBottomRight: CALayerContentsGravity;
// doc://com.apple.documentation/documentation/quartzcore/kcafiltertrilinear
declare const kCAFilterTrilinear: CALayerContentsFilter;
// doc://com.apple.documentation/documentation/quartzcore/kcacontentsformatrgba8uint
declare const kCAContentsFormatRGBA8Uint: CALayerContentsFormat;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/calayercontentsformat
  type CALayerContentsFormat = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/quartzcore/catransform3didentity
declare const CATransform3DIdentity: CATransform3D;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/calayercornercurve
  type CALayerCornerCurve = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/caconstraintattribute
  type CAConstraintAttribute = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/caanimationcalculationmode
  type CAAnimationCalculationMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/caanimationrotationmode
  type CAAnimationRotationMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/caemitterlayeremittermode
  type CAEmitterLayerEmitterMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/caemitterlayeremittershape
  type CAEmitterLayerEmitterShape = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/caemitterlayerrendermode
  type CAEmitterLayerRenderMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/cagradientlayertype
  type CAGradientLayerType = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/camediatimingfillmode
  type CAMediaTimingFillMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/camediatimingfunctionname
  type CAMediaTimingFunctionName = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/cascrolllayerscrollmode
  type CAScrollLayerScrollMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/cashapelayerfillrule
  type CAShapeLayerFillRule = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/cashapelayerlinecap
  type CAShapeLayerLineCap = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/cashapelayerlinejoin
  type CAShapeLayerLineJoin = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/catextlayeralignmentmode
  type CATextLayerAlignmentMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/catextlayertruncationmode
  type CATextLayerTruncationMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/catransitionsubtype
  type CATransitionSubtype = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/catransitiontype
  type CATransitionType = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/cavaluefunctionname
  type CAValueFunctionName = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/quartzcore/kcavaluefunctionrotatez
declare const kCAValueFunctionRotateZ: CAValueFunctionName;
// doc://com.apple.documentation/documentation/quartzcore/kcavaluefunctionscale
declare const kCAValueFunctionScale: CAValueFunctionName;
// doc://com.apple.documentation/documentation/quartzcore/kcavaluefunctiontranslate
declare const kCAValueFunctionTranslate: CAValueFunctionName;
// doc://com.apple.documentation/documentation/quartzcore/kcaemitterlayerpoint
declare const kCAEmitterLayerPoint: CAEmitterLayerEmitterShape;
// doc://com.apple.documentation/documentation/quartzcore/kcafillmoderemoved
declare const kCAFillModeRemoved: CAMediaTimingFillMode;
// doc://com.apple.documentation/documentation/quartzcore/kcafillmodeforwards
declare const kCAFillModeForwards: CAMediaTimingFillMode;
// doc://com.apple.documentation/documentation/quartzcore/kcafillmodebackwards
declare const kCAFillModeBackwards: CAMediaTimingFillMode;
// doc://com.apple.documentation/documentation/quartzcore/kcafillmodeboth
declare const kCAFillModeBoth: CAMediaTimingFillMode;
// doc://com.apple.documentation/documentation/quartzcore/kcacontentsformatrgba16float
declare const kCAContentsFormatRGBA16Float: CALayerContentsFormat;
// doc://com.apple.documentation/documentation/quartzcore/kcacontentsformatgray8uint
declare const kCAContentsFormatGray8Uint: CALayerContentsFormat;
// doc://com.apple.documentation/documentation/quartzcore/kcacornercurvecircular
declare const kCACornerCurveCircular: CALayerCornerCurve;
// doc://com.apple.documentation/documentation/quartzcore/kcacornercurvecontinuous
declare const kCACornerCurveContinuous: CALayerCornerCurve;
// doc://com.apple.documentation/documentation/quartzcore/kcaanimationcubic
declare const kCAAnimationCubic: CAAnimationCalculationMode;
// doc://com.apple.documentation/documentation/quartzcore/kcaanimationcubicpaced
declare const kCAAnimationCubicPaced: CAAnimationCalculationMode;
// doc://com.apple.documentation/documentation/quartzcore/kcaanimationdiscrete
declare const kCAAnimationDiscrete: CAAnimationCalculationMode;
// doc://com.apple.documentation/documentation/quartzcore/kcaanimationlinear
declare const kCAAnimationLinear: CAAnimationCalculationMode;
// doc://com.apple.documentation/documentation/quartzcore/kcaanimationpaced
declare const kCAAnimationPaced: CAAnimationCalculationMode;
// doc://com.apple.documentation/documentation/quartzcore/kcaanimationrotateauto
declare const kCAAnimationRotateAuto: CAAnimationRotationMode;
// doc://com.apple.documentation/documentation/quartzcore/kcaanimationrotateautoreverse
declare const kCAAnimationRotateAutoReverse: CAAnimationRotationMode;
// doc://com.apple.documentation/documentation/quartzcore/kcaemitterlayeroutline
declare const kCAEmitterLayerOutline: CAEmitterLayerEmitterMode;
// doc://com.apple.documentation/documentation/quartzcore/kcaemitterlayerpoints
declare const kCAEmitterLayerPoints: CAEmitterLayerEmitterMode;
// doc://com.apple.documentation/documentation/quartzcore/kcaemitterlayersurface
declare const kCAEmitterLayerSurface: CAEmitterLayerEmitterMode;
// doc://com.apple.documentation/documentation/quartzcore/kcaemitterlayervolume
declare const kCAEmitterLayerVolume: CAEmitterLayerEmitterMode;
// doc://com.apple.documentation/documentation/quartzcore/kcaemitterlayercircle
declare const kCAEmitterLayerCircle: CAEmitterLayerEmitterShape;
// doc://com.apple.documentation/documentation/quartzcore/kcaemitterlayercuboid
declare const kCAEmitterLayerCuboid: CAEmitterLayerEmitterShape;
// doc://com.apple.documentation/documentation/quartzcore/kcaemitterlayerline
declare const kCAEmitterLayerLine: CAEmitterLayerEmitterShape;
// doc://com.apple.documentation/documentation/quartzcore/kcaemitterlayerrectangle
declare const kCAEmitterLayerRectangle: CAEmitterLayerEmitterShape;
// doc://com.apple.documentation/documentation/quartzcore/kcaemitterlayersphere
declare const kCAEmitterLayerSphere: CAEmitterLayerEmitterShape;
// doc://com.apple.documentation/documentation/quartzcore/kcaemitterlayeradditive
declare const kCAEmitterLayerAdditive: CAEmitterLayerRenderMode;
// doc://com.apple.documentation/documentation/quartzcore/kcaemitterlayerbacktofront
declare const kCAEmitterLayerBackToFront: CAEmitterLayerRenderMode;
// doc://com.apple.documentation/documentation/quartzcore/kcaemitterlayeroldestfirst
declare const kCAEmitterLayerOldestFirst: CAEmitterLayerRenderMode;
// doc://com.apple.documentation/documentation/quartzcore/kcaemitterlayeroldestlast
declare const kCAEmitterLayerOldestLast: CAEmitterLayerRenderMode;
// doc://com.apple.documentation/documentation/quartzcore/kcaemitterlayerunordered
declare const kCAEmitterLayerUnordered: CAEmitterLayerRenderMode;
// doc://com.apple.documentation/documentation/quartzcore/kcagradientlayeraxial
declare const kCAGradientLayerAxial: CAGradientLayerType;
// doc://com.apple.documentation/documentation/quartzcore/kcagradientlayerconic
declare const kCAGradientLayerConic: CAGradientLayerType;
// doc://com.apple.documentation/documentation/quartzcore/kcagradientlayerradial
declare const kCAGradientLayerRadial: CAGradientLayerType;
// doc://com.apple.documentation/documentation/quartzcore/kcamediatimingfunctiondefault
declare const kCAMediaTimingFunctionDefault: CAMediaTimingFunctionName;
// doc://com.apple.documentation/documentation/quartzcore/kcamediatimingfunctioneasein
declare const kCAMediaTimingFunctionEaseIn: CAMediaTimingFunctionName;
// doc://com.apple.documentation/documentation/quartzcore/kcamediatimingfunctioneaseineaseout
declare const kCAMediaTimingFunctionEaseInEaseOut: CAMediaTimingFunctionName;
// doc://com.apple.documentation/documentation/quartzcore/kcamediatimingfunctioneaseout
declare const kCAMediaTimingFunctionEaseOut: CAMediaTimingFunctionName;
// doc://com.apple.documentation/documentation/quartzcore/kcamediatimingfunctionlinear
declare const kCAMediaTimingFunctionLinear: CAMediaTimingFunctionName;
// doc://com.apple.documentation/documentation/quartzcore/kcascrollboth
declare const kCAScrollBoth: CAScrollLayerScrollMode;
// doc://com.apple.documentation/documentation/quartzcore/kcascrollhorizontally
declare const kCAScrollHorizontally: CAScrollLayerScrollMode;
// doc://com.apple.documentation/documentation/quartzcore/kcascrollnone
declare const kCAScrollNone: CAScrollLayerScrollMode;
// doc://com.apple.documentation/documentation/quartzcore/kcascrollvertically
declare const kCAScrollVertically: CAScrollLayerScrollMode;
// doc://com.apple.documentation/documentation/quartzcore/kcafillruleevenodd
declare const kCAFillRuleEvenOdd: CAShapeLayerFillRule;
// doc://com.apple.documentation/documentation/quartzcore/kcafillrulenonzero
declare const kCAFillRuleNonZero: CAShapeLayerFillRule;
// doc://com.apple.documentation/documentation/quartzcore/kcalinecapbutt
declare const kCALineCapButt: CAShapeLayerLineCap;
// doc://com.apple.documentation/documentation/quartzcore/kcalinecapround
declare const kCALineCapRound: CAShapeLayerLineCap;
// doc://com.apple.documentation/documentation/quartzcore/kcalinecapsquare
declare const kCALineCapSquare: CAShapeLayerLineCap;
// doc://com.apple.documentation/documentation/quartzcore/kcalinejoinbevel
declare const kCALineJoinBevel: CAShapeLayerLineJoin;
// doc://com.apple.documentation/documentation/quartzcore/kcalinejoinmiter
declare const kCALineJoinMiter: CAShapeLayerLineJoin;
// doc://com.apple.documentation/documentation/quartzcore/kcalinejoinround
declare const kCALineJoinRound: CAShapeLayerLineJoin;
// doc://com.apple.documentation/documentation/quartzcore/kcaalignmentcenter
declare const kCAAlignmentCenter: CATextLayerAlignmentMode;
// doc://com.apple.documentation/documentation/quartzcore/kcaalignmentjustified
declare const kCAAlignmentJustified: CATextLayerAlignmentMode;
// doc://com.apple.documentation/documentation/quartzcore/kcaalignmentleft
declare const kCAAlignmentLeft: CATextLayerAlignmentMode;
// doc://com.apple.documentation/documentation/quartzcore/kcaalignmentnatural
declare const kCAAlignmentNatural: CATextLayerAlignmentMode;
// doc://com.apple.documentation/documentation/quartzcore/kcaalignmentright
declare const kCAAlignmentRight: CATextLayerAlignmentMode;
// doc://com.apple.documentation/documentation/quartzcore/kcatruncationend
declare const kCATruncationEnd: CATextLayerTruncationMode;
// doc://com.apple.documentation/documentation/quartzcore/kcatruncationmiddle
declare const kCATruncationMiddle: CATextLayerTruncationMode;
// doc://com.apple.documentation/documentation/quartzcore/kcatruncationnone
declare const kCATruncationNone: CATextLayerTruncationMode;
// doc://com.apple.documentation/documentation/quartzcore/kcatruncationstart
declare const kCATruncationStart: CATextLayerTruncationMode;
// doc://com.apple.documentation/documentation/quartzcore/kcatransitionfrombottom
declare const kCATransitionFromBottom: CATransitionSubtype;
// doc://com.apple.documentation/documentation/quartzcore/kcatransitionfromleft
declare const kCATransitionFromLeft: CATransitionSubtype;
// doc://com.apple.documentation/documentation/quartzcore/kcatransitionfromright
declare const kCATransitionFromRight: CATransitionSubtype;
// doc://com.apple.documentation/documentation/quartzcore/kcatransitionfromtop
declare const kCATransitionFromTop: CATransitionSubtype;
// doc://com.apple.documentation/documentation/quartzcore/kcatransitionfade
declare const kCATransitionFade: CATransitionType;
// doc://com.apple.documentation/documentation/quartzcore/kcatransitionmovein
declare const kCATransitionMoveIn: CATransitionType;
// doc://com.apple.documentation/documentation/quartzcore/kcatransitionpush
declare const kCATransitionPush: CATransitionType;
// doc://com.apple.documentation/documentation/quartzcore/kcatransitionreveal
declare const kCATransitionReveal: CATransitionType;
// doc://com.apple.documentation/documentation/quartzcore/kcavaluefunctionrotatex
declare const kCAValueFunctionRotateX: CAValueFunctionName;
// doc://com.apple.documentation/documentation/quartzcore/kcavaluefunctionrotatey
declare const kCAValueFunctionRotateY: CAValueFunctionName;
// doc://com.apple.documentation/documentation/quartzcore/kcavaluefunctionscalex
declare const kCAValueFunctionScaleX: CAValueFunctionName;
// doc://com.apple.documentation/documentation/quartzcore/kcavaluefunctionscaley
declare const kCAValueFunctionScaleY: CAValueFunctionName;
// doc://com.apple.documentation/documentation/quartzcore/kcavaluefunctionscalez
declare const kCAValueFunctionScaleZ: CAValueFunctionName;
// doc://com.apple.documentation/documentation/quartzcore/kcavaluefunctiontranslatex
declare const kCAValueFunctionTranslateX: CAValueFunctionName;
// doc://com.apple.documentation/documentation/quartzcore/kcavaluefunctiontranslatey
declare const kCAValueFunctionTranslateY: CAValueFunctionName;
// doc://com.apple.documentation/documentation/quartzcore/kcavaluefunctiontranslatez
declare const kCAValueFunctionTranslateZ: CAValueFunctionName;
