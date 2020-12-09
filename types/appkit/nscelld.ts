declare namespace cocoascript {
/**
 * A mechanism for displaying text or images in a view object without the overhead of a full 
 * doc://com.apple.documentation/documentation/appkit/nscell
 */
interface NSCell extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nscell/1533898-initimagecell
  initImageCell(image: cocoascript.NSImage):cocoascript.NSCell;
  // doc://com.apple.documentation/documentation/appkit/nscell/1530851-inittextcell
  initTextCell(string: cocoascript.NSString):cocoascript.NSCell;
  // doc://com.apple.documentation/documentation/appkit/nscell/1530936-objectvalue
  objectValue(): cocoascript.id;
  setObjectValue(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1534009-hasvalidobjectvalue
  hasValidObjectValue(): cocoascript.BOOL;
  setHasValidObjectValue(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1525170-intvalue
  intValue(): number;
  setIntValue(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1527783-integervalue
  integerValue(): cocoascript.NSInteger;
  setIntegerValue(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1530915-stringvalue
  stringValue(): cocoascript.NSString;
  setStringValue(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1534765-doublevalue
  doubleValue(): number;
  setDoubleValue(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1534292-floatvalue
  floatValue(): number;
  setFloatValue(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1531257-setcellattribute
  setCellAttribute_to(parameter: cocoascript.NSCellAttribute, value: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1530877-cellattribute
  cellAttribute(parameter: cocoascript.NSCellAttribute):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nscell/1524871-type
  type(): cocoascript.NSCellType;
  setType(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1533415-enabled
  enabled(): cocoascript.BOOL;
  setEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1531576-allowsundo
  allowsUndo(): cocoascript.BOOL;
  setAllowsUndo(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1533376-bezeled
  bezeled(): cocoascript.BOOL;
  setBezeled(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1525990-bordered
  bordered(): cocoascript.BOOL;
  setBordered(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1531610-opaque
  opaque(): cocoascript.BOOL;
  setOpaque(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1529397-controltint
  controlTint(): cocoascript.NSControlTint;
  setControlTint(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1524686-backgroundstyle
  backgroundStyle(): cocoascript.NSBackgroundStyle;
  setBackgroundStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1526141-interiorbackgroundstyle
  interiorBackgroundStyle(): cocoascript.NSBackgroundStyle;
  setInteriorBackgroundStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1531578-allowsmixedstate
  allowsMixedState(): cocoascript.BOOL;
  setAllowsMixedState(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1531235-nextstate
  nextState(): cocoascript.NSInteger;
  setNextState(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1533557-setnextstate
  setNextState():void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1527417-state
  state(): cocoascript.NSControlStateValue;
  setState(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1535822-editable
  editable(): cocoascript.BOOL;
  setEditable(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1529411-selectable
  selectable(): cocoascript.BOOL;
  setSelectable(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1534125-scrollable
  scrollable(): cocoascript.BOOL;
  setScrollable(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1534359-alignment
  alignment(): cocoascript.NSTextAlignment;
  setAlignment(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1526710-font
  font(): cocoascript.NSFont;
  setFont(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1531065-linebreakmode
  lineBreakMode(): cocoascript.NSLineBreakMode;
  setLineBreakMode(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1526736-truncateslastvisibleline
  truncatesLastVisibleLine(): cocoascript.BOOL;
  setTruncatesLastVisibleLine(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1527479-wraps
  wraps(): cocoascript.BOOL;
  setWraps(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1525503-basewritingdirection
  baseWritingDirection(): cocoascript.NSWritingDirection;
  setBaseWritingDirection(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1534119-attributedstringvalue
  attributedStringValue(): cocoascript.NSAttributedString;
  setAttributedStringValue(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1535675-allowseditingtextattributes
  allowsEditingTextAttributes(): cocoascript.BOOL;
  setAllowsEditingTextAttributes(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1532380-importsgraphics
  importsGraphics(): cocoascript.BOOL;
  setImportsGraphics(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1535864-setupfieldeditorattributes
  setUpFieldEditorAttributes(textObj: cocoascript.NSText):cocoascript.NSText;
  // doc://com.apple.documentation/documentation/appkit/nscell/1525561-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1524654-action
  action(): cocoascript.SEL;
  setAction(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1535832-target
  target(): cocoascript.id;
  setTarget(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1529179-continuous
  continuous(): cocoascript.BOOL;
  setContinuous(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1528114-sendactionon
  sendActionOn(mask: cocoascript.NSEventMask):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nscell/1526028-image
  image(): cocoascript.NSImage;
  setImage(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1532348-tag
  tag(): cocoascript.NSInteger;
  setTag(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1531115-formatter
  formatter(): cocoascript.NSFormatter;
  setFormatter(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1531847-defaultmenu
  defaultMenu(): cocoascript.NSMenu;
  setDefaultMenu(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1530019-menu
  menu(): cocoascript.NSMenu;
  setMenu(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1535924-menuforevent
  menuForEvent_inRect_ofView(event: cocoascript.NSEvent, cellFrame: cocoascript.NSRect, view: cocoascript.NSView):cocoascript.NSMenu;
  // doc://com.apple.documentation/documentation/appkit/nscell/1527644-compare
  compare(otherCell: cocoascript.NSCell):cocoascript.NSComparisonResult;
  // doc://com.apple.documentation/documentation/appkit/nscell/1525710-acceptsfirstresponder
  acceptsFirstResponder(): cocoascript.BOOL;
  setAcceptsFirstResponder(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1532415-showsfirstresponder
  showsFirstResponder(): cocoascript.BOOL;
  setShowsFirstResponder(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1525857-refusesfirstresponder
  refusesFirstResponder(): cocoascript.BOOL;
  setRefusesFirstResponder(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1534984-performclick
  performClick(sender: cocoascript.NSCell):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1529915-takeobjectvaluefrom
  takeObjectValueFrom(sender: cocoascript.NSCell):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1534969-takeintegervaluefrom
  takeIntegerValueFrom(sender: cocoascript.NSCell):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1533920-takeintvaluefrom
  takeIntValueFrom(sender: cocoascript.NSCell):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1527148-takestringvaluefrom
  takeStringValueFrom(sender: cocoascript.NSCell):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1526375-takedoublevaluefrom
  takeDoubleValueFrom(sender: cocoascript.NSCell):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1535839-takefloatvaluefrom
  takeFloatValueFrom(sender: cocoascript.NSCell):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1533116-representedobject
  representedObject(): cocoascript.id;
  setRepresentedObject(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1533606-trackmouse
  trackMouse_inRect_ofView_untilMouseUp(event: cocoascript.NSEvent, cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView, flag: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nscell/1526663-starttrackingat
  startTrackingAt_inView(startPoint: cocoascript.NSPoint, controlView: cocoascript.NSView):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nscell/1535599-continuetracking
  continueTracking_at_inView(lastPoint: cocoascript.NSPoint, currentPoint: cocoascript.NSPoint, controlView: cocoascript.NSView):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nscell/1534650-stoptracking
  stopTracking_at_inView_mouseIsUp(lastPoint: cocoascript.NSPoint, stopPoint: cocoascript.NSPoint, controlView: cocoascript.NSView, flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1527798-mousedownflags
  mouseDownFlags(): cocoascript.NSInteger;
  setMouseDownFlags(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1530790-preferstrackinguntilmouseup
  prefersTrackingUntilMouseUp(): cocoascript.BOOL;
  setPrefersTrackingUntilMouseUp(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1535611-getperiodicdelay
  getPeriodicDelay_interval(delay: number, interval: number):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1529601-hittestforevent
  hitTestForEvent_inRect_ofView(event: cocoascript.NSEvent, cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView):cocoascript.NSCellHitResult;
  // doc://com.apple.documentation/documentation/appkit/nscell/1524496-resetcursorrect
  resetCursorRect_inView(cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1532218-keyequivalent
  keyEquivalent(): cocoascript.NSString;
  setKeyEquivalent(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1532987-draggingimagecomponentswithframe
  draggingImageComponentsWithFrame_inView(frame: cocoascript.NSRect, view: cocoascript.NSView):cocoascript.NSDraggingImageComponent;
  // doc://com.apple.documentation/documentation/appkit/nscell/1524608-drawfocusringmaskwithframe
  drawFocusRingMaskWithFrame_inView(cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1534929-focusringmaskboundsforframe
  focusRingMaskBoundsForFrame_inView(cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nscell/1525184-defaultfocusringtype
  defaultFocusRingType(): cocoascript.NSFocusRingType;
  setDefaultFocusRingType(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1534132-focusringtype
  focusRingType(): cocoascript.NSFocusRingType;
  setFocusRingType(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1533752-calcdrawinfo
  calcDrawInfo(rect: cocoascript.NSRect):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1532056-cellsize
  cellSize(): cocoascript.NSSize;
  setCellSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1524792-cellsizeforbounds
  cellSizeForBounds(rect: cocoascript.NSRect):cocoascript.NSSize;
  // doc://com.apple.documentation/documentation/appkit/nscell/1526266-drawingrectforbounds
  drawingRectForBounds(rect: cocoascript.NSRect):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nscell/1533408-imagerectforbounds
  imageRectForBounds(rect: cocoascript.NSRect):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nscell/1531281-titlerectforbounds
  titleRectForBounds(rect: cocoascript.NSRect):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nscell/1530780-controlsize
  controlSize(): cocoascript.NSControlSize;
  setControlSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1535830-drawwithframe
  drawWithFrame_inView(cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1534018-highlightcolorwithframe
  highlightColorWithFrame_inView(cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView):cocoascript.NSColor;
  // doc://com.apple.documentation/documentation/appkit/nscell/1531274-drawinteriorwithframe
  drawInteriorWithFrame_inView(cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1535913-controlview
  controlView(): cocoascript.NSView;
  setControlView(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1533933-highlight
  highlight_withFrame_inView(flag: cocoascript.BOOL, cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1530864-highlighted
  highlighted(): cocoascript.BOOL;
  setHighlighted(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1533600-editwithframe
  editWithFrame_inView_editor_delegate_event(rect: cocoascript.NSRect, controlView: cocoascript.NSView, textObj: cocoascript.NSText, delegate: cocoascript.NSCell, event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1527438-selectwithframe
  selectWithFrame_inView_editor_delegate_start_length(rect: cocoascript.NSRect, controlView: cocoascript.NSView, textObj: cocoascript.NSText, delegate: cocoascript.NSCell, selStart: cocoascript.NSInteger, selLength: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1526617-sendsactiononendediting
  sendsActionOnEndEditing(): cocoascript.BOOL;
  setSendsActionOnEndEditing(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1535574-endediting
  endEditing(textObj: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1535894-wantsnotificationformarkedtext
  wantsNotificationForMarkedText(): cocoascript.BOOL;
  setWantsNotificationForMarkedText(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1532763-fieldeditorforview
  fieldEditorForView(controlView: cocoascript.NSView):cocoascript.NSTextView;
  // doc://com.apple.documentation/documentation/appkit/nscell/1525481-usessinglelinemode
  usesSingleLineMode(): cocoascript.BOOL;
  setUsesSingleLineMode(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1526362-expansionframewithframe
  expansionFrameWithFrame_inView(cellFrame: cocoascript.NSRect, view: cocoascript.NSView):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nscell/1528566-drawwithexpansionframe
  drawWithExpansionFrame_inView(cellFrame: cocoascript.NSRect, view: cocoascript.NSView):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1529213-userinterfacelayoutdirection
  userInterfaceLayoutDirection(): cocoascript.NSUserInterfaceLayoutDirection;
  setUserInterfaceLayoutDirection(): void;
  // doc://com.apple.documentation/documentation/appkit/nscontroltintdidchangenotification
  NSControlTintDidChangeNotification(): cocoascript.NSNotificationName;
  setNSControlTintDidChangeNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1560876-setentrytype
  setEntryType(type: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1560897-entrytype
  entryType():cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nscell/1560879-isentryacceptable
  isEntryAcceptable(string: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nscell/1560888-setfloatingpointformat
  setFloatingPointFormat_left_right(autoRange: cocoascript.BOOL, leftDigits: cocoascript.NSUInteger, rightDigits: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1560861-settitlewithmnemonic
  setTitleWithMnemonic(stringWithAmpersand: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1560878-mnemonic
  mnemonic():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nscell/1560877-setmnemoniclocation
  setMnemonicLocation(location: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nscell/1560903-mnemoniclocation
  mnemonicLocation():cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/appkit/nscell/1642242-init
  init():cocoascript.NSCell;
  // doc://com.apple.documentation/documentation/appkit/nscell/1642237-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSCell;
  // 
  alloc():cocoascript.NSCell;
  // 
  init():cocoascript.NSCell;
}
}
declare const NSCell: cocoascript.NSCell;

