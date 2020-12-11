declare namespace cocoascript {
  /**
   * A definition of the fundamental behavior for controls, which are specialized views that notify your app of relevant events by using the target-action design pattern.
   * doc://com.apple.documentation/documentation/appkit/nscontrol
   */
  interface NSControl extends NSView {
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428900-initwithframe
    initWithFrame(frameRect: cocoascript.NSRect):cocoascript.NSControl;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428861-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSControl;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428891-cellclass
    cellClass(): cocoascript.Class;
    setCellClass(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428970-enabled
    enabled(): cocoascript.BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428942-doublevalue
    doubleValue(): number;
    setDoubleValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428889-floatvalue
    floatValue(): number;
    setFloatValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428939-intvalue
    intValue(): number;
    setIntValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428969-integervalue
    integerValue(): cocoascript.NSInteger;
    setIntegerValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428849-objectvalue
    objectValue(): cocoascript.id;
    setObjectValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428950-stringvalue
    stringValue(): cocoascript.NSString;
    setStringValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428916-attributedstringvalue
    attributedStringValue(): cocoascript.NSAttributedString;
    setAttributedStringValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428958-takedoublevaluefrom
    takeDoubleValueFrom(sender: cocoascript.NSControl):void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428938-takefloatvaluefrom
    takeFloatValueFrom(sender: cocoascript.NSControl):void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428859-takeintvaluefrom
    takeIntValueFrom(sender: cocoascript.NSControl):void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428875-takeintegervaluefrom
    takeIntegerValueFrom(sender: cocoascript.NSControl):void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428853-takeobjectvaluefrom
    takeObjectValueFrom(sender: cocoascript.NSControl):void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428912-takestringvaluefrom
    takeStringValueFrom(sender: cocoascript.NSControl):void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428906-alignment
    alignment(): cocoascript.NSTextAlignment;
    setAlignment(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428914-font
    font(): cocoascript.NSFont;
    setFont(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428978-linebreakmode
    lineBreakMode(): cocoascript.NSLineBreakMode;
    setLineBreakMode(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428929-usessinglelinemode
    usesSingleLineMode(): cocoascript.BOOL;
    setUsesSingleLineMode(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428931-setfloatingpointformat
    setFloatingPointFormat_left_right(autoRange: cocoascript.BOOL, leftDigits: cocoascript.NSUInteger, rightDigits: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428887-formatter
    formatter(): cocoascript.NSFormatter;
    setFormatter(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428921-basewritingdirection
    baseWritingDirection(): cocoascript.NSWritingDirection;
    setBaseWritingDirection(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428895-drawwithexpansionframe
    drawWithExpansionFrame_inView(contentFrame: cocoascript.NSRect, view: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428962-allowsexpansiontooltips
    allowsExpansionToolTips(): cocoascript.BOOL;
    setAllowsExpansionToolTips(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428932-expansionframewithframe
    expansionFrameWithFrame(contentFrame: cocoascript.NSRect):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428867-abortediting
    abortEditing():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428980-currenteditor
    currentEditor():cocoascript.NSText;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428855-validateediting
    validateEditing():void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428919-editwithframe
    editWithFrame_editor_delegate_event(rect: cocoascript.NSRect, textObj: cocoascript.NSText, delegate: cocoascript.NSControl, event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428936-endediting
    endEditing(textObj: cocoascript.NSText):void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428968-selectwithframe
    selectWithFrame_editor_delegate_start_length(rect: cocoascript.NSRect, textObj: cocoascript.NSText, delegate: cocoascript.NSControl, selStart: cocoascript.NSInteger, selLength: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428871-controlsize
    controlSize(): cocoascript.NSControlSize;
    setControlSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428902-sizethatfits
    sizeThatFits(size: cocoascript.NSSize):cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428877-sizetofit
    sizeToFit():void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428927-highlighted
    highlighted(): cocoascript.BOOL;
    setHighlighted(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428956-action
    action(): cocoascript.SEL;
    setAction(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428885-target
    target(): cocoascript.id;
    setTarget(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428952-continuous
    continuous(): cocoascript.BOOL;
    setContinuous(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428851-sendaction
    sendAction_to(action: cocoascript.SEL, target: cocoascript.NSControl):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428972-sendactionon
    sendActionOn(mask: cocoascript.NSEventMask):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428910-tag
    tag(): cocoascript.NSInteger;
    setTag(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428974-performclick
    performClick(sender: cocoascript.NSControl):void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428976-refusesfirstresponder
    refusesFirstResponder(): cocoascript.BOOL;
    setRefusesFirstResponder(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428918-mousedown
    mouseDown(event: cocoascript.NSEvent):void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428863-ignoresmulticlick
    ignoresMultiClick(): cocoascript.BOOL;
    setIgnoresMultiClick(): void;
    // doc://com.apple.documentation/documentation/objectivec/nsobject/1428934-controltextdidbeginediting
    controlTextDidBeginEditing(obj: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/objectivec/nsobject/1428982-controltextdidchange
    controlTextDidChange(obj: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/objectivec/nsobject/1428847-controltextdidendediting
    controlTextDidEndEditing(obj: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1526876-invalidateintrinsiccontentsizefo
    invalidateIntrinsicContentSizeForCell(cell: cocoascript.NSCell):void;
    // doc://com.apple.documentation/documentation/appkit/nscontroltextdidbegineditingnotification
    NSControlTextDidBeginEditingNotification(): cocoascript.NSNotificationName;
    setNSControlTextDidBeginEditingNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontroltextdidchangenotification
    NSControlTextDidChangeNotification(): cocoascript.NSNotificationName;
    setNSControlTextDidChangeNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontroltextdidendeditingnotification
    NSControlTextDidEndEditingNotification(): cocoascript.NSNotificationName;
    setNSControlTextDidEndEditingNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428960-cell
    cell(): cocoascript.NSCell;
    setCell(): void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428964-selectedcell
    selectedCell():cocoascript.NSCell;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428845-selectedtag
    selectedTag():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428879-setneedsdisplay
    setNeedsDisplay():void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428857-calcsize
    calcSize():void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428966-selectcell
    selectCell(cell: cocoascript.NSCell):void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428869-drawcell
    drawCell(cell: cocoascript.NSCell):void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428881-drawcellinside
    drawCellInside(cell: cocoascript.NSCell):void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428893-updatecell
    updateCell(cell: cocoascript.NSCell):void;
    // doc://com.apple.documentation/documentation/appkit/nscontrol/1428923-updatecellinside
    updateCellInside(cell: cocoascript.NSCell):void;
    //
    alloc():cocoascript.NSControl;
    //
    init():cocoascript.NSControl;
  }
}

declare const NSControl: cocoascript.NSControl;
