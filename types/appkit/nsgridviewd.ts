declare namespace cocoascript {
/**
 * A container that aligns views in a flexible grid of rows and columns.
 * doc://com.apple.documentation/documentation/appkit/nsgridview
 */
interface NSGridView extends NSView {
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639692-initwithframe
  initWithFrame(frameRect: cocoascript.NSRect):cocoascript.NSGridView;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639780-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSGridView;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639705-numberofrows
  numberOfRows(): cocoascript.NSInteger;
  setNumberOfRows(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639698-numberofcolumns
  numberOfColumns(): cocoascript.NSInteger;
  setNumberOfColumns(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639667-indexofcolumn
  indexOfColumn(column: cocoascript.NSGridColumn):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639761-rowatindex
  rowAtIndex(index: cocoascript.NSInteger):cocoascript.NSGridRow;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639674-columnatindex
  columnAtIndex(index: cocoascript.NSInteger):cocoascript.NSGridColumn;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639661-indexofrow
  indexOfRow(row: cocoascript.NSGridRow):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639690-addrowwithviews
  addRowWithViews(views: cocoascript.NSView):cocoascript.NSGridRow;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639787-insertrowatindex
  insertRowAtIndex_withViews(index: cocoascript.NSInteger, views: cocoascript.NSView):cocoascript.NSGridRow;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639771-removerowatindex
  removeRowAtIndex(index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639687-moverowatindex
  moveRowAtIndex_toIndex(fromIndex: cocoascript.NSInteger, toIndex: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639783-addcolumnwithviews
  addColumnWithViews(views: cocoascript.NSView):cocoascript.NSGridColumn;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639700-insertcolumnatindex
  insertColumnAtIndex_withViews(index: cocoascript.NSInteger, views: cocoascript.NSView):cocoascript.NSGridColumn;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639759-removecolumnatindex
  removeColumnAtIndex(index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639659-movecolumnatindex
  moveColumnAtIndex_toIndex(fromIndex: cocoascript.NSInteger, toIndex: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639776-columnspacing
  columnSpacing(): cocoascript.CGFloat;
  setColumnSpacing(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639730-rowspacing
  rowSpacing(): cocoascript.CGFloat;
  setRowSpacing(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1823691-rowalignment
  rowAlignment(): cocoascript.NSGridRowAlignment;
  setRowAlignment(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639732-xplacement
  xPlacement(): cocoascript.NSGridCellPlacement;
  setXPlacement(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639767-yplacement
  yPlacement(): cocoascript.NSGridCellPlacement;
  setYPlacement(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639778-cellatcolumnindex
  cellAtColumnIndex_rowIndex(columnIndex: cocoascript.NSInteger, rowIndex: cocoascript.NSInteger):cocoascript.NSGridCell;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639703-cellforview
  cellForView(view: cocoascript.NSView):cocoascript.NSGridCell;
  // doc://com.apple.documentation/documentation/appkit/nsgridview/1639749-mergecellsinhorizontalrange
  mergeCellsInHorizontalRange_verticalRange(hRange: cocoascript.NSRange, vRange: cocoascript.NSRange):void;
  // 
  alloc():cocoascript.NSGridView;
  // 
  init():cocoascript.NSGridView;
}
}
declare const NSGridView: cocoascript.NSGridView;

