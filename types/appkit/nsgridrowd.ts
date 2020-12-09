declare namespace cocoascript {
/**
 * A row within a grid view.
 * doc://com.apple.documentation/documentation/appkit/nsgridrow
 */
interface NSGridRow extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsgridrow/1639685-numberofcells
  numberOfCells(): cocoascript.NSInteger;
  setNumberOfCells(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridrow/1639723-hidden
  hidden(): cocoascript.BOOL;
  setHidden(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridrow/1639785-toppadding
  topPadding(): cocoascript.CGFloat;
  setTopPadding(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridrow/1639739-bottompadding
  bottomPadding(): cocoascript.CGFloat;
  setBottomPadding(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridrow/1639728-height
  height(): cocoascript.CGFloat;
  setHeight(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridrow/1823690-rowalignment
  rowAlignment(): cocoascript.NSGridRowAlignment;
  setRowAlignment(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridrow/1639665-yplacement
  yPlacement(): cocoascript.NSGridCellPlacement;
  setYPlacement(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridrow/1639773-gridview
  gridView(): cocoascript.NSGridView;
  setGridView(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridrow/1639712-cellatindex
  cellAtIndex(index: cocoascript.NSInteger):cocoascript.NSGridCell;
  // doc://com.apple.documentation/documentation/appkit/nsgridrow/1639726-mergecellsinrange
  mergeCellsInRange(range: cocoascript.NSRange):void;
  // 
  alloc():cocoascript.NSGridRow;
  // 
  init():cocoascript.NSGridRow;
}
}
declare const NSGridRow: cocoascript.NSGridRow;

