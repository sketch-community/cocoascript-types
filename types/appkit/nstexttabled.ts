declare namespace cocoascript {
/**
 * An object that represents a text table as a whole.
 * doc://com.apple.documentation/documentation/appkit/nstexttable
 */
interface NSTextTable extends NSTextBlock {
  // doc://com.apple.documentation/documentation/appkit/nstexttable/1532413-numberofcolumns
  numberOfColumns(): cocoascript.NSUInteger;
  setNumberOfColumns(): void;
  // doc://com.apple.documentation/documentation/appkit/nstexttable/1531734-layoutalgorithm
  layoutAlgorithm(): cocoascript.NSTextTableLayoutAlgorithm;
  setLayoutAlgorithm(): void;
  // doc://com.apple.documentation/documentation/appkit/nstexttable/1534170-collapsesborders
  collapsesBorders(): cocoascript.BOOL;
  setCollapsesBorders(): void;
  // doc://com.apple.documentation/documentation/appkit/nstexttable/1526288-hidesemptycells
  hidesEmptyCells(): cocoascript.BOOL;
  setHidesEmptyCells(): void;
  // doc://com.apple.documentation/documentation/appkit/nstexttable/1534161-rectforblock
  rectForBlock_layoutAtPoint_inRect_textContainer_characterRange(block: cocoascript.NSTextTableBlock, startingPoint: cocoascript.NSPoint, rect: cocoascript.NSRect, textContainer: cocoascript.NSTextContainer, charRange: cocoascript.NSRange):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nstexttable/1525956-boundsrectforblock
  boundsRectForBlock_contentRect_inRect_textContainer_characterRange(block: cocoascript.NSTextTableBlock, contentRect: cocoascript.NSRect, rect: cocoascript.NSRect, textContainer: cocoascript.NSTextContainer, charRange: cocoascript.NSRange):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nstexttable/1534234-drawbackgroundforblock
  drawBackgroundForBlock_withFrame_inView_characterRange_layoutManager(block: cocoascript.NSTextTableBlock, frameRect: cocoascript.NSRect, controlView: cocoascript.NSView, charRange: cocoascript.NSRange, layoutManager: cocoascript.NSLayoutManager):void;
  // 
  alloc():cocoascript.NSTextTable;
  // 
  init():cocoascript.NSTextTable;
}
}
declare const NSTextTable: cocoascript.NSTextTable;

