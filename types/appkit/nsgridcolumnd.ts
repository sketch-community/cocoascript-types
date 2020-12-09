declare namespace cocoascript {
/**
 * A column within a grid view.
 * doc://com.apple.documentation/documentation/appkit/nsgridcolumn
 */
interface NSGridColumn extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsgridcolumn/1639675-gridview
  gridView(): cocoascript.NSGridView;
  setGridView(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridcolumn/1639742-hidden
  hidden(): cocoascript.BOOL;
  setHidden(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridcolumn/1639769-leadingpadding
  leadingPadding(): cocoascript.CGFloat;
  setLeadingPadding(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridcolumn/1639719-numberofcells
  numberOfCells(): cocoascript.NSInteger;
  setNumberOfCells(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridcolumn/1639670-trailingpadding
  trailingPadding(): cocoascript.CGFloat;
  setTrailingPadding(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridcolumn/1639679-width
  width(): cocoascript.CGFloat;
  setWidth(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridcolumn/1639663-xplacement
  xPlacement(): cocoascript.NSGridCellPlacement;
  setXPlacement(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridcolumn/1639683-cellatindex
  cellAtIndex(index: cocoascript.NSInteger):cocoascript.NSGridCell;
  // doc://com.apple.documentation/documentation/appkit/nsgridcolumn/1639752-mergecellsinrange
  mergeCellsInRange(range: cocoascript.NSRange):void;
  // 
  alloc():cocoascript.NSGridColumn;
  // 
  init():cocoascript.NSGridColumn;
}
}
declare const NSGridColumn: cocoascript.NSGridColumn;

