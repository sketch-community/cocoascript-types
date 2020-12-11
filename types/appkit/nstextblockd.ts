declare namespace cocoascript {
  /**
   * A block of text laid out in a subregion of the text container.
   * doc://com.apple.documentation/documentation/appkit/nstextblock
   */
  interface NSTextBlock extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nstextblock/1528169-init
    init():cocoascript.NSTextBlock;
    // doc://com.apple.documentation/documentation/appkit/nstextblock/1533000-setvalue
    setValue_type_forDimension(val: cocoascript.CGFloat, type: cocoascript.NSTextBlockValueType, dimension: cocoascript.NSTextBlockDimension):void;
    // doc://com.apple.documentation/documentation/appkit/nstextblock/1526445-valuefordimension
    valueForDimension(dimension: cocoascript.NSTextBlockDimension):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nstextblock/1530561-valuetypefordimension
    valueTypeForDimension(dimension: cocoascript.NSTextBlockDimension):cocoascript.NSTextBlockValueType;
    // doc://com.apple.documentation/documentation/appkit/nstextblock/1528308-setcontentwidth
    setContentWidth_type(val: cocoascript.CGFloat, type: cocoascript.NSTextBlockValueType):void;
    // doc://com.apple.documentation/documentation/appkit/nstextblock/1532506-contentwidth
    contentWidth(): cocoascript.CGFloat;
    setContentWidth(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextblock/1525975-contentwidthvaluetype
    contentWidthValueType(): cocoascript.NSTextBlockValueType;
    setContentWidthValueType(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextblock/1533792-setwidth
    setWidth_type_forLayer_edge(val: cocoascript.CGFloat, type: cocoascript.NSTextBlockValueType, layer: cocoascript.NSTextBlockLayer, edge: cocoascript.NSRectEdge):void;
    // doc://com.apple.documentation/documentation/appkit/nstextblock/1535325-setwidth
    setWidth_type_forLayer(val: cocoascript.CGFloat, type: cocoascript.NSTextBlockValueType, layer: cocoascript.NSTextBlockLayer):void;
    // doc://com.apple.documentation/documentation/appkit/nstextblock/1533532-widthforlayer
    widthForLayer_edge(layer: cocoascript.NSTextBlockLayer, edge: cocoascript.NSRectEdge):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nstextblock/1533551-widthvaluetypeforlayer
    widthValueTypeForLayer_edge(layer: cocoascript.NSTextBlockLayer, edge: cocoascript.NSRectEdge):cocoascript.NSTextBlockValueType;
    // doc://com.apple.documentation/documentation/appkit/nstextblock/1533097-verticalalignment
    verticalAlignment(): cocoascript.NSTextBlockVerticalAlignment;
    setVerticalAlignment(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextblock/1527300-backgroundcolor
    backgroundColor(): cocoascript.NSColor;
    setBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextblock/1529881-setbordercolor
    setBorderColor_forEdge(color: cocoascript.NSColor, edge: cocoascript.NSRectEdge):void;
    // doc://com.apple.documentation/documentation/appkit/nstextblock/1531850-setbordercolor
    setBorderColor(color: cocoascript.NSColor):void;
    // doc://com.apple.documentation/documentation/appkit/nstextblock/1534711-bordercolorforedge
    borderColorForEdge(edge: cocoascript.NSRectEdge):cocoascript.NSColor;
    // doc://com.apple.documentation/documentation/appkit/nstextblock/1527965-rectforlayoutatpoint
    rectForLayoutAtPoint_inRect_textContainer_characterRange(startingPoint: cocoascript.NSPoint, rect: cocoascript.NSRect, textContainer: cocoascript.NSTextContainer, charRange: cocoascript.NSRange):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nstextblock/1532041-boundsrectforcontentrect
    boundsRectForContentRect_inRect_textContainer_characterRange(contentRect: cocoascript.NSRect, rect: cocoascript.NSRect, textContainer: cocoascript.NSTextContainer, charRange: cocoascript.NSRange):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nstextblock/1531424-drawbackgroundwithframe
    drawBackgroundWithFrame_inView_characterRange_layoutManager(frameRect: cocoascript.NSRect, controlView: cocoascript.NSView, charRange: cocoascript.NSRange, layoutManager: cocoascript.NSLayoutManager):void;
    //
    alloc():cocoascript.NSTextBlock;
    //
    init():cocoascript.NSTextBlock;
  }
}

declare const NSTextBlock: cocoascript.NSTextBlock;
