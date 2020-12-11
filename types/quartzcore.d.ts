declare namespace cocoascript {
  /**
   * A layer that provides a layer suitable for rendering OpenGL content.
   * doc://com.apple.documentation/documentation/quartzcore/caopengllayer
   */
  interface CAOpenGLLayer extends CALayer {
    // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1521873-colorspace
    colorspace(): cocoascript.CGColorSpaceRef;
    setColorspace(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1521900-wantsextendeddynamicrangecontent
    wantsExtendedDynamicRangeContent(): cocoascript.BOOL;
    setWantsExtendedDynamicRangeContent(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1522116-asynchronous
    asynchronous(): cocoascript.BOOL;
    setAsynchronous(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1522184-candrawincglcontext
    canDrawInCGLContext_pixelFormat_forLayerTime_displayTime(ctx: any, pf: any, t: cocoascript.CFTimeInterval, ts: cocoascript.CVTimeStamp):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1522316-drawincglcontext
    drawInCGLContext_pixelFormat_forLayerTime_displayTime(ctx: any, pf: any, t: cocoascript.CFTimeInterval, ts: cocoascript.CVTimeStamp):void;
    // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1522052-copycglpixelformatfordisplaymask
    copyCGLPixelFormatForDisplayMask(mask: number):any;
    // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1521910-releasecglpixelformat
    releaseCGLPixelFormat(pf: any):void;
    // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1521894-copycglcontextforpixelformat
    copyCGLContextForPixelFormat(pf: any):any;
    // doc://com.apple.documentation/documentation/quartzcore/caopengllayer/1521850-releasecglcontext
    releaseCGLContext(ctx: any):void;
    //
    alloc():cocoascript.CAOpenGLLayer;
    //
    init():cocoascript.CAOpenGLLayer;
  }
}

declare const CAOpenGLLayer: cocoascript.CAOpenGLLayer;
declare namespace cocoascript {
  /**
   * An object that manages image-based content and allows you to perform animations on that content.
   * doc://com.apple.documentation/documentation/quartzcore/calayer
   */
  interface CALayer extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410835-init
    init():cocoascript.CALayer;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410842-initwithlayer
    initWithLayer(layer: cocoascript.CALayer):cocoascript.CALayer;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410744-presentationlayer
    presentationLayer():cocoascript.CALayer;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410853-modellayer
    modelLayer():cocoascript.CALayer;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410984-delegate
    delegate(): cocoascript.CALayerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410773-contents
    contents(): cocoascript.id;
    setContents(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410866-contentsrect
    contentsRect(): cocoascript.CGRect;
    setContentsRect(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410740-contentscenter
    contentsCenter(): cocoascript.CGRect;
    setContentsCenter(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410926-display
    display():void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410757-drawincontext
    drawInContext(ctx: cocoascript.CGContextRef):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410872-contentsgravity
    contentsGravity(): cocoascript.CALayerContentsGravity;
    setContentsGravity(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410933-opacity
    opacity(): number;
    setOpacity(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410838-hidden
    hidden(): cocoascript.BOOL;
    setHidden(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410896-maskstobounds
    masksToBounds(): cocoascript.BOOL;
    setMasksToBounds(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410861-mask
    mask(): cocoascript.CALayer;
    setMask(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410924-doublesided
    doubleSided(): cocoascript.BOOL;
    setDoubleSided(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410818-cornerradius
    cornerRadius(): cocoascript.CGFloat;
    setCornerRadius(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/2877488-maskedcorners
    maskedCorners(): cocoascript.CACornerMask;
    setMaskedCorners(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410917-borderwidth
    borderWidth(): cocoascript.CGFloat;
    setBorderWidth(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410903-bordercolor
    borderColor(): cocoascript.CGColorRef;
    setBorderColor(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410966-backgroundcolor
    backgroundColor(): cocoascript.CGColorRef;
    setBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410751-shadowopacity
    shadowOpacity(): number;
    setShadowOpacity(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410819-shadowradius
    shadowRadius(): cocoascript.CGFloat;
    setShadowRadius(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410970-shadowoffset
    shadowOffset(): cocoascript.CGSize;
    setShadowOffset(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410829-shadowcolor
    shadowColor(): cocoascript.CGColorRef;
    setShadowColor(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410771-shadowpath
    shadowPath(): cocoascript.CGPathRef;
    setShadowPath(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410875-style
    style(): cocoascript.NSDictionary;
    setStyle(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1621285-allowsedgeantialiasing
    allowsEdgeAntialiasing(): cocoascript.BOOL;
    setAllowsEdgeAntialiasing(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1621277-allowsgroupopacity
    allowsGroupOpacity(): cocoascript.BOOL;
    setAllowsGroupOpacity(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410901-filters
    filters(): cocoascript.NSArray;
    setFilters(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410748-compositingfilter
    compositingFilter(): cocoascript.id;
    setCompositingFilter(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410827-backgroundfilters
    backgroundFilters(): cocoascript.NSArray;
    setBackgroundFilters(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410898-minificationfilter
    minificationFilter(): cocoascript.CALayerContentsFilter;
    setMinificationFilter(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410775-minificationfilterbias
    minificationFilterBias(): number;
    setMinificationFilterBias(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410907-magnificationfilter
    magnificationFilter(): cocoascript.CALayerContentsFilter;
    setMagnificationFilter(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410763-opaque
    opaque(): cocoascript.BOOL;
    setOpaque(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410892-edgeantialiasingmask
    edgeAntialiasingMask(): cocoascript.CAEdgeAntialiasingMask;
    setEdgeAntialiasingMask(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410777-contentsareflipped
    contentsAreFlipped():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410960-geometryflipped
    geometryFlipped(): cocoascript.BOOL;
    setGeometryFlipped(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410974-drawsasynchronously
    drawsAsynchronously(): cocoascript.BOOL;
    setDrawsAsynchronously(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410905-shouldrasterize
    shouldRasterize(): cocoascript.BOOL;
    setShouldRasterize(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410801-rasterizationscale
    rasterizationScale(): cocoascript.CGFloat;
    setRasterizationScale(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1792104-contentsformat
    contentsFormat(): cocoascript.CALayerContentsFormat;
    setContentsFormat(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410909-renderincontext
    renderInContext(ctx: cocoascript.CGContextRef):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410779-frame
    frame(): cocoascript.CGRect;
    setFrame(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410915-bounds
    bounds(): cocoascript.CGRect;
    setBounds(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410791-position
    position(): cocoascript.CGPoint;
    setPosition(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410884-zposition
    zPosition(): cocoascript.CGFloat;
    setZPosition(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410796-anchorpointz
    anchorPointZ(): cocoascript.CGFloat;
    setAnchorPointZ(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410817-anchorpoint
    anchorPoint(): cocoascript.CGPoint;
    setAnchorPoint(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410746-contentsscale
    contentsScale(): cocoascript.CGFloat;
    setContentsScale(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410836-transform
    transform(): cocoascript.CATransform3D;
    setTransform(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410888-sublayertransform
    sublayerTransform(): cocoascript.CATransform3D;
    setSublayerTransform(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410882-affinetransform
    affineTransform():cocoascript.CGAffineTransform;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410868-setaffinetransform
    setAffineTransform(m: cocoascript.CGAffineTransform):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410802-sublayers
    sublayers(): cocoascript.CALayer;
    setSublayers(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410761-superlayer
    superlayer(): cocoascript.CALayer;
    setSuperlayer(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410833-addsublayer
    addSublayer(layer: cocoascript.CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410767-removefromsuperlayer
    removeFromSuperlayer():void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410944-insertsublayer
    insertSublayer_atIndex(layer: cocoascript.CALayer, idx: cocoascript.unsigned):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410840-insertsublayer
    insertSublayer_below(layer: cocoascript.CALayer, sibling: cocoascript.CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410798-insertsublayer
    insertSublayer_above(layer: cocoascript.CALayer, sibling: cocoascript.CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410820-replacesublayer
    replaceSublayer_with(oldLayer: cocoascript.CALayer, newLayer: cocoascript.CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410855-setneedsdisplay
    setNeedsDisplay():void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410800-setneedsdisplayinrect
    setNeedsDisplayInRect(r: cocoascript.CGRect):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410923-needsdisplayonboundschange
    needsDisplayOnBoundsChange(): cocoascript.BOOL;
    setNeedsDisplayOnBoundsChange(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410813-displayifneeded
    displayIfNeeded():void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410958-needsdisplay
    needsDisplay():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410848-addanimation
    addAnimation_forKey(anim: cocoascript.CAAnimation, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410808-animationforkey
    animationForKey(key: cocoascript.NSString):cocoascript.CAAnimation;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410810-removeallanimations
    removeAllAnimations():void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410939-removeanimationforkey
    removeAnimationForKey(key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410937-animationkeys
    animationKeys():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410749-layoutmanager
    layoutManager(): cocoascript.CALayoutManager;
    setLayoutManager(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410946-setneedslayout
    setNeedsLayout():void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410935-layoutsublayers
    layoutSublayers():void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410873-layoutifneeded
    layoutIfNeeded():void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410956-needslayout
    needsLayout():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410877-autoresizingmask
    autoresizingMask(): cocoascript.CAAutoresizingMask;
    setAutoresizingMask(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410894-resizewitholdsuperlayersize
    resizeWithOldSuperlayerSize(size: cocoascript.CGSize):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410929-resizesublayerswitholdsize
    resizeSublayersWithOldSize(size: cocoascript.CGSize):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410980-preferredframesize
    preferredFrameSize():cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1521906-constraints
    constraints(): cocoascript.CAConstraint;
    setConstraints(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1521899-addconstraint
    addConstraint(c: cocoascript.CAConstraint):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410844-actionforkey
    actionForKey(event: cocoascript.NSString):cocoascript.CAAction;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410789-actions
    actions(): cocoascript.CAAction;
    setActions(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410825-convertpoint
    convertPoint_fromLayer(p: cocoascript.CGPoint, l: cocoascript.CALayer):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410881-convertpoint
    convertPoint_toLayer(p: cocoascript.CGPoint, l: cocoascript.CALayer):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410948-convertrect
    convertRect_fromLayer(r: cocoascript.CGRect, l: cocoascript.CALayer):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410742-convertrect
    convertRect_toLayer(r: cocoascript.CGRect, l: cocoascript.CALayer):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410821-converttime
    convertTime_fromLayer(t: cocoascript.CFTimeInterval, l: cocoascript.CALayer):cocoascript.CFTimeInterval;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410823-converttime
    convertTime_toLayer(t: cocoascript.CFTimeInterval, l: cocoascript.CALayer):cocoascript.CFTimeInterval;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410972-hittest
    hitTest(p: cocoascript.CGPoint):cocoascript.CALayer;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410857-containspoint
    containsPoint(p: cocoascript.CGPoint):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1521892-visiblerect
    visibleRect(): cocoascript.CGRect;
    setVisibleRect(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1522202-scrollpoint
    scrollPoint(p: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1522139-scrollrecttovisible
    scrollRectToVisible(r: cocoascript.CGRect):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410879-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/1410753-shouldarchivevalueforkey
    shouldArchiveValueForKey(key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartzcore/calayer/3152596-cornercurve
    cornerCurve(): cocoascript.CALayerCornerCurve;
    setCornerCurve(): void;
    //
    alloc():cocoascript.CALayer;
    //
    init():cocoascript.CALayer;
  }
}

declare const CALayer: cocoascript.CALayer;
declare const kCAGravityResize: cocoascript.CALayerContentsGravity;
declare const kCAGravityResizeAspect: cocoascript.CALayerContentsGravity;
declare const kCAGravityResizeAspectFill: cocoascript.CALayerContentsGravity;
declare namespace cocoascript {
  /**
   * The abstract superclass for animations in Core Animation.
   * doc://com.apple.documentation/documentation/quartzcore/caanimation
   */
  interface CAAnimation extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1412458-removedoncompletion
    removedOnCompletion(): cocoascript.BOOL;
    setRemovedOnCompletion(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1412456-timingfunction
    timingFunction(): cocoascript.CAMediaTimingFunction;
    setTimingFunction(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1412490-delegate
    delegate(): cocoascript.CAAnimationDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1412525-shouldarchivevalueforkey
    shouldArchiveValueForKey(key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1523819-usesscenetimebase
    usesSceneTimeBase(): cocoascript.BOOL;
    setUsesSceneTimeBase(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1523370-fadeinduration
    fadeInDuration(): cocoascript.CGFloat;
    setFadeInDuration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1522959-fadeoutduration
    fadeOutDuration(): cocoascript.CGFloat;
    setFadeOutDuration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1523940-animationevents
    animationEvents(): cocoascript.SCNAnimationEvent;
    setAnimationEvents(): void;
    //
    alloc():cocoascript.CAAnimation;
    //
    init():cocoascript.CAAnimation;
  }
}

declare const CAAnimation: cocoascript.CAAnimation;
declare namespace cocoascript {
  /**
   * A mechanism for grouping multiple layer-tree operations into atomic updates to the render tree.
   * doc://com.apple.documentation/documentation/quartzcore/catransaction
   */
  interface CATransaction extends NSObject {
    //
    alloc():cocoascript.CATransaction;
    //
    init():cocoascript.CATransaction;
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
    device(): cocoascript.MTLDevice;
    setDevice(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/3175021-preferreddevice
    preferredDevice(): cocoascript.MTLDevice;
    setPreferredDevice(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478155-pixelformat
    pixelFormat(): cocoascript.MTLPixelFormat;
    setPixelFormat(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478170-colorspace
    colorspace(): cocoascript.CGColorSpaceRef;
    setColorspace(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478168-framebufferonly
    framebufferOnly(): cocoascript.BOOL;
    setFramebufferOnly(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478174-drawablesize
    drawableSize(): cocoascript.CGSize;
    setDrawableSize(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478157-presentswithtransaction
    presentsWithTransaction(): cocoascript.BOOL;
    setPresentsWithTransaction(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/2887087-displaysyncenabled
    displaySyncEnabled(): cocoascript.BOOL;
    setDisplaySyncEnabled(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478161-wantsextendeddynamicrangecontent
    wantsExtendedDynamicRangeContent(): cocoascript.BOOL;
    setWantsExtendedDynamicRangeContent(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/3182052-edrmetadata
    EDRMetadata(): cocoascript.CAEDRMetadata;
    setEDRMetadata(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/1478172-nextdrawable
    nextDrawable():cocoascript.CAMetalDrawable;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/2938720-maximumdrawablecount
    maximumDrawableCount(): cocoascript.NSUInteger;
    setMaximumDrawableCount(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametallayer/2887086-allowsnextdrawabletimeout
    allowsNextDrawableTimeout(): cocoascript.BOOL;
    setAllowsNextDrawableTimeout(): void;
    //
    alloc():cocoascript.CAMetalLayer;
    //
    init():cocoascript.CAMetalLayer;
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
    texture(): cocoascript.MTLTexture;
    setTexture(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cametaldrawable/1478165-layer
    layer(): cocoascript.CAMetalLayer;
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
    presentsWithTransaction(): cocoascript.BOOL;
    setPresentsWithTransaction(): void;
    //
    alloc():cocoascript.CAEAGLLayer;
    //
    init():cocoascript.CAEAGLLayer;
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
    HLGMetadata(): cocoascript.CAEDRMetadata;
    setHLGMetadata(): void;
    //
    alloc():cocoascript.CAEDRMetadata;
    //
    init():cocoascript.CAEDRMetadata;
  }
}

declare const CAEDRMetadata: cocoascript.CAEDRMetadata;
declare namespace cocoascript {
  /**
   * A layer that allows an application to render a layer tree into a Core OpenGL context.
   * doc://com.apple.documentation/documentation/quartzcore/carenderer
   */
  interface CARenderer extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519583-layer
    layer(): cocoascript.CALayer;
    setLayer(): void;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519591-bounds
    bounds(): cocoascript.CGRect;
    setBounds(): void;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519595-beginframeattime
    beginFrameAtTime_timeStamp(t: cocoascript.CFTimeInterval, ts: cocoascript.CVTimeStamp):void;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519594-updatebounds
    updateBounds():cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519585-addupdaterect
    addUpdateRect(r: cocoascript.CGRect):void;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519582-render
    render():void;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519592-nextframetime
    nextFrameTime():cocoascript.CFTimeInterval;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/1519593-endframe
    endFrame():void;
    // doc://com.apple.documentation/documentation/quartzcore/carenderer/2998892-setdestination
    setDestination(tex: cocoascript.MTLTexture):void;
    //
    alloc():cocoascript.CARenderer;
    //
    init():cocoascript.CARenderer;
  }
}

declare const CARenderer: cocoascript.CARenderer;
declare namespace cocoascript {
  /**
   * A layer that provides a way to asynchronously provide tiles of the layer's content, potentially cached at multiple levels of detail.
   * doc://com.apple.documentation/documentation/quartzcore/catiledlayer
   */
  interface CATiledLayer extends CALayer {
    // doc://com.apple.documentation/documentation/quartzcore/catiledlayer/1522244-levelsofdetail
    levelsOfDetail(): cocoascript.size_t;
    setLevelsOfDetail(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catiledlayer/1522099-levelsofdetailbias
    levelsOfDetailBias(): cocoascript.size_t;
    setLevelsOfDetailBias(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catiledlayer/1522114-tilesize
    tileSize(): cocoascript.CGSize;
    setTileSize(): void;
    //
    alloc():cocoascript.CATiledLayer;
    //
    init():cocoascript.CATiledLayer;
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
    displayLayer(layer: cocoascript.CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayerdelegate/2097262-drawlayer
    drawLayer_inContext(layer: cocoascript.CALayer, ctx: cocoascript.CGContextRef):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayerdelegate/2097263-layerwilldraw
    layerWillDraw(layer: cocoascript.CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayerdelegate/2097257-layoutsublayersoflayer
    layoutSublayersOfLayer(layer: cocoascript.CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayerdelegate/2097264-actionforlayer
    actionForLayer_forKey(layer: cocoascript.CALayer, event: cocoascript.NSString):cocoascript.CAAction;
  }
}
declare namespace cocoascript {
  /**
   * Methods your app can implement to respond when animations start and stop.
   * doc://com.apple.documentation/documentation/quartzcore/caanimationdelegate
   */
  interface CAAnimationDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/caanimationdelegate/2097265-animationdidstart
    animationDidStart(anim: cocoascript.CAAnimation):void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimationdelegate/2097259-animationdidstop
    animationDidStop_finished(anim: cocoascript.CAAnimation, flag: cocoascript.BOOL):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods that allow an object to manage the layout of a layer and its sublayers.
   * doc://com.apple.documentation/documentation/quartzcore/calayoutmanager
   */
  interface CALayoutManager extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/calayoutmanager/2097258-invalidatelayoutoflayer
    invalidateLayoutOfLayer(layer: cocoascript.CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayoutmanager/2097260-layoutsublayersoflayer
    layoutSublayersOfLayer(layer: cocoascript.CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayoutmanager/2097256-preferredsizeoflayer
    preferredSizeOfLayer(layer: cocoascript.CALayer):cocoascript.CGSize;
  }
}
declare namespace cocoascript {
  /**
   * Methods that model a hierarchical timing system, allowing objects to map time between their parent and local time.
   * doc://com.apple.documentation/documentation/quartzcore/camediatiming
   */
  interface CAMediaTiming {
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427654-begintime
    beginTime(): cocoascript.CFTimeInterval;
    setBeginTime(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427650-timeoffset
    timeOffset(): cocoascript.CFTimeInterval;
    setTimeOffset(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427666-repeatcount
    repeatCount(): number;
    setRepeatCount(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427643-repeatduration
    repeatDuration(): cocoascript.CFTimeInterval;
    setRepeatDuration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427652-duration
    duration(): cocoascript.CFTimeInterval;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427647-speed
    speed(): number;
    setSpeed(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427645-autoreverses
    autoreverses(): cocoascript.BOOL;
    setAutoreverses(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427656-fillmode
    fillMode(): cocoascript.CAMediaTimingFillMode;
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
    runActionForKey_object_arguments(event: cocoascript.NSString, anObject: cocoascript.CAAction, dict: cocoascript.NSDictionary):void;
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
}declare namespace cocoascript {
  /**
   * A representation of a single layout constraint between two layers.
   * doc://com.apple.documentation/documentation/quartzcore/caconstraint
   */
  interface CAConstraint extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1522213-initwithattribute
    initWithAttribute_relativeTo_attribute_scale_offset(attr: cocoascript.CAConstraintAttribute, srcId: cocoascript.NSString, srcAttr: cocoascript.CAConstraintAttribute, m: cocoascript.CGFloat, c: cocoascript.CGFloat):cocoascript.CAConstraint;
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1522186-attribute
    attribute(): cocoascript.CAConstraintAttribute;
    setAttribute(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1522142-offset
    offset(): cocoascript.CGFloat;
    setOffset(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1521911-scale
    scale(): cocoascript.CGFloat;
    setScale(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1522385-sourceattribute
    sourceAttribute(): cocoascript.CAConstraintAttribute;
    setSourceAttribute(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caconstraint/1522224-sourcename
    sourceName(): cocoascript.NSString;
    setSourceName(): void;
    //
    alloc():cocoascript.CAConstraint;
    //
    init():cocoascript.CAConstraint;
  }
}

declare const CAConstraint: cocoascript.CAConstraint;
declare namespace cocoascript {
  /**
   * An object that provides a constraint-based layout manager.
   * doc://com.apple.documentation/documentation/quartzcore/caconstraintlayoutmanager
   */
  interface CAConstraintLayoutManager extends NSObject {
    //
    alloc():cocoascript.CAConstraintLayoutManager;
    //
    init():cocoascript.CAConstraintLayoutManager;
  }
}

declare const CAConstraintLayoutManager: cocoascript.CAConstraintLayoutManager;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/calayercontentsgravity
  type CALayerContentsGravity = cocoascript.NSString;
}
declare const kCAGravityTop: cocoascript.CALayerContentsGravity;
declare const kCAGravityBottom: cocoascript.CALayerContentsGravity;
declare const kCAGravityCenter: cocoascript.CALayerContentsGravity;
declare const kCAGravityBottomLeft: cocoascript.CALayerContentsGravity;
declare const kCAGravityTopLeft: cocoascript.CALayerContentsGravity;
declare namespace cocoascript {
  /**
   * An object that provides a flexible method of defining animated transformations.
   * doc://com.apple.documentation/documentation/quartzcore/cavaluefunction
   */
  interface CAValueFunction extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/cavaluefunction/1521888-name
    name(): cocoascript.CAValueFunctionName;
    setName(): void;
    //
    alloc():cocoascript.CAValueFunction;
    //
    init():cocoascript.CAValueFunction;
  }
}

declare const CAValueFunction: cocoascript.CAValueFunction;
declare namespace cocoascript {
  /**
   * A function that defines the pacing of an animation as a timing curve.
   * doc://com.apple.documentation/documentation/quartzcore/camediatimingfunction
   */
  interface CAMediaTimingFunction extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/camediatimingfunction/1522235-initwithcontrolpoints
    initWithControlPoints(c1x: number):cocoascript.CAMediaTimingFunction;
    // doc://com.apple.documentation/documentation/quartzcore/camediatimingfunction/1522057-getcontrolpointatindex
    getControlPointAtIndex_values(idx: cocoascript.size_t, ptr: number):void;
    //
    alloc():cocoascript.CAMediaTimingFunction;
    //
    init():cocoascript.CAMediaTimingFunction;
  }
}

declare const CAMediaTimingFunction: cocoascript.CAMediaTimingFunction;
declare namespace cocoascript {
  /**
   * The definition of a particle emitted by a CAEmitterLayer.
   * doc://com.apple.documentation/documentation/quartzcore/caemittercell
   */
  interface CAEmitterCell extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522109-contents
    contents(): cocoascript.id;
    setContents(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522124-contentsrect
    contentsRect(): cocoascript.CGRect;
    setContentsRect(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521866-emittercells
    emitterCells(): cocoascript.CAEmitterCell;
    setEmitterCells(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521831-enabled
    enabled(): cocoascript.BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522322-color
    color(): cocoascript.CGColorRef;
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
    magnificationFilter(): cocoascript.NSString;
    setMagnificationFilter(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522222-minificationfilter
    minificationFilter(): cocoascript.NSString;
    setMinificationFilter(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521907-minificationfilterbias
    minificationFilterBias(): number;
    setMinificationFilterBias(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522287-scale
    scale(): cocoascript.CGFloat;
    setScale(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521915-scalerange
    scaleRange(): cocoascript.CGFloat;
    setScaleRange(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522197-contentsscale
    contentsScale(): cocoascript.CGFloat;
    setContentsScale(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521909-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521925-style
    style(): cocoascript.NSDictionary;
    setStyle(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522361-spin
    spin(): cocoascript.CGFloat;
    setSpin(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522084-spinrange
    spinRange(): cocoascript.CGFloat;
    setSpinRange(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521857-emissionlatitude
    emissionLatitude(): cocoascript.CGFloat;
    setEmissionLatitude(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522013-emissionlongitude
    emissionLongitude(): cocoascript.CGFloat;
    setEmissionLongitude(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521847-emissionrange
    emissionRange(): cocoascript.CGFloat;
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
    scaleSpeed(): cocoascript.CGFloat;
    setScaleSpeed(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521837-velocity
    velocity(): cocoascript.CGFloat;
    setVelocity(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522330-velocityrange
    velocityRange(): cocoascript.CGFloat;
    setVelocityRange(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1521879-xacceleration
    xAcceleration(): cocoascript.CGFloat;
    setXAcceleration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522077-yacceleration
    yAcceleration(): cocoascript.CGFloat;
    setYAcceleration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522298-zacceleration
    zAcceleration(): cocoascript.CGFloat;
    setZAcceleration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemittercell/1522005-shouldarchivevalueforkey
    shouldArchiveValueForKey(key: cocoascript.NSString):cocoascript.BOOL;
    //
    alloc():cocoascript.CAEmitterCell;
    //
    init():cocoascript.CAEmitterCell;
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
    fromValue(): cocoascript.id;
    setFromValue(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cabasicanimation/1412523-tovalue
    toValue(): cocoascript.id;
    setToValue(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cabasicanimation/1412445-byvalue
    byValue(): cocoascript.id;
    setByValue(): void;
    //
    alloc():cocoascript.CABasicAnimation;
    //
    init():cocoascript.CABasicAnimation;
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
    values(): cocoascript.NSArray;
    setValues(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412474-path
    path(): cocoascript.CGPathRef;
    setPath(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412522-keytimes
    keyTimes(): cocoascript.NSNumber;
    setKeyTimes(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412465-timingfunctions
    timingFunctions(): cocoascript.CAMediaTimingFunction;
    setTimingFunctions(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412500-calculationmode
    calculationMode(): cocoascript.CAAnimationCalculationMode;
    setCalculationMode(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412454-rotationmode
    rotationMode(): cocoascript.CAAnimationRotationMode;
    setRotationMode(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412475-tensionvalues
    tensionValues(): cocoascript.NSNumber;
    setTensionValues(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412491-continuityvalues
    continuityValues(): cocoascript.NSNumber;
    setContinuityValues(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412485-biasvalues
    biasValues(): cocoascript.NSNumber;
    setBiasValues(): void;
    //
    alloc():cocoascript.CAKeyframeAnimation;
    //
    init():cocoascript.CAKeyframeAnimation;
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
    animations(): cocoascript.CAAnimation;
    setAnimations(): void;
    //
    alloc():cocoascript.CAAnimationGroup;
    //
    init():cocoascript.CAAnimationGroup;
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
    type(): cocoascript.CATransitionType;
    setType(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catransition/1412467-subtype
    subtype(): cocoascript.CATransitionSubtype;
    setSubtype(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catransition/1412506-filter
    filter(): cocoascript.id;
    setFilter(): void;
    //
    alloc():cocoascript.CATransition;
    //
    init():cocoascript.CATransition;
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
    keyPath(): cocoascript.NSString;
    setKeyPath(): void;
    // doc://com.apple.documentation/documentation/quartzcore/capropertyanimation/1412538-cumulative
    cumulative(): cocoascript.BOOL;
    setCumulative(): void;
    // doc://com.apple.documentation/documentation/quartzcore/capropertyanimation/1412493-additive
    additive(): cocoascript.BOOL;
    setAdditive(): void;
    // doc://com.apple.documentation/documentation/quartzcore/capropertyanimation/1412447-valuefunction
    valueFunction(): cocoascript.CAValueFunction;
    setValueFunction(): void;
    //
    alloc():cocoascript.CAPropertyAnimation;
    //
    init():cocoascript.CAPropertyAnimation;
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
    damping(): cocoascript.CGFloat;
    setDamping(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caspringanimation/1412443-initialvelocity
    initialVelocity(): cocoascript.CGFloat;
    setInitialVelocity(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caspringanimation/1412540-mass
    mass(): cocoascript.CGFloat;
    setMass(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caspringanimation/1412524-settlingduration
    settlingDuration(): cocoascript.CFTimeInterval;
    setSettlingDuration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caspringanimation/1412515-stiffness
    stiffness(): cocoascript.CGFloat;
    setStiffness(): void;
    //
    alloc():cocoascript.CASpringAnimation;
    //
    init():cocoascript.CASpringAnimation;
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
    string(): cocoascript.id;
    setString(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515303-font
    font(): cocoascript.CFTypeRef;
    setFont(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515290-fontsize
    fontSize(): cocoascript.CGFloat;
    setFontSize(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515305-foregroundcolor
    foregroundColor(): cocoascript.CGColorRef;
    setForegroundColor(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515300-allowsfontsubpixelquantization
    allowsFontSubpixelQuantization(): cocoascript.BOOL;
    setAllowsFontSubpixelQuantization(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515302-wrapped
    wrapped(): cocoascript.BOOL;
    setWrapped(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515301-alignmentmode
    alignmentMode(): cocoascript.CATextLayerAlignmentMode;
    setAlignmentMode(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515296-truncationmode
    truncationMode(): cocoascript.CATextLayerTruncationMode;
    setTruncationMode(): void;
    //
    alloc():cocoascript.CATextLayer;
    //
    init():cocoascript.CATextLayer;
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
    path(): cocoascript.CGPathRef;
    setPath(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1522248-fillcolor
    fillColor(): cocoascript.CGColorRef;
    setFillColor(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1522146-fillrule
    fillRule(): cocoascript.CAShapeLayerFillRule;
    setFillRule(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521905-linecap
    lineCap(): cocoascript.CAShapeLayerLineCap;
    setLineCap(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521921-linedashpattern
    lineDashPattern(): cocoascript.NSNumber;
    setLineDashPattern(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521856-linedashphase
    lineDashPhase(): cocoascript.CGFloat;
    setLineDashPhase(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1522147-linejoin
    lineJoin(): cocoascript.CAShapeLayerLineJoin;
    setLineJoin(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521890-linewidth
    lineWidth(): cocoascript.CGFloat;
    setLineWidth(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521870-miterlimit
    miterLimit(): cocoascript.CGFloat;
    setMiterLimit(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521897-strokecolor
    strokeColor(): cocoascript.CGColorRef;
    setStrokeColor(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521929-strokestart
    strokeStart(): cocoascript.CGFloat;
    setStrokeStart(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1522252-strokeend
    strokeEnd(): cocoascript.CGFloat;
    setStrokeEnd(): void;
    //
    alloc():cocoascript.CAShapeLayer;
    //
    init():cocoascript.CAShapeLayer;
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
    colors(): cocoascript.NSArray;
    setColors(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cagradientlayer/1462410-locations
    locations(): cocoascript.NSNumber;
    setLocations(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cagradientlayer/1462412-endpoint
    endPoint(): cocoascript.CGPoint;
    setEndPoint(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cagradientlayer/1462408-startpoint
    startPoint(): cocoascript.CGPoint;
    setStartPoint(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cagradientlayer/1462413-type
    type(): cocoascript.CAGradientLayerType;
    setType(): void;
    //
    alloc():cocoascript.CAGradientLayer;
    //
    init():cocoascript.CAGradientLayer;
  }
}

declare const CAGradientLayer: cocoascript.CAGradientLayer;
declare namespace cocoascript {
  /**
   * A timer object that allows your application to synchronize its drawing to the refresh rate of the display.
   * doc://com.apple.documentation/documentation/quartzcore/cadisplaylink
   */
  interface CADisplayLink extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621323-addtorunloop
    addToRunLoop_forMode(runloop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621325-removefromrunloop
    removeFromRunLoop_forMode(runloop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621293-invalidate
    invalidate():void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621292-duration
    duration(): cocoascript.CFTimeInterval;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1648421-preferredframespersecond
    preferredFramesPerSecond(): cocoascript.NSInteger;
    setPreferredFramesPerSecond(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621231-frameinterval
    frameInterval(): cocoascript.NSInteger;
    setFrameInterval(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621229-paused
    paused(): cocoascript.BOOL;
    setPaused(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1621257-timestamp
    timestamp(): cocoascript.CFTimeInterval;
    setTimestamp(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cadisplaylink/1648422-targettimestamp
    targetTimestamp(): cocoascript.CFTimeInterval;
    setTargetTimestamp(): void;
    //
    alloc():cocoascript.CADisplayLink;
    //
    init():cocoascript.CADisplayLink;
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
    emitterCells(): cocoascript.CAEmitterCell;
    setEmitterCells(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1522104-rendermode
    renderMode(): cocoascript.CAEmitterLayerRenderMode;
    setRenderMode(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1522289-emitterposition
    emitterPosition(): cocoascript.CGPoint;
    setEmitterPosition(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1521919-emittershape
    emitterShape(): cocoascript.CAEmitterLayerEmitterShape;
    setEmitterShape(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1522169-emitterzposition
    emitterZPosition(): cocoascript.CGFloat;
    setEmitterZPosition(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1521844-emitterdepth
    emitterDepth(): cocoascript.CGFloat;
    setEmitterDepth(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1521869-emittersize
    emitterSize(): cocoascript.CGSize;
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
    emitterMode(): cocoascript.CAEmitterLayerEmitterMode;
    setEmitterMode(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1522144-lifetime
    lifetime(): number;
    setLifetime(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caemitterlayer/1521872-preservesdepth
    preservesDepth(): cocoascript.BOOL;
    setPreservesDepth(): void;
    //
    alloc():cocoascript.CAEmitterLayer;
    //
    init():cocoascript.CAEmitterLayer;
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
    scrollMode(): cocoascript.CAScrollLayerScrollMode;
    setScrollMode(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cascrolllayer/1522021-scrolltopoint
    scrollToPoint(p: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/quartzcore/cascrolllayer/1522167-scrolltorect
    scrollToRect(r: cocoascript.CGRect):void;
    //
    alloc():cocoascript.CAScrollLayer;
    //
    init():cocoascript.CAScrollLayer;
  }
}

declare const CAScrollLayer: cocoascript.CAScrollLayer;
declare namespace cocoascript {
  /**
   * Objects used to create true 3D layer hierarchies, rather than the flattened hierarchy rendering model used by other
   * doc://com.apple.documentation/documentation/quartzcore/catransformlayer
   */
  interface CATransformLayer extends CALayer {
    //
    alloc():cocoascript.CATransformLayer;
    //
    init():cocoascript.CATransformLayer;
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
    instanceCount(): cocoascript.NSInteger;
    setInstanceCount(): void;
    // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1522391-instancedelay
    instanceDelay(): cocoascript.CFTimeInterval;
    setInstanceDelay(): void;
    // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1522312-instancetransform
    instanceTransform(): cocoascript.CATransform3D;
    setInstanceTransform(): void;
    // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1522095-preservesdepth
    preservesDepth(): cocoascript.BOOL;
    setPreservesDepth(): void;
    // doc://com.apple.documentation/documentation/quartzcore/careplicatorlayer/1522154-instancecolor
    instanceColor(): cocoascript.CGColorRef;
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
    alloc():cocoascript.CAReplicatorLayer;
    //
    init():cocoascript.CAReplicatorLayer;
  }
}

declare const CAReplicatorLayer: cocoascript.CAReplicatorLayer;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/quartzcore/caremotelayerclient
   */
  interface CARemoteLayerClient extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/caremotelayerclient/1418377-initwithserverport
    initWithServerPort(port: cocoascript.mach_port_t):cocoascript.CARemoteLayerClient;
    // doc://com.apple.documentation/documentation/quartzcore/caremotelayerclient/1418375-clientid
    clientId(): number;
    setClientId(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caremotelayerclient/1418373-layer
    layer(): cocoascript.CALayer;
    setLayer(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caremotelayerclient/1418372-invalidate
    invalidate():void;
    //
    alloc():cocoascript.CARemoteLayerClient;
    //
    init():cocoascript.CARemoteLayerClient;
  }
}

declare const CARemoteLayerClient: cocoascript.CARemoteLayerClient;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/quartzcore/caremotelayerserver
   */
  interface CARemoteLayerServer extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/caremotelayerserver/1521922-serverport
    serverPort(): cocoascript.mach_port_t;
    setServerPort(): void;
    //
    alloc():cocoascript.CARemoteLayerServer;
    //
    init():cocoascript.CARemoteLayerServer;
  }
}

declare const CARemoteLayerServer: cocoascript.CARemoteLayerServer;
declare const kCAFilterLinear: cocoascript.CALayerContentsFilter;
declare const kCAFilterNearest: cocoascript.CALayerContentsFilter;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/calayercontentsfilter
  type CALayerContentsFilter = cocoascript.NSString;
}
declare const kCAGravityLeft: cocoascript.CALayerContentsGravity;
declare const kCAGravityRight: cocoascript.CALayerContentsGravity;
declare const kCAGravityTopRight: cocoascript.CALayerContentsGravity;
declare const kCAGravityBottomRight: cocoascript.CALayerContentsGravity;
declare const kCAFilterTrilinear: cocoascript.CALayerContentsFilter;
declare const kCAContentsFormatRGBA8Uint: cocoascript.CALayerContentsFormat;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/quartzcore/calayercontentsformat
  type CALayerContentsFormat = cocoascript.NSString;
}
declare const CATransform3DIdentity: cocoascript.CATransform3D;
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
declare const kCAValueFunctionRotateZ: cocoascript.CAValueFunctionName;
declare const kCAValueFunctionScale: cocoascript.CAValueFunctionName;
declare const kCAValueFunctionTranslate: cocoascript.CAValueFunctionName;
declare const kCAEmitterLayerPoint: cocoascript.CAEmitterLayerEmitterShape;
declare const kCAFillModeRemoved: cocoascript.CAMediaTimingFillMode;
declare const kCAFillModeForwards: cocoascript.CAMediaTimingFillMode;
declare const kCAFillModeBackwards: cocoascript.CAMediaTimingFillMode;
declare const kCAFillModeBoth: cocoascript.CAMediaTimingFillMode;
declare const kCAContentsFormatRGBA16Float: cocoascript.CALayerContentsFormat;
declare const kCAContentsFormatGray8Uint: cocoascript.CALayerContentsFormat;
declare const kCACornerCurveCircular: cocoascript.CALayerCornerCurve;
declare const kCACornerCurveContinuous: cocoascript.CALayerCornerCurve;
declare const kCAAnimationCubic: cocoascript.CAAnimationCalculationMode;
declare const kCAAnimationCubicPaced: cocoascript.CAAnimationCalculationMode;
declare const kCAAnimationDiscrete: cocoascript.CAAnimationCalculationMode;
declare const kCAAnimationLinear: cocoascript.CAAnimationCalculationMode;
declare const kCAAnimationPaced: cocoascript.CAAnimationCalculationMode;
declare const kCAAnimationRotateAuto: cocoascript.CAAnimationRotationMode;
declare const kCAAnimationRotateAutoReverse: cocoascript.CAAnimationRotationMode;
declare const kCAEmitterLayerOutline: cocoascript.CAEmitterLayerEmitterMode;
declare const kCAEmitterLayerPoints: cocoascript.CAEmitterLayerEmitterMode;
declare const kCAEmitterLayerSurface: cocoascript.CAEmitterLayerEmitterMode;
declare const kCAEmitterLayerVolume: cocoascript.CAEmitterLayerEmitterMode;
declare const kCAEmitterLayerCircle: cocoascript.CAEmitterLayerEmitterShape;
declare const kCAEmitterLayerCuboid: cocoascript.CAEmitterLayerEmitterShape;
declare const kCAEmitterLayerLine: cocoascript.CAEmitterLayerEmitterShape;
declare const kCAEmitterLayerRectangle: cocoascript.CAEmitterLayerEmitterShape;
declare const kCAEmitterLayerSphere: cocoascript.CAEmitterLayerEmitterShape;
declare const kCAEmitterLayerAdditive: cocoascript.CAEmitterLayerRenderMode;
declare const kCAEmitterLayerBackToFront: cocoascript.CAEmitterLayerRenderMode;
declare const kCAEmitterLayerOldestFirst: cocoascript.CAEmitterLayerRenderMode;
declare const kCAEmitterLayerOldestLast: cocoascript.CAEmitterLayerRenderMode;
declare const kCAEmitterLayerUnordered: cocoascript.CAEmitterLayerRenderMode;
declare const kCAGradientLayerAxial: cocoascript.CAGradientLayerType;
declare const kCAGradientLayerConic: cocoascript.CAGradientLayerType;
declare const kCAGradientLayerRadial: cocoascript.CAGradientLayerType;
declare const kCAMediaTimingFunctionDefault: cocoascript.CAMediaTimingFunctionName;
declare const kCAMediaTimingFunctionEaseIn: cocoascript.CAMediaTimingFunctionName;
declare const kCAMediaTimingFunctionEaseInEaseOut: cocoascript.CAMediaTimingFunctionName;
declare const kCAMediaTimingFunctionEaseOut: cocoascript.CAMediaTimingFunctionName;
declare const kCAMediaTimingFunctionLinear: cocoascript.CAMediaTimingFunctionName;
declare const kCAScrollBoth: cocoascript.CAScrollLayerScrollMode;
declare const kCAScrollHorizontally: cocoascript.CAScrollLayerScrollMode;
declare const kCAScrollNone: cocoascript.CAScrollLayerScrollMode;
declare const kCAScrollVertically: cocoascript.CAScrollLayerScrollMode;
declare const kCAFillRuleEvenOdd: cocoascript.CAShapeLayerFillRule;
declare const kCAFillRuleNonZero: cocoascript.CAShapeLayerFillRule;
declare const kCALineCapButt: cocoascript.CAShapeLayerLineCap;
declare const kCALineCapRound: cocoascript.CAShapeLayerLineCap;
declare const kCALineCapSquare: cocoascript.CAShapeLayerLineCap;
declare const kCALineJoinBevel: cocoascript.CAShapeLayerLineJoin;
declare const kCALineJoinMiter: cocoascript.CAShapeLayerLineJoin;
declare const kCALineJoinRound: cocoascript.CAShapeLayerLineJoin;
declare const kCAAlignmentCenter: cocoascript.CATextLayerAlignmentMode;
declare const kCAAlignmentJustified: cocoascript.CATextLayerAlignmentMode;
declare const kCAAlignmentLeft: cocoascript.CATextLayerAlignmentMode;
declare const kCAAlignmentNatural: cocoascript.CATextLayerAlignmentMode;
declare const kCAAlignmentRight: cocoascript.CATextLayerAlignmentMode;
declare const kCATruncationEnd: cocoascript.CATextLayerTruncationMode;
declare const kCATruncationMiddle: cocoascript.CATextLayerTruncationMode;
declare const kCATruncationNone: cocoascript.CATextLayerTruncationMode;
declare const kCATruncationStart: cocoascript.CATextLayerTruncationMode;
declare const kCATransitionFromBottom: cocoascript.CATransitionSubtype;
declare const kCATransitionFromLeft: cocoascript.CATransitionSubtype;
declare const kCATransitionFromRight: cocoascript.CATransitionSubtype;
declare const kCATransitionFromTop: cocoascript.CATransitionSubtype;
declare const kCATransitionFade: cocoascript.CATransitionType;
declare const kCATransitionMoveIn: cocoascript.CATransitionType;
declare const kCATransitionPush: cocoascript.CATransitionType;
declare const kCATransitionReveal: cocoascript.CATransitionType;
declare const kCAValueFunctionRotateX: cocoascript.CAValueFunctionName;
declare const kCAValueFunctionRotateY: cocoascript.CAValueFunctionName;
declare const kCAValueFunctionScaleX: cocoascript.CAValueFunctionName;
declare const kCAValueFunctionScaleY: cocoascript.CAValueFunctionName;
declare const kCAValueFunctionScaleZ: cocoascript.CAValueFunctionName;
declare const kCAValueFunctionTranslateX: cocoascript.CAValueFunctionName;
declare const kCAValueFunctionTranslateY: cocoascript.CAValueFunctionName;
declare const kCAValueFunctionTranslateZ: cocoascript.CAValueFunctionName;
