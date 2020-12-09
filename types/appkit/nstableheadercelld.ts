declare namespace cocoascript {
/**
 * An object that a table header view uses to draw the content of the column headers. 
 * doc://com.apple.documentation/documentation/appkit/nstableheadercell
 */
interface NSTableHeaderCell extends NSTextFieldCell {
  // doc://com.apple.documentation/documentation/appkit/nstableheadercell/1526553-drawsortindicatorwithframe
  drawSortIndicatorWithFrame_inView_ascending_priority(cellFrame: cocoascript.NSRect, controlView: cocoascript.NSView, ascending: cocoascript.BOOL, priority: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nstableheadercell/1525964-sortindicatorrectforbounds
  sortIndicatorRectForBounds(rect: cocoascript.NSRect):cocoascript.NSRect;
  // 
  alloc():cocoascript.NSTableHeaderCell;
  // 
  init():cocoascript.NSTableHeaderCell;
}
}
declare const NSTableHeaderCell: cocoascript.NSTableHeaderCell;

