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
  insertSublayer_atIndex(layer: cocoascript.CALayer, idx: number):void;
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

