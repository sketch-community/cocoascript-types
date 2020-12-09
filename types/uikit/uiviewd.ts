declare namespace cocoascript {
/**
 * An object that manages the content for a rectangular area on the screen.
 * doc://com.apple.documentation/documentation/uikit/uiview
 */
interface UIView extends UIResponder {
  // doc://com.apple.documentation/documentation/uikit/uiview/1622488-initwithframe
  initWithFrame(frame: cocoascript.CGRect):cocoascript.UIView;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622477-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIView;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622591-backgroundcolor
  backgroundColor(): cocoascript.UIColor;
  setBackgroundColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622585-hidden
  hidden(): cocoascript.BOOL;
  setHidden(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622417-alpha
  alpha(): cocoascript.CGFloat;
  setAlpha(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622622-opaque
  opaque(): cocoascript.BOOL;
  setOpaque(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622467-tintcolor
  tintColor(): cocoascript.UIColor;
  setTintColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622555-tintadjustmentmode
  tintAdjustmentMode(): cocoascript.UIViewTintAdjustmentMode;
  setTintAdjustmentMode(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622415-clipstobounds
  clipsToBounds(): cocoascript.BOOL;
  setClipsToBounds(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622449-clearscontextbeforedrawing
  clearsContextBeforeDrawing(): cocoascript.BOOL;
  setClearsContextBeforeDrawing(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622557-maskview
  maskView(): cocoascript.UIView;
  setMaskView(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622626-layerclass
  layerClass(): cocoascript.Class;
  setLayerClass(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622436-layer
  layer(): cocoascript.CALayer;
  setLayer(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622577-userinteractionenabled
  userInteractionEnabled(): cocoascript.BOOL;
  setUserInteractionEnabled(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622519-multipletouchenabled
  multipleTouchEnabled(): cocoascript.BOOL;
  setMultipleTouchEnabled(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622453-exclusivetouch
  exclusiveTouch(): cocoascript.BOOL;
  setExclusiveTouch(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622621-frame
  frame(): cocoascript.CGRect;
  setFrame(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622580-bounds
  bounds(): cocoascript.CGRect;
  setBounds(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622627-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622459-transform
  transform(): cocoascript.CGAffineTransform;
  setTransform(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622474-superview
  superview(): cocoascript.UIView;
  setSuperview(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622614-subviews
  subviews(): cocoascript.UIView;
  setSubviews(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622456-window
  window(): cocoascript.UIWindow;
  setWindow(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622616-addsubview
  addSubview(view: cocoascript.UIView):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622541-bringsubviewtofront
  bringSubviewToFront(view: cocoascript.UIView):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622618-sendsubviewtoback
  sendSubviewToBack(view: cocoascript.UIView):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622421-removefromsuperview
  removeFromSuperview():void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622538-insertsubview
  insertSubview_atIndex(view: cocoascript.UIView, index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622570-insertsubview
  insertSubview_aboveSubview(view: cocoascript.UIView, siblingSubview: cocoascript.UIView):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622598-insertsubview
  insertSubview_belowSubview(view: cocoascript.UIView, siblingSubview: cocoascript.UIView):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622448-exchangesubviewatindex
  exchangeSubviewAtIndex_withSubviewAtIndex(index1: cocoascript.NSInteger, index2: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622521-isdescendantofview
  isDescendantOfView(view: cocoascript.UIView):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622500-didaddsubview
  didAddSubview(subview: cocoascript.UIView):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622647-willremovesubview
  willRemoveSubview(subview: cocoascript.UIView):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622629-willmovetosuperview
  willMoveToSuperview(newSuperview: cocoascript.UIView):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622433-didmovetosuperview
  didMoveToSuperview():void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622563-willmovetowindow
  willMoveToWindow(newWindow: cocoascript.UIWindow):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622527-didmovetowindow
  didMoveToWindow():void;
  // doc://com.apple.documentation/documentation/uikit/uiview/2865930-directionallayoutmargins
  directionalLayoutMargins(): cocoascript.NSDirectionalEdgeInsets;
  setDirectionalLayoutMargins(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622566-layoutmargins
  layoutMargins(): cocoascript.UIEdgeInsets;
  setLayoutMargins(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622653-preservessuperviewlayoutmargins
  preservesSuperviewLayoutMargins(): cocoascript.BOOL;
  setPreservesSuperviewLayoutMargins(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622416-layoutmarginsdidchange
  layoutMarginsDidChange():void;
  // doc://com.apple.documentation/documentation/uikit/uiview/2891103-safeareainsets
  safeAreaInsets(): cocoascript.UIEdgeInsets;
  setSafeAreaInsets(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/2891102-safearealayoutguide
  safeAreaLayoutGuide(): cocoascript.UILayoutGuide;
  setSafeAreaLayoutGuide(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/2891104-safeareainsetsdidchange
  safeAreaInsetsDidChange():void;
  // doc://com.apple.documentation/documentation/uikit/uiview/2891101-insetslayoutmarginsfromsafearea
  insetsLayoutMarginsFromSafeArea(): cocoascript.BOOL;
  setInsetsLayoutMarginsFromSafeArea(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622464-constraints
  constraints(): cocoascript.NSLayoutConstraint;
  setConstraints(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622523-addconstraint
  addConstraint(constraint: cocoascript.NSLayoutConstraint):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622513-addconstraints
  addConstraints(constraints: cocoascript.NSLayoutConstraint):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622659-removeconstraint
  removeConstraint(constraint: cocoascript.NSLayoutConstraint):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622593-removeconstraints
  removeConstraints(constraints: cocoascript.NSLayoutConstraint):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622483-bottomanchor
  bottomAnchor(): cocoascript.NSLayoutYAxisAnchor;
  setBottomAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622596-centerxanchor
  centerXAnchor(): cocoascript.NSLayoutXAxisAnchor;
  setCenterXAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622447-centeryanchor
  centerYAnchor(): cocoascript.NSLayoutYAxisAnchor;
  setCenterYAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622508-firstbaselineanchor
  firstBaselineAnchor(): cocoascript.NSLayoutYAxisAnchor;
  setFirstBaselineAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622590-heightanchor
  heightAnchor(): cocoascript.NSLayoutDimension;
  setHeightAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622471-lastbaselineanchor
  lastBaselineAnchor(): cocoascript.NSLayoutYAxisAnchor;
  setLastBaselineAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622520-leadinganchor
  leadingAnchor(): cocoascript.NSLayoutXAxisAnchor;
  setLeadingAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622435-leftanchor
  leftAnchor(): cocoascript.NSLayoutXAxisAnchor;
  setLeftAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622579-rightanchor
  rightAnchor(): cocoascript.NSLayoutXAxisAnchor;
  setRightAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622613-topanchor
  topAnchor(): cocoascript.NSLayoutYAxisAnchor;
  setTopAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622522-trailinganchor
  trailingAnchor(): cocoascript.NSLayoutXAxisAnchor;
  setTrailingAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622605-widthanchor
  widthAnchor(): cocoascript.NSLayoutDimension;
  setWidthAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622414-addlayoutguide
  addLayoutGuide(layoutGuide: cocoascript.UILayoutGuide):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622536-layoutguides
  layoutGuides(): cocoascript.UILayoutGuide;
  setLayoutGuides(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622651-layoutmarginsguide
  layoutMarginsGuide(): cocoascript.UILayoutGuide;
  setLayoutMarginsGuide(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622644-readablecontentguide
  readableContentGuide(): cocoascript.UILayoutGuide;
  setReadableContentGuide(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622506-removelayoutguide
  removeLayoutGuide(layoutGuide: cocoascript.UILayoutGuide):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622624-systemlayoutsizefittingsize
  systemLayoutSizeFittingSize(targetSize: cocoascript.CGSize):cocoascript.CGSize;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622623-systemlayoutsizefittingsize
  systemLayoutSizeFittingSize_withHorizontalFittingPriority_verticalFittingPriority(targetSize: cocoascript.CGSize, horizontalFittingPriority: cocoascript.UILayoutPriority, verticalFittingPriority: cocoascript.UILayoutPriority):cocoascript.CGSize;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622600-intrinsiccontentsize
  intrinsicContentSize(): cocoascript.CGSize;
  setIntrinsicContentSize(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622457-invalidateintrinsiccontentsize
  invalidateIntrinsicContentSize():void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622465-contentcompressionresistanceprio
  contentCompressionResistancePriorityForAxis(axis: cocoascript.UILayoutConstraintAxis):cocoascript.UILayoutPriority;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622526-setcontentcompressionresistancep
  setContentCompressionResistancePriority_forAxis(priority: cocoascript.UILayoutPriority, axis: cocoascript.UILayoutConstraintAxis):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622556-contenthuggingpriorityforaxis
  contentHuggingPriorityForAxis(axis: cocoascript.UILayoutConstraintAxis):cocoascript.UILayoutPriority;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622485-setcontenthuggingpriority
  setContentHuggingPriority_forAxis(priority: cocoascript.UILayoutPriority, axis: cocoascript.UILayoutConstraintAxis):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622576-alignmentrectforframe
  alignmentRectForFrame(frame: cocoascript.CGRect):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622603-frameforalignmentrect
  frameForAlignmentRect(alignmentRect: cocoascript.CGRect):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622648-alignmentrectinsets
  alignmentRectInsets(): cocoascript.UIEdgeInsets;
  setAlignmentRectInsets(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622439-viewforbaselinelayout
  viewForBaselineLayout():cocoascript.UIView;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622452-viewforfirstbaselinelayout
  viewForFirstBaselineLayout(): cocoascript.UIView;
  setViewForFirstBaselineLayout(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622633-viewforlastbaselinelayout
  viewForLastBaselineLayout(): cocoascript.UIView;
  setViewForLastBaselineLayout(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622567-needsupdateconstraints
  needsUpdateConstraints():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622450-setneedsupdateconstraints
  setNeedsUpdateConstraints():void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622512-updateconstraints
  updateConstraints():void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622595-updateconstraintsifneeded
  updateConstraintsIfNeeded():void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622432-constraintsaffectinglayoutforaxi
  constraintsAffectingLayoutForAxis(axis: cocoascript.UILayoutConstraintAxis):cocoascript.NSLayoutConstraint;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622517-hasambiguouslayout
  hasAmbiguousLayout(): cocoascript.BOOL;
  setHasAmbiguousLayout(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622545-exerciseambiguityinlayout
  exerciseAmbiguityInLayout():void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622619-contentmode
  contentMode(): cocoascript.UIViewContentMode;
  setContentMode(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622511-contentstretch
  contentStretch(): cocoascript.CGRect;
  setContentStretch(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622625-sizethatfits
  sizeThatFits(size: cocoascript.CGSize):cocoascript.CGSize;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622630-sizetofit
  sizeToFit():void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622425-autoresizessubviews
  autoresizesSubviews(): cocoascript.BOOL;
  setAutoresizesSubviews(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622559-autoresizingmask
  autoresizingMask(): cocoascript.UIViewAutoresizing;
  setAutoresizingMask(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622482-layoutsubviews
  layoutSubviews():void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622601-setneedslayout
  setNeedsLayout():void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622507-layoutifneeded
  layoutIfNeeded():void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622549-requiresconstraintbasedlayout
  requiresConstraintBasedLayout(): cocoascript.BOOL;
  setRequiresConstraintBasedLayout(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622572-translatesautoresizingmaskintoco
  translatesAutoresizingMaskIntoConstraints(): cocoascript.BOOL;
  setTranslatesAutoresizingMaskIntoConstraints(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/3238086-overrideuserinterfacestyle
  overrideUserInterfaceStyle(): cocoascript.UIUserInterfaceStyle;
  setOverrideUserInterfaceStyle(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622461-semanticcontentattribute
  semanticContentAttribute(): cocoascript.UISemanticContentAttribute;
  setSemanticContentAttribute(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1648536-effectiveuserinterfacelayoutdire
  effectiveUserInterfaceLayoutDirection(): cocoascript.UIUserInterfaceLayoutDirection;
  setEffectiveUserInterfaceLayoutDirection(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/2891013-addinteraction
  addInteraction(interaction: cocoascript.UIInteraction):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/2891036-removeinteraction
  removeInteraction(interaction: cocoascript.UIInteraction):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/2891054-interactions
  interactions(): cocoascript.UIInteraction;
  setInteractions(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622529-drawrect
  drawRect(rect: cocoascript.CGRect):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622437-setneedsdisplay
  setNeedsDisplay():void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622587-setneedsdisplayinrect
  setNeedsDisplayInRect(rect: cocoascript.CGRect):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622657-contentscalefactor
  contentScaleFactor(): cocoascript.CGFloat;
  setContentScaleFactor(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622620-tintcolordidchange
  tintColorDidChange():void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1621835-viewprintformatter
  viewPrintFormatter():cocoascript.UIViewPrintFormatter;
  // doc://com.apple.documentation/documentation/uikit/uiview/1621844-drawrect
  drawRect_forViewPrintFormatter(rect: cocoascript.CGRect, formatter: cocoascript.UIViewPrintFormatter):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622496-addgesturerecognizer
  addGestureRecognizer(gestureRecognizer: cocoascript.UIGestureRecognizer):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622413-removegesturerecognizer
  removeGestureRecognizer(gestureRecognizer: cocoascript.UIGestureRecognizer):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622542-gesturerecognizers
  gestureRecognizers(): cocoascript.UIGestureRecognizer;
  setGestureRecognizers(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622460-gesturerecognizershouldbegin
  gestureRecognizerShouldBegin(gestureRecognizer: cocoascript.UIGestureRecognizer):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622584-canbecomefocused
  canBecomeFocused(): cocoascript.BOOL;
  setCanBecomeFocused(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622479-inheritedanimationduration
  inheritedAnimationDuration(): cocoascript.NSTimeInterval;
  setInheritedAnimationDuration(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622565-focused
  focused(): cocoascript.BOOL;
  setFocused(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622586-addmotioneffect
  addMotionEffect(effect: cocoascript.UIMotionEffect):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622428-motioneffects
  motionEffects(): cocoascript.UIMotionEffect;
  setMotionEffects(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622481-removemotioneffect
  removeMotionEffect(effect: cocoascript.UIMotionEffect):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622494-restorationidentifier
  restorationIdentifier(): cocoascript.NSString;
  setRestorationIdentifier(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622516-encoderestorablestatewithcoder
  encodeRestorableStateWithCoder(coder: cocoascript.NSCoder):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622638-decoderestorablestatewithcoder
  decodeRestorableStateWithCoder(coder: cocoascript.NSCoder):void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622531-snapshotviewafterscreenupdates
  snapshotViewAfterScreenUpdates(afterUpdates: cocoascript.BOOL):cocoascript.UIView;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622597-resizablesnapshotviewfromrect
  resizableSnapshotViewFromRect_afterScreenUpdates_withCapInsets(rect: cocoascript.CGRect, afterUpdates: cocoascript.BOOL, capInsets: cocoascript.UIEdgeInsets):cocoascript.UIView;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622589-drawviewhierarchyinrect
  drawViewHierarchyInRect_afterScreenUpdates(rect: cocoascript.CGRect, afterUpdates: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622493-tag
  tag(): cocoascript.NSInteger;
  setTag(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622429-viewwithtag
  viewWithTag(tag: cocoascript.NSInteger):cocoascript.UIView;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622442-convertpoint
  convertPoint_toView(point: cocoascript.CGPoint, view: cocoascript.UIView):cocoascript.CGPoint;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622424-convertpoint
  convertPoint_fromView(point: cocoascript.CGPoint, view: cocoascript.UIView):cocoascript.CGPoint;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622504-convertrect
  convertRect_toView(rect: cocoascript.CGRect, view: cocoascript.UIView):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622498-convertrect
  convertRect_fromView(rect: cocoascript.CGRect, view: cocoascript.UIView):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622469-hittest
  hitTest_withEvent(point: cocoascript.CGPoint, event: cocoascript.UIEvent):cocoascript.UIView;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622533-pointinside
  pointInside_withEvent(point: cocoascript.CGPoint, event: cocoascript.UIEvent):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uiview/1619630-endediting
  endEditing(force: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uiview/2865843-accessibilityignoresinvertcolors
  accessibilityIgnoresInvertColors(): cocoascript.BOOL;
  setAccessibilityIgnoresInvertColors(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/1622571-areanimationsenabled
  areAnimationsEnabled(): cocoascript.BOOL;
  setAreAnimationsEnabled(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/3601233-focusgroupidentifier
  focusGroupIdentifier(): cocoascript.NSString;
  setFocusGroupIdentifier(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/3183937-largecontentimage
  largeContentImage(): cocoascript.UIImage;
  setLargeContentImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/3183938-largecontentimageinsets
  largeContentImageInsets(): cocoascript.UIEdgeInsets;
  setLargeContentImageInsets(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/3183939-largecontenttitle
  largeContentTitle(): cocoascript.NSString;
  setLargeContentTitle(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/3183940-scaleslargecontentimage
  scalesLargeContentImage(): cocoascript.BOOL;
  setScalesLargeContentImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/3183941-showslargecontentviewer
  showsLargeContentViewer(): cocoascript.BOOL;
  setShowsLargeContentViewer(): void;
  // doc://com.apple.documentation/documentation/uikit/uiview/3043565-transform3d
  transform3D(): cocoascript.CATransform3D;
  setTransform3D(): void;
  // 
  alloc():cocoascript.UIView;
  // 
  init():cocoascript.UIView;
}
}
declare const UIView: cocoascript.UIView;

